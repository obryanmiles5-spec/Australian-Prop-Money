const https = require('https');
const baseUrl = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/';

const paths = [
  'images/categories/bundle-packs.jpg',
  'images/categories/tv-props.webp'
];

paths.forEach(p => {
  https.get(baseUrl + encodeURI(p), res => {
    console.log(`[${res.statusCode}] ${p}`);
  });
});
