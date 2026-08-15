import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n-config';
import { SECTORS } from '@/data/sectorsData';
import { FEATURED_PROJECTS } from '@/data/projectsData';
import { SERVICES } from '@/data/servicesData';
import { ARTICLES } from '@/data/insightsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://odcones.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/platform',
    '/impact',
    '/insights',
    '/gallery',
    '/careers',
    '/contact',
    '/start-project',
    '/privacy',
    '/terms',
  ];

  const detailRoutes = [
    ...SECTORS.map((sector) => `/sectors/${sector.slug}`),
    ...FEATURED_PROJECTS.map((proj) => `/projects/${proj.slug}`),
    ...SERVICES.map((service) => `/services/${service.slug}`),
    ...ARTICLES.map((article) => `/insights/${article.slug}`),
  ];

  const routeWithAlternates = (route: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) => {
    const urls = Object.fromEntries(
      locales.map((locale) => [locale, `${baseUrl}/${locale}${route}`])
    ) as Record<string, string>;

    return {
      url: urls.en,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: { ...urls, 'x-default': urls.en } },
    };
  };

  return [
    ...staticRoutes.map((route, i) =>
      routeWithAlternates(route, route === '' ? 1.0 : i < 4 ? 0.8 : 0.6, route === '' ? 'weekly' : 'monthly')
    ),
    ...detailRoutes.map((route) =>
      routeWithAlternates(route, route.startsWith('/insights/') ? 0.6 : 0.7, 'monthly')
    ),
  ];
}
