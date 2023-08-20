import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'

import { urlForImage } from '@/sanity/lib/image'
import { getLegalTerms, LegalTerms } from '@/sanity/queries/legal-terms.query'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const terms: LegalTerms = await getLegalTerms(slug)

  return {
    title: terms.seo.title,
    description: terms.seo.description,
    openGraph: {
      images: urlForImage(terms.seo.openGraph.image).url(),
      title: terms.seo.openGraph.title,
      description: terms.seo.openGraph.description,
    },
  }
}

export default async function Terms({ params }: Props) {
  const slug = params.slug
  const terms: LegalTerms = await getLegalTerms(slug)

  return (
    <div className="flex flex-col gap-y-6 leading-7">
      <h1 className="text-3xl font-bold">{terms.title}</h1>

      <PortableText
        components={{
          block: {
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold">{children}</h3>
            ),
            p: ({ children }) => <p className="text-lg">{children}</p>,
          },
          list: {
            number: ({ children }) => (
              <ol className="list-decimal">{children}</ol>
            ),
          },
          marks: {
            link: ({ children, value }) => {
              const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined

              return (
                <a
                  href={value.href}
                  rel={rel}
                  target="_blank"
                  className="text-primary-2 underline"
                >
                  {children}
                </a>
              )
            },
          },
        }}
        value={terms.description}
      />
    </div>
  )
}
