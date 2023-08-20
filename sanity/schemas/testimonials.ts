import { MdPerson } from 'react-icons/md'
import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'testimonials',
  title: 'Clientes',
  dataset: 'production',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nome do cliente',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição',
      rows: 4,
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (rule) => rule.required(),
      options: { hotspot: true },
    },
    {
      name: 'type',
      type: 'string',
      title: 'Segmento do cliente',
      validation: (rule) => rule.required(),
    },
  ],
} as SchemaTypeDefinition
