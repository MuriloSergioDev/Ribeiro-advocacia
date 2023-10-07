import MenuContext from '@/contexts/menu'
import { useContext } from 'react'

export function useMenuContext() {
  const context = useContext(MenuContext)

  return context
}
