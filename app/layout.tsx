import './globals.css'
import Script from 'next/script'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from './(shared)/Navbar'
import Footer from './(shared)/Footer'



const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Superfast',
  description: 'Superfast is about building websites faster.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' style={{colorScheme:'dark'}}>
      <body className={roboto.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Script src='https://static.elfsight.com/platform/platform.js' strategy="afterInteractive" />
      </body>
    </html>
  )
}
