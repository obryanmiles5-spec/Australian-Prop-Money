const https = require('https');
const fs = require('fs');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const roots = [
  '',
  'australianpropmoney',
  'australianpropmoney/images',
  'images'
];

const subdirs = [
  'Products/Accessories',
  'products/accessories',
  'Products/accessories',
  'products/Accessories',
  'Accessories',
  'accessories',
  
  'Products/Australian notes',
  'Products/Australian Notes',
  'products/australian notes',
  'products/Australian Notes',
  'Products/australian-notes',
  'products/australian-notes',
  'Australian Notes',
  'australian-notes',
  'images/products/australian-notes',
  'images/Products/Australian Notes',
  'images/Products/Australian notes',

  'Products/Bundel packs',
  'Products/Bundle packs',
  'products/bundel packs',
  'products/bundle packs',
  'Products/bundle-packs',
  'products/bundle-packs',
  'Products/bundel-packs',
  'products/bundel-packs',
  'Bundel packs',
  'Bundle packs',
  'images/products/bundle-packs',
  'images/Products/Bundle Packs',
  'images/Products/Bundel Packs',

  'Blog',
  'blog',
  'images/blog',
  'images/Blog',

  'Categories',
  'categories',
  'images/categories',
  'images/Categories',

  'Hero',
  'hero',
  'images/hero',
  'images/Hero',
  ''
];

// Let's test a few files with variations
const files = [
  // Accessories
  'canvas-money-bag.jpg',
  'canvas-money-bag.png',
  'canvas-money-bag.webp',
  'duffle-bag.jpg',
  'money-counter.webp',
  
  // Notes
  'buy counterfeit $10-aud-new.jpg',
  'buy-counterfeit-$10-aud-old.png',
  'buy-counterfeit-10-aud-old.png',
  'buy-counterfeit-10-aud-new.jpg',
  'buy counterfeit 10 aud new.jpg',
  'buy-counterfeit-$10-aud-new.jpg',
  
  // Bundles
  'film-producer-pack.webp',
  'wholesale-pack.png',
  'commercial-producer-bulk-reserve-(50 stacks).png',
  'commercial-producer-bulk-reserve-50-stacks.png',
  'millionaire-heist-master-crate-(100 Stacks).jpg',
  'millionaire-heist-master-crate-100-stacks.jpg',
  
  // Blog
  '1.jpg',
  '2.webp',
  '3.avif',
  '4.avif',
  
  // Categories
  'australian-notes.webp',
  'bundle-packs.jpg',
  'movie-prop-money.jpg',
  'movie-prop-money.webp',
  'movie_prop_money.jpg',
  
  // Hero
  'hero.png',
  'hero.webp'
];

async function check(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(408);
    });
  });
}

async function run() {
  const matches = [];
  const promises = [];

  for (const root of roots) {
    for (const subdir of subdirs) {
      for (const file of files) {
        const parts = [];
        if (root) parts.push(root);
        if (subdir) parts.push(subdir);
        parts.push(file);
        
        const fullPath = parts.join('/');
        const url = endpoint + '/' + parts.map(encodeURIComponent).join('/');
        
        promises.push((async () => {
          const status = await check(url);
          if (status === 200) {
            matches.push({ root, subdir, file, url, fullPath });
          }
        })());
      }
    }
  }

  await Promise.all(promises);

  console.log(`Found ${matches.length} successful matches!`);
  fs.writeFileSync('discovered_paths.json', JSON.stringify(matches, null, 2), 'utf8');
}

run();
