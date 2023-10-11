import { MenuProvider } from '@/contexts/menu'
import { Roboto } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
  subsets: ['latin'],
})

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${roboto.className}`}>
      <body>
        <title>Advogado Valber Tobias</title>
        <meta
          name="description"
          content="Advogado especializado em direito do trabalho, criminal e civil. Defendendo seus direitos com excelência. Agende já!"
        />
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  )
}
