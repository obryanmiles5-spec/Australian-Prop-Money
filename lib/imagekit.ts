export function getImageUrl(src: string, width: number = 800, height: number = 600): string {
  if (!src) return '';
  
  // Handle absolute external URLs
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Use picsum.photos for local relative paths as placeholder
  // Create a predictable seed based on the filename
  const seed = src.replace(/[^a-zA-Z0-9]/g, '');
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
