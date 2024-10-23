import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rudracreativehomedecor.in',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://rudracreativehomedecor.in/services',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://rudracreativehomedecor.in/projects',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://rudracreativehomedecor.in/testimonial',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://rudracreativehomedecor.in/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://rudracreativehomedecor.in/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://rudracreativehomedecor.in/teams',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://rudracreativehomedecor.in/careers',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://rudracreativehomedecor.in/certificates',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: 'https://rudracreativehomedecor.in/privacy_policy',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: 'https://rudracreativehomedecor.in/terms_of_service',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
