export default function imageKitLoader({ src, width, quality }) {
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  if (src.startsWith('/')) {
    src = src.slice(1);
  }
  
  // Bypass imagekit for local newly uploaded accessories images
  if (src.startsWith('images/products/accessories/')) {
    return `/${src}`;
  }
  
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  
  // Notice we use the default WITHOUT australianpropmoney, as that's what the real bucket uses!
  // BUT the user says they have NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT set, so it will use that.
  let urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/ukpeptides";
  if(urlEndpoint.endsWith('/')) {
    urlEndpoint = urlEndpoint.slice(0, -1);
  }
  
  return `${urlEndpoint}/${encodeURI(src)}?tr=${paramsString}`;
}
