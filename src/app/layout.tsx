import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleTagManager from '@/components/GoogleTagManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Garage Digital - Reseñas de Autos, Tips de Mecánica y Noticias Automotrices México',
  description: 'Reseñas técnicas de autos en México, tips de mecánica, comparaciones y noticias automotrices. Análisis detallado de Nissan Versa, VW Jetta GLI, BYD Dolphin Mini y más. Precios, especificaciones y opiniones expertas.',
  keywords: 'reseñas de autos México, Nissan Versa 2024, VW Jetta GLI 2025, BYD Dolphin Mini 2026, tips de mecánica, comparaciones de autos, noticias automotrices, análisis técnico, precios de autos México, especificaciones automotrices',
  authors: [{ name: 'Fanático de los automóviles', url: 'https://garage-digital.netlify.app' }],
  creator: 'Garage Digital',
  publisher: 'Garage Digital',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app',
  },
  openGraph: {
    title: 'Garage Digital - Reseñas de Autos y Tips de Mecánica México',
    description: 'Reseñas técnicas de autos en México, tips de mecánica, comparaciones y noticias automotrices. Análisis detallado con precios y especificaciones.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/garage-digital-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Garage Digital - Reseñas de Autos México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Digital - Reseñas de Autos México',
    description: 'Reseñas técnicas, tips de mecánica y noticias automotrices para México',
    creator: '@garagedigitalmx',
    images: ['/images/garage-digital-twitter.jpg'],
  },
  verification: {
    google: 'nK3Q2NqtHP3VuIiY7t1GRCy4rosQQ7o_qddqybkjUpQ',
    yandex: 'tu-codigo-de-verificacion-yandex',
    yahoo: 'tu-codigo-de-verificacion-yahoo',
  },
  category: 'Automotive',
  classification: 'Automotive News and Reviews',
  other: {
    'geo.region': 'MX',
    'geo.placename': 'México',
    'geo.position': '23.6345;-102.5528',
    'ICBM': '23.6345, -102.5528',
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
      <head>
        <meta name="google-site-verification" content="nK3Q2NqtHP3VuIiY7t1GRCy4rosQQ7o_qddqybkjUpQ" />
      </head>
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
