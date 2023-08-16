import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function TextInput({ label, name, ...rest }: TextInputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <input
        {...rest}
        id="name"
        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full p-3 rounded outline-none hover:border-primary-2 active:border-primary-2 border-2 transition-all duration-200 ease-in-out"
      />
    </div>
  )
}
