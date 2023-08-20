import { MdSettings } from 'react-icons/md'
import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'testimonialsConfig',
  title: 'Configurações dos clientes',
  dataset: 'production',
  type: 'document',
  icon: MdSettings,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome da coluna',
      validation: (rule) => rule.required(),
    },
    {
      name: 'testimonial',
      title: 'Clientes',
      type: 'array',
      options: {},
      of: [{ type: 'reference', to: [{ type: 'testimonials' }] }],
      validation: (rule) => rule.required().max(2),
    },
  ],
} as SchemaTypeDefinition
