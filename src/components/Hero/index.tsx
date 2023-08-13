'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-wrap">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Criamos a Essência do Sucesso Digital
          </h1>
          <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-600">
            Agência de sites, Design e identidade visuais para impulsionar Seu
            Negócio com Copwriting de Excelência.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-primary-2 rounded-md "
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <Image
            src="/assets/images/business-plan.svg"
            width="616"
            height="616"
            alt="Hero Illustration"
            loading="eager"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}
