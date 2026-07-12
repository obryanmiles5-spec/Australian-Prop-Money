const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

const folders = [
  'images/products/australian-notes',
  'images/products/australian-notes/classic-notes',
  'images/products/australian-notes/new-notes',
  'images/products/australian-notes/classic-notes/10-aud',
  'images/products/australian-notes/new-notes/10-aud',
  'images/products/australian-notes/10-aud',
  'images/products/australian-notes/10-aud-front',
  'images/products/classic-notes',
  'images/products/new-notes',
  'images/products/australian-notes-classic-notes',
  'images/products/australian-notes-new-notes'
];

const filenames = [
  '10-aud-front',
  '10-aud-back',
  '10-aud-bundle',
  '10-aud-stack',
  '50-aud-front',
  '50-aud-back',
  '50-aud-bundle',
  '50-aud-stack',
  '100-aud-front',
  '100-aud-back',
  '100-aud-bundle',
  '100-aud-stack'
];

const exts = ['.png', '.jpg', '.webp', '.jpeg'];

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => {
      resolve({ url, status: 500 });
    });
  });
}

async function run() {
  const urls = [];
  for (const f of folders) {
    for (const fn of filenames) {
      for (const ext of exts) {
        urls.push(`${base}/${f}/${fn}${ext}`);
      }
    }
  }

  console.log(`Generated ${urls.length} URLs to check. Probing...`);
  
  // Probe in chunks to avoid overwhelming the server
  const chunkSize = 50;
  let found = 0;
  for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        console.log(`[FOUND] ${r.url}`);
        found++;
      }
    }
  }
  
  console.log(`Done! Found ${found} working URLs.`);
}

run();
