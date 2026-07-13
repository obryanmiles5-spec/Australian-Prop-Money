const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace(
  /'images\/products\/Australian Notes\/New-Notes\/100 AUD\/100-aud-front'/,
  "'images/$100 AUD New Notes.jpg'"
);
code = code.replace(
  /'images\/products\/Australian Notes\/New-Notes\/50 AUD\/50-aud-front'/,
  "'images/$50 AUD New Notes.jpg'"
);
code = code.replace(
  /'images\/products\/Australian Notes\/New-Notes\/20 AUD\/20-aud-front'/,
  "'images/$20 AUD New Notes.jpg'"
);
fs.writeFileSync('app/page.tsx', code);
