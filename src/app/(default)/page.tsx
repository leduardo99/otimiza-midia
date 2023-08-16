import Image from 'next/image'

import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'OtimizaMedia - Início',
  description:
    'Otimizacao de sites e aplicativos para mecanismos de busca (SEO) e redes sociais (SMM).',
}

export default function Home() {
  return (
    <>
      <Image
        className="absolute top-0 right-[0] z-[-1]"
        src="/assets/images/shape-hero.svg"
        width="1000"
        height="616"
        alt="Hero Illustration"
        loading="eager"
        objectFit="cover"
      />

      <div className="pt-24 pb-12 md:pt-32 md:pb-20">
        <Hero />

        <About />

        <Testimonials />

        <Services />
      </div>
    </>
  )
}
