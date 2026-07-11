const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

const structures = [
  'Products/Australian Notes/New-Notes/100 AUD/100-aud-stack',
  'Products/Australian Notes/New-Notes/100-aud-stack',
  'Products/Australian Notes/100-aud-stack',
  'Products/New-Notes/100 AUD/100-aud-stack',
  'Products/New-Notes/100-aud-stack',
  'Products/100-aud-stack',
  'Australian Notes/New-Notes/100 AUD/100-aud-stack',
  'Australian Notes/New-Notes/100-aud-stack',
  'Australian Notes/100-aud-stack',
  'New-Notes/100 AUD/100-aud-stack',
  'New-Notes/100-aud-stack',
  '100-aud-stack',
  'Products/Australian_Notes/New_Notes/100_AUD/100_aud_stack',
  'Products/Australian-Notes/New-Notes/100-AUD/100-aud-stack',
  'Products/Australian Notes/New-Notes/100 AUD/100-aud-front',
  'Products/Australian Notes/New-Notes/100-aud-front',
  'Products/Australian Notes/100-aud-front',
  'Products/100-aud-front'
];

const exts = ['.jpg', '.webp', '.png', ''];

function testUrl(url) {
  const encodedUrl = encodeURI(url);
  return new Promise((resolve) => {
    const req = https.get(encodedUrl, { timeout: 1500 }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', () => resolve({ url, status: 500 }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 408 });
    });
  });
}

async function run() {
  console.log('Testing deep structural variations for products...');
  const urls = [];
  
  for (const s of structures) {
    for (const ext of exts) {
      urls.push(`${base}/Images/${s}${ext}`);
      urls.push(`${base}/images/${s}${ext}`);
      
      // Try lowercase too
      urls.push(`${base}/Images/${s.toLowerCase()}${ext}`);
      urls.push(`${base}/images/${s.toLowerCase()}${ext}`);
    }
  }

  console.log(`Generated ${urls.length} URLs. Probing in parallel...`);
  
  const results = await Promise.all(urls.map(testUrl));
  let found = false;
  for (const r of results) {
    if (r.status === 200) {
      console.log(`[FOUND SUCCESS] -> ${r.url}`);
      found = true;
    }
  }
  
  if (!found) {
    console.log('No working URL found among structural variations.');
  }
}

run();
