import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

//Components
import Header from './components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Galerie-1',
  description:
    'Galerie-1, template site galerie avec react/next.js typescript tailwind ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <div className="main-container">{children}</div>
      </body>
    </html>
  )
}
