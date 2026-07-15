const https = require('https');
const fs = require('fs');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const paths = [
  // Categories
  'Categories/australian-notes.webp',
  'Categories/bundle-packs.jpg',
  'Categories/movie-prop-money.jpg',
  'australianpropmoney/Categories/australian-notes.webp',
  'australianpropmoney/Categories/bundle-packs.jpg',
  'australianpropmoney/Categories/movie-prop-money.jpg',
  'australianpropmoney/images/categories/Australian Notes.webp',
  'australianpropmoney/images/categories/Bundle Packs.jpg',
  'australianpropmoney/images/categories/TV Props.webp',

  // Hero
  'Hero/hero.png',
  'australianpropmoney/Hero/hero.png',
  'australianpropmoney/images/hero/hero.webp',

  // Products - Accessories
  'Products/Accessories/canvas-money-bag.jpg',
  'Products/Accessories/duffle-bag.jpg',
  'Products/Accessories/money-counter.webp',
  'Products/Accessories/prop-money-gun.jpg',
  'Products/Accessories/silver-aluminium-briefcase.webp',
  'australianpropmoney/Products/Accessories/canvas-money-bag.jpg',
  'australianpropmoney/Products/Accessories/duffle-bag.jpg',
  'australianpropmoney/Products/Accessories/money-counter.webp',
  'australianpropmoney/Products/Accessories/prop-money-gun.jpg',
  'australianpropmoney/Products/Accessories/silver-aluminium-briefcase.webp',

  // Products - Australian notes
  'Products/Australian notes/buy counterfeit $10-aud-new.jpg',
  'Products/Australian notes/buy-counterfeit-$10-aud-old.png',
  'Products/Australian notes/buy-counterfeit-$20-aud-new.webp',
  'Products/Australian notes/buy-counterfeit-$20-aud-old.png',
  'Products/Australian notes/buy-counterfeit-$50-aud-new.jpg',
  'Products/Australian notes/buy-counterfeit-$50-aud-old.jpg',
  'Products/Australian notes/buy-counterfeit-$100-aud-new.webp',
  'Products/Australian notes/buy-counterfeit-$100-aud-old.jpg',
  
  'australianpropmoney/Products/Australian notes/buy counterfeit $10-aud-new.jpg',
  'australianpropmoney/Products/Australian notes/buy-counterfeit-$10-aud-old.png',
  'australianpropmoney/Products/Australian notes/buy-counterfeit-$20-aud-new.webp',
  'australianpropmoney/Products/Australian notes/buy-counterfeit-$20-aud-old.png',
  'australianpropmoney/Products/Australian notes/buy-counterfeit-$50-aud-new.jpg',
  'australianpropmoney/Products/Australian notes/buy-counterfeit-$50-aud-old.jpg',
  'australianpropmoney/Products/Australian notes/buy-counterfeit-$100-aud-new.webp',
  'australianpropmoney/Products/Australian notes/buy-counterfeit-$100-aud-old.jpg',

  // Products - Bundel packs
  'Products/Bundel packs/commercial-producer-bulk-reserve-(50 stacks).png',
  'Products/Bundel packs/film-producer-pack.webp',
  'Products/Bundel packs/millionaire-heist-master-crate-(100 Stacks).jpg',
  'Products/Bundel packs/photography-studio-pack.jpg',
  'Products/Bundel packs/wholesale-pack.png',

  'australianpropmoney/Products/Bundel packs/commercial-producer-bulk-reserve-(50 stacks).png',
  'australianpropmoney/Products/Bundel packs/film-producer-pack.webp',
  'australianpropmoney/Products/Bundel packs/millionaire-heist-master-crate-(100 Stacks).jpg',
  'australianpropmoney/Products/Bundel packs/photography-studio-pack.jpg',
  'australianpropmoney/Products/Bundel packs/wholesale-pack.png',

  // Blog
  'Blog/1.jpg',
  'Blog/2.webp',
  'Blog/3.avif',
  'australianpropmoney/Blog/1.jpg',
  'australianpropmoney/Blog/2.webp',
  'australianpropmoney/Blog/3.avif'
];

async function check(path) {
  return new Promise((resolve) => {
    const url = endpoint + '/' + path.split('/').map(encodeURIComponent).join('/');
    const req = https.get(url, (res) => {
      resolve({ path, url, status: res.statusCode });
    });
    req.on('error', (err) => {
      resolve({ path, url, status: 500, error: err.message });
    });
    // Set a timeout of 3 seconds
    req.setTimeout(3000, () => {
      req.destroy();
      resolve({ path, url, status: 408 });
    });
  });
}

async function run() {
  const results = await Promise.all(paths.map(check));
  const output = results
    .map(r => `[${r.status}] ${r.path} -> ${r.url}`)
    .join('\n');
  fs.writeFileSync('probe_results.txt', output, 'utf8');
  console.log('Done checking! Written to probe_results.txt');
}

run();
