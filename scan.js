const https = require('https');
const fs = require('fs');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => resolve({ url, status: e.message })).end();
  });
}

async function run() {
  const code = fs.readFileSync('lib/products.ts', 'utf8');
  const names = [...code.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]).slice(0, 5);
  
  const bases = [
    'https://ik.imagekit.io/ukpeptides/',
    'https://ik.imagekit.io/ukpeptides/australianpropmoney/'
  ];

  const exts = ['.jpg', '.png', '.webp', '.jpeg'];
  const prefixes = [
    '',
    'images/',
    'home-folder/',
    'images/home-folder/'
  ];

  for (const base of bases) {
    for (const name of names) {
      for (const prefix of prefixes) {
        for (const ext of exts) {
          // encode URI correctly (keeps $ as $, spaces as %20)
          const encodedName = encodeURI(name);
          const url = `${base}${prefix}${encodedName}${ext}`;
          
          let res = await checkUrl(url);
          if (res.status === 200) {
            console.log(`200 - ${url}`);
          } else if (res.status !== 404) {
             // log 400, 403, etc
             // console.log(`${res.status} - ${url}`);
          }
        }
      }
    }
  }
}
run();
