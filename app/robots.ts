import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL || 'https://australianpropmoney.org';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout/success', '/api/*'],
    },
    sitemap: `${baseUrl.replace(/\/$/, '')}/sitemap.xml`,
  };
}
