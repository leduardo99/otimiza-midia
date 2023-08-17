'use client'

import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="#about"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="px-4 py-2 bg-primary-2 text-white rounded-md flex items-center justify-center gap-2 transition-colors duration-200"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Vamos Começar</span>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
