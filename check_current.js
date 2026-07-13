const fs = require('fs');
const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  const code = fs.readFileSync('lib/products.ts', 'utf8');
  const images = [...code.matchAll(/"image":\s*"([^"]+)"/g)].map(m => m[1]);
  
  for (const img of images) {
    const url = `https://ik.imagekit.io/ukpeptides/${encodeURI(img)}`;
    const res = await checkUrl(url);
    if (res.status === 200) {
      console.log(`SHOWING: ${img}`);
    } else {
      console.log(`BLANK: ${img} (${res.status})`);
    }
  }
}
run();
