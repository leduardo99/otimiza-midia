'use client'

import Image from 'next/image'
import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'

import { Button } from '../Button'
import TextArea from '../Textarea'
import TextInput from '../TextInput'

type FormData = {
  fullName: string
  email: string
  message: string
  number: string
}

export default function Contact() {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <section
      id="contact"
      className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 pt-24 mx-auto rounded-lg md:grid-cols-2"
    >
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
            Entre em contato
          </h2>
          <p className="text-lg leading-normal text-gray-600 lg:text-xl xl:text-xl">
            Trabalhamos em todos os seguimentos do Marketing Digital, desde o
            desenvolvimento de sites até o impulsionamento das redes sociais.
          </p>
        </div>
        <Image
          src="/assets/images/contact-us.svg"
          alt="Nos Contate"
          className="mt-6 p-3 h-52 md:h-64"
          width={600}
          height={356}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-50 p-3 rounded-sm shadow-sm space-y-6"
      >
        <TextInput label="Nome" required {...register('fullName')} />
        <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
          <TextInput type="email" label="E-mail" {...register('email')} />
          <TextInput
            label="Número para contato"
            type="number"
            placeholder="11 999999999"
            {...register('number')}
          />
        </div>
        <TextArea label="Mensagem" rows={3} {...register('message')} />
        <Button.Root
          type="submit"
          className="w-full text-sm font-bold uppercase"
        >
          <Button.Content text="Enviar" />
          <Button.Icon icon={MdSend} />
        </Button.Root>
      </form>
    </section>
  )
}
