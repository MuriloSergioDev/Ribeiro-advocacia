import { raleway } from '@/app/fonts'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function MainSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <>
      <div className="absolute top-0 w-full h-screen bg-law bg-cover bg-center brightness-50"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full relative flex items-center flex-col text-center md:w-96 md:right-40 md:text-left md:items-start lg:right-52 lg:w-2/5 xl:right-96 xl:w-1/3">
          <div
            className={`relative w-72 h-72 sm:w-96 sm:h-72 opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromright opacity-100' : ''
            }`}
          >
            <Image
              src="/logo-white.png"
              alt="logo"
              layout="fill" // required
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div
            ref={ref}
            className={`opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <h1
              className={`text-2xl font-black md:text-3xl xl:text-5xl ${raleway.className}`}
            >
              Prescisa falar com um{' '}
              <span className="text-contrast-color"> advogado</span> que atua na
              área do direito do
              <span className="text-contrast-color"> trabalho</span>,
              <span className="text-contrast-color"> criminal</span> ou
              <span className="text-contrast-color"> civil</span>?
              {/* Prescisa falar com um advogado especializado no ambito de familia,
              trabalhista e criminal? */}
            </h1>

            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5591982737385&text=Oi"
              className="w-11/12"
            >
              <button className="w-full mt-20 rounded p-3 uppercase bg-secundary-color hover:bg-white hover:text-secundary-color transition-all duration-500 delay-0">
                Clique aqui e fale comigo
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection
