const https = require('https');
const fs = require('fs');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

const prodFolderVariants = ['products', 'Products', 'product', 'Product'];
const notesFolders = ['Australian Notes', 'Australian-Notes', 'australian-notes', 'Aussie-Notes', 'Aussie Notes'];
const seriesFolders = ['New-Notes', 'New Notes', 'new-notes', 'Classic-Notes', 'Classic Notes', 'classic-notes'];
const denomFolders = ['100 AUD', '100-AUD', '100AUD', '100-aud', '50 AUD', '50-AUD', '50AUD', '50-aud'];
const files = ['100-aud-stack', '100-aud-front', '50-aud-stack', '50-aud-front'];
const exts = ['jpg', 'webp', 'png', '']; // including no extension!

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
  console.log('Starting unbuffered products probe...');
  fs.writeFileSync('success_products.txt', '--- SUCCESSFUL PRODUCT URLS ---\n');
  
  const urls = [];
  for (const pf of prodFolderVariants) {
    for (const notes of notesFolders) {
      for (const series of seriesFolders) {
        for (const denom of denomFolders) {
          for (const file of files) {
            for (const ext of exts) {
              const fileWithExt = ext ? `${file}.${ext}` : file;
              urls.push(`${base}/Images/${pf}/${notes}/${series}/${denom}/${fileWithExt}`);
              urls.push(`${base}/images/${pf}/${notes}/${series}/${denom}/${fileWithExt}`);
            }
          }
        }
      }
    }
  }

  console.log(`Testing ${urls.length} combinations in parallel batches...`);
  
  const batchSize = 100;
  let successCount = 0;
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        fs.appendFileSync('success_products.txt', `[200] -> ${r.url}\n`);
        console.log(`[FOUND] ${r.url}`);
        successCount++;
      }
    }
    if (i % 1000 === 0 && i > 0) {
      console.log(`Tested ${i} of ${urls.length}... found ${successCount} so far.`);
    }
  }
  
  fs.appendFileSync('success_products.txt', `\nTotal found: ${successCount}\n`);
  console.log(`Finished unbuffered probe. Found: ${successCount}`);
}

run();
