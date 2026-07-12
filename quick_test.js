async function test() {
  const base = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';
  const urls = [
    // 10 AUD Classic Front variants
    `${base}/images/products/australian-notes/classic-notes/10-aud/10-aud-front.jpg`,
    `${base}/images/products/australian-notes/classic-notes/10-aud-front.jpg`,
    `${base}/images/products/australian-notes/classic-notes/10 AUD/10-aud-front.jpg`,
    `${base}/images/products/australian-notes/classic-notes/10%20AUD/10-aud-front.jpg`,
    `${base}/images/products/australian-notes/classic-notes/10-aud/10-aud-front.jpg`,
    `${base}/images/products/australian-notes/classic-notes/10aud/10-aud-front.jpg`,
    `${base}/images/products/australian-notes/classic-notes/10/10-aud-front.jpg`,
    
    // Test the exact lowercase folder structure requirement
    `${base}/images/products/australian-notes/classic-notes/10-aud/10-aud-front.jpg`,
    `${base}/images/products/australian-notes/classic-notes/10-aud/10-aud-front.png`,
    `${base}/images/products/australian-notes/classic-notes/10-aud/10-aud-front.webp`,
    
    // Maybe under products directly?
    `${base}/images/products/10-aud-front.jpg`,
    `${base}/images/products/10-aud-classic-notes-front.jpg`,
    
    // Maybe with category but no classic-notes?
    `${base}/images/products/australian-notes/10-aud-front.jpg`,
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(res.status, ':', url);
    } catch (err) {
      console.error(err.message);
    }
  }
}
test();
