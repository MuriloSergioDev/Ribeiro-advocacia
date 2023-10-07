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
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <Image
              src="/foto.jpg"
              alt="logo"
              fill
              objectFit="cover"
              layout="fixed"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <div
            className={`text-secundary-color mt-5 transition-all duration-500 delay-0 [animation-fill-mode:backwards] md:w-1/2 2xl:w-1/3 ${
              inView
                ? 'animate-revealfromright opacity-100'
                : 'animate-textconceal opacity-0'
            }`}
          >
            <h2
              className={`font-black uppercase text-2xl mb-5 2xl:text-3xl before:mr-2 before:border-2 before:border-contrast-color ${raleway.className}`}
            >
              Sobre mim
            </h2>
            <p className={`md:text-xl 2xl:text-2xl`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
