import '../../styles/global.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ChatBotScript from '@/lib/chatbot'
import StyledComponentsRegistry from '@/lib/registry'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  category: 'marketing',
  creator: 'OtimizaMedia',
  keywords: [
    'otimizamedia',
    'otimiza',
    'media',
    'marketing',
    'digital',
    'seo',
    'Desenvolvimento de sites',
    'Mídias sociais',
    'Analytics',
    'E-commerce',
  ],
  openGraph: {
    type: 'website',
    description:
      'Somos uma empresa de marketing digital focada em ajudar pequenas e médias empresas a crescerem através da internet.',
    locale: 'pt_BR',
    siteName: 'OtimizaMedia',
    url: 'https://otimizamedia.com.br',
    title: 'OtimizaMedia | Otimizamos o seu negócio',
  },
  twitter: {
    creator: '@otimizamedia',
    site: 'https://otimizamedia.com.br',
    title: 'OtimizaMedia | Otimizamos o seu negócio',
    description:
      'Somos uma empresa de marketing digital focada em ajudar pequenas e médias empresas a crescerem através da internet.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  authors: [
    {
      name: 'OtimizaMedia',
      url: 'https://www.instagram.com/otimiza.media',
    },
    {
      name: 'Luis Eduardo',
      url: 'https://www.linkedin.com/in/leduardo99',
    },
  ],
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <StyledComponentsRegistry>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </StyledComponentsRegistry>
        <Analytics />
        <ChatBotScript />
      </body>
    </html>
  )
}
