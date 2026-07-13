const https = require('https');
const prefixes = [
  "images/",
  "Images/categories/",
  "images/products/",
  "images/hero/",
  "images/home/"
];
const names = [
  "Commercial-Advertising.jpg",
  "Commercial_Advertising.jpg",
  "commercial_advertising.jpg",
  "commercial-advertising.webp",
  "video-production.webp",
  "Video-Production.jpg"
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
