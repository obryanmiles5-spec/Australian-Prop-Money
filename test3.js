const https = require('https');
const fs = require('fs');
const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/';

const pathsToTest = [
  'images/products/australian-notes.webp',
  'images/products/australian-notes.jpg',
  'images/categories/australian-notes.webp',
  'images/categories/Bundle Packs.webp',
];

Promise.all(pathsToTest.map(p => new Promise(resolve => {
  https.get(baseUrl + encodeURI(p), res => resolve(`[${res.statusCode}] ${p}`)).on('error', () => resolve(`[ERR] ${p}`));
}))).then(results => fs.writeFileSync('output3.txt', results.join('\n')));
