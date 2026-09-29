import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/checkout', '/checkout/*', '/api/*'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot', 'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Bytespider', 'CCBot'],
        allow: '/',
        disallow: ['/checkout', '/checkout/*', '/api/*'],
      }
    ],
    sitemap: [
      `${cleanBase}/sitemap.xml`,
      `${cleanBase}/sitemap-products.xml`,
      `${cleanBase}/sitemap-categories.xml`,
      `${cleanBase}/sitemap-blog.xml`,
      `${cleanBase}/sitemap-images.xml`,
    ],
  };
}
