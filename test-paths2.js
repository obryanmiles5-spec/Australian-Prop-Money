const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  const names = [
    'Action Heist Weathered $100 Stack',
    '$100 AUD New Notes'
  ];
  
  const bases = [
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/',
    'https://ik.imagekit.io/ukpeptides/'
  ];

  const exts = ['.jpg', '.png', '.webp', '.jpeg'];
  const prefixes = [
    'images/',
    'home-folder/images/',
    'images/home-folder/',
    'images/Home-folder/',
    'Home-folder/images/',
    'images/home-folder-images/',
    'home-folder-images/',
    'home-folder images/',
    'imagekit home-folder images/',
    'home-folder/',
    'Home-folder/',
    ''
  ];

  for (const base of bases) {
    for (const name of names) {
      for (const prefix of prefixes) {
        for (const ext of exts) {
          const url1 = `${base}${prefix}${encodeURIComponent(name)}${ext}`;
          let res = await checkUrl(url1);
          if (res.status === 200) {
            console.log(`200 - ${url1}`);
            continue;
          }
        }
      }
    }
  }
}
run();
