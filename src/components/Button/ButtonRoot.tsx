import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export function ButtonRoot({
  children,
  size = 'lg',
  ...rest
}: ButtonRootProps) {
  const buttonSize = React.useMemo(() => {
    const sizes = {
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
    }

    return sizes[size]
  }, [size])

  return (
    <button
      {...rest}
      className={twMerge(
        'px-4 py-2 bg-primary-2 text-white rounded-md flex items-center justify-center gap-2 transition-colors duration-200',
        buttonSize,
        rest.className,
      )}
    >
      {children}
    </button>
  )
}
