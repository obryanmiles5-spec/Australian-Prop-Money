const fs = require('fs');
let code = fs.readFileSync('lib/products.ts', 'utf8');

code = code.replace(/gallery: \['[^']*'\],\n\s*id: '[^']+',\n\s*id:/g, match => {
  const parts = match.split('\n');
  return parts[0] + '\n' + parts[2];
});

code = code.replace(/gallery: \['[^']*'\],\n\s*id: '[^']+',\n\s*name:/g, match => {
  return match;
});

// Let's just fix it manually for the 6 keys:
let lines = code.split('\n');
let newLines = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('id: ') && lines[i+1] && lines[i+1].trim().startsWith('id: ')) {
    continue; // Skip the first one if duplicate
  }
  if (lines[i].trim().startsWith('id: ') && lines[i+2] && lines[i+2].trim().startsWith('id: ') && lines[i+1].trim().startsWith('name:')) {
    // Wait, the error is two identical keys. I can just write a script that parses the file with regex.
  }
  newLines.push(lines[i]);
}

// Safer approach: 
let currentObjStart = -1;
let seenKeys = new Set();
let out = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes('{')) {
    seenKeys.clear();
  }
  
  let keyMatch = line.match(/^\s*([a-zA-Z0-9_]+)\s*:/);
  if (keyMatch) {
    let key = keyMatch[1];
    if (seenKeys.has(key)) {
      continue; // Drop duplicate key line
    }
    seenKeys.add(key);
  }
  
  out.push(line);
}
fs.writeFileSync('lib/products.ts', out.join('\n'));

