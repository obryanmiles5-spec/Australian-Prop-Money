const https = require('https');
const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/';

const paths = [
  'images/categories/Australian Notes.webp',
  'images/categories/australian-notes.webp',
  'images/products/Australian Notes/New-Notes/100 AUD/100-aud-front.jpg',
  'images/products/australian-notes/new-notes/100-aud/100-aud-front.jpg',
  'images/products/Australian-Notes/New-Notes/100-AUD/100-aud-front.jpg',
  'images/categories/australian-notes.webp',
  'images/products/australian-notes/classic-notes/10-aud/10-aud-front.jpg'
];

paths.forEach(p => {
  https.get(baseUrl + encodeURI(p), (res) => {
    console.log(`[${res.statusCode}] ${p}`);
  });
});
