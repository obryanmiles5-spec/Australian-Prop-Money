const https = require('https');
const fs = require('fs');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const roots = [
  '',
  'australianpropmoney',
  'australianpropmoney/images',
  'images'
];

const filesToCheck = [
  // Accessories
  'Products/Accessories/canvas-money-bag.jpg',
  'Products/Accessories/duffle-bag.jpg',
  'Products/Accessories/money-counter.webp',
  'Products/Accessories/prop-money-gun.jpg',
  'Products/Accessories/silver-aluminium-briefcase.webp',

  // Australian Notes
  'Products/Australian notes/buy counterfeit $10-aud-new.jpg',
  'Products/Australian notes/buy-counterfeit-$10-aud-old.png',
  'Products/Australian notes/buy-counterfeit-$20-aud-new.webp',
  'Products/Australian notes/buy-counterfeit-$20-aud-old.png',
  'Products/Australian notes/buy-counterfeit-$50-aud-new.jpg',
  'Products/Australian notes/buy-counterfeit-$50-aud-old.jpg',
  'Products/Australian notes/buy-counterfeit-$100-aud-new.webp',
  'Products/Australian notes/buy-counterfeit-$100-aud-old.jpg',

  // Bundle Packs (with both "Bundel" and "Bundle")
  'Products/Bundel packs/commercial-producer-bulk-reserve-(50 stacks).png',
  'Products/Bundel packs/film-producer-pack.webp',
  'Products/Bundel packs/millionaire-heist-master-crate-(100 Stacks).jpg',
  'Products/Bundel packs/photography-studio-pack.jpg',
  'Products/Bundel packs/wholesale-pack.png',

  'Products/Bundle packs/commercial-producer-bulk-reserve-(50 stacks).png',
  'Products/Bundle packs/film-producer-pack.webp',
  'Products/Bundle packs/millionaire-heist-master-crate-(100 Stacks).jpg',
  'Products/Bundle packs/photography-studio-pack.jpg',
  'Products/Bundle packs/wholesale-pack.png',

  // Blog
  'Blog/1.jpg',
  'Blog/2.webp',
  'Blog/3.avif',
  'Blog/4.avif',
  'Blog/5.webp',
  'Blog/6.avif',
  'Blog/7.jpg',
  'Blog/8.avif',
  'Blog/9.avif',
  'Blog/10.avif',
  'Blog/11.jpg',
  'Blog/12.jpg',
  'Blog/13.jpg',
  'Blog/14.jpg',
  'Blog/15.jpg',

  // Categories
  'Categories/australian-notes.webp',
  'Categories/bundle-packs.jpg',
  'Categories/movie-prop-money.jpg',

  // Hero
  'Hero/hero.png'
];

async function check(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.setTimeout(1500, () => {
      req.destroy();
      resolve(408);
    });
  });
}

async function run() {
  const results = [];
  const promises = [];

  for (const root of roots) {
    for (const filePath of filesToCheck) {
      const fullPath = root ? `${root}/${filePath}` : filePath;
      const url = endpoint + '/' + fullPath.split('/').map(encodeURIComponent).join('/');
      
      promises.push((async () => {
        const status = await check(url);
        if (status === 200) {
          results.push({ root, filePath, url });
        }
      })());
    }
  }

  await Promise.all(promises);

  console.log(`Found ${results.length} matched files!`);
  fs.writeFileSync('exact_user_matches.json', JSON.stringify(results, null, 2), 'utf8');
}

run();
