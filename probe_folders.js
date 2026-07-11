const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// Candidate files we know exist from the list
const tests = [
  // Categories
  { path: 'categories/Movie-Prop-Money', ext: 'jpg' },
  { path: 'categories/Movie-Prop-Money', ext: 'webp' },
  { path: 'categories/TV Props', ext: 'jpg' },
  { path: 'categories/TV Props', ext: 'webp' },
  { path: 'categories/Australian Notes', ext: 'webp' },
  { path: 'categories/Australian Notes', ext: 'jpg' },
  { path: 'categories/Bundle Packs', ext: 'jpg' },
  { path: 'categories/Bundle Packs', ext: 'webp' },
  
  // Blog
  { path: 'blog/1', ext: 'jpg' },
  { path: 'blog/1', ext: 'webp' },
  
  // Products
  { path: 'products/Australian Notes/New-Notes/100 AUD/100-aud-stack', ext: 'jpg' },
  { path: 'products/Australian Notes/New-Notes/100 AUD/100-aud-stack', ext: 'webp' },
  { path: 'products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack', ext: 'jpg' },
  { path: 'products/Australian Notes/Classic-Notes/50 AUD/50-aud-stack', ext: 'webp' },
  { path: 'products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack', ext: 'jpg' },
  { path: 'products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack', ext: 'webp' },
  { path: 'products/TV-Props/Broadcaster-Quality-$20-Prop-Stack', ext: 'jpg' },
  { path: 'products/TV-Props/Broadcaster-Quality-$20-Prop-Stack', ext: 'webp' },
  { path: 'products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack', ext: 'jpg' },
  { path: 'products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack', ext: 'webp' }
];

// We want to test different combinations of root and subfolder capitalizations:
const rootVariations = ['images', 'Images'];
const subVariations = {
  'categories/': ['categories/', 'Categories/'],
  'blog/': ['blog/', 'Blog/'],
  'products/': ['products/', 'Products/']
};

function testUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 1500 }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', () => resolve({ url, status: 500 }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 408 });
    });
  });
}

async function run() {
  console.log('Probing ImageKit folder capitalization conventions...');
  const urls = [];
  
  for (const t of tests) {
    const prefix = t.path.split('/')[0] + '/'; // e.g. 'categories/'
    const rest = t.path.slice(prefix.length);  // e.g. 'Movie-Prop-Money'
    
    const rootOpts = rootVariations;
    const subOpts = subVariations[prefix] || [prefix];
    
    for (const rOpt of rootOpts) {
      for (const sOpt of subOpts) {
        const fullPathNoExt = `${rOpt}/${sOpt}${rest}`;
        // Test with the specified extension and also webp/jpg
        const extsToTest = Array.from(new Set([t.ext, 'jpg', 'webp', 'png']));
        for (const ext of extsToTest) {
          urls.push(`${base}/${fullPathNoExt}.${ext}`);
        }
      }
    }
  }

  console.log(`Generated ${urls.length} URLs to probe. Running in parallel...`);
  
  const batchSize = 30;
  let successCount = 0;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        console.log(`[SUCCESS] -> ${r.url}`);
        successCount++;
      }
    }
  }
  
  console.log(`\nProbe finished. Found ${successCount} working URLs.`);
}

run();
