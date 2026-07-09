/**
 * ImageKit Utility for High-Performance Image Optimization
 * Automatically maps standard URLs and local paths to an ImageKit endpoint if configured.
 */

export function getImageUrl(src: string, width?: number, quality?: number): string {
  if (!src) return '';
  
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
  if (!endpoint) {
    // ImageKit falls back to local placeholder images if no endpoint is configured.
    // We generate a stunning, context-aware self-contained local SVG placeholder.
    let color = '#d4af37'; // gold default
    let denomText = 'CINEMATIC PROP';
    let bgColor = '#0D0D0D';
    
    if (src.includes('money1') || src.includes('100') || src.includes('photo100')) {
      color = '#10B981'; // green for $100
      denomText = '$100 AUD SPECIMEN';
    } else if (src.includes('money2') || src.includes('50') || src.includes('burnedmoney')) {
      color = '#F59E0B'; // gold/yellow for $50
      denomText = '$50 AUD SPECIMEN';
    } else if (src.includes('money5') || src.includes('20') || src.includes('moneytv20')) {
      color = '#EF4444'; // red for $20
      denomText = '$20 AUD SPECIMEN';
    } else if (src.includes('money10') || src.includes('10')) {
      color = '#3B82F6'; // blue for $10
      denomText = '$10 AUD SPECIMEN';
    } else if (src.includes('money5aud') || src.includes('5')) {
      color = '#8B5CF6'; // violet/purple for $5
      denomText = '$5 AUD SPECIMEN';
    } else if (src.includes('crate') || src.includes('briefcase') || src.includes('evidencebag')) {
      color = '#D4AF37';
      denomText = 'PRODUCTION ULTRA PACK';
      bgColor = '#111111';
    } else if (src.includes('blog') || src.includes('journal')) {
      color = '#D4AF37';
      denomText = 'APM SET GUIDE';
      bgColor = '#141414';
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="${bgColor}"/>
      <rect x="20" y="20" width="560" height="410" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="10 5" opacity="0.6"/>
      <circle cx="300" cy="225" r="120" fill="none" stroke="${color}" stroke-width="1" opacity="0.2"/>
      <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#FFFFFF" font-weight="bold" letter-spacing="1">AUSTRALIAN PROP MONEY</text>
      <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="16" fill="${color}" font-weight="bold" letter-spacing="3">${denomText}</text>
      <text x="50%" y="62%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#718096" letter-spacing="2">SPECIMEN • NON-CIRCULATING</text>
      <text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#4A5568">PREVIEW ONLY (IMAGEKIT OFFLINE)</text>
    </svg>`;

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  const cleanEndpoint = endpoint.replace(/\/$/, '');
  
  // Format transformation parameters
  const transforms: string[] = [];
  if (width) transforms.push(`w-${width}`);
  if (quality) transforms.push(`q-${quality}`);
  const trString = transforms.length > 0 ? `tr:${transforms.join(',')}` : '';

  // Handle absolute external URLs
  if (src.startsWith('http://') || src.startsWith('https://')) {
    if (trString) {
      return `${cleanEndpoint}/${trString}/${src}`;
    }
    return `${cleanEndpoint}/${src}`;
  }

  // Handle local relative paths
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  if (trString) {
    return `${cleanEndpoint}/${trString}${cleanSrc}`;
  }
  return `${cleanEndpoint}${cleanSrc}`;
}
