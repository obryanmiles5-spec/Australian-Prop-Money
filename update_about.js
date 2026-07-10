const fs = require('fs');
let code = fs.readFileSync('app/about/page.tsx', 'utf8');

code = code.replace(
  /src="https:\/\/picsum\.photos\/seed\/production\/1200\/500"/,
  "src={getImageUrl('images/categories/Movie-Prop-Money.jpg')}"
);

if (!code.includes("import { getImageUrl } from '@/lib/imagekit';")) {
  code = code.replace(/import Image from 'next\/image';/, "import Image from 'next/image';\nimport { getImageUrl } from '@/lib/imagekit';");
}

fs.writeFileSync('app/about/page.tsx', code);
