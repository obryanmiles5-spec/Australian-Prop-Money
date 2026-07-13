const https = require('https');
const fs = require('fs');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  const code = fs.readFileSync('lib/products.ts', 'utf8');
  const names = [...code.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]);
  console.log(`Found ${names.length} products`);
  
  const exts = ['.jpg', '.png', '.webp', '.jpeg'];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log("Checking product:", name);
    // try different variations of the name
    const variants = [
      `images/products/${encodeURIComponent(name)}`,
      `images/products/${name.replace(/ /g, '%20')}`,
      `images/${encodeURIComponent(name)}`,
      `images/${name.replace(/ /g, '%20')}`,
      `images/categories/${encodeURIComponent(name)}`,
    ];
    let found = false;
    for (const v of variants) {
      if (found) break;
      for (const ext of exts) {
        const url = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${v}${ext}`;
        const res = await checkUrl(url);
        if (res.status === 200) {
          console.log(`FOUND: ${url}`);
          found = true;
          break;
        }
      }
    }
  }
}
run();
