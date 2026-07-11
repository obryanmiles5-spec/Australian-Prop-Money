const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

// We want to test variations for Australian Notes (100 AUD and 50 AUD)
const structures = [
  // Folder levels
  'Products/Australian Notes/New-Notes',
  'Products/Australian Notes/New Notes',
  'Products/Australian Notes/New_Notes',
  'Products/Australian-Notes/New-Notes',
  'Products/Australian Notes/Classic-Notes',
  'Products/Australian Notes/Classic Notes',
  'Products/Australian Notes',
  'Products/Classic Notes',
  'Products/New Notes',
];

const subfolders = [
  '100 AUD',
  '100-AUD',
  '100AUD',
  '100',
  '50 AUD',
  '50-AUD',
  '50',
  ''
];

const filenames = [
  '100-aud-stack',
  '100-aud-front',
  '100-aud-back',
  '100-aud-bundle',
  '100-AUD-stack',
  '100-AUD-front',
  '100 AUD Stack',
  '100 AUD Front',
  '100_aud_stack',
  '100-Aud-Stack',
  '100-Aud-Front',
  '50-aud-stack',
  '50-aud-front',
  '50-aud-back',
  '50-aud-bundle',
  '50-AUD-stack',
  '50-AUD-front',
  '50 AUD Stack',
  '50 AUD Front',
  '50_aud_stack',
  '50-Aud-Stack',
  '50-Aud-Front',
];

const exts = ['.png', '.jpg', '.webp', '.jpeg', '.PNG', '.JPG', '.WEBP'];

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
  console.log('Generating candidates for Australian Notes...');
  const urls = [];
  
  for (const s of structures) {
    for (const sub of subfolders) {
      for (const fn of filenames) {
        for (const ext of exts) {
          const folderPath = sub ? `${s}/${sub}` : s;
          urls.push(`${base}/Images/${folderPath}/${fn}${ext}`);
        }
      }
    }
  }

  console.log(`Generated ${urls.length} URLs. Probing in parallel chunks...`);
  
  const chunkSize = 250;
  for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        console.log(`[FOUND SUCCESS] -> ${r.url}`);
      }
    }
  }
  console.log('Finished probing Australian Notes.');
}

run();
