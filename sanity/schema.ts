import { type SchemaTypeDefinition } from 'sanity'

import terms from './schemas/terms'
import testimonials from './schemas/testimonials'
import testimonialsConfig from './schemas/testimonials-config'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials, testimonialsConfig, terms],
}
