const https = require('https');
const prefixes = [
  "",
  "images/",
  "images/hero/",
  "images/categories/",
  "images/creative-industry/",
  "images/homepage/",
  "Images/categories/",
  "images/products/",
  "images/products/categories/",
  "images/products/creative-industry/",
  "images/Categories/",
  "images/Home/",
  "Images/Home/"
];
const names = [
  "commercial-advertising.jpg",
  "Commercial-Advertising.jpg",
  "commercial_advertising.jpg",
  "Commercial_Advertising.jpg",
  "commercial-advertising.webp",
  "Commercial-Advertising.webp"
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
