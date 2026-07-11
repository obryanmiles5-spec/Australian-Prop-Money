const fs = require('fs');
const https = require('https');

const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// Read original keys
const manifestData = JSON.parse(fs.readFileSync('image-manifest-map.json', 'utf8'));
const originalPaths = Object.keys(manifestData);

console.log(`Loaded ${originalPaths.length} original image paths to verify.`);

function testUrl(url) {
  const encodedUrl = encodeURI(url);
  return new Promise((resolve) => {
    const req = https.get(encodedUrl, { timeout: 1500 }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.on('timeout', () => {
      req.destroy();
      resolve(408);
    });
  });
}

function generateCandidates(origPath) {
  const candidates = new Set();
  
  // Clean path
  let clean = origPath;
  if (clean.startsWith('/')) clean = clean.slice(1);
  
  // Enforce Images/ instead of images/
  let imagesPrefix = 'Images/';
  let relative = clean;
  if (clean.toLowerCase().startsWith('images/')) {
    relative = clean.slice(7);
  }
  
  // Capitalize first subfolder if possible
  const parts = relative.split('/');
  if (parts.length > 0) {
    // e.g. products -> Products, categories -> Categories, blog -> Blog, hero -> Hero
    parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }
  
  const formattedRelative = parts.join('/');
  
  // Now let's try variations of formatting:
  const pathVariations = [];
  
  // Variation 1: formatted standard (e.g. Products/Australian Notes/New-Notes/100 AUD/100-aud-stack)
  pathVariations.push(formattedRelative);
  
  // Variation 2: what if the whole relative path is lowercase? (except for some components)
  // e.g. Products/australian notes/...
  pathVariations.push(parts[0] + '/' + parts.slice(1).join('/').toLowerCase());
  
  // Variation 3: try replacing spaces with hyphens or underscores
  const joinedRelative = parts.slice(1).join('/');
  if (joinedRelative.includes(' ')) {
    pathVariations.push(parts[0] + '/' + joinedRelative.replace(/ /g, '-'));
    pathVariations.push(parts[0] + '/' + joinedRelative.replace(/ /g, '_'));
  }
  if (joinedRelative.includes('-')) {
    pathVariations.push(parts[0] + '/' + joinedRelative.replace(/-/g, ' '));
  }
  if (joinedRelative.includes('_')) {
    pathVariations.push(parts[0] + '/' + joinedRelative.replace(/_/g, ' '));
  }

  // Extensions to test
  const exts = ['', '.jpg', '.webp', '.png', '.jpeg', '.JPG', '.WEBP', '.PNG'];
  
  const finalCandidates = new Set();
  for (const pv of pathVariations) {
    const extName = pv.includes('.') ? pv.slice(pv.lastIndexOf('.')) : '';
    const hasExt = ['.jpg', '.webp', '.png', '.jpeg', '.JPG', '.WEBP', '.PNG'].includes(extName.toLowerCase());
    const baseWithoutExt = hasExt ? pv.slice(0, pv.lastIndexOf('.')) : pv;
    
    for (const ext of exts) {
      finalCandidates.add(`${baseUrl}/${imagesPrefix}${baseWithoutExt}${ext}`);
      finalCandidates.add(`${baseUrl}/${imagesPrefix}${pv}${ext}`);
      // Also test lowercase images prefix just in case
      finalCandidates.add(`${baseUrl}/images/${baseWithoutExt}${ext}`);
      finalCandidates.add(`${baseUrl}/images/${pv}${ext}`);
    }
  }
  
  // Always include the exact unmodified URL and its direct capitalization too
  finalCandidates.add(`${baseUrl}/${origPath}`);
  finalCandidates.add(`${baseUrl}/${imagesPrefix}${relative}`);

  return Array.from(finalCandidates);
}

async function verifyAll() {
  const mapping = {};
  let totalRepaired = 0;
  const missingFiles = [];
  const urls404 = [];
  
  console.log('Generating and testing candidate URLs for each image...');
  
  for (let i = 0; i < originalPaths.length; i++) {
    const orig = originalPaths[i];
    const candidates = generateCandidates(orig);
    
    let verifiedUrl = null;
    
    // We can test candidates for this image in parallel
    const results = await Promise.all(candidates.map(async (url) => {
      const status = await testUrl(url);
      return { url, status };
    }));
    
    for (const r of results) {
      if (r.status === 200) {
        verifiedUrl = r.url;
        break; // take first successful
      }
    }
    
    if (verifiedUrl) {
      mapping[orig] = verifiedUrl;
      totalRepaired++;
      console.log(`[VERIFIED] ${orig} -> ${verifiedUrl}`);
    } else {
      mapping[orig] = null;
      missingFiles.push(orig);
      console.log(`[MISSING] Could not find any working ImageKit URL for: ${orig}`);
    }
  }
  
  // Write the final mapping
  fs.writeFileSync('verified_image_mapping.json', JSON.stringify(mapping, null, 2));
  
  console.log('\n--- VERIFICATION COMPLETED ---');
  console.log(`Total images in manifest: ${originalPaths.length}`);
  console.log(`Successfully verified (HTTP 200): ${totalRepaired}`);
  console.log(`Missing files (returning 404): ${missingFiles.length}`);
  
  // Log missing files list
  if (missingFiles.length > 0) {
    fs.writeFileSync('missing_files.txt', missingFiles.join('\n'));
  } else {
    if (fs.existsSync('missing_files.txt')) fs.unlinkSync('missing_files.txt');
  }
}

verifyAll();
