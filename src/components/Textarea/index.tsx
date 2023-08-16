import { TextareaHTMLAttributes } from 'react'

interface TextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export default function TextArea({ label, name, ...rest }: TextInputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <textarea
        {...rest}
        id="name"
        className="appearance-none w-full p-3 rounded outline-none hover:border-primary-2 active:border-primary-2 border-2 transition-all duration-200 ease-in-out"
      />
    </div>
  )
}
