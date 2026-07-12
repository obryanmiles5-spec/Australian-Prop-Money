const fs = require('fs');

async function run() {
  const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';
  const prefixes = ['images/products', 'images', 'products'];
  const dirs = [
    'australian-notes/classic-notes',
    'australian-notes/new-notes',
    'australian-notes/classic',
    'australian-notes/new',
    'australian-notes',
    'classic-notes',
    'new-notes',
    'classic',
    'new'
  ];
  const denoms = ['10', '20', '50', '100'];
  const sides = ['front', 'back', 'stack', 'bundle'];
  const exts = ['.jpg', '.png', '.webp', '.jpeg'];

  const urls = [];

  for (const pref of prefixes) {
    for (const d of dirs) {
      for (const denom of denoms) {
        // Option A: with a subfolder like /10-aud/ or /10/
        const subfolders = [`${denom}-aud`, `${denom}`, ''];
        for (const sub of subfolders) {
          for (const side of sides) {
            // Option 1: file format like 10-aud-front
            // Option 2: file format like 10-front
            // Option 3: file format like front
            const filenames = [
              `${denom}-aud-${side}`,
              `${denom}-${side}`,
              side
            ];

            for (const fn of filenames) {
              for (const ext of exts) {
                const folderPath = sub ? `${pref}/${d}/${sub}` : `${pref}/${d}`;
                urls.push(`${base}/${folderPath}/${fn}${ext}`);
              }
            }
          }
        }
      }
    }
  }

  const uniqueUrls = Array.from(new Set(urls));
  console.log('Total generated unique URLs:', uniqueUrls.length);

  const successes = [];
  const chunkSize = 250;
  for (let i = 0; i < uniqueUrls.length; i += chunkSize) {
    const chunk = uniqueUrls.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(async (url) => {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        return { url, status: res.status };
      } catch (e) {
        return { url, status: 500 };
      }
    }));

    for (const r of results) {
      if (r.status === 200) {
        successes.push(r.url);
        console.log('[FOUND]:', r.url);
      }
    }
  }

  console.log(`Probe complete. Found ${successes.length} successes.`);
  fs.writeFileSync('success_lowercase_urls.txt', successes.join('\n'), 'utf8');
}

run();
