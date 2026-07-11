const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/Images/Products';

const notesFolders = ['Australian Notes', 'Australian-Notes', 'australian-notes'];
const seriesFolders = ['New-Notes', 'New Notes', 'new-notes', 'Classic-Notes', 'Classic Notes', 'classic-notes'];
const denomFolders = ['100 AUD', '100-AUD', '100AUD', '100-aud', '50 AUD', '50-AUD', '50AUD', '50-aud'];
const files = ['100-aud-stack', '100-aud-front', '50-aud-stack', '50-aud-front', '100_aud_stack', '50_aud_stack'];
const exts = ['jpg', 'webp', 'png', 'jpeg'];

function testUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 1500 }, (res) => {
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
  console.log('Probing products path combinations...');
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

  // Also let's try flatter structures:
  // e.g. Products/100-aud-stack.jpg
  for (const file of files) {
    for (const ext of exts) {
      urls.push(`${base}/${file}.${ext}`);
    }
  }

  console.log(`Generated ${urls.length} product combinations. Probing in parallel batches...`);
  
  const batchSize = 40;
  let successCount = 0;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        console.log(`[SUCCESS] -> ${r.url}`);
        successCount++;
      }
    }
  }
  
  console.log(`\nProbe finished. Found ${successCount} working product URLs.`);
}

run();
