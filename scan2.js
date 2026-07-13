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
  ];

  const exts = ['.jpg', '.png', '.webp', '.jpeg'];
  const prefixes = [
    'images/',
    'home-folder/',
    ''
  ];

  for (const base of bases) {
    for (const name of names) {
      for (const prefix of prefixes) {
        for (const ext of exts) {
          const encodedName = encodeURIComponent(name); // encode completely
          const url = `${base}${prefix}${encodedName}${ext}`;
          let res = await checkUrl(url);
          if (res.status === 200) {
            console.log(`200 - ${url}`);
          }
          
          const encodedNameSpace = encodeURI(name); // spaces as %20
          const url2 = `${base}${prefix}${encodedNameSpace}${ext}`;
          if (url2 !== url) {
             let res2 = await checkUrl(url2);
             if (res2.status === 200) {
               console.log(`200 - ${url2}`);
             }
          }
        }
      }
    }
  }
}
run();
