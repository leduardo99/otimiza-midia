import Image from 'next/image'

function Icon() {
  return (
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
  )
}

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
                    <Icon />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi text-gray-800">
                    E-commerce
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Que tal expandir o alcance do seu negócio a nível nacional?
                    Criamos sua loja online de forma completa.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                    <Icon />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi text-gray-800">
                    Websites
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Construímos o seu site com a cara da sua empresa, da forma
                    mais atrativa e completa do mercado.
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
                Através de estratégias de Marketing Digital podemos aumentar o
                seu alcance e a sua visibilidade na internet.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                      <Icon />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Social Media
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Gerenciamos suas redes sociais, mantendo elas diariamente
                      ativas e sempre postando novidades, interagindo com os
                      clientes e mantendo atualizações em dia.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                      <Icon />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      SEO & Trafégo Pago
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Nós pontecializamos o melhoramos a divulgação de suas
                      redes, páginas e anúncios atráves do{' '}
                      <strong className="text-primary-2">
                        Google Meu Negócio,
                      </strong>{' '}
                      <strong className="text-primary-2">Google Ads,</strong>{' '}
                      <strong className="text-primary-2">Facebook Ads</strong>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-2 text-white">
                      <Icon />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-gray-800">
                      Design e Ensaios Fotográficos
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Criamos todos os tipos de{' '}
                      <strong className="text-primary-2">Artes Digitais</strong>
                      , desde logos, layouts, banners e muito mais. Além de
                      ensaios fotográficos para o seu negócio.
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
