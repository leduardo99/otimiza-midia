import groq from 'groq'
import { ImageAsset, PortableTextBlock } from 'sanity'

import { client } from '../lib/client'

interface SEO {
  title: string
  description: string
  openGraph: {
    title: string
    description: string
    image: ImageAsset
  }
}

export interface LegalTerms {
  _id: string
  title: number
  description: PortableTextBlock[]
  lastUpdate: string
  effectiveDate: string
  slug: string
  seo: SEO
}

export async function getLegalTerms(slug: string): Promise<LegalTerms> {
  return client.fetch(
    groq`*[_type == "legal" && slug.current == $slug][0]{
      _id,
      title,
      description,
       lastUpdate,
      effectiveDate,
      seo
    }`,
    { slug },
  )
}
