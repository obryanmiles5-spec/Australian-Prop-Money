const https = require('https');
const fs = require('fs');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

// Candidate roots
const roots = [
  '',
  'australianpropmoney',
  'australianpropmoney/images',
  'images'
];

// We will check one sample file from each group
const samples = [
  // 1. Products/Accessories
  {
    group: 'accessories',
    file: 'canvas-money-bag.jpg',
    subdirs: ['Products/Accessories', 'products/accessories', 'Products/accessories', 'products/Accessories', 'Accessories', 'accessories']
  },
  // 2. Products/Australian Notes
  {
    group: 'notes_old',
    file: 'buy-counterfeit-$10-aud-old.png',
    subdirs: ['Products/Australian notes', 'Products/Australian Notes', 'products/australian notes', 'products/Australian Notes', 'Products/australian-notes', 'products/australian-notes', 'Australian Notes', 'australian-notes']
  },
  {
    group: 'notes_new',
    file: 'buy counterfeit $10-aud-new.jpg',
    subdirs: ['Products/Australian notes', 'Products/Australian Notes', 'products/australian notes', 'products/Australian Notes', 'Products/australian-notes', 'products/australian-notes', 'Australian Notes', 'australian-notes']
  },
  // 3. Products/Bundle Packs
  {
    group: 'bundles',
    file: 'film-producer-pack.webp',
    subdirs: ['Products/Bundel packs', 'Products/Bundle packs', 'products/bundel packs', 'products/bundle packs', 'Bundel packs', 'Bundle packs', 'Products/bundle-packs', 'products/bundle-packs']
  },
  // 4. Blog
  {
    group: 'blog',
    file: '1.jpg',
    subdirs: ['Blog', 'blog', 'images/blog', 'images/Blog']
  },
  // 5. Categories
  {
    group: 'categories',
    file: 'movie-prop-money.jpg',
    subdirs: ['Categories', 'categories', 'images/categories', 'images/Categories']
  },
  {
    group: 'categories_webp',
    file: 'australian-notes.webp',
    subdirs: ['Categories', 'categories', 'images/categories', 'images/Categories']
  },
  // 6. Hero
  {
    group: 'hero',
    file: 'hero.png',
    subdirs: ['Hero', 'hero', 'images/hero', 'images/Hero']
  }
];

async function check(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(408);
    });
  });
}

async function run() {
  const matches = [];
  const promises = [];

  for (const r of roots) {
    for (const sample of samples) {
      for (const subdir of sample.subdirs) {
        let pathParts = [];
        if (r) pathParts.push(r);
        if (subdir) pathParts.push(subdir);
        pathParts.push(sample.file);
        
        const pathStr = pathParts.join('/');
        const url = endpoint + '/' + pathParts.map(encodeURIComponent).join('/');
        
        promises.push((async () => {
          const status = await check(url);
          if (status === 200) {
            matches.push({ group: sample.group, path: pathStr, url });
          }
        })());
      }
    }
  }

  await Promise.all(promises);

  console.log('Matches found:', matches.length);
  fs.writeFileSync('exact_matches.txt', JSON.stringify(matches, null, 2), 'utf8');
}

run();
