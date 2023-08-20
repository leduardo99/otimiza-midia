import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://otimizamedia.com.br',
      lastModified: new Date(),
    },
    {
      url: 'https://otimizamedia.com.br/legal/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://otimizamedia.com.br/legal/terms',
      lastModified: new Date(),
    },
  ]
}
