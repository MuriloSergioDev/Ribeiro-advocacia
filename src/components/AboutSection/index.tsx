import { raleway } from '@/app/fonts'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <>
      <div className="w-full bg-main-color causas" id="sobre">
        <div
          className="w-full h-full flex flex-col items-center py-6 px-10 md:flex-row md:justify-center md:gap-14 md:py-10"
          ref={ref}
        >
          <div
            className={`relative w-72 h-96 rounded-xl opacity-0 [animation-fill-mode:backwards] ${
              inView ? 'animate-revealfromtop opacity-100' : ''
            }`}
          >
            <Image
              src="/foto-o.jpg"
              alt="logo"
              fill
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <div
            className={`text-secundary-color mt-5 transition-all duration-500 delay-0 [animation-fill-mode:backwards] md:w-1/2 2xl:w-1/3 ${
              inView ? 'animate-revealfromtop opacity-100' : 'opacity-0'
            }`}
          >
            <h2
              className={`font-black uppercase text-2xl mb-5 2xl:text-3xl before:mr-2 before:border-2 before:border-contrast-color ${raleway.className}`}
            >
              Sobre mim
            </h2>
            <p className={`md:text-xl 2xl:text-2xl`}>
              Sou advogado e consultor jurídico. Atuo de forma objetiva na
              prevenção e solução de conflitos. Busco honrar e realizar os
              direitos do cliente.
              <br />
              <br />
              Possuo experiência em escritório de advocacia desde 2015. Graduado
              no curso de direito em 2019 e devidamente inscrito na Ordem dos
              advogados do Brasil, seccional Pará.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
