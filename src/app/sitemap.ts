import { MetadataRoute } from 'next';
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const sectorRoutes = SECTORS.map((sector) => ({
    url: `${baseUrl}/sectors/${sector.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectRoutes = FEATURED_PROJECTS.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articleRoutes = ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...sectorRoutes,
    ...projectRoutes,
    ...serviceRoutes,
    ...articleRoutes,
  ];
}
