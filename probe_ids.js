const https = require('https');
const ids = [
  "australian-notes/classic-notes/10-aud",
  "australian-notes/classic-notes/20-aud",
  "australian-notes/classic-notes/50-aud",
  "australian-notes/classic-notes/100-aud",
  "australian-notes/new-notes/10-aud",
  "australian-notes/new-notes/20-aud",
  "australian-notes/new-notes/50-aud",
  "australian-notes/new-notes/100-aud",
  "action-heist-weathered-100-stack",
  "action-heist-weathered-50-stack",
  "crimson-stained-100-prop-note-stack",
  "charred-and-singed-50-prop-note-stack",
  "water-logged-underworld-cash-stack",
  "cop-show-evidence-sealed-cash-bag",
  "broadcaster-quality-20-prop-stack",
  "drug-bust-luxury-briefcase-layout",
  "game-show-grand-prize-jumbo-cash-pile",
  "telenovela-wealth-cartel-brick",
  "studio-grade-high-contrast-100-prop-stack",
  "aesthetic-flatlay-loose-prop-currency-fan",
  "instagram-influencer-luxury-cash-roll",
  "hyper-matte-close-up-macro-prop-stack",
  "hip-hop-video-multi-denom-rain-pack",
  "bank-teller-training-starter-bundle",
  "security-transport-cash-handler-trainer",
  "gaming-club-croupier-practice-currency",
  "retail-cash-register-training-kit",
  "classroom-finance-education-play-pack",
  "the-millionaire-heist-master-crate-(100-stacks)",
  "indie-film-crew-full-range-pack-(10-stacks)",
  "high-stakes-ransom-briefcase-pro-(20-stacks)",
  "commercial-producer-bulk-reserve-(50-stacks)",
  "production-supply-wholesaler-mega-box",
  "canvas-bag",
  "duffle-bag",
  "money-counter",
  "prop-money-gun",
  "silver-aluminium-briefcase"
];
const exts = [".jpg", ".png", ".webp", ".jpeg"];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  for (const id of ids) {
    let found = false;
    for (const ext of exts) {
      const parts = id.split('/');
      const basename = parts[parts.length - 1];
      const urlsToTry = [
        `https://ik.imagekit.io/ukpeptides/australianpropmoney/${id}${ext}`,
        `https://ik.imagekit.io/ukpeptides/australianpropmoney/${basename}${ext}`,
        `https://ik.imagekit.io/ukpeptides/australianpropmoney/images/${basename}${ext}`,
        `https://ik.imagekit.io/ukpeptides/australianpropmoney/images/products/${basename}${ext}`,
        `https://ik.imagekit.io/ukpeptides/australianpropmoney/images/products/australian-notes/${basename}${ext}`,
      ];
      for (const url of urlsToTry) {
        const res = await checkUrl(url);
        if (res.status === 200) {
          console.log(`FOUND ${id}: ${url}`);
          found = true;
          break;
        }
      }
      if (found) break;
    }
    if (!found) {
      console.log(`MISSING: ${id}`);
    }
  }
}
run();
