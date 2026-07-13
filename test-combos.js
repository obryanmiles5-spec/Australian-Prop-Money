const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, statusCode: res.statusCode });
    }).on('error', (err) => resolve({ url, statusCode: 500 }));
  });
}

async function run() {
  const baseUrls = [
    'https://ik.imagekit.io/ukpeptides/',
    'https://ik.imagekit.io/ukpeptides/images/',
    'https://ik.imagekit.io/ukpeptides/images/products/',
    'https://ik.imagekit.io/ukpeptides/images/home-folder/',
    'https://ik.imagekit.io/ukpeptides/home-folder/',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/home-folder/',
  ];
  
  const exts = ['.jpg', '.png', '.webp', '.jpeg', '.JPG', '.PNG'];
  
  const names = [
    '$100 AUD New Notes', 
    '100 AUD New Notes',
    '100-aud-new-notes',
    '100_AUD_New_Notes',
    '100 aud new notes'
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
