const https = require('https');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const files = [3, 4, 6, 8, 9, 10];
const exts = ['.avif', '.AVIF', '.webp', '.WEBP', '.jpg', '.JPG', '.png', '.PNG'];

const paths = [];
for (const f of files) {
  for (const ext of exts) {
    paths.push(`images/blog/${f}${ext}`);
    paths.push(`australianpropmoney/images/blog/${f}${ext}`);
  }
}

async function check(path) {
  const url = endpoint + '/' + path.split('/').map(encodeURIComponent).join('/');
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ path, status: res.statusCode, url });
    }).on('error', () => {
      resolve({ path, status: 500 });
    });
  });
}

async function run() {
  console.log(`Checking ${paths.length} uppercase / alternative blog combinations...`);
  const matches = [];
  const batchSize = 40;
  for (let i = 0; i < paths.length; i += batchSize) {
    const batch = paths.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(check));
    const hits = results.filter(r => r.status === 200);
    matches.push(...hits);
    hits.forEach(h => console.log(`[OK] ${h.path}`));
  }
  console.log(`Done! Found ${matches.length} matches.`);
}

run();
