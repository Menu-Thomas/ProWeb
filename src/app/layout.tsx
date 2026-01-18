import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

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
      <head>
        {/* Umami Analytics - load in <head> */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="b9e8b1ac-6ab6-4dbc-b619-3b83942bdf7a"
          strategy="beforeInteractive"
        />
      </head>
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
