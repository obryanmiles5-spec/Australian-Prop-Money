const https = require('https');

const url = 'https://ik.imagekit.io/ukpeptides/australianpropmoney/images/blog/5.webp';

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Body snippet (first 300 chars):', data.substring(0, 300));
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
