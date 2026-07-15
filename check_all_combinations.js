const https = require('https');
const fs = require('fs');

const baseUrls = [
  'https://ik.imagekit.io/ukpeptides/australianpropmoney/',
  'https://ik.imagekit.io/ukpeptides/'
];

const pathsToTest = [
  'images/hero/hero.webp',
  'images/categories/australian-notes.webp',
  'images/categories/bundle-packs.jpg',
  'images/categories/tv-props.webp',
  'images/blog/1.jpg',
  'images/blog/2.webp',
  'images/blog/3.avif',
  'Hero/hero.png',
  'Categories/australian-notes.webp',
  'Categories/bundle-packs.jpg',
  'Categories/movie-prop-money.jpg',
  'images/categories/Australian Notes.webp',
  'images/categories/Bundle Packs.jpg',
  'images/categories/TV Props.webp'
];

async function check(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(500));
  });
}

async function run() {
  const results = [];
  for (const baseUrl of baseUrls) {
    for (const path of pathsToTest) {
      const url = baseUrl + encodeURI(path);
      const status = await check(url);
      results.push({ url, status });
      console.log(`[${status}] ${url}`);
    }
  }
  fs.writeFileSync('exact_image_statuses.json', JSON.stringify(results, null, 2));
}

run();
