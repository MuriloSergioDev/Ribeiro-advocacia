import Image from 'next/image'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterSection() {
  return (
    <>
      <footer className="bg-secundary-color">
        <div className="w-full flex flex-col md:justify-between items-center p-5 md:p-0 md:pb-4 gap-5">
          <div className="w-full flex flex-col md:flex-row md:justify-around items-center">
            <div className={`relative w-40 h-20 sm:h-32 2xl:w-48 `}>
              <Image
                src="/logo-white.png"
                alt="logo"
                fill // required
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className={`flex flex-row gap-5`}>
              <a
                href="https://www.linkedin.com/in/tobias-ribeiro-99194424b/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
                />
              </a>
              <a
                href="https://instagram.com/adv.tobiasribeiro?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5591982644713&text=Ol%C3%A1.%20Estou%20entrando%20em%20contato%20para%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos.%20Poderia%20me%20ajudar%3F"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
                />
              </a>
            </div>
          </div>
          <div>
            <p className="text-[10px] md:text-sm">
              Tobias Ribeiro Advocacia © 2023 | Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection
