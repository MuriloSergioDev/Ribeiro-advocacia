import { raleway } from '@/app/fonts'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from 'react-intersection-observer'

function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <>
      <div className="w-full bg-main-color contato" id="contato">
        <div
          className="w-full h-full flex flex-col items-center py-6 px-10 md:flex-row md:justify-center md:py-20"
          ref={ref}
        >
          <div
            className={`text-secundary-color mt-5 transition-all duration-500 delay-0 [animation-fill-mode:backwards] md:w-1/2 2xl:w-1/3 opacity-0 ${
              inView ? 'animate-revealfromleft opacity-100' : ''
            }`}
          >
            <h2
              className={`font-black uppercase text-2xl mb-5 2xl:text-3xl before:mr-2 before:border-2 before:border-contrast-color ${raleway.className}`}
            >
              Fale comigo
            </h2>
            <div>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5591982737385&text=Oi"
                className={`md:text-xl 2xl:text-2xl cursor-pointer hover:text-contrast-color transition-all duration-500 delay-0 flex items-center gap-5`}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                (31) 98425-4737
              </a>
            </div>
            <div>
              <a
                className={`md:text-xl 2xl:text-2xl cursor-pointer hover:text-contrast-color transition-all duration-500 delay-0 flex items-center gap-5`}
                href=""
              >
                <FontAwesomeIcon icon={faEnvelope} />
                contato@moreirajunioradv.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
