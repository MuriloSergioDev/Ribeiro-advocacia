import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import './index.css'

function NavMenu() {
  return (
    <>
      <nav className={`fixed w-full z-20`}>
        <NavDesktop />
        <NavMobile />
      </nav>
    </>
  )
}

export default NavMenu
