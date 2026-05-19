import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quality-rr.com';
  const pages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/residential`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/commercial`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/kitchen-remodeling`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/bathroom-remodeling`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/office-remodeling`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/restoration`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/project-gallery`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/faqs`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/service-area`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/locations/tampa`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/locations/st-petersburg`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...pages.map((page) => ({ ...page, lastModified: new Date() })),
    ...posts,
  ];
}
