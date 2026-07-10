const https = require('https');

function checkURL(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode, type: res.headers['content-type'] });
    }).on('error', (e) => {
      resolve({ url, error: e.message });
    });
  });
}

async function run() {
  const urls = [
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/products/Australian%20Notes/Classic-Notes/10%20AUD/10-aud-front.jpg',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/products/Australian%20Notes/Classic-Notes/10%20AUD/10-aud-front.png',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/products/Australian%20Notes/Classic-Notes/10%20AUD/10-aud-front.webp',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/products/Australian%20Notes/Classic-Notes/10%20AUD/10-aud-front',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/blog/1.jpg',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/blog/1.png',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/blog/1.webp',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/blog/1'
  ];
  for (const url of urls) {
    console.log(await checkURL(url));
  }
}

run();
