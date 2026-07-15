const https = require('https');
const fs = require('fs');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

// We define all assets exactly as the user specified them.
const assets = {
  accessories: [
    'canvas-money-bag.jpg',
    'duffle-bag.jpg',
    'money-counter.webp',
    'prop-money-gun.jpg',
    'silver-aluminium-briefcase.webp'
  ],
  australian_notes: [
    'buy counterfeit $10-aud-new.jpg',
    'buy-counterfeit-$10-aud-old.png',
    'buy-counterfeit-$20-aud-new.webp',
    'buy-counterfeit-$20-aud-old.png',
    'buy-counterfeit-$50-aud-new.jpg',
    'buy-counterfeit-$50-aud-old.jpg',
    'buy-counterfeit-$100-aud-new.webp',
    'buy-counterfeit-$100-aud-old.jpg'
  ],
  bundle_packs: [
    'commercial-producer-bulk-reserve-(50 stacks).png',
    'film-producer-pack.webp',
    'millionaire-heist-master-crate-(100 Stacks).jpg',
    'photography-studio-pack.jpg',
    'wholesale-pack.png'
  ],
  blog: [
    '1.jpg', '2.webp', '3.avif', '4.avif', '5.webp',
    '6.avif', '7.jpg', '8.avif', '9.avif', '10.avif',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'
  ],
  categories: [
    'australian-notes.webp',
    'bundle-packs.jpg',
    'movie-prop-money.jpg'
  ],
  hero: [
    'hero.png'
  ]
};

// Possible prefix structures for each group
// Let's generate a broad list of candidates for each group
const candidates = {};

for (const [group, files] of Object.entries(assets)) {
  candidates[group] = [];
  
  // Potential prefix structures on ImageKit
  const prefixes = [
    '',
    'australianpropmoney',
    'australianpropmoney/images',
    'images'
  ];

  const subdirs = [];
  if (group === 'accessories') {
    subdirs.push('Products/Accessories', 'products/accessories', 'Products/accessories', 'products/Accessories', 'Accessories', 'accessories', 'images/products/accessories', 'images/Products/Accessories');
  } else if (group === 'australian_notes') {
    subdirs.push('Products/Australian notes', 'Products/Australian Notes', 'products/australian notes', 'products/Australian Notes', 'Products/australian-notes', 'products/australian-notes', 'Australian Notes', 'australian-notes', 'images/products/australian-notes', 'images/Products/Australian Notes');
  } else if (group === 'bundle_packs') {
    subdirs.push('Products/Bundel packs', 'Products/Bundle packs', 'products/bundel packs', 'products/bundle packs', 'Products/bundle-packs', 'products/bundle-packs', 'Bundel packs', 'Bundle packs', 'images/products/bundle-packs', 'images/Products/Bundle Packs');
  } else if (group === 'blog') {
    subdirs.push('Blog', 'blog', 'images/blog', 'images/Blog');
  } else if (group === 'categories') {
    subdirs.push('Categories', 'categories', 'images/categories', 'images/Categories');
  } else if (group === 'hero') {
    subdirs.push('Hero', 'hero', 'images/hero', 'images/Hero', '');
  }

  for (const file of files) {
    for (const prefix of prefixes) {
      for (const subdir of subdirs) {
        const parts = [];
        if (prefix) parts.push(prefix);
        if (subdir) parts.push(subdir);
        parts.push(file);
        
        candidates[group].push({
          file,
          path: parts.join('/'),
          url: endpoint + '/' + parts.map(encodeURIComponent).join('/')
        });
      }
    }
  }
}

async function check(item) {
  return new Promise((resolve) => {
    const req = https.get(item.url, (res) => {
      resolve({ file: item.file, path: item.path, url: item.url, status: res.statusCode });
    });
    req.on('error', () => resolve({ file: item.file, path: item.path, url: item.url, status: 500 }));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve({ file: item.file, path: item.path, url: item.url, status: 408 });
    });
  });
}

async function run() {
  const finalMatches = {};
  
  for (const [group, list] of Object.entries(candidates)) {
    console.log(`Checking group: ${group} (${list.length} candidates)...`);
    
    // Process in batches of 30 to avoid rate limiting or socket exhaustion
    const results = [];
    const batchSize = 40;
    for (let i = 0; i < list.length; i += batchSize) {
      const batch = list.slice(i, i + batchSize);
      const batchResults = await Promise.all(batch.map(check));
      results.push(...batchResults);
    }
    
    const matches = results.filter(r => r.status === 200);
    finalMatches[group] = matches.map(m => ({ file: m.file, url: m.url, path: m.path }));
  }

  fs.writeFileSync('comprehensive_matches.json', JSON.stringify(finalMatches, null, 2), 'utf8');
  console.log('Finished comprehensive search! Results saved to comprehensive_matches.json');
}

run();
