import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stellarelevators.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/products',
    '/services',
    '/projects',
    '/technology',
    '/contact',
    '/why-choose-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
