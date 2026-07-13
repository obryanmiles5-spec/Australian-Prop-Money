const https = require('https');
const exts = ['.jpg', '.jpeg', '.png', '.webp', '.JPG'];
const basenames = [
  'commercial-advertising',
  'Commercial-Advertising',
  'Commercial_Advertising',
  'commercial_advertising',
  'commercial advertising',
  'Commercial Advertising',
  'commercialAdvertising',
  'CommercialAdvertising'
];
const prefixes = [
  '',
  'images/',
  'Images/',
  'images/categories/',
  'images/products/',
  'images/hero/',
  'categories/',
  'products/',
  'hero/'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  for (const prefix of prefixes) {
    for (const base of basenames) {
      for (const ext of exts) {
        // encode space if any
        const encodedBase = encodeURIComponent(base);
        const url = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${prefix}${encodedBase}${ext}`;
        const res = await checkUrl(url);
        if (res.status === 200) {
          console.log(`FOUND: ${url}`);
          return;
        }
      }
    }
  }
  console.log('NOT FOUND');
}
run();
