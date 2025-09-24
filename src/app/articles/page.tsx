import Link from 'next/link'
import { Clock, User, ArrowRight, FileText, Zap, Car, TrendingUp, Eye, MapPin, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artículos Especializados de Automóviles México | Garage Digital',
  description: 'Artículos especializados sobre automóviles en México. Análisis profundos, guías de compra, tendencias del mercado automotriz y tecnología vehicular.',
  keywords: 'artículos automóviles México, análisis automotriz, guías compra auto, tendencias automotrices, tecnología vehicular, mercado automotriz México',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/articles',
  },
  openGraph: {
    title: 'Artículos Especializados de Automóviles México',
    description: 'Artículos especializados sobre automóviles en México. Análisis profundos y guías completas.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/articles',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/articulos-automotrices-mexico-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Artículos Especializados de Automóviles México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artículos Especializados de Automóviles México',
    description: 'Artículos especializados sobre automóviles en México. Análisis profundos y guías completas.',
    images: ['/images/articulos-automotrices-mexico-twitter.jpg'],
  },
  category: 'Automotive Articles',
  other: {
    'article:section': 'Artículos',
  },
}

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: 'Ventajas y Desventajas de los Autos Eléctricos en México 2025',
      excerpt: 'Análisis completo de los pros y contras de los vehículos eléctricos en México. Costos, infraestructura, rendimiento y consideraciones para el mercado mexicano.',
      category: 'Autos Eléctricos',
      readTime: '12 min',
      author: 'Emanuel P',
      views: '45.2k',
      trending: true,
      date: '2024-02-25',
      location: 'CDMX',
      content: [
        'Análisis de costos de propiedad',
        'Infraestructura de carga en México',
        'Recomendaciones por perfil de usuario',
        'Perspectivas futuras del mercado'
      ]
    },
    {
      id: 2,
      title: 'Mejores Autos Eléctricos en México 2025: Guía de Compra',
      excerpt: 'Ranking de los mejores vehículos eléctricos disponibles en México para 2025. Precios, autonomía, características y recomendaciones por presupuesto.',
      category: 'Autos Eléctricos',
      readTime: '15 min',
      author: 'Emanuel P',
      views: '52.8k',
      trending: true,
      date: '2024-02-28',
      location: 'CDMX',
      content: [
        'Ranking por categorías de precio',
        'Análisis técnico detallado',
        'Comparación de costos de operación',
        'Recomendaciones por presupuesto'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Header Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="block text-white">ARTÍCULOS</span>
              <span className="block racing-text">ESPECIALIZADOS</span>
              <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-2">
                Análisis Profundos del Mundo Automotriz
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Artículos especializados con análisis técnicos, guías de compra y tendencias 
              del mercado automotriz mexicano.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gti-black-900 relative">
        <div className="absolute inset-0 racing-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="blog-card rounded-xl overflow-hidden card-hover group"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gti-blue-600 to-gti-blue-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <FileText className="w-16 h-16 text-white mx-auto mb-2" />
                      <span className="text-white font-bold text-sm">ARTÍCULOS</span>
                    </div>
                    {article.trending && (
                      <div className="absolute top-4 right-4 bg-gti-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>TRENDING</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="news-badge text-xs px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gti-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Content Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gti-blue-400 mb-2">Contenido del Artículo:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {article.content.slice(0, 2).map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-gti-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gti-blue-500/20">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 ml-3">
                        <MapPin className="w-3 h-3" />
                        <span>{article.location}</span>
                      </div>
                    </div>
                    <Link
                      href={`/articles/${article.id}`}
                      className="text-gti-blue-500 hover:text-gti-blue-400 font-semibold flex items-center space-x-1 transition-colors"
                    >
                      <span>Leer más</span>
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
