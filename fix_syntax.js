const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

code = code.replace(
  /'images\/products\/Movie-Prop-Money\/Action-Heist-Weathered-id: 'action-heist-100-aged',/g,
  "'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack',\n    id: 'action-heist-100-aged',"
);

code = code.replace(
  /'images\/products\/Movie-Prop-Money\/Action-Heist-Weathered-id: 'action-heist-50-aged',/g,
  "'images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack',\n    id: 'action-heist-50-aged',"
);

code = code.replace(
  /'images\/products\/Movie-Prop-Money\/Crimson-Stained-id: 'crimson-stained-100-stack',/g,
  "'images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack',\n    id: 'crimson-stained-100-stack',"
);

code = code.replace(
  /'images\/products\/Movie-Prop-Money\/Charred-&-Singed-id: 'charred-singed-50-stack',/g,
  "'images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack',\n    id: 'charred-singed-50-stack',"
);

code = code.replace(
  /'images\/products\/TV-Props\/Broadcaster-Quality-id: 'broadcaster-quality-20-stack',/g,
  "'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack',\n    id: 'broadcaster-quality-20-stack',"
);

code = code.replace(
  /'images\/products\/Photography-Props\/Studio-Grade-High-Contrast-id: 'studio-high-contrast-100',/g,
  "'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack',\n    id: 'studio-high-contrast-100',"
);

// We also need to fix galleries:
code = code.replace(/'images\/products\/Movie-Prop-Money\/Action-Heist-Weathered-id: 'action-heist-100-aged']/g, "'images/products/Movie-Prop-Money/Action-Heist-Weathered-$100-Stack']");
code = code.replace(/'images\/products\/Movie-Prop-Money\/Action-Heist-Weathered-id: 'action-heist-50-aged']/g, "'images/products/Movie-Prop-Money/Action-Heist-Weathered-$50-Stack']");
code = code.replace(/'images\/products\/Movie-Prop-Money\/Crimson-Stained-id: 'crimson-stained-100-stack']/g, "'images/products/Movie-Prop-Money/Crimson-Stained-$100-Prop-Note-Stack']");
code = code.replace(/'images\/products\/Movie-Prop-Money\/Charred-&-Singed-id: 'charred-singed-50-stack']/g, "'images/products/Movie-Prop-Money/Charred-&-Singed-$50-Prop-Note-Stack']");
code = code.replace(/'images\/products\/TV-Props\/Broadcaster-Quality-id: 'broadcaster-quality-20-stack']/g, "'images/products/TV-Props/Broadcaster-Quality-$20-Prop-Stack']");
code = code.replace(/'images\/products\/Photography-Props\/Studio-Grade-High-Contrast-id: 'studio-high-contrast-100']/g, "'images/products/Photography-Props/Studio-Grade-High-Contrast-$100-Prop-Stack']");

fs.writeFileSync('lib/products.ts', code);
