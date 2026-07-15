const https = require('https');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const bases = [
  'images/accessories',
  'images/Accessories',
  'images/products/accessories',
  'images/Products/Accessories',
  'images/products',
  'images/Products',
  'australianpropmoney/images/accessories',
  'australianpropmoney/images/products/accessories',
  'australianpropmoney/images/Products/Accessories',
  'australianpropmoney/Products/Accessories',
  'australianpropmoney/products/accessories',
  'Products/Accessories',
  'products/accessories',
  'Accessories',
  'accessories',
  'images',
  'australianpropmoney/images',
  'australianpropmoney'
];

const files = [
  'canvas-money-bag',
  'canvas_money_bag',
  'Canvas-Money-Bag',
  'Canvas_Money_Bag',
  'canvasmoneybag'
];

const exts = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

const paths = [];
for (const base of bases) {
  for (const f of files) {
    for (const ext of exts) {
      paths.push(`${base}/${f}${ext}`);
    }
  }
}

async function check(path) {
  const url = endpoint + '/' + path.split('/').map(encodeURIComponent).join('/');
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ path, status: res.statusCode, url });
    }).on('error', () => {
      resolve({ path, status: 500 });
    });
  });
}

async function run() {
  console.log(`Checking ${paths.length} paths...`);
  // Check in batches
  const batchSize = 50;
  const matches = [];
  
  for (let i = 0; i < paths.length; i += batchSize) {
    const batch = paths.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(check));
    const hits = results.filter(r => r.status === 200);
    if (hits.length > 0) {
      matches.push(...hits);
      hits.forEach(h => console.log(`[OK] ${h.path} -> ${h.url}`));
    }
  }
  
  console.log(`Done! Found ${matches.length} matches.`);
}

run();
