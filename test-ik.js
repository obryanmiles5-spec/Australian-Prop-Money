const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, statusCode: res.statusCode });
    }).on('error', (err) => resolve({ url, statusCode: 500 }));
  });
}

async function run() {
  const exts = ['.jpg', '.png', '.webp', '.jpeg'];
  const baseUrls = [
    'https://ik.imagekit.io/ukpeptides/images/',
    'https://ik.imagekit.io/ukpeptides/images/categories/',
    'https://ik.imagekit.io/ukpeptides/images/products/',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/products/',
  ];
  
  const names = [
    'Film Production', 'film-production',
    'Action Heist Weathered $100 Stack', 'action-heist-weathered-$100-stack',
    '100 AUD New Notes', '100-aud-new-notes',
    '$100 AUD New Notes'
  ];

  for (const b of baseUrls) {
    for (const name of names) {
      for (const ext of exts) {
        const url = b + encodeURI(name) + ext;
        const res = await checkUrl(url);
        if (res.statusCode === 200) console.log(`200 - ${url}`);
      }
    }
  }
}
run();
