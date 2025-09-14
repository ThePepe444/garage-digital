import Link from 'next/link'
import { Star, ArrowRight, Car, Fuel, Gauge, Users } from 'lucide-react'

export default function LatestReviews() {
  const reviews = [
    {
      id: 1,
      title: 'Nissan Versa 2024: El Sedán que Reta lo Establecido',
      excerpt: 'Análisis completo del Nissan Versa 2024, el sedán más tecnológico y seguro de su segmento. Evaluamos sus tecnologías de seguridad avanzadas, diseño deportivo y conectividad inteligente.',
      car: 'Nissan Versa 2024',
      rating: 4.3,
      price: '$289,900 MXN',
      fuelEconomy: '18.5 km/l',
      category: 'Sedán',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center',
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
      price: '$489,900 MXN',
      fuelEconomy: '10 kWh/100 km',
      category: 'Eléctrico Compacto',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop&crop=center',
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Últimas Reseñas de Autos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Análisis detallados y honestos de los vehículos más populares del mercado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={review.image} 
                  alt={review.car}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-gti-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {review.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {review.category}
                  </span>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-600">({review.rating})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {review.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {review.excerpt}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Gauge className="w-4 h-4 mr-2 text-primary-500" />
                    <span className="font-medium">{review.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Fuel className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{review.fuelEconomy}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Por {review.author}
                  </div>
                  <Link
                    href={`/reviews/${review.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 transition-colors"
                  >
                    <span>Leer reseña</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            <span>Ver Todas las Reseñas</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
