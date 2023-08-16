import Image from 'next/image'

const TESTIMONIALS = [
  {
    grid: [
      {
        id: 1,
        name: 'Elite Auto Center',
        type: 'Oficina Mecânica e Loja de Pneus',
        avatar: 'elite.png',
        text: 'A melhor decisão que tomei foi investir na internet para divulgar minha empresa, e com a ajuda da OtimizaMedia isso se tornou realidade. Trabalharam muito bem gerenciando e potencializando minha página do Google, Redes Sociais e nosso Site. Muitos clientes clientes apareceram depois disso, aprendi que a internet é a maior vitrine do mundo e nela que quero mostrar minha empresa.',
      },
      {
        id: 3,
        name: 'Eduardo Moura',
        type: 'Odontologia',
        avatar: 'eduardo.png',
        text: 'Nunca dei atenção em divulgar meu trabalho na internet, que bom que os representantes da OtimizaMedia vieram até mim e mostraram como isso era importante para conseguir mais clientes. Depois criaram para mim uma página no Google dos meus serviços e clínica, o fluxo de pessoas entrando em contato comigo para agendar uma consulta aumentou muito.',
      },
    ],
  },
  {
    grid: [
      {
        id: 2,
        name: 'Vazzier',
        type: 'Loja de Joias',
        avatar: 'vazzier.png',
        text: 'Perdi muito tempo e dinheiro investindo de forma errada ao anunciar minha loja, diversos tipos de anúncios, mas pouco retorno. Foi aí que entrei em contato com a OtimizaMedia e com os serviços propostos, de trafego pago, meus anúncios bombaram e hoje posso viver somente da minha loja.',
      },
      {
        id: 4,
        name: 'CT Minha Praia',
        type: 'Centro Esportivo',
        avatar: 'ct.png',
        text: 'Tenho muito a agradecer pelo trabalho da OtimizaMedia, vivia sem tempo para poder dar a devida atenção às minhas Redes Sociais, por isso os contatei e acabei descobrindo também a importância de ter um site e uma página do google atrativa, confiei no trabalho deles e não me arrependo.',
      },
    ],
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="container mt-4 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
              O que nossos clientes estão dizendo?
            </h2>
            <p className="text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
              Sempre pedimos o feedback do cliente, fornecendo o melhor
              atendimento pós-venda e suprindo as futuras necessidades.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              {TESTIMONIALS.map(({ grid }, key) => (
                <div key={key.toString()} className="grid content-center gap-4">
                  {grid.map(({ id, name, type, avatar, text }) => (
                    <div
                      key={id.toString()}
                      className="p-6 rounded shadow-md bg-slate-300"
                    >
                      <p>{text}</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src={`/assets/clients/${avatar}`}
                          alt={name}
                          className="bg-center bg-cover rounded-full"
                          width={48}
                          height={48}
                        />
                        <div>
                          <p className="text-lg font-semibold">{name}</p>
                          <p className="text-sm text-slate-600">{type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
