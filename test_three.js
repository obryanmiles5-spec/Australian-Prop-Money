const https = require('https');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const pathsToTest = [
  // 3.avif variations
  'australianpropmoney/images/blog/3.avif',
  'australianpropmoney/images/Blog/3.avif',
  'australianpropmoney/blog/3.avif',
  'australianpropmoney/Blog/3.avif',
  'images/blog/3.avif',
  'images/Blog/3.avif',
  'blog/3.avif',
  'Blog/3.avif',

  // canvas-money-bag.jpg variations
  'australianpropmoney/images/products/accessories/canvas-money-bag.jpg',
  'australianpropmoney/images/Products/Accessories/canvas-money-bag.jpg',
  'australianpropmoney/products/accessories/canvas-money-bag.jpg',
  'australianpropmoney/Products/Accessories/canvas-money-bag.jpg',
  'images/products/accessories/canvas-money-bag.jpg',
  'images/Products/Accessories/canvas-money-bag.jpg',
  'products/accessories/canvas-money-bag.jpg',
  'Products/Accessories/canvas-money-bag.jpg'
];

async function check(path) {
  const url = endpoint + '/' + path.split('/').map(encodeURIComponent).join('/');
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ path, status: res.statusCode });
    }).on('error', () => {
      resolve({ path, status: 500 });
    });
  });
}

async function run() {
  const results = await Promise.all(pathsToTest.map(check));
  results.forEach(r => {
    console.log(`[${r.status}] ${r.path}`);
  });
}

run();
