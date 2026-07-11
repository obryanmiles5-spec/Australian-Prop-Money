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
    const req = https.get(url, { timeout: 2000 }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', () => {
      resolve({ url, status: 500 });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 408 });
    });
  });
}

async function run() {
  console.log('Starting FAST Prefix Combinations Test...');
  const promises = [];
  for (const prefix of prefixes) {
    for (const path of paths) {
      const url = `${prefix}/${path}`;
      promises.push(testUrl(url));
    }
  }

  const results = await Promise.all(promises);
  let found = false;
  for (const r of results) {
    if (r.status === 200) {
      console.log(`[SUCCESS 200] -> ${r.url}`);
      found = true;
    }
  }
  
  if (!found) {
    console.log('No working combination found with 200 status.');
  } else {
    console.log('Done testing fast combinations.');
  }
}

run();
