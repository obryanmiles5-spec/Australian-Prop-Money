const https = require('https');
const fs = require('fs');
const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/';

const pathsToTest = [
  // Categories
  'images/categories/Australian Notes.webp',
  'images/categories/australian-notes.webp',
  
  // Products
  'images/products/australian-notes/classic-notes/10-aud/10-aud-front.jpg',
  'images/products/australian-notes/classic-notes/20-aud/20-aud-front.png',
  'images/products/movie-prop-money/heist-bundle.jpg',
  
  // Try without "images/" prefix
  'products/australian-notes/classic-notes/10-aud/10-aud-front.jpg',
  
  // Try raw paths without dashes
  'images/products/Australian Notes/Classic Notes/10 AUD/10 AUD front.jpg',
  'images/products/Australian Notes/Classic Notes/10 AUD/10-aud-front.jpg',
];

Promise.all(pathsToTest.map(p => new Promise(resolve => {
  https.get(baseUrl + encodeURI(p), res => resolve(`[${res.statusCode}] ${p}`)).on('error', () => resolve(`[ERR] ${p}`));
}))).then(results => fs.writeFileSync('output-all.txt', results.join('\n')));
