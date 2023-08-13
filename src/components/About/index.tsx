'use client'

import Image from 'next/image'
import React from 'react'
import { MdAdsClick, MdAnalytics, MdMood } from 'react-icons/md'

import Underline from '../Underline'
import { Text } from './styles'

export default function About() {
  const ITEMS = [
    {
      icon: MdMood,
      title: 'Understand your customers',
      description: 'Then explain the first point breifly in one or two lines.',
    },
    {
      icon: MdAnalytics,
      title: 'Improve acquisition',
      description: 'Here you can add the next benefit point.',
    },
    {
      icon: MdAdsClick,
      title: 'Drive customer retention',
      description: 'This will be your last bullet point in this section.',
    },
  ]

  return (
    <>
      <section className="flex w-full flex-col mt-4 items-center justify-center text-center">
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Quem é a{' '}
          <Text>
            OtimiziaMedia? <Underline />
          </Text>
        </h2>

        <p className="max-w-2xl py-6 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          Somos uma empresa de marketing digital focada em ajudar pequenas e
          médias empresas a crescerem através da internet.
        </p>
      </section>

      <section className="flex w-full flex-col mt-4 items-center justify-center">
        <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div>
              <Image
                src="/assets/images/business-cuate.svg"
                width="521"
                height="521"
                alt="Benefits"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center w-full lg:w-1/2">
            <div>
              <div className="flex flex-col w-full mt-4">
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                  Porque nos escolher?
                </h3>

                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
                  You can use this space to highlight your first benefit or a
                  feature of your product. It can also contain an image or
                  Illustration like in the example along with some bullet
                  points.
                </p>
              </div>

              <div className="w-full mt-5">
                {ITEMS.map(({ icon: Icon, title, description }, key) => (
                  <div
                    className="flex items-start mt-8 space-x-3"
                    key={key.toString()}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary-2 rounded-md w-11 h-11">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-800">
                        {title}
                      </h4>
                      <p className="mt-1 text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
