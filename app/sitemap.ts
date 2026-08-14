import type { MetadataRoute } from 'next';
import { PRODUCTS, BLOG_POSTS } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://www.australianpropmoney.org';
  const cleanBase = baseUrl.replace(/\/$/, '');

  // Static routes across the website
  const staticPaths = [
    '',
    '/shop',
    '/blog',
    '/videos',
    '/wholesale',
    '/contact',
    '/faq',
    '/about',
    '/terms',
    '/privacy-policy',
    '/shipping-policy',
    '/refund-policy',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${cleanBase}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Dynamic product paths
  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${cleanBase}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${cleanBase}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...blogEntries];
}
