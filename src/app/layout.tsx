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
      {/* Umami Analytics */}
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="8d7ee044-9f5f-4407-91e6-38a6d4e4539f"
        strategy="afterInteractive"
        defer
      />
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
