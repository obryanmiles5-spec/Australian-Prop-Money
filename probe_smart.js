const fs = require('fs');
const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';

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
  const urls = [];
  const denoms = ['10', '20', '50', '100'];
  const seriesOpts = ['Classic-Notes', 'New-Notes', 'Classic Notes', 'New Notes'];
  const sides = ['front', 'back', 'stack', 'bundle'];
  const exts = ['.jpg', '.png', '.webp', '.jpeg', '.JPG', '.PNG', '.WEBP'];

  // 1. Australian Notes variations
  for (const s of seriesOpts) {
    for (const d of denoms) {
      // With or without denom folder
      const denomFolders = [`${d} AUD`, `${d}-AUD`, `${d}-aud`, `${d}`, ''];
      for (const df of denomFolders) {
        for (const side of sides) {
          for (const ext of exts) {
            // Check with/without Images prefix
            const filename = `${d}-aud-${side}`;
            const folderPart = df ? `Australian Notes/${s}/${df}` : `Australian Notes/${s}`;
            urls.push(`${base}/Images/Products/${folderPart}/${filename}${ext}`);
            urls.push(`${base}/images/products/${folderPart}/${filename}${ext}`);
          }
        }
      }
    }
  }

  // 2. Other categories: Movie Prop Money, TV Props, Photography Props, Training Currency, Bundle Packs
  // Let's add remaining products we want to find from the 57
  const otherProducts = [
    { cat: 'Movie Prop Money', file: 'Action-Heist-Weathered-$100-Stack' },
    { cat: 'Movie Prop Money', file: 'Charred-&-Singed-$50-Prop-Note-Stack' },
    { cat: 'Movie Prop Money', file: 'Water-Logged-Underworld-Cash-Stack' },
    { cat: 'TV Props', file: 'Broadcaster-Quality-$20-Prop-Stack' },
    { cat: 'TV Props', file: 'Game-show-Grand-Prize-Jumbo-Cash-Pile' },
    { cat: 'Photography Props', file: 'Aesthetic-Flatlay-Loose-Prop-Currency-Fan' },
    { cat: 'Photography Props', file: 'Instagram-Influencer-Luxury-Cash-Roll' },
    { cat: 'Photography Props', file: 'Hyper-Matte-Close-Up-Macro-Prop-Stack' },
    { cat: 'Training Currency', file: 'Security-Transport-Cash-Handler-Trainer' },
    { cat: 'Training Currency', file: 'Gaming-Club-Croupier-Practice-Currency' },
    { cat: 'Training Currency', file: 'Retail-Cash-Register-Training-Kit' },
    { cat: 'Training Currency', file: 'Classroom-Finance-Education-Play-Pack' },
    { cat: 'Bundle Packs', file: 'The-Millionaire-Heist-Master-Crate-(100 Stacks)' },
    { cat: 'Bundle Packs', file: 'Indie-Film-Crew-Full-Range-Pack-(10 Stacks)' }
  ];

  for (const p of otherProducts) {
    for (const ext of exts) {
      // Test different directory capitalizations or extensions
      urls.push(`${base}/Images/Products/${p.cat}/${p.file}${ext}`);
      urls.push(`${base}/images/products/${p.cat.toLowerCase()}/${p.file.toLowerCase()}${ext}`);
      // also replacing spaces with hyphens in the filename
      urls.push(`${base}/Images/Products/${p.cat}/${p.file.replace(/ /g, '-')}${ext}`);
    }
  }

  // Deduplicate
  const uniqueUrls = Array.from(new Set(urls));
  console.log(`Generated ${uniqueUrls.length} targeted URLs to check.`);

  const successes = [];
  const chunkSize = 150;
  for (let i = 0; i < uniqueUrls.length; i += chunkSize) {
    const chunk = uniqueUrls.slice(i, i + chunkSize);
    const results = await Promise.all(chunk.map(testUrl));
    for (const r of results) {
      if (r.status === 200) {
        successes.push(r.url);
        console.log(`[FOUND] ${r.url}`);
      }
    }
  }

  console.log(`Finished. Found ${successes.length} working URLs.`);
  fs.writeFileSync('working_urls.txt', successes.join('\n'), 'utf8');
}

run();
