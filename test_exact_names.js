const https = require('https');
const exts = ['.jpg', '.png'];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  const names = [
    "Canvas Money Bag",
    "Heist Duffle Bag",
    "Electronic Money Counter",
    "Prop Money Gun",
    "Silver Aluminium Briefcase",
    "Commercial Advertising",
    "commercial-advertising",
    "commercial advertising"
  ];
  
  for (const name of names) {
    for (const ext of exts) {
      const url1 = `https://ik.imagekit.io/ukpeptides/australianpropmoney/${encodeURIComponent(name)}${ext}`;
      const url2 = `https://ik.imagekit.io/ukpeptides/australianpropmoney/images/${encodeURIComponent(name)}${ext}`;
      const url3 = `https://ik.imagekit.io/ukpeptides/${encodeURIComponent(name)}${ext}`; // test root
      
      const res1 = await checkUrl(url1);
      if (res1.status === 200) console.log(`FOUND: ${url1}`);
      
      const res2 = await checkUrl(url2);
      if (res2.status === 200) console.log(`FOUND: ${url2}`);
      
      const res3 = await checkUrl(url3);
      if (res3.status === 200) console.log(`FOUND: ${url3}`);
    }
  }
}
run();
