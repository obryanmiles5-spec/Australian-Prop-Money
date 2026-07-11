const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/Images/Products';

const notesFolders = ['Australian Notes', 'Australian-Notes', 'australian-notes'];
const seriesFolders = ['New-Notes', 'New Notes', 'new-notes', 'Classic-Notes', 'Classic Notes', 'classic-notes'];
const denomFolders = ['100 AUD', '100-AUD', '100AUD', '100-aud', '50 AUD', '50-AUD', '50AUD', '50-aud', '20 AUD', '20-aud', '10 AUD', '10-aud', '5 AUD', '5-aud'];
const files = [
  '100-aud-stack', '100-aud-front', '100-aud-back', '100-aud-bundle',
  '50-aud-stack', '50-aud-front', '50-aud-back', '50-aud-bundle',
  '20-aud-stack', '20-aud-front', '20-aud-back', '20-aud-bundle',
  '10-aud-stack', '10-aud-front', '10-aud-back', '10-aud-bundle',
  '5-aud-stack', '5-aud-front', '5-aud-back', '5-aud-bundle'
];
const exts = ['jpg', 'webp', 'png'];

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
  console.log('Probing products path combinations with URL encoding...');
  const urls = [];
  
  for (const notes of notesFolders) {
    for (const series of seriesFolders) {
      for (const denom of denomFolders) {
        for (const file of files) {
          for (const ext of exts) {
            urls.push(`${base}/${notes}/${series}/${denom}/${file}.${ext}`);
          }
        }
      }
    }
  }

  console.log(`Generated ${urls.length} product combinations. Probing in parallel batches...`);
  
  const batchSize = 100;
  let successCount = 0;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        console.log(`[SUCCESS] -> ${r.url}`);
        successCount++;
        // Print first 20 successes and stop flooding the logs if there are too many
        if (successCount >= 50) {
          console.log('... found more than 50, limiting console output ...');
          // Let's keep tracking but not print all
        }
      }
    }
  }
  
  console.log(`\nProbe finished. Found ${successCount} working product URLs.`);
}

run();
