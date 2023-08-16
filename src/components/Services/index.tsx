import Image from 'next/image'

export default function Services() {
  return (
    <section
      id="services"
      className="flex w-full flex-col items-center justify-center relative"
    >
      <div className="container max-w-xl mt-4 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2">
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
            Nossos serviços
          </h2>
          <p className="text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
            Trabalhamos em todos os seguimentos do Marketing Digital, desde o
            desenvolvimento de sites até o impulsionamento das redes sociais.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-800">
              Desenvolvimento de sites
            </h3>
            <p className="mt-3 text-lg text-gray-600">
              Contamos com competentes desenvolvedores, além de designers UX,
              que estão dispostos a criar uma identidade visual única,
              responsiva e de fácil acesso.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi text-gray-800">
                    E-commerce
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Ex usu illum iudico molestie. Pro ne agam facete
                    mediocritatem, ridens labore facete mea ei. Pro id apeirian
                    dignissim.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi text-gray-800">
                    Landing Pages
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Amet utinam aliquando ut mea, malis admodum ocurreret nec
                    et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                    quis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <Image
              src="/assets/images/developer.svg"
              alt="developer"
              className="mx-auto"
              width={480}
              height={360}
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-800">
                Marketing Digital
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te
                latine theophrastus. Ea his tale nibh dissentias, mei exerci
                tamquam euripidis cu.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Copywriting
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Processo de produção de textos persuasivos para ações de
                      Marketing e Vendas, como o conteúdo de emails, sites,
                      catálogos, anúncios e cartas de vendas, por exemplo.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Geomarketing
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Te per quidam maiorum ocurreret, etiam delicatissimi usu
                      ad. Ne has quod periculis. Te sit primis iisque
                      efficiantur.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Impulsionamento das redes sociais
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Audire principes rationibus eam an, autem nominavi
                      luptatum per te. Sumo fabulas vim eu, sonet saperet
                      eleifend ut vix.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <Image
                src="/assets/images/social.svg"
                alt="social"
                className="mx-auto"
                width={480}
                height={360}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
