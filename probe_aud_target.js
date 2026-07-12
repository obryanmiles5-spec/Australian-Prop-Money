const fs = require('fs');

async function test() {
  const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';
  const dirs = [
    'images/products/australian-notes/classic-notes',
    'images/products/australian-notes/new-notes',
    'images/products/australian-notes/classic-notes/10-aud',
    'images/products/australian-notes/new-notes/10-aud',
    'images/products/australian-notes/10-aud',
    'images/products/classic-notes',
    'images/products/new-notes',
    'images/products',
    'images/australian-notes',
    'images'
  ];
  
  const files = [
    '10-aud-front', '10-aud-back', '10-aud-stack', '10-aud-bundle',
    '10-aud-classic-front', '10-aud-classic-back', '10-aud-classic-stack', '10-aud-classic-bundle',
    '10-aud-new-front', '10-aud-new-back', '10-aud-new-stack', '10-aud-new-bundle'
  ];

  const exts = ['.jpg', '.png', '.webp', '.jpeg'];

  const urls = [];
  for (const d of dirs) {
    for (const f of files) {
      for (const ext of exts) {
        urls.push(`${base}/${d}/${f}${ext}`);
      }
    }
  }

  console.log(`Generated ${urls.length} target URLs. Probing...`);

  const successes = [];
  const chunkSize = 100;
  for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(async (url) => {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        return { url, status: res.status };
      } catch (err) {
        return { url, status: 500 };
      }
    }));

    for (const r of results) {
      if (r.status === 200) {
        console.log('[FOUND SUCCESS]:', r.url);
        successes.push(r.url);
      }
    }
  }

  console.log('Finished probing. Total successes:', successes.length);
}

test();
