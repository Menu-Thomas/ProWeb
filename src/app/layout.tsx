import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thomas Menu - Technologies IoT & Informatiques',
  description: 'Expert en consulting et prototypage en technologies informatiques et IoT. Développement web, mobile et Unity. Services de conseil et accompagnement technologique.',
  keywords: 'consulting, IoT, technologies informatiques, prototypage, développement web, mobile, Unity, conseil technologique',
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
