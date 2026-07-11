const https = require('https');

const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/Images/Categories';

const parts = ['movie', 'prop', 'money'];
const exts = ['jpg', 'webp', 'png', 'jpeg'];

function generateCombinations() {
  const result = [];
  const delimiters = ['-', '_', ' '];
  
  // Try all casing options
  const casingOptions = [
    ['movie', 'prop', 'money'],
    ['Movie', 'Prop', 'Money'],
    ['MOVIE', 'PROP', 'MONEY'],
    ['Movie-Prop-Money'],
    ['Movie_Prop_Money']
  ];
  
  for (const casing of casingOptions) {
    if (casing.length === 1) {
      for (const ext of exts) {
        result.push(`${casing[0]}.${ext}`);
      }
    } else {
      for (const d of delimiters) {
        const joined = casing.join(d);
        for (const ext of exts) {
          result.push(`${joined}.${ext}`);
        }
      }
    }
  }
  
  // also some manual ones
  result.push('Movie-Prop-Money.jpg');
  result.push('Movie-Prop-Money.webp');
  result.push('Movie-Prop-Money.png');
  result.push('Movie_Prop_Money.jpg');
  result.push('Movie-Prop-Money.jpg');
  result.push('Movie-Prop-Money.JPG');
  
  return Array.from(new Set(result));
}

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
  const filenames = generateCombinations();
  console.log(`Testing ${filenames.length} Movie Prop Money combinations...`);
  const urls = filenames.map(f => `${base}/${f}`);
  
  const results = await Promise.all(urls.map(testUrl));
  let found = false;
  for (const r of results) {
    if (r.status === 200) {
      console.log(`[FOUND SUCCESS] -> ${r.url}`);
      found = true;
    }
  }
  if (!found) {
    console.log('No movie prop money file found with standard variations.');
  }
}

run();
