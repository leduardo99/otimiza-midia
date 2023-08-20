import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import {
  getTestimonials,
  Testimonials,
} from '@/sanity/queries/testimonials.query'

export default async function Testimonials() {
  const testimonials: Testimonials[] = await getTestimonials()

  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="container mt-4 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
              O que nossos clientes estão dizendo?
            </h2>
            <p className="text-lg leading-normal text-gray-600 lg:text-xl xl:text-xl">
              Sempre pedimos o feedback do cliente, fornecendo o melhor
              atendimento pós-venda e suprindo as futuras necessidades.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map(({ _id: gridId, testimonial }) => (
                <div key={gridId} className="grid content-center gap-4">
                  {testimonial.map(
                    ({ _id, title, description, image, type }) => (
                      <div
                        key={_id}
                        className="p-6 rounded shadow-md bg-slate-300"
                      >
                        <p>{description}</p>
                        <div className="flex items-center mt-4 space-x-4">
                          <Image
                            src={urlForImage(image).url()}
                            alt={title}
                            className="bg-center bg-cover rounded-full"
                            width={48}
                            height={48}
                          />
                          <div>
                            <p className="text-lg font-semibold">{title}</p>
                            <p className="text-sm text-slate-600">{type}</p>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
