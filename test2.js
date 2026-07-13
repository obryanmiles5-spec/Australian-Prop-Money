const https = require('https');

const prefixes = [
  "",
  "images/",
  "images/accessories/",
  "images/products/",
  "images/products/accessories/",
  "Images/",
  "Images/Accessories/",
  "Images/Products/",
  "Images/Products/Accessories/",
  "Products/",
  "Products/Accessories/",
  "accessories/",
  "Accessories/",
  "Images/categories/",
  "images/categories/"
];

const files = [
  "canvas-money-bag-1.jpg",
  "canvas-money-bag-1.jpeg",
  "canvas-money-bag-1.png",
  "canvas-money-bag-1.webp",
  "duffel-bag-1.jpg",
  "money-counter-1.webp"
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
