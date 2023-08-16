import '../styles/global.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StyledComponentsRegistry from '@/lib/registry'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OtimizaMedia | Otimizamos o seu negócio',
  description:
    'Somos uma empresa de marketing digital focada em ajudar pequenas e médias empresas a crescerem através da internet.',
  category: 'marketing',
  creator: 'OtimizaMedia',
  keywords: ['otimizamedia', 'otimiza', 'media', 'marketing', 'digital'],
  openGraph: {
    type: 'website',
    description:
      'Somos uma empresa de marketing digital focada em ajudar pequenas e médias empresas a crescerem através da internet.',
    locale: 'pt_BR',
    siteName: 'OtimizaMedia',
    url: 'https://otimizamedia.com.br',
    title: 'OtimizaMedia | Otimizamos o seu negócio',
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <StyledComponentsRegistry>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
