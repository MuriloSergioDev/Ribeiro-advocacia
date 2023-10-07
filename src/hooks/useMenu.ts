import { useMenuContext } from './useMenuContext'

export function useMenu() {
  const context = useMenuContext()
  const opened = context.opened
  const activeStick = context.activeStick

  const activeMenuItems = [
    { name: 'CAUSAS', route: '#causas' },
    { name: 'VANTAGENS', route: '#vantagens' },
    { name: 'SOBRE MIM', route: '#sobre' },
    { name: 'CONTATO', route: '#contato' },
  ]

  const clients = [
    {
      name: 'Julia Silva',
      message: 'Excelente advogado, tratou meu caso com maestria !',
      picture: '/cliente1.avif',
      rate: [1, 2, 3, 4, 5],
    },
    {
      name: 'Joao pedro',
      message: 'Excelente advogado, tratou meu caso com maestria !',
      picture: '/cliente1.avif',
      rate: [1, 2, 3, 4],
    },
    {
      name: 'Paulo meireles',
      message: 'Excelente advogado, tratou meu caso com maestria !',
      picture: '/cliente1.avif',
      rate: [1, 2, 3, 4, 5],
    },
  ]

  async function handleToggleMenu() {
    await context.toggleMenu()
  }

  return {
    activeMenuItems,
    activeStick,
    opened,
    handleToggleMenu,
    clients,
  }
}
