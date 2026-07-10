export function getImageUrl(src: string, width?: number, quality?: number): string {
  if (!src) return '';
  const endpoint = 'https://ik.imagekit.io/ukpeptides/australianpropmoney';
  const cleanEndpoint = endpoint.replace(/\/$/, '');
  
  // Format transformation parameters
  const transforms: string[] = [];
  if (width) transforms.push(`w-${width}`);
  if (quality) transforms.push(`q-${quality}`);
  const trString = transforms.length > 0 ? `tr:${transforms.join(',')}` : '';

  // Handle absolute external URLs
  if (src.startsWith('http://') || src.startsWith('https://')) {
    if (src.includes('ik.imagekit.io')) return src; // already processed
    if (trString) {
      return `${cleanEndpoint}/${trString}/${src}`;
    }
    return src;
  }

  // Handle local relative paths
  let cleanSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Add .webp extension if no extension is present
  if (!cleanSrc.match(/\.[a-zA-Z0-9]+$/)) {
    cleanSrc += '.webp';
  }

  if (trString) {
    return `${cleanEndpoint}/${trString}${cleanSrc}`;
  }
  return `${cleanEndpoint}${cleanSrc}`;
}
