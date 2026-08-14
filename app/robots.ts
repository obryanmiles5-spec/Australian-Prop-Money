import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/checkout/success', '/api/*'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Bytespider', 'CCBot', 'Bingbot', 'Googlebot'],
        allow: '/',
        disallow: ['/checkout/success', '/api/*'],
      }
    ],
    sitemap: `${cleanBase}/sitemap.xml`,
  };
}
