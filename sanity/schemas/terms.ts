import { MdPolicy } from 'react-icons/md'
import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'legal',
  title: 'Termos & Políticas',
  dataset: 'production',
  type: 'document',
  icon: MdPolicy,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{ type: 'block' }],
    },
    {
      name: 'lastUpdate',
      type: 'date',
      title: 'Última atualização',
      validation: (rule) => rule.required(),
    },
    {
      name: 'effectiveDate',
      type: 'date',
      title: 'Data de vigência',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Adicione um slug personalizado para o URL ou gere um a partir do titulo',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Descrição',
          rows: 3,
        },
        {
          name: 'openGraph',
          title: 'Open Graph',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Imagem',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              type: 'string',
              title: 'Título',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Descrição',
              rows: 3,
            },
          ],
        },
      ],
    },
  ],
} as SchemaTypeDefinition
