import Link from 'next/link'
import { Star, ArrowRight, Car, Fuel, Gauge, MapPin, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reseñas de Autos México 2024-2025: Análisis Técnicos Completos',
  description: 'Reseñas técnicas completas de autos en México: Nissan Versa 2024, VW Jetta GLI 2025, BYD Dolphin Mini 2026. Precios, especificaciones, pros y contras. Análisis expertos para compradores mexicanos.',
  keywords: 'reseñas autos México, Nissan Versa 2024, VW Jetta GLI 2025, BYD Dolphin Mini 2026, análisis técnico autos, precios autos México, especificaciones automotrices, comparativas autos',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/reviews',
  },
  openGraph: {
    title: 'Reseñas de Autos México 2024-2025',
    description: 'Reseñas técnicas completas de autos en México. Análisis expertos con precios y especificaciones.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/reviews',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/resenas-autos-mexico-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Reseñas de Autos México - Análisis Técnicos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reseñas de Autos México 2024-2025',
    description: 'Análisis técnicos completos de autos en México con precios y especificaciones.',
    images: ['/images/resenas-autos-mexico-twitter.jpg'],
  },
  category: 'Automotive Reviews',
  other: {
    'article:section': 'Reseñas de Autos',
  },
}

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      title: 'Nissan Versa 2024: El Sedán que Reta lo Establecido',
      excerpt: 'Análisis completo del Nissan Versa 2024, el sedán más tecnológico y seguro de su segmento según Nissan México. Evaluamos sus tecnologías de seguridad avanzadas, diseño deportivo y conectividad inteligente.',
      car: 'Nissan Versa 2024',
      rating: 4.3,
      price: '$289,900 MXN',
      fuelEconomy: '18.5 km/l',
      category: 'Sedán',
      author: 'Emanuel P',
      date: '2024-01-15',
      location: 'CDMX',
      dealer: 'Nissan México'
    },
    {
      id: 2,
      title: 'VW Jetta GLI 2025: La Máquina Deportiva Alemana',
      excerpt: 'Análisis completo del Volkswagen Jetta GLI 2025, la versión deportiva de alto rendimiento que combina potencia, tecnología avanzada y diseño agresivo. Evaluamos su motor 2.0 TSI, transmisión DSG y características deportivas únicas.',
      car: 'VW Jetta GLI 2025',
      rating: 4.7,
      price: '$589,900 MXN',
      fuelEconomy: '16.2 km/l',
      category: 'Sedán Deportivo',
      image: '/images/jetta-gli-2025.jpg',
      author: 'Emanuel P',
      date: '2024-01-20',
      location: 'CDMX',
      dealer: 'Volkswagen México'
    },
    {
      id: 3,
      title: 'BYD Dolphin Mini 2026: El Futuro Eléctrico Compacto',
      excerpt: 'Análisis completo del BYD Dolphin Mini 2026, el vehículo eléctrico compacto que está revolucionando la movilidad urbana en México con tecnología avanzada y autonomía excepcional.',
      car: 'BYD Dolphin Mini 2026',
      rating: 4.6,
      price: '$399,000 MXN',
      fuelEconomy: '10 kWh/100 km',
      category: 'Eléctrico Compacto',
      image: '/images/byd-dolphin-mini-2026.jpg',
      author: 'Emanuel P',
      date: '2024-02-15',
      location: 'CDMX',
      dealer: 'BYD México'
    }
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 text-yellow-400 fill-current opacity-50" />
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Header Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="block text-white">RESEÑAS</span>
              <span className="block racing-text">AUTOMOTRICES</span>
              <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-2">
                Mercado Mexicano
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Análisis detallados y honestos de los vehículos más populares en México, 
              con precios locales y condiciones de manejo mexicanas.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gti-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="blog-card rounded-xl overflow-hidden card-hover"
              >
                <div className="h-64 bg-gradient-to-br from-gti-blue-600 to-gti-blue-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <Car className="w-20 h-20 text-white mx-auto mb-4" />
                    <span className="text-white font-bold text-lg">RESEÑA TÉCNICA</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-gti-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {review.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-sm text-gray-400">({review.rating})</span>
                    </div>
                    <div className="flex items-center text-gti-blue-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{review.location}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3">
                    {review.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4">
                    {review.excerpt}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Gauge className="w-4 h-4 mr-2 text-gti-blue-500" />
                      <span className="font-medium">{review.price}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Fuel className="w-4 h-4 mr-2 text-gti-blue-500" />
                      <span>{review.fuelEconomy}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gti-blue-500/20">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{review.author} • {review.date}</span>
                    </div>
                    <Link
                      href={`/reviews/${review.id}`}
                      className="text-gti-blue-500 hover:text-gti-blue-400 font-semibold flex items-center space-x-1 transition-colors"
                    >
                      <span>Leer reseña completa</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
