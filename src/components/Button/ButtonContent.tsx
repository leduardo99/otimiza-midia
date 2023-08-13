import { twMerge } from 'tailwind-merge'

interface ButtonContentProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function ButtonContent({ text, ...rest }: ButtonContentProps) {
  return (
    <span {...rest} className={twMerge('text-base font-bold', rest.className)}>
      {text}
    </span>
  )
}
