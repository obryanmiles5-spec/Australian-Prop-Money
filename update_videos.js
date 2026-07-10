const fs = require('fs');
let code = fs.readFileSync('app/videos/page.tsx', 'utf8');

code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1492691527719-9d1e07e534b4\?auto=format&fit=crop&q=80&w=1200'/,
  "'images/categories/Movie-Prop-Money.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1598257006458-087169a1f08d\?auto=format&fit=crop&q=80&w=1200'/,
  "'images/categories/TV Props.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1516035069371-29a1b244cc32\?auto=format&fit=crop&q=80&w=1200'/,
  "'images/categories/Photography Props.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1507679799987-c73779587ccf\?auto=format&fit=crop&q=80&w=1200'/,
  "'images/categories/Australian Notes.webp'"
);

// We need to wrap it in getImageUrl where it's used.
code = code.replace(/src=\{VIDEOS\[0\].thumbnail\}/, "src={getImageUrl(VIDEOS[0].thumbnail)}");
code = code.replace(/src=\{video.thumbnail\}/, "src={getImageUrl(video.thumbnail)}");

fs.writeFileSync('app/videos/page.tsx', code);
