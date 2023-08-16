import Image from 'next/image'

import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

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
