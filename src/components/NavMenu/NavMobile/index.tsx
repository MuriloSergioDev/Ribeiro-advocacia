import { rajdhani } from '@/app/layout'
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
              layout="fill" // required
              objectFit="contain"
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
            href="https://www.google.com.br/maps/place/Edif%C3%ADcio+Village+Millenium/@-1.4503726,-48.4916168,15.75z/data=!4m5!3m4!1s0x92a48ea28ce7830b:0x8fbe557bac8ab171!8m2!3d-1.4497321!4d-48.485025"
            className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
          >
            Tv. Almirante Wandenkolk, 811,
            <br />
            Ed. Village Millenium, 9º andar,
            <br />
            Bairro Nazaré, Belém-PA
            <br />
            CEP 66055-030
          </Link>
        </div>
        <div className={`mt-10 flex flex-row gap-5 `}>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="cursor-pointer text-lg hover:text-contrast-color transition-all duration-500 delay-0"
          />
        </div>
      </div>
    </>
  )
}

export default NavMobile
