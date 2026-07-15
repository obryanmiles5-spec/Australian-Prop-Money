const https = require('https');

const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/';

const pathsToTest = [
  // Hero
  'images/hero/hero.webp',
  'images/hero/hero',

  // Categories
  'images/categories/Australian Notes.webp',
  'images/categories/Australian Notes.jpg',
  'images/categories/Australian Notes',
  'images/categories/Bundle Packs.jpg',
  'images/categories/Bundle Packs.webp',
  'images/categories/Bundle Packs',
  'images/categories/Movie-Prop-Money.jpg',
  'images/categories/Movie-Prop-Money.webp',
  'images/categories/Movie-Prop-Money',
  'images/categories/Photography Props.jpg',
  'images/categories/Photography Props.webp',
  'images/categories/Photography Props',
  'images/categories/Training Currency.jpg',
  'images/categories/Training Currency.webp',
  'images/categories/Training Currency',
  'images/categories/TV Props.jpg',
  'images/categories/TV Props.webp',
  'images/categories/TV Props',

  // Blog
  'images/blog/1',
  'images/blog/1.jpg',
  'images/blog/1.webp',
  'images/blog/1.png',
  'images/blog/2',
  'images/blog/2.jpg',
  'images/blog/2.webp',
  
  // A few products from different categories
  'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack',
  'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack.jpg',
  'images/products/Australian Notes/New-Notes/100 AUD/100-aud-stack.webp',
  'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front',
  'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front.webp',
  'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front.jpg',

  'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack',
  'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack.jpg',
  'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack.webp',

  'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack',
  'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack.jpg',
  'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack.webp',

  'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack',
  'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack.jpg',
  'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack.webp',

  'images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle',
  'images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle.jpg',
  'images/products/Training-Currency/Bank-Teller-Training-Starter-Bundle.webp',

  'images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks)',
  'images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks).jpg',
  'images/products/Bundle-Packs/The-Millionaire-Heist-Master-Crate-(100 Stacks).webp',
];

function checkUrl(path) {
  return new Promise((resolve) => {
    const url = baseUrl + encodeURI(path);
    https.get(url, (res) => {
      resolve({ path, statusCode: res.statusCode, url });
    }).on('error', (err) => {
      resolve({ path, statusCode: 500, error: err.message, url });
    });
  });
}

async function run() {
  console.log('Testing ImageKit URLs...');
  for (const path of pathsToTest) {
    const res = await checkUrl(path);
    if (res.statusCode === 200) {
      console.log(`[OK] ${res.statusCode} - ${res.path} -> ${res.url}`);
    } else {
      console.log(`[FAIL] ${res.statusCode} - ${res.path}`);
    }
  }
}

run();
