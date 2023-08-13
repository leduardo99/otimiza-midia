import About from '@/components/About'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

export default function Home() {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20">
      <Hero />

      <About />

      <Testimonials />
    </div>
  )
}
