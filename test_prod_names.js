const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  const bases = [
    "Canvas Money Bag",
    "canvas money bag",
    "canvas-money-bag",
    "canvas-bag",
    "Action Heist Weathered $100 Stack",
    "Action Heist Weathered 100 Stack",
    "action-heist-weathered-$100-stack",
    "action-heist-weathered-100-stack",
    "Prop Money Gun",
    "prop-money-gun"
  ];
  const exts = ['.jpg', '.png', '.jpeg', '.webp'];
  const prefixes = ['', 'images/', 'images/products/'];
  
  for (const base of bases) {
    for (const ext of exts) {
        for (const prefix of prefixes) {
            const url1 = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${prefix}${encodeURIComponent(base)}${ext}`;
            const res1 = await checkUrl(url1);
            if (res1.status === 200) {
                console.log(`FOUND: ${url1}`);
                return;
            }
            
            const url2 = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${prefix}${base.replace(/ /g, '%20')}${ext}`;
            const res2 = await checkUrl(url2);
            if (res2.status === 200) {
                console.log(`FOUND: ${url2}`);
                return;
            }
        }
    }
  }
  console.log("NOT FOUND");
}
run();
