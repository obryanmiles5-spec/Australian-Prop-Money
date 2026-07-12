const fs = require('fs');
const https = require('https');

const products = JSON.parse(fs.readFileSync('parsed_products.json', 'utf8'));

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// We want to test status of each URL
function testUrl(url) {
  const encodedUrl = encodeURI(url);
  return new Promise((resolve) => {
    const req = https.get(encodedUrl, { timeout: 2000 }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.on('timeout', () => {
      req.destroy();
      resolve(408);
    });
  });
}

// Generate all reasonable permutations for a given product
function getCandidatesForProduct(p) {
  const candidates = [];
  
  // Let's identify details of the product to make targeted candidates
  const id = p.id;
  const name = p.name;
  
  // Parse denomination and series for Australian notes
  const isAud = id.includes('aud');
  const series = id.includes('classic') ? 'Classic-Notes' : 'New-Notes';
  const denomMatch = id.match(/(\d+)-aud/);
  const denom = denomMatch ? denomMatch[1] : '';
  const side = id.includes('front') ? 'front' : id.includes('back') ? 'back' : id.includes('stack') ? 'stack' : id.includes('bundle') ? 'bundle' : '';

  const extensions = ['.jpg', '.png', '.webp', '.jpeg'];

  if (isAud && denom && side) {
    // We have Australian notes! Let's generate permutations
    const seriesFolderVariations = [
      'Classic-Notes', 'classic-notes', 'Classic Notes', 'New-Notes', 'new-notes', 'New Notes'
    ];
    const denomFolderVariations = [
      `${denom} AUD`, `${denom}-aud`, `${denom}aud`, `${denom}_aud`
    ];
    const fileVariations = [
      `${denom}-aud-${side}`, `${denom}_aud_${side}`, `${denom}aud-${side}`, `${denom}aud_${side}`
    ];

    // Try both Images and images, Products and products
    const folderPrefixes = [
      'Images/Products/Australian Notes',
      'images/products/australian-notes',
      'Images/Products/Australian-Notes',
      'images/products/Australian Notes'
    ];

    for (const prefix of folderPrefixes) {
      for (const s of seriesFolderVariations) {
        for (const d of denomFolderVariations) {
          for (const f of fileVariations) {
            for (const ext of extensions) {
              candidates.push(`${base}/${prefix}/${s}/${d}/${f}${ext}`);
            }
          }
        }
      }
    }
  } else {
    // For non-AUD, we have:
    // movie-prop-money, tv-production-props, photography-props, training-currency, bundle-packs
    // Let's look at category name transformations
    const catMappings = {
      'movie-prop-money': ['Movie Prop Money', 'movie-prop-money', 'Movie-Prop-Money'],
      'tv-production-props': ['TV Props', 'tv-production-props', 'TV-Props', 'tv-production-props'],
      'photography-props': ['Photography Props', 'photography-props', 'Photography-Props'],
      'training-currency': ['Training Currency', 'training-currency', 'Training-Currency'],
      'bundle-packs': ['Bundle Packs', 'bundle-packs', 'Bundle-Packs']
    };

    const categoriesToCheck = catMappings[p.category] || [p.category];
    
    // We can extract parts of the name or id to generate filenames
    const cleanId = id.replace(/-+/g, '-');
    const titleName = name;
    
    // Let's generate potential filenames
    const fileNames = [
      cleanId,
      p.image ? p.image.replace(/^images\/products\//, '').split('/').pop() : '',
      // E.g. "the-millionaire-heist-master-crate-(100-stacks)"
      id.replace(/-(stacks|notes)\)/, '-$1)'),
      id.replace(/-\(/g, '(').replace(/\)/g, ')'),
      // spaces to hyphens or preserving them
      id.replace(/\d+-stacks/, '$&-stacks'),
    ].filter(Boolean);

    // Let's also add exact files with or without spaces/parentheses
    const nameWithHyphens = titleName.replace(/[^a-zA-Z0-9$()-]/g, '-').replace(/-+/g, '-').toLowerCase();
    fileNames.push(nameWithHyphens);

    const folderPrefixes = [
      'Images/Products',
      'images/products'
    ];

    for (const prefix of folderPrefixes) {
      for (const cat of categoriesToCheck) {
        for (const f of fileNames) {
          // Remove extension if filename has one
          const hasExt = f.includes('.') && extensions.includes(f.slice(f.lastIndexOf('.')).toLowerCase());
          const baseName = hasExt ? f.slice(0, f.lastIndexOf('.')) : f;

          for (const ext of extensions) {
            candidates.push(`${base}/${prefix}/${cat}/${baseName}${ext}`);
            candidates.push(`${base}/${prefix}/${cat}/${f}${ext}`);
          }
        }
      }
    }
  }

  // Deduplicate candidates
  return Array.from(new Set(candidates));
}

async function run() {
  console.log(`Starting probe for ${products.length} products...`);
  const finalMapping = {};
  let successCount = 0;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const candidates = getCandidatesForProduct(p);
    console.log(`Product [${p.id}] generated ${candidates.length} candidates.`);

    let foundUrl = null;
    
    // Check candidates in chunks to prevent flooding
    const chunkSize = 20;
    for (let j = 0; j < candidates.length; j += chunkSize) {
      const chunk = candidates.slice(j, j + chunkSize);
      const results = await Promise.all(chunk.map(async (url) => {
        const status = await testUrl(url);
        return { url, status };
      }));

      const successful = results.find(r => r.status === 200);
      if (successful) {
        foundUrl = successful.url;
        break;
      }
    }

    if (foundUrl) {
      console.log(`  => [SUCCESS] Found: ${foundUrl}`);
      finalMapping[p.id] = foundUrl;
      successCount++;
    } else {
      console.log(`  => [FAILED] No working image found for: ${p.id}`);
      finalMapping[p.id] = null;
    }
  }

  console.log(`Probing complete. Found ${successCount} / ${products.length} product images.`);
  fs.writeFileSync('probe_57_results.json', JSON.stringify(finalMapping, null, 2), 'utf8');
}

run();
