const https = require('https');

const endpoint = 'https://ik.imagekit.io/ukpeptides';

const paths = [
  // Let's list some very direct and nested paths
  'canvas-money-bag.jpg',
  'Accessories/canvas-money-bag.jpg',
  'accessories/canvas-money-bag.jpg',
  'Products/canvas-money-bag.jpg',
  'products/canvas-money-bag.jpg',
  'Products/Accessories/canvas-money-bag.jpg',
  'Products/accessories/canvas-money-bag.jpg',
  'products/accessories/canvas-money-bag.jpg',
  'products/Accessories/canvas-money-bag.jpg',

  'images/canvas-money-bag.jpg',
  'images/Accessories/canvas-money-bag.jpg',
  'images/accessories/canvas-money-bag.jpg',
  'images/Products/canvas-money-bag.jpg',
  'images/products/canvas-money-bag.jpg',
  'images/Products/Accessories/canvas-money-bag.jpg',
  'images/Products/accessories/canvas-money-bag.jpg',
  'images/products/accessories/canvas-money-bag.jpg',
  'images/products/Accessories/canvas-money-bag.jpg',

  'australianpropmoney/canvas-money-bag.jpg',
  'australianpropmoney/Accessories/canvas-money-bag.jpg',
  'australianpropmoney/accessories/canvas-money-bag.jpg',
  'australianpropmoney/Products/canvas-money-bag.jpg',
  'australianpropmoney/products/canvas-money-bag.jpg',
  'australianpropmoney/Products/Accessories/canvas-money-bag.jpg',
  'australianpropmoney/Products/accessories/canvas-money-bag.jpg',
  'australianpropmoney/products/accessories/canvas-money-bag.jpg',
  'australianpropmoney/products/Accessories/canvas-money-bag.jpg',

  'australianpropmoney/images/canvas-money-bag.jpg',
  'australianpropmoney/images/Accessories/canvas-money-bag.jpg',
  'australianpropmoney/images/accessories/canvas-money-bag.jpg',
  'australianpropmoney/images/Products/canvas-money-bag.jpg',
  'australianpropmoney/images/products/canvas-money-bag.jpg',
  'australianpropmoney/images/Products/Accessories/canvas-money-bag.jpg',
  'australianpropmoney/images/Products/accessories/canvas-money-bag.jpg',
  'australianpropmoney/images/products/accessories/canvas-money-bag.jpg',
  'australianpropmoney/images/products/Accessories/canvas-money-bag.jpg'
];

async function check(path) {
  const url = endpoint + '/' + path.split('/').map(encodeURIComponent).join('/');
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ path, url, status: res.statusCode });
    }).on('error', () => {
      resolve({ path, url, status: 500 });
    });
  });
}

async function run() {
  const results = await Promise.all(paths.map(check));
  const success = results.filter(r => r.status === 200);
  console.log('Total checked:', paths.length);
  console.log('Successful matches:', success.length);
  success.forEach(s => console.log(`[OK] ${s.path} -> ${s.url}`));
}

run();
