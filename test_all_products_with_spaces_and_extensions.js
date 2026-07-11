const fs = require('fs');
const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// Read PRODUCTS from lib/products.ts
const code = fs.readFileSync('lib/products.ts', 'utf8');

// Extract all images starting with 'images/products/'
const imgMatches = code.match(/image:\s*'([^']+)'/g);
const galleryMatches = code.match(/'images\/products\/[^']+'/g);

const imageRefs = new Set();
if (imgMatches) {
  imgMatches.forEach(m => {
    const clean = m.match(/image:\s*'([^']+)'/)[1];
    imageRefs.add(clean);
  });
}
if (galleryMatches) {
  galleryMatches.forEach(m => {
    const clean = m.slice(1, -1);
    imageRefs.add(clean);
  });
}

const originalImages = Array.from(imageRefs).filter(img => img.startsWith('images/products/'));
console.log(`Loaded ${originalImages.length} product image paths to resolve.`);

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

function generateCandidates(clean) {
  const candidates = new Set();
  
  // Strip images/
  const relative = clean.replace(/^images\//, '');
  
  // parts e.g. ['products', 'Movie-Prop-Money', 'Action-Heist-Weathered-$100-Stack']
  const parts = relative.split('/');
  
  // Capitalize Products
  parts[0] = 'Products';
  
  // Map category folders from hyphens to spaces
  const categoryMap = {
    'Movie-Prop-Money': 'Movie Prop Money',
    'TV-Props': 'TV Props',
    'Photography-Props': 'Photography Props',
    'Training-Currency': 'Training Currency',
    'Bundle-Packs': 'Bundle Packs'
  };
  
  if (categoryMap[parts[1]]) {
    parts[1] = categoryMap[parts[1]];
  }
  
  // For Australian Notes, let's also try space variations for New-Notes and Classic-Notes
  let subfolderVariations = [parts.join('/')];
  
  if (parts[1] === 'Australian Notes' && parts[2]) {
    // parts[2] might be 'New-Notes' or 'Classic-Notes'
    const cleanSub = parts[2].replace(/-/g, ' '); // 'New Notes' or 'Classic Notes'
    
    const partsWithSpaceSub = [...parts];
    partsWithSpaceSub[2] = cleanSub;
    subfolderVariations.push(partsWithSpaceSub.join('/'));
    
    // Also what if '100 AUD' denomination folder is omitted entirely?
    if (parts[3] && parts[3].endsWith(' AUD')) {
      const partsOmitDenom = [...parts];
      partsOmitDenom.splice(3, 1);
      subfolderVariations.push(partsOmitDenom.join('/'));
      
      const partsOmitDenomWithSpaceSub = [...partsWithSpaceSub];
      partsOmitDenomWithSpaceSub.splice(3, 1);
      subfolderVariations.push(partsOmitDenomWithSpaceSub.join('/'));
    }
  }
  
  const exts = ['.png', '.jpg', '.webp', '.jpeg', '.PNG', '.JPG', '.WEBP', '.JPEG'];
  
  for (const sv of subfolderVariations) {
    const hasExt = sv.includes('.') && ['.jpg', '.webp', '.png', '.jpeg', '.JPG', '.WEBP', '.PNG'].includes(sv.slice(sv.lastIndexOf('.')).toLowerCase());
    const baseWithoutExt = hasExt ? sv.slice(0, sv.lastIndexOf('.')) : sv;
    
    for (const ext of exts) {
      candidates.add(`${base}/Images/${baseWithoutExt}${ext}`);
      candidates.add(`${base}/Images/${sv}${ext}`);
    }
  }
  
  return Array.from(candidates);
}

async function verifyAll() {
  const mapping = {};
  let foundCount = 0;
  
  for (let i = 0; i < originalImages.length; i++) {
    const orig = originalImages[i];
    const candidates = generateCandidates(orig);
    
    let verifiedUrl = null;
    
    // Test candidates in parallel
    const results = await Promise.all(candidates.map(async (url) => {
      const status = await testUrl(url);
      return { url, status };
    }));
    
    for (const r of results) {
      if (r.status === 200) {
        verifiedUrl = r.url;
        break;
      }
    }
    
    if (verifiedUrl) {
      mapping[orig] = verifiedUrl;
      foundCount++;
      console.log(`[FOUND ${foundCount}/${originalImages.length}] ${orig} -> ${verifiedUrl}`);
    } else {
      mapping[orig] = null;
      console.log(`[NOT FOUND] ${orig}`);
    }
  }
  
  fs.writeFileSync('verified_products_mapping.json', JSON.stringify(mapping, null, 2));
  console.log(`\nFinished checking products. Found ${foundCount} of ${originalImages.length} successful URLs.`);
}

verifyAll();
