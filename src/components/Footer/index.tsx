import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const SOCIAL = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/otimiza.media',
      icon: FaInstagram,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/OtimizaMedia',
      icon: FaTwitter,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/g6XpMrxm',
      icon: FaDiscord,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@otimizamedia?lang=pt-BR',
      icon: FaTiktok,
    },
  ]

  return (
    <footer className="py-6 bg-zinc-800 text-zinc-50">
      <div className="container px-6 mx-auto space-y-6 md:space-y-12 divide-opacity-50">
        <div className="grid justify-center lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span className="text-sm font-bold">
              OtimizaMedia &copy; 2023 • Todos os direitos reservados
            </span>
            <Link href="/legal/policy">
              <span className="text-sm font-bold">Políticas de Uso</span>
            </Link>
            <Link href="/legal/terms">
              <span className="text-sm font-bold">Termos de Serviço</span>
            </Link>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            {SOCIAL.map(({ href, icon: Icon, name }, key) => (
              <a
                key={key.toString()}
                rel="noopener noreferrer"
                href={href}
                title={name}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-2 text-zinc-50"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
