import { ElementType } from 'react'
import { IconBaseProps } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface ButtonIconProps extends IconBaseProps {
  icon: ElementType
}

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  return <Icon className={twMerge('w-5 h-5', rest.className)} {...rest} />
}
