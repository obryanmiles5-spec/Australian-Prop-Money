const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// We will test various combinations of folder structures and filenames for the Action Heist Weathered $100 Stack
const folders = [
  'Products/Movie-Prop-Money',
  'Products/Movie Prop Money',
  'Products/Movie_Prop_Money',
  'products/Movie-Prop-Money',
  'products/Movie Prop Money',
  'products/Movie_Prop_Money',
  'Images/Products/Movie-Prop-Money',
  'Images/Products/Movie Prop Money',
  'Images/Products/Movie_Prop_Money',
  'Images/products/Movie-Prop-Money',
  'Images/products/Movie Prop Money',
  'Images/products/Movie_Prop_Money',
];

const filenames = [
  'Action-Heist-Weathered-$100-Stack',
  'Action Heist Weathered $100 Stack',
  'Action-Heist-Weathered-100-Stack',
  'Action Heist Weathered 100 Stack',
  'Action-Heist-Weathered-%24100-Stack',
  'Action-Heist-Weathered-$50-Stack', // let's try the $50 as well
  'Action Heist Weathered $50 Stack',
  'Action-Heist-Weathered-50-Stack',
  'Action Heist Weathered 50 Stack',
];

const exts = ['.jpg', '.webp', '.png', '.jpeg', '.JPG', '.WEBP', '.PNG', ''];

function testUrl(url) {
  const encodedUrl = encodeURI(url);
  return new Promise((resolve) => {
    const req = https.get(encodedUrl, { timeout: 1500 }, (res) => {
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
  console.log('Generating massive candidates...');
  const urls = [];
  for (const f of folders) {
    for (const fn of filenames) {
      for (const ext of exts) {
        urls.push(`${base}/${f}/${fn}${ext}`);
        // Also test prefix variations:
        if (!f.startsWith('Images/') && !f.startsWith('images/')) {
          urls.push(`${base}/Images/${f}/${fn}${ext}`);
          urls.push(`${base}/images/${f}/${fn}${ext}`);
        }
      }
    }
  }

  console.log(`Generated ${urls.length} URLs. Probing in parallel...`);
  
  // Chunk promises to prevent network errors
  const chunkSize = 200;
  for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        console.log(`[FOUND] -> ${r.url}`);
        return;
      }
    }
  }
  console.log('Done chunk probing. No working URL found.');
}

run();
