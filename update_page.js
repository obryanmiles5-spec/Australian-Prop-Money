const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Replace hero background
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1518458028785-8fbcd101ebb9\?auto=format&fit=crop&q=80'/,
  "'images/hero/hero.webp'"
);

// We need to also wrap it in getImageUrl if it's not wrapped.
// Wait, the Image tag in app/page.tsx line 41 looks like:
// src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80"
// So we should replace the src attribute.
code = code.replace(
  /src="https:\/\/images\.unsplash\.com\/photo-1518458028785-8fbcd101ebb9\?auto=format&fit=crop&q=80"/,
  "src={getImageUrl('images/hero/hero.webp')}"
);

// We need to make sure getImageUrl is imported. Let's see if it is.
if (!code.includes("import { getImageUrl } from '@/lib/imagekit';")) {
  code = code.replace(/import Image from 'next\/image';/, "import Image from 'next/image';\nimport { getImageUrl } from '@/lib/imagekit';");
}

fs.writeFileSync('app/page.tsx', code);
