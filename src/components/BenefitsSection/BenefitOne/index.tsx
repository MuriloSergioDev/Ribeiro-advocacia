import { raleway } from '@/app/layout'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function BenefitOne() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <>
      <div
        ref={ref}
        className={`text-secundary-color flex flex-col justify-center items-center gap-14`}
      >
        <div className="w-full flex flex-col items-center justify-center md:flex-row gap-5 lg:gap-0 bg-main-color">
          <div
            className={`relative w-full sm:w-2/3 h-96 md:w-1/2 lg:w-[612px] lg:h-[544px] rounded-xl opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <Image
              src="/handshake.avif"
              alt="logo"
              fill
              objectFit="cover"
              layout="fixed"
              loading="lazy"
            />
          </div>
          <div
            className={`w-full md:w-1/2 lg:w-[612px] flex flex-col justify-center items-center p-4 lg:p-0 opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromright opacity-100' : ''
            }`}
          >
            <h2
              className={`font-black uppercase w-full md:w-80 lg:w-96 text-2xl mb-5 2xl:text-3xl before:mr-2 before:border-2 before:border-contrast-color ${raleway.className}`}
            >
              ATENDIMENTO PERSONALIZADO
            </h2>
            <p className="w-full md:w-80 lg:w-96">
              Valorizamos o relacionamento com nossos clientes e buscamos sempre
              oferecer um atendimento personalizado e de qualidade. Estamos
              comprometidos em entender suas necessidades e encontrar as
              melhores soluções jurídicas para você.
            </p>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5591982737385&text=Oi"
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
