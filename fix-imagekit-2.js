const fs = require('fs');
let code = fs.readFileSync('lib/imagekit.ts', 'utf8');

// Remove the fallback block
code = code.replace(
  /\/\/ Map Australian Notes to the only working category image[\s\S]*?clean = 'images\/categories\/australian-notes\.webp';\s*\}/g,
  `// Removed fallback`
);

fs.writeFileSync('lib/imagekit.ts', code);
