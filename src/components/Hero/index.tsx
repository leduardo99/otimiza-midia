'use client'

import Image from 'next/image'
import { MdWhatsapp } from 'react-icons/md'

export default function Hero() {
  return (
    <section id="hero" className="flex flex-wrap mt-8">
      <div className="flex items-center w-full lg:w-1/2 relative">
        <div className="absolute -top-14 -left-10 z-[-1] w-1/2 h-full rounded-3xl hidden md:block">
          <Image
            src="/assets/images/circles.svg"
            fill
            className="relative"
            alt="circle"
          />
        </div>

        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Criamos a Essência do{' '}
            <span className="relative z-1 w-full">
              Sucesso Digital{' '}
              <span className="bg-primary-1 lg:h-5 h-2 sm:bottom-2.5 bottom-1.5 lg:bottom-4 -z-[1] left-0 absolute w-full"></span>
            </span>
          </h1>
          <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-600">
            Agência de sites, design e identidade visual para impulsionar seu
            negócio com copwriting de excelência.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href={`https://wa.me/${
                process.env.WHATSAPP_NUMBER
              }?text=${encodeURI(process.env.WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-1 px-8 py-4 text-lg font-medium text-center text-white bg-primary-2 rounded-md"
            >
              <MdWhatsapp />
              Entre em contato
            </a>
          </div>
        </div>
      </div>

      <div className="items-center justify-center w-full lg:w-1/2 sm:flex relative">
        <div className="-rotate-[7deg] w-[60%] h-full bg-primary-2 rounded-3xl absolute top-0 left-[25%] drop-shadow-lg"></div>

        <Image
          className="-rotate-[30deg] absolute top-0 left-[25%] z-1 w-[60%] h-full rounded-3xl object-cover drop-shadow-lg"
          src="/assets/images/people.png"
          width="300"
          height="300"
          alt="Hero Illustration"
          loading="eager"
        />
      </div>
    </section>
  )
}
