import Link from 'next/link'
import { Clock, User, ArrowRight, Wrench, Car, Settings, TrendingUp, Eye } from 'lucide-react'

export default function FeaturedTips() {
  const tips = [
    {
      id: 1,
      title: 'Cómo Proteger tu Auto del Clima Mexicano: Lluvia y Sol',
      excerpt: 'Tips específicos para proteger tu vehículo de las condiciones climáticas extremas de México: lluvias torrenciales, sol intenso y humedad.',
      category: 'Mantenimiento',
      readTime: '6 min',
      author: 'Emanuel P',
      views: '18.5k',
      trending: true,
      featured: true,
      date: '2024-01-15',
      location: 'CDMX'
    },
    {
      id: 2,
      title: 'Mantenimiento de Frenos en Carreteras Mexicanas',
      excerpt: 'Guía completa para el mantenimiento de frenos considerando las condiciones de las carreteras mexicanas, baches y tráfico pesado.',
      category: 'Seguridad',
      readTime: '8 min',
      author: 'Emanuel P',
      views: '22.3k',
      trending: true,
      featured: true,
      date: '2024-01-14',
      location: 'Guadalajara'
    },
    {
      id: 3,
      title: 'Ahorro de Gasolina: Tips para el Tráfico de la CDMX',
      excerpt: 'Consejos prácticos para optimizar el consumo de combustible en el tráfico pesado de la Ciudad de México y otras metrópolis.',
      category: 'Eficiencia',
      readTime: '5 min',
      author: 'Emanuel P',
      views: '31.2k',
      trending: true,
      featured: true,
      date: '2024-01-13',
      location: 'Monterrey'
    }
  ]

  return (
    <section className="py-16 bg-gti-black-900 relative">
      <div className="absolute inset-0 racing-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-8 bg-gti-red-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                TIPS DE MECÁNICA
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl">
              Consejos técnicos y expertos para mantener tu vehículo en perfecto estado
            </p>
          </div>
          <Link
            href="/tips"
            className="hidden md:flex items-center space-x-2 text-gti-red-500 hover:text-gti-red-400 font-semibold transition-colors"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <article
              key={tip.id}
              className="blog-card rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-gti-red-600 to-gti-red-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <Wrench className="w-16 h-16 text-white mx-auto mb-2" />
                    <span className="text-white font-bold text-sm">TIPS TÉCNICOS</span>
                  </div>
                  {tip.trending && (
                    <div className="absolute top-4 right-4 bg-gti-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>TRENDING</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="news-badge text-xs px-3 py-1 rounded-full">
                    {tip.category}
                  </span>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tip.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{tip.views}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gti-red-400 transition-colors">
                  {tip.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {tip.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gti-red-500/20">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    <span>{tip.author}</span>
                  </div>
                  <Link
                    href={`/tips/${tip.id}`}
                    className="text-gti-red-500 hover:text-gti-red-400 font-semibold flex items-center space-x-1 transition-colors"
                  >
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tips"
            className="inline-flex items-center space-x-2 bg-gti-red-500 hover:bg-gti-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 racing-glow"
          >
            <span>Ver Todos los Tips</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
