import { raleway } from '@/app/fonts'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
function BenefitTwo() {
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true })
  return (
    <>
      <div
        className={`text-secundary-color flex flex-col justify-center items-center gap-14`}
      >
        <div className="w-full flex flex-col-reverse items-center justify-center md:flex-row gap-5 lg:gap-0 bg-main-color">
          <div
            ref={ref}
            className={`w-full md:w-1/2 lg:w-[612px] flex flex-col justify-center items-center p-4 lg:p-0 opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <h2
              className={`font-black uppercase w-full md:w-80 lg:w-96 text-2xl mb-5 2xl:text-3xl before:mr-2 before:border-2 before:border-contrast-color ${raleway.className}`}
            >
              SOLUÇÃO MAIS ADEQUADA AO SEU CASO
            </h2>
            <p className="w-full md:w-80 lg:w-96">
              Valorizamos o relacionamento com nossos clientes e buscamos sempre
              oferecer um atendimento personalizado e de qualidade. Estamos
              comprometidos em entender suas necessidades e encontrar as
              melhores soluções jurídicas para você.
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
          <div
            className={`relative w-full sm:w-2/3 h-96 md:w-1/2 lg:w-[612px] lg:h-[544px] rounded-xl opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <Image src="/solucao.avif" alt="logo" fill loading="lazy" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BenefitTwo
