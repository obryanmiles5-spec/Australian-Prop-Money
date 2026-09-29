import { NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES, BLOG_POSTS } from '@/lib/products';

export async function GET() {
  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${PRODUCTS.filter(p => !!p.image).map((product) => `  <url>
    <loc>${cleanBase}/product/${product.id}</loc>
    <image:image>
      <image:loc>${(product.image || '').replace(/&/g, '&amp;')}</image:loc>
      <image:title>${product.name.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${product.description.replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>`).join('\n')}
${CATEGORIES.filter(c => !!c.image).map((cat) => `  <url>
    <loc>${cleanBase}/shop/${cat.id}</loc>
    <image:image>
      <image:loc>${(cat.image || '').replace(/&/g, '&amp;')}</image:loc>
      <image:title>${cat.name.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${cat.description.replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>`).join('\n')}
${BLOG_POSTS.filter(b => !!b.image).map((post) => `  <url>
    <loc>${cleanBase}/blog/${post.id}</loc>
    <image:image>
      <image:loc>${(post.image || '').replace(/&/g, '&amp;')}</image:loc>
      <image:title>${post.title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${post.excerpt.replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
