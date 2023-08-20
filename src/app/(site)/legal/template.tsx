'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isActive = useCallback(
    (path: string) => pathname.includes(path) && 'border-b-4 border-primary-1',
    [pathname],
  )

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="rounded-xl rounded-b-none flex items-center  space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-primary-2 text-white">
        <Link
          href="/legal/terms"
          className={`flex items-center flex-shrink-0 px-5 py-2 text-zinc-50 ${isActive(
            'terms',
          )}`}
        >
          Termos de Serviço
        </Link>
        <Link
          href="/legal/privacy"
          className={`flex items-center flex-shrink-0 px-5 py-2 text-zinc-50 ${isActive(
            'privacy',
          )}`}
        >
          Políticas de Privacidade
        </Link>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-6 md:py-12 bg-zinc-100 border-2 rounded-xl rounded-t-none border-zinc-200">
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
