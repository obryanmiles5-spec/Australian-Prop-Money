const https = require('https');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const blogFiles = [
  '1.jpg', '2.webp', '3.avif', '4.avif', '5.webp',
  '6.avif', '7.jpg', '8.avif', '9.avif', '10.avif',
  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'
];

async function check(file) {
  const url = `${endpoint}/images/blog/${file}`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ file, status: res.statusCode, url });
    }).on('error', () => {
      resolve({ file, status: 500, url });
    });
  });
}

async function run() {
  const results = await Promise.all(blogFiles.map(check));
  results.forEach(r => {
    console.log(`[${r.status}] ${r.file} -> ${r.url}`);
  });
}

run();
