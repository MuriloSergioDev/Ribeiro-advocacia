import { useMenuContext } from './useMenuContext'

export function useMenu() {
  const context = useMenuContext()
  const opened = context.opened
  const activeStick = context.activeStick

  const activeMenuItems = [
    { name: 'VANTAGENS', route: '#vantagens' },
    { name: 'CAUSAS', route: '#causas' },
    { name: 'SOBRE MIM', route: '#sobre' },
    { name: 'CONTATO', route: '#contato' },
  ]

  const causes = [
    'Reclamação Trabalhista',
    'Acidente de Trabalho',
    'Reversão de Justa Causa',
    'Divórcio',
    'Pensão Alimentícia',
    'Curatela',
    'Danos Morais e Materiais',
    'Revogação da Prisão Preventiva',
    'Resposta à Acusação',
    'Habeas Corpus',
  ]

  const clients = [
    {
      name: 'Ana Paula de Oliveira',
      message: 'Excelente advogado, tratou meu caso com maestria !',
      picture: '/client1.jpg',
      rate: [1, 2, 3, 4, 5],
    },
    {
      name: 'Vitor Paixão',
      message:
        'Seu trabalho foi impecável e o resultado, mais do que satisfatório.',
      picture: '/client3.jpg',
      rate: [1, 2, 3, 4],
    },
    {
      name: 'Bianca Carvalho',
      message:
        'Seu profissionalismo e dedicação superaram todas as minhas expectativas.',
      picture: '/client2.jpg',
      rate: [1, 2, 3, 4, 5],
    },
    {
      name: 'João',
      message:
        'Definitivamente, um dos melhores advogados com quem já trabalhei.',
      picture: '/client4.jpg',
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
    causes,
  }
}
