import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleTagManager from '@/components/GoogleTagManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Garage Digital - Racing News & Reviews | Noticias Automotrices',
  description: 'La fuente definitiva de noticias automotrices, reseñas técnicas y análisis de rendimiento. Tips de mecánica, comparaciones y todo para los verdaderos entusiastas del motor.',
  keywords: 'racing, noticias automotrices, reseñas técnicas, análisis rendimiento, mecánica, autos deportivos, GTI, tuning',
  authors: [{ name: 'Garage Digital' }],
  openGraph: {
    title: 'Garage Digital - Racing News & Reviews',
    description: 'La fuente definitiva de noticias automotrices y análisis técnico',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-P6ZK5W7G'

  return (
    <html lang="es">
      <body className={inter.className}>
        <GoogleTagManager gtmId={gtmId} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
