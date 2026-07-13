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
    'action-heist-weathered-$100-stack',
    'Action-Heist-Weathered-$100-Stack',
    'Silver Aluminium Briefcase',
    'silver-aluminium-briefcase',
    'Film Production',
    'film-production'
  ];
  
  const exts = ['.jpg', '.png', '.webp', '.jpeg'];
  const prefixes = [
    'images/',
    'images/products/',
    'images/home-folder/',
    'home-folder/images/',
    'home-folder/',
    'images/home-folder-images/',
    'home-folder-images/',
    ''
  ];

  for (const name of names) {
    for (const prefix of prefixes) {
      for (const ext of exts) {
        // try spaces and encoded spaces
        const url1 = `https://ik.imagekit.io/ukpeptides/${prefix}${name}${ext}`;
        const url2 = `https://ik.imagekit.io/ukpeptides/${prefix}${encodeURIComponent(name)}${ext}`;
        
        let res = await checkUrl(url1);
        if (res.status === 200) {
          console.log(`200 - ${url1}`);
          continue;
        }
        if (url1 !== url2) {
          res = await checkUrl(url2);
          if (res.status === 200) {
            console.log(`200 - ${url2}`);
          }
        }
      }
    }
  }
}
run();
