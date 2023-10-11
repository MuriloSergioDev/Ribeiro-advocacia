import { rajdhani } from '@/app/fonts'
import BurguerMenu from '@/components/BurguerMenu'
import { useMenu } from '@/hooks/useMenu'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function NavDesktop() {
  const { activeStick, activeMenuItems, opened } = useMenu()

  return (
    <>
      <div
        id="nav-desktop"
        className={`relative transition-all duration-500 delay-0 w-full h-32 flex items-center justify-between px-5 md:px-10 bg-secundary-color opacity-90 ${
          opened ? 'hidden ' : 'block '
        } ${
          activeStick
            ? 'shadow-xl justify-between animate-openstickmenu'
            : '-top-44 animate-closestickmenu'
        }`}
      >
        <div className={`relative w-40 h-20 sm:h-32 2xl:w-48 `}>
          <Image
            src="/logo-white.png"
            alt="logo"
            fill // required
            style={{ objectFit: 'contain' }}
            loading="lazy"
          />
        </div>
        <BurguerMenu />
        <div className={`hidden h-full mr-5 lg:block`}>
          <ul className="flex flex-row justify-center items-center gap-20 h-full">
            {activeMenuItems.map((item, index) => {
              return (
                <li
                  className={`cursor-pointer text-lg h-full hover:text-contrast-color hover:border-b-4 hover:border-contrast-color transition-all duration-100 delay-0 ${rajdhani.className}`}
                  key={index}
                >
                  <a
                    href={item.route}
                    className="h-full flex items-center justify-center "
                  >
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={`hidden flex-row gap-5 lg:flex`}>
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
            href="https://api.whatsapp.com/send?phone=5591981989031&text=Ol%C3%A1.%20Estou%20entrando%20em%20contato%20para%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20jur%C3%ADdicos.%20Poderia%20me%20ajudar%3F"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default NavDesktop
