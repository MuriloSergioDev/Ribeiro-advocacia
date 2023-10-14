import { rajdhani } from '@/app/fonts'
import CloseMenu from '@/components/CloseMenu'
import { useMenu } from '@/hooks/useMenu'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

function NavMobile() {
  const { activeMenuItems, opened, handleToggleMenu } = useMenu()

  return (
    <>
      <div
        id="nav-mobile"
        className={`transition-all duration-500 delay-0 flex flex-col px-5 md:px-10 md:py-0 z-50 bg-secundary-color h-screen w-full fixed top-0 ${
          opened === null
            ? '-right-full'
            : opened
            ? 'right-0 animate-openmenu '
            : 'animate-closemenu -right-full'
        }`}
      >
        <div className="flex justify-between">
          <div className={`relative  w-40 h-40 md:h-40`}>
            <Image
              src="/logo-white.png"
              alt="logo"
              fill // required
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <CloseMenu />
        </div>
        <div>
          <ul>
            {activeMenuItems.map((item, index) => {
              return (
                <li
                  className={`cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0 ${rajdhani.className}`}
                  key={index}
                >
                  <Link href={item.route} onClick={handleToggleMenu}>
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mt-10">
          <Link
            href="https://www.google.com.br/maps/place/Av.+Mal.+Deodoro+da+Fonseca,+1191+-+103+-+Centro,+Santa+Izabel+do+Par%C3%A1+-+PA,+68790-000/@-1.2988304,-48.1638057,19z/data=!3m1!4b1!4m5!3m4!1s0x92a45159c71b191b:0x747bb9d692063bf2!8m2!3d-1.2988317!4d-48.163162?entry=ttu"
            className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
          >
            Av. Marechal Deodoro da Fonseca, n° 1191
            <br />
            Sala 103
            <br />
            Centro, Santa Izabel do Pará - PA
            <br />
            CEP 68790-000
          </Link>
        </div>
        <div className={`mt-10 flex flex-row gap-5 `}>
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
    </>
  )
}

export default NavMobile
