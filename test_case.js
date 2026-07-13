const https = require('https');
const prefixes = [
  "",
  "images/products/accessories/",
  "Images/Products/Accessories/"
];
const names = [
  "canvas-money-bag-1.jpg",
  "Canvas-Money-Bag-1.jpg",
  "Canvas-Money-Bag-1.JPG",
  "canvas-money-bag-1.JPG",
  "Canvas-money-bag-1.jpg"
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
    for (const name of names) {
      const url = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${prefix}${name}`;
      const res = await checkUrl(url);
      if (res.status === 200) {
        console.log(`FOUND: ${url}`);
      }
    }
  }
}
run();
