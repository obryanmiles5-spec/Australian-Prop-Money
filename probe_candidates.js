const https = require('https');
const fs = require('fs');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/Images';

const classicNotes = [
  { note: '10', files: ['10-aud-front.jpg', '10-aud-back.jpg', '10-aud-stack.png', '10-aud-bundle.png'] },
  { note: '20', files: ['20-aud-front.png', '20-aud-back.jpg', '20-aud-stack.png', '20-aud-bundle.png'] },
  { note: '50', files: ['50-aud-front.jpg', '50-aud-back.jpg', '50-aud-stack.jpg', '50-aud-bundle.jpg'] },
  { note: '100', files: ['100-aud-front.jpg', '100-aud-back.jpg', '100-aud-stack.jpg', '100-aud-bundle.jpg'] }
];

const newNotes = [
  { note: '10', files: ['10-aud-front.png', '10-aud-back.jpg', '10-aud-stack.jpg', '10-aud-bundle.webp'] },
  { note: '20', files: ['20-aud-front.jpg', '20-aud-back.jpg', '20-aud-stack.jpg', '20-aud-bundle.webp'] },
  { note: '50', files: ['50-aud-front.jpg', '50-aud-back.jpg', '50-aud-stack.jpg', '50-aud-bundle.jpg'] },
  { note: '100', files: ['100-aud-front.jpg', '100-aud-back.webp', '100-aud-stack.png', '100-aud-bundle.jpg'] }
];

const standaloneProducts = [
  { cat: 'Movie Prop Money', file: 'Action-Heist-Weathered-$100-Stack.png' },
  { cat: 'Movie Prop Money', file: 'Action-Heist-Weathered-$50-Stack.png' },
  { cat: 'Movie Prop Money', file: 'Crimson-Stained-$100-Prop-Note-Stack.png' },
  { cat: 'Movie Prop Money', file: 'Charred-&-Singed-$50-Prop-Note-Stack.png' },
  { cat: 'Movie Prop Money', file: 'Water-Logged-Underworld-Cash-Stack.png' },

  { cat: 'TV Props', file: 'Cop-Show-Evidence-Sealed-Cash-Bag.png' },
  { cat: 'TV Props', file: 'Broadcaster-Quality-$20-Prop-Stack.png' },
  { cat: 'TV Props', file: 'Drug-Bust-Luxury-Briefcase-Layout.png' },
  { cat: 'TV Props', file: 'Game-show-Grand-Prize-Jumbo-Cash-Pile.png' },
  { cat: 'TV Props', file: 'Telenovela-Wealth-Cartel-Brick.png' },

  { cat: 'Photography Props', file: 'Studio-Grade-High-Contrast-$100-Prop-Stack.png' },
  { cat: 'Photography Props', file: 'Aesthetic-Flatlay-Loose-Prop-Currency-Fan.png' },
  { cat: 'Photography Props', file: 'Instagram-Influencer-Luxury-Cash-Roll.png' },
  { cat: 'Photography Props', file: 'Hyper-Matte-Close-Up-Macro-Prop-Stack.png' },
  { cat: 'Photography Props', file: 'Hip-Hop-Video-Multi-Denom-Rain-Pack.png' },
  { cat: 'Photography Props', file: 'Hip-Hop-Video-Multi-Denom-Rain-Pack.jpg' },

  { cat: 'Training Currency', file: 'Bank-Teller-Training-Starter-Bundle.png' },
  { cat: 'Training Currency', file: 'Security-Transport-Cash-Handler-Trainer.png' },
  { cat: 'Training Currency', file: 'Gaming-Club-Croupier-Practice-Currency.png' },
  { cat: 'Training Currency', file: 'Retail-Cash-Register-Training-Kit.png' },
  { cat: 'Training Currency', file: 'Classroom-Finance-Education-Play-Pack.png' },

  { cat: 'Bundle Packs', file: 'The-Millionaire-Heist-Master-Crate-(100 Stacks).png' },
  { cat: 'Bundle Packs', file: 'The-Millionaire-Heist-Master-Crate-(100%20Stacks).png' },
  { cat: 'Bundle Packs', file: 'Indie-Film-Crew-Full-Range-Pack-(10 Stacks).png' },
  { cat: 'Bundle Packs', file: 'Indie-Film-Crew-Full-Range-Pack-(10%20Stacks).png' },
  { cat: 'Bundle Packs', file: 'High-Stakes-Ransom-Briefcase-Pro-(20 Stacks).png' },
  { cat: 'Bundle Packs', file: 'High-Stakes-Ransom-Briefcase-Pro-(20%20Stacks).png' },
  { cat: 'Bundle Packs', file: 'Commercial-Producer-Bulk-Reserve-(50 Stacks).png' },
  { cat: 'Bundle Packs', file: 'Commercial-Producer-Bulk-Reserve-(50%20Stacks).png' },
  { cat: 'Bundle Packs', file: 'Production-Supply-Wholesaler-Mega-Box.png' }
];

function testUrl(url) {
  const encodedUrl = encodeURI(url);
  return new Promise((resolve) => {
    const req = https.get(encodedUrl, { timeout: 3000 }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.on('timeout', () => {
      req.destroy();
      resolve(408);
    });
  });
}

async function runProbes() {
  const successes = [];
  const failures = [];

  console.log('--- STARTING PROBE ---');

  // 1. Probe Australian Notes
  const noteFolders = ['Australian Notes', 'Australian-Notes'];
  const classicSubfolders = ['Classic Notes', 'Classic-Notes'];
  const newSubfolders = ['New Notes', 'New-Notes'];

  // Classic
  for (const n of classicNotes) {
    for (const f of n.files) {
      const candidates = [];
      for (const nf of noteFolders) {
        for (const csf of classicSubfolders) {
          // with and without denomination folder
          candidates.push(`${base}/Products/${nf}/${csf}/${n.note} AUD/${f}`);
          candidates.push(`${base}/Products/${nf}/${csf}/${n.note}-AUD/${f}`);
          candidates.push(`${base}/Products/${nf}/${csf}/${f}`);
        }
      }
      
      let found = false;
      for (const cand of candidates) {
        const code = await testUrl(cand);
        if (code === 200) {
          console.log(`[OK] Classic Note ${n.note} file ${f} -> ${cand}`);
          successes.push({ key: `Classic-${n.note}-${f}`, url: cand });
          found = true;
          break;
        }
      }
      if (!found) {
        console.log(`[FAIL] Classic Note ${n.note} file ${f} not found`);
        failures.push({ key: `Classic-${n.note}-${f}` });
      }
    }
  }

  // New
  for (const n of newNotes) {
    for (const f of n.files) {
      const candidates = [];
      for (const nf of noteFolders) {
        for (const nsf of newSubfolders) {
          // with and without denomination folder
          candidates.push(`${base}/Products/${nf}/${nsf}/${n.note} AUD/${f}`);
          candidates.push(`${base}/Products/${nf}/${nsf}/${n.note}-AUD/${f}`);
          candidates.push(`${base}/Products/${nf}/${nsf}/${f}`);
        }
      }
      
      let found = false;
      for (const cand of candidates) {
        const code = await testUrl(cand);
        if (code === 200) {
          console.log(`[OK] New Note ${n.note} file ${f} -> ${cand}`);
          successes.push({ key: `New-${n.note}-${f}`, url: cand });
          found = true;
          break;
        }
      }
      if (!found) {
        console.log(`[FAIL] New Note ${n.note} file ${f} not found`);
        failures.push({ key: `New-${n.note}-${f}` });
      }
    }
  }

  // Standalones
  for (const item of standaloneProducts) {
    const candidates = [
      `${base}/Products/${item.cat}/${item.file}`,
      `${base}/Products/${item.cat.replace(/ /g, '-')}/${item.file}`,
      `${base}/Products/${item.cat}/${item.file.replace(/ /g, '-')}`,
    ];
    let found = false;
    for (const cand of candidates) {
      const code = await testUrl(cand);
      if (code === 200) {
        console.log(`[OK] Standalone ${item.cat} file ${item.file} -> ${cand}`);
        successes.push({ key: `${item.cat}-${item.file}`, url: cand });
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`[FAIL] Standalone ${item.cat} file ${item.file} not found`);
      failures.push({ key: `${item.cat}-${item.file}` });
    }
  }

  console.log(`\n--- PROBE SUMMARY ---`);
  console.log(`Successes: ${successes.length}`);
  console.log(`Failures: ${failures.length}`);

  fs.writeFileSync('probe_results.json', JSON.stringify({ successes, failures }, null, 2));
}

runProbes();
