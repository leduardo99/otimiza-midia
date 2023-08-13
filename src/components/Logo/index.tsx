import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center text-2xl font-bold text-gray-800"
      aria-label="Cruip"
    >
      <Image
        src="/assets/images/logo-mobile.svg"
        alt="Cruip"
        width={64}
        height={64}
      />

      <span className="ml-2 hidden sm:block">OtimizaMedia</span>
    </Link>
  )
}
