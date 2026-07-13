const fs = require('fs');
let code = fs.readFileSync('lib/imagekit.ts', 'utf8');

const cleanFunc = `export function getImageUrl(src: string, width?: number, height?: number, quality?: number): string {
  if (!src) return '';
  
  if (src.startsWith('http://') || src.startsWith('https://')) {
    // If it's an absolute URL, make sure spaces are encoded if it's ImageKit
    // Actually, just return it but encode it if it has raw spaces.
    return encodeURI(src);
  }
  
  let clean = src.startsWith('/') ? src.slice(1) : src;
  
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/ukpeptides/australianpropmoney';
  const baseUrl = endpoint.endsWith('/') ? endpoint.slice(0, -1) : endpoint;
  
  // Use encodeURI to safely encode spaces and special characters, while preserving slashes
  let url = \`\${baseUrl}/\${encodeURI(clean)}\`;
  
  if (width || height || quality) {
    const transforms: string[] = [];
    if (width) transforms.push(\`w-\${width}\`);
    if (height) transforms.push(\`h-\${height}\`);
    if (quality) transforms.push(\`q-\${quality}\`);
    // add transforms query
    url += \`?tr=\${transforms.join(',')}\`;
  }
  
  return url;
}
`;

code = code.replace(/export function getImageUrl[\s\S]*?^}/m, cleanFunc);
fs.writeFileSync('lib/imagekit.ts', cleanFunc);
console.log("Updated imagekit.ts");
