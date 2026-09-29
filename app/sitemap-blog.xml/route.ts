import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '@/lib/products';

export async function GET() {
  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${BLOG_POSTS.map((post) => `  <url>
    <loc>${cleanBase}/blog/${post.id}</loc>
    <lastmod>${post.date ? new Date(post.date).toISOString() : now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    ${post.image ? `<image:image>
      <image:loc>${post.image.replace(/&/g, '&amp;')}</image:loc>
      <image:title>${post.title.replace(/&/g, '&amp;')}</image:title>
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
