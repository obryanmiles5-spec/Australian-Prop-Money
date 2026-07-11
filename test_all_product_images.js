const fs = require('fs');
const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// Read PRODUCTS from lib/products.ts
const code = fs.readFileSync('lib/products.ts', 'utf8');

// Use regex to find all image strings
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
console.log(`Extracted ${originalImages.length} product image paths from code.`);

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
  
  // Folder variations
  // Original relative: products/Australian Notes/New-Notes/100 AUD/100-aud-stack
  const parts = relative.split('/');
  
  // First level: products -> Products
  parts[0] = 'Products';
  
  const relativeWithProductsCap = parts.join('/');
  
  const exts = ['.jpg', '.webp', '.png', '.jpeg', '.JPG', '.WEBP', '.PNG'];
  
  // We can try:
  // 1. Exact relative with Products capitalized
  // 2. Exact relative but lowercase extension
  // 3. What if denomination folder is omitted?
  // 4. Try replacing '$' with '%24' in the filename or keeping it as '$'
  // 5. Try replacing spaces with hyphens or underscores
  
  const pathVariations = [relativeWithProductsCap];
  
  // Omit denomination folder if there is one (e.g. "100 AUD", "50 AUD", "20 AUD", "10 AUD")
  if (relativeWithProductsCap.includes('AUD/')) {
    const partsCopy = [...parts];
    // partsCopy is ['Products', 'Australian Notes', 'New-Notes', '100 AUD', '100-aud-stack']
    // Omit index 3 ('100 AUD')
    partsCopy.splice(3, 1);
    pathVariations.push(partsCopy.join('/'));
  }
  
  // Try spaces/hyphens variations
  const withHyphens = relativeWithProductsCap.replace(/ /g, '-');
  const withSpaces = relativeWithProductsCap.replace(/-/g, ' ');
  pathVariations.push(withHyphens);
  pathVariations.push(withSpaces);
  
  // Generate all candidate URLs
  for (const pv of pathVariations) {
    const hasExt = pv.includes('.') && ['.jpg', '.webp', '.png', '.jpeg', '.JPG', '.WEBP', '.PNG'].includes(pv.slice(pv.lastIndexOf('.')).toLowerCase());
    const baseWithoutExt = hasExt ? pv.slice(0, pv.lastIndexOf('.')) : pv;
    
    for (const ext of exts) {
      candidates.add(`${base}/Images/${baseWithoutExt}${ext}`);
      candidates.add(`${base}/Images/${pv}${ext}`);
    }
  }
  
  // Also add original unmodified with Images prefix
  candidates.add(`${base}/Images/${relative}`);
  
  return Array.from(candidates);
}

async function verifyAll() {
  const mapping = {};
  let foundCount = 0;
  
  for (let i = 0; i < originalImages.length; i++) {
    const orig = originalImages[i];
    const candidates = generateCandidates(orig);
    
    let verifiedUrl = null;
    
    // Check in parallel
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
      console.log(`[FOUND] ${orig} -> ${verifiedUrl}`);
    } else {
      mapping[orig] = null;
      console.log(`[NOT FOUND] ${orig}`);
    }
  }
  
  fs.writeFileSync('verified_products_mapping.json', JSON.stringify(mapping, null, 2));
  console.log(`\nFinished checking ${originalImages.length} products. Found ${foundCount} successful URLs.`);
}

verifyAll();
