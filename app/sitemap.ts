import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sahil-kale.is-a.dev';
  return [{ url: `${baseUrl}/` }, { url: `${baseUrl}/about` }, { url: `${baseUrl}/publications` }, { url: `${baseUrl}/cv.pdf` }];
}
