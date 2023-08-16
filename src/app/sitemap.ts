import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://otimizamedia.com.br',
      lastModified: new Date(),
    },
    {
      url: 'https://otimizamedia.com.br/#about',
      lastModified: new Date(),
    },
    {
      url: 'https://otimizamedia.com.br/#testimonials',
      lastModified: new Date(),
    },
    {
      url: 'https://otimizamedia.com.br/#services',
      lastModified: new Date(),
    },
  ]
}
