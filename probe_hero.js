const https = require('https');
const prefixes = [
  "",
  "images/",
  "images/categories/",
  "images/products/",
  "images/hero/",
  "Images/categories/",
  "categories/",
  "hero/"
];
const names = [
  "commercial-advertising.jpg",
  "Commercial-Advertising.jpg",
  "commercial-advertising.JPG",
  "video-production.jpg",
  "content-creation.jpg",
  "film-production.png",
  "photography.png",
  "theatre.jpg"
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
