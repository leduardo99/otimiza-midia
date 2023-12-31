import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/studio',
    },
    sitemap: 'https://otimizamedia.com.br/sitemap.xml',
  }
}
