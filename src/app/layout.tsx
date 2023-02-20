"use client"

import '../styles/globals.css'

import { usePathname } from 'next/navigation'
import { Inter, Merriweather } from '@next/font/google'

import { PublicLayout } from './layouts'
import { handleBackgroundColor } from '@/utils'
import AppProvider from '@/provider'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {

  const type= 'public'
  const pathname = usePathname()

  const colorBackground = handleBackgroundColor(pathname)
  

  return (
    <html lang="pt-br" className={`${inter.className} ${colorBackground}`}>
      <head />
      <body>
        <AppProvider>
          {type === 'public' && <PublicLayout>{children}</PublicLayout>}
        </AppProvider>
      </body>
    </html>
  )
}
