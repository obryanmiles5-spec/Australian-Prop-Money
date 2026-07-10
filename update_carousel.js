const fs = require('fs');
let code = fs.readFileSync('components/CreativeIndustryCarousel.tsx', 'utf8');
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1485846234645-a62644f84728\?auto=format&fit=crop&q=80&w=800'/,
  "'images/categories/Movie-Prop-Money.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1598257006458-087169a1f08d\?auto=format&fit=crop&q=80&w=800'/,
  "'images/categories/TV Props.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1516035069371-29a1b244cc32\?auto=format&fit=crop&q=80&w=800'/,
  "'images/categories/Photography Props.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1507679799987-c73779587ccf\?auto=format&fit=crop&q=80&w=800'/,
  "'images/categories/Australian Notes.webp'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1611162617213-7d7a39e9b1d7\?auto=format&fit=crop&q=80&w=800'/,
  "'images/categories/Bundle Packs.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1492691527719-9d1e07e534b4\?auto=format&fit=crop&q=80&w=800'/,
  "'images/categories/Training Currency.jpg'"
);
code = code.replace(
  /'https:\/\/images.unsplash.com\/photo-1460925895917-afdab827c52f\?auto=format&fit=crop&q=80&w=800'/,
  "'images/categories/Australian Notes.webp'"
);
fs.writeFileSync('components/CreativeIndustryCarousel.tsx', code);
