import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { getAllSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/life-events',
    '/contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const blogPages = getAllSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogPages];
}
