const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// Walk directory to find files
function walkDir(dir, filter) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git') && !file.includes('dist')) {
        results = results.concat(walkDir(file, filter));
      }
    } else {
      if (!filter || filter(file)) {
        results.push(file);
      }
    }
  });
  return results;
}

// Find all image-like strings in codebase
function extractImages() {
  const files = walkDir('.', (file) => file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js'));
  const foundStrings = new Set();

  files.forEach((file) => {
    // Avoid reading ourselves
    if (file.includes('extract_and_check.js') || file.includes('test-images.js')) return;
    const content = fs.readFileSync(file, 'utf8');
    
    // Look for patterns like 'images/...' or "images/..."
    const matches = content.match(/(?:'|")images\/[^'"]+(?:'|")/g);
    if (matches) {
      matches.forEach((m) => {
        // Strip quotes
        const clean = m.slice(1, -1);
        foundStrings.add(clean);
      });
    }

    // Look for image properties in products.ts (and array values)
    if (file.includes('products.ts')) {
      const lines = content.split('\n');
      lines.forEach((line) => {
        const imgMatch = line.match(/image:\s*'([^']+)'/);
        if (imgMatch) foundStrings.add(imgMatch[1]);
        
        // Match gallery arrays e.g., ['images/...', 'images/...']
        const galleryMatch = line.match(/'images\/[^']+'/g);
        if (galleryMatch) {
          galleryMatch.forEach((gm) => foundStrings.add(gm.slice(1, -1)));
        }
      });
    }
  });

  return Array.from(foundStrings);
}

// Check if a URL returns 200
function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => {
      resolve(500);
    });
  });
}

// Generate sensible candidates for a given path
function getCandidates(p) {
  const candidates = new Set();
  
  // Clean path
  let clean = p;
  if (clean.startsWith('/')) clean = clean.slice(1);
  if (!clean.startsWith('images/')) clean = `images/${clean}`;

  const extensions = ['', '.jpg', '.webp', '.png', '.jpeg'];
  
  // Base candidate list
  const basePaths = [];
  basePaths.push(clean);
  basePaths.push(clean.toLowerCase());
  
  // Handle spaces and slashes variations
  // E.g., replace spaces with hyphens
  if (clean.includes(' ')) {
    basePaths.push(clean.replace(/ /g, '-'));
    basePaths.push(clean.replace(/ /g, '_'));
    basePaths.push(clean.toLowerCase().replace(/ /g, '-'));
    basePaths.push(clean.toLowerCase().replace(/ /g, '_'));
  }
  
  // Cross check with different extensions
  basePaths.forEach((bp) => {
    // Strip existing extension if any to test all extensions
    const ext = path.extname(bp);
    const baseWithoutExt = ext ? bp.slice(0, -ext.length) : bp;
    
    extensions.forEach((e) => {
      candidates.add(baseWithoutExt + e);
      // Keep original too
      candidates.add(bp + e);
    });
  });

  // Always keep original exactly as referenced
  candidates.add(clean);

  return Array.from(candidates);
}

async function run() {
  const images = extractImages();
  console.log(`Extracted ${images.length} unique image references from codebase.`);

  const results = {};
  const checked = new Set();
  
  // Let's print out what we extracted
  console.log('Image references found:');
  images.forEach(img => console.log(`  - ${img}`));

  // Check some common hero/category variations directly to be safe
  const manualCheks = [
    'images/hero/hero',
    'images/hero/hero.webp',
    'images/hero/hero.jpg',
    'images/categories/Australian Notes',
    'images/categories/Australian Notes.webp',
    'images/categories/Australian Notes.jpg',
    'images/categories/Bundle Packs',
    'images/categories/Bundle Packs.webp',
    'images/categories/Bundle Packs.jpg',
    'images/categories/Movie-Prop-Money',
    'images/categories/Movie-Prop-Money.webp',
    'images/categories/Movie-Prop-Money.jpg',
    'images/categories/TV Props',
    'images/categories/TV Props.webp',
    'images/categories/TV Props.jpg',
    'images/categories/Photography Props',
    'images/categories/Photography Props.webp',
    'images/categories/Photography Props.jpg',
    'images/categories/Training Currency',
    'images/categories/Training Currency.webp',
    'images/categories/Training Currency.jpg',
  ];
  manualCheks.forEach(c => {
    if (!images.includes(c)) {
      images.push(c);
    }
  });

  // For each image, test candidates to find the one returning 200
  for (let i = 0; i < images.length; i++) {
    const originalRef = images[i];
    const candidates = getCandidates(originalRef);
    let found = null;

    console.log(`\nTesting candidates for: "${originalRef}" (${candidates.length} candidates)...`);
    
    // Test candidates sequentially/concurrently in small batches
    const batchSize = 10;
    for (let b = 0; b < candidates.length; b += batchSize) {
      const batch = candidates.slice(b, b + batchSize);
      const promises = batch.map(async (candidate) => {
        const url = `${baseUrl}/${encodeURI(candidate)}`;
        const status = await checkUrl(url);
        return { candidate, status, url };
      });
      
      const batchResults = await Promise.all(promises);
      const success = batchResults.find(r => r.status === 200);
      if (success) {
        found = success;
        break; // found a working URL
      }
    }

    if (found) {
      console.log(`  ✓ SUCCESS: "${originalRef}" resolves to working URL: ${found.url}`);
      results[originalRef] = found.candidate;
    } else {
      console.log(`  ✗ FAILED: No working URL found for: "${originalRef}"`);
      results[originalRef] = null;
    }
  }

  // Save the manifest map of repairs
  fs.writeFileSync('image-manifest-map.json', JSON.stringify(results, null, 2));
  console.log('\nManifest saved to image-manifest-map.json');
}

run();
