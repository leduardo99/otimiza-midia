import groq from 'groq'
import { ImageAsset } from 'sanity'

import { client } from '../lib/client'

export interface Testimonial {
  _id: string
  title: string
  description: string
  image: ImageAsset
  type: string
  order: number
}

export interface Testimonials {
  _id: string
  gridNumber: number
  testimonial: Testimonial[]
}

export async function getTestimonials(): Promise<Testimonials[]> {
  return await client.fetch(
    groq`*[_type == "testimonialsConfig"] | order(gridNumber desc) {
      _id,
      gridNumber,
      testimonial[]->{
        _id,
        title,
        description,
        image,
        type,
        order
      }
    }`,
  )
}
