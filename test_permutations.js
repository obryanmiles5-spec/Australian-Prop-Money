const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

const dirs = ['images', 'Images', 'IMAGE', 'images/hero', 'images/Hero', 'Images/Hero', 'Images/hero'];
const files = ['hero', 'Hero', 'HERO', 'hero-image', 'Hero-Image'];
const exts = ['webp', 'Webp', 'WEBP', 'jpg', 'Jpg', 'JPG', 'png', 'Png', 'PNG', 'jpeg'];

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
  console.log('Testing Hero image permutations...');
  const urls = [];
  
  // Try dir combinations
  for (const dir of dirs) {
    for (const file of files) {
      for (const ext of exts) {
        // Option 1: as dir/file.ext
        urls.push(`${base}/${dir}/${file}.${ext}`);
        // Option 2: if dir already contains hero, just dir/file.ext might be redundant, but let's do it
      }
    }
  }

  // Also try direct files under base/images/
  for (const file of files) {
    for (const ext of exts) {
      urls.push(`${base}/images/${file}.${ext}`);
      urls.push(`${base}/${file}.${ext}`);
    }
  }

  console.log(`Generated ${urls.length} candidate URLs. Testing in parallel batches...`);
  
  const batchSize = 25;
  let found = false;
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        console.log(`\n[FOUND 200 SUCCESS] -> ${r.url}`);
        found = true;
      }
    }
  }
  
  if (!found) {
    console.log('\nNo matching Hero image found in permutations.');
  } else {
    console.log('\nPermutations test finished.');
  }
}

run();
