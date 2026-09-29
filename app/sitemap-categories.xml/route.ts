import { NextResponse } from 'next/server';
import { CATEGORIES } from '@/lib/products';

export async function GET() {
  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${CATEGORIES.map((category) => `  <url>
    <loc>${cleanBase}/shop/${category.id}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    ${category.image ? `<image:image>
      <image:loc>${category.image.replace(/&/g, '&amp;')}</image:loc>
      <image:title>${category.name.replace(/&/g, '&amp;')}</image:title>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
