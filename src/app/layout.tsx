import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yash Gawankar Portfolio',
  description: 'Portfolio website of Yash Gawankar',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
        style={{
          background: 'var(--background)',
          color: 'var(--foreground)',
        }}
      >
        <Navbar />
        <div className="pt-8 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
