const https = require('https');

const prefixes = [
  "",
  "images/",
  "images/products/",
  "images/products/accessories/",
  "Images/Accessories/",
  "Images/Products/Accessories/",
  "images/accessories/",
  "Accessories/",
  "Products/Accessories/"
];
const files = [
  "canvas-money-bag-1.jpg",
  "canvas-money-bag-2.webp",
  "duffel-bag-1.jpg"
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  for (const file of files) {
    for (const prefix of prefixes) {
      const url = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${prefix}${file}`;
      const res = await checkUrl(url);
      if (res.status === 200) {
        console.log(`FOUND: ${url}`);
      }
    }
  }
}
run();
