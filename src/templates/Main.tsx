import type { ReactNode } from 'react'

import Header from '@/components/Header'

type IMainProps = {
  meta?: ReactNode
  children: ReactNode
}

const Main = ({ children, meta }: IMainProps) => (
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip antialiased">
    {meta}

    <Header />

    <main className="grow">{children}</main>
  </div>
)

export { Main }
