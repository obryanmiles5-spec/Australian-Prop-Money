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
    "action-heist-weathered-100-stack.png",
    "action-heist-weathered-100-stack.jpg",
    "Action Heist Weathered $100 Stack.jpg",
    "action heist weathered $100 stack.jpg",
    "action-heist-weathered-$100-stack.png",
    "cop-show-evidence-sealed-cash-bag.png",
    "cop-show-evidence-sealed-cash-bag.jpg"
  ];
  const prefixes = [
    '',
    'images/',
    'images/products/',
    'products/'
  ];
  for (const name of names) {
    let found = false;
    for (const prefix of prefixes) {
        const url = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${prefix}${encodeURIComponent(name)}`;
        const res = await checkUrl(url);
        if (res.status === 200) {
            console.log(`FOUND: ${url}`);
            found = true;
            break;
        }
        
        // Also try without encodeURIComponent for standard ascii
        const url2 = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${prefix}${name.replace(/ /g, '%20')}`;
        const res2 = await checkUrl(url2);
        if (res2.status === 200) {
            console.log(`FOUND: ${url2}`);
            found = true;
            break;
        }
    }
  }
}
run();
