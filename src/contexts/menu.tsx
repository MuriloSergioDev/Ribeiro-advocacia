'use client'

import { createContext, useEffect, useState } from 'react'

interface MenuContextData {
  opened: boolean | null
  activeStick: boolean | null
  toggleMenu(): Promise<void>
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData)

interface MenuProviderProps {
  children: React.ReactNode
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [opened, setOpened] = useState<boolean | null>(null)
  const [activeStick, setActiveStick] = useState<boolean>(false)

  useEffect(() => {
    function positionScroll() {
      if (window.scrollY > 40) {
        setActiveStick(true)
      } else {
        setActiveStick(false)
      }
    }
    window.addEventListener('scroll', positionScroll)
  }, [])

  async function toggleMenu() {
    if (opened === null) {
      setOpened(true)
    } else {
      setOpened(!opened)
    }
    console.log(opened)
  }

  return (
    <MenuContext.Provider value={{ opened, activeStick, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
