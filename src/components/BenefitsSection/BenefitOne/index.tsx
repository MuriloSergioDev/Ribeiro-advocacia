import { raleway } from '@/app/fonts'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function BenefitOne() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <>
      <div
        className={`text-secundary-color flex flex-col justify-center items-center gap-14`}
      >
        <div className="w-full flex flex-col items-center justify-center md:flex-row gap-5 lg:gap-0 bg-main-color">
          <div
            className={`relative w-full sm:w-2/3 h-96 md:w-1/2 lg:w-[612px] lg:h-[544px] rounded-xl opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <Image src="/handshake.avif" alt="logo" fill />
          </div>
          <div
            className={`w-full md:w-1/2 lg:w-[612px] flex flex-col justify-center items-center p-4 lg:p-0 opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <h2
              ref={ref}
              className={`font-black uppercase w-full md:w-80 lg:w-96 text-2xl mb-5 2xl:text-3xl before:mr-2 before:border-2 before:border-contrast-color ${raleway.className}`}
            >
              ATENDIMENTO PERSONALIZADO
            </h2>
            <p className="w-full md:w-80 lg:w-96">
              Foi demitido e não recebeu os valores da sua rescisão, horas
              extras, FGTS ou tem salários atrasados? <br />
              <br />
              Você conhece os seus direitos no momento da separação ou divórcio?{' '}
              <br />
              <br />
              Tem um ente querido que foi preso em flagrante ou condenado e
              agora não sabe para recorrer?
            </p>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5591981989031&text=Ol%C3%A1.%20Estou%20entrando%20em%20contato%20para%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos.%20Poderia%20me%20ajudar%3F"
              className="w-full md:w-80 lg:w-96"
            >
              <button className="w-full mt-20 rounded p-3 uppercase border-2 border-secundary-color bg-main-color hover:bg-secundary-color hover:text-main-color transition-all duration-500 delay-0">
                Clique aqui e fale comigo
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BenefitOne
