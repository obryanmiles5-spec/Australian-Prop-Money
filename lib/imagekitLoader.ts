export default function imageKitLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(',');

  if (src.startsWith('https://ik.imagekit.io')) {
    const url = new URL(src);
    url.searchParams.set('tr', paramsString);
    return url.toString();
  } else if (src.startsWith('http')) {
    return src;
  }
  
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `https://ik.imagekit.io/ukpeptides/australianpropmoney/${cleanSrc}?tr=${paramsString}`;
}
