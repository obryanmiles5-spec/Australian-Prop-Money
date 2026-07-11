const https = require('https');

const prefixes = [
  'https://ik.imagekit.io/ukpeptides/australianpropmoney/images',
  'https://ik.imagekit.io/ukpeptides/australianpropmoney',
  'https://ik.imagekit.io/ukpeptides/images',
  'https://ik.imagekit.io/ukpeptides',
  'https://ik.imagekit.io/australianpropmoney/images',
  'https://ik.imagekit.io/australianpropmoney',
  'https://ik.imagekit.io/australianpropsmoney/images',
  'https://ik.imagekit.io/australianpropsmoney'
];

const paths = [
  'hero/hero.webp',
  'hero/hero.jpg',
  'hero/hero.png',
  'hero/hero',
  'categories/Movie-Prop-Money.jpg',
  'categories/Movie-Prop-Money.webp',
  'categories/Movie-Prop-Money',
  'categories/movie-prop-money.jpg',
  'categories/movie-prop-money.webp',
  'categories/Movie-Prop-Money/Movie-Prop-Money.jpg',
  'logo.png',
  'logo.jpg',
  'logo.webp'
];

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => {
      resolve(500);
    });
  });
}

async function run() {
  console.log('Starting Prefix Combinations Test...\n');
  let found = false;
  for (const prefix of prefixes) {
    for (const path of paths) {
      const url = `${prefix}/${path}`;
      const status = await testUrl(url);
      if (status === 200) {
        console.log(`[SUCCESS 200] -> ${url}`);
        found = true;
      } else {
        // print failures only if needed, let's keep it compact
      }
    }
  }
  if (!found) {
    console.log('\nNo working combination found among standard variations.');
  } else {
    console.log('\nDone testing combinations.');
  }
}

run();
