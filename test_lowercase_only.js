const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

const urls = [
  `${base}/images/hero/hero.webp`,
  `${base}/Images/Hero/hero.webp`,
  `${base}/images/categories/australian-notes.webp`,
  `${base}/Images/Categories/Australian Notes.webp`,
  `${base}/images/products/australian-notes/classic-notes/10-aud/10-aud-front.png`,
  `${base}/Images/Products/Australian Notes/Classic-Notes/10 AUD/10-aud-front.png`,
  `${base}/images/products/australian-notes/classic-notes/10-aud-front.png`,
  `${base}/images/products/movie-prop-money/action-heist-weathered-$100-stack.png`
];

async function run() {
  for (const url of urls) {
    const status = await new Promise((resolve) => {
      https.get(url, (res) => resolve(res.statusCode)).on('error', () => resolve(500));
    });
    console.log(`${status} - ${url}`);
  }
}

run();
