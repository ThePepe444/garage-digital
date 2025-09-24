import Link from 'next/link'
import { Clock, User, ArrowRight, FileText, Zap, Car, TrendingUp, Eye } from 'lucide-react'

export default function FeaturedArticles() {
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
      featured: true,
      date: '2024-02-25',
      location: 'CDMX'
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
      featured: true,
      date: '2024-02-28',
      location: 'CDMX'
    }
  ]

  return (
    <section className="py-16 bg-gti-gray-800 relative">
      <div className="absolute inset-0 racing-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1 h-8 bg-gti-blue-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                ARTÍCULOS ESPECIALIZADOS
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl">
              Análisis profundos y guías completas sobre el mundo automotriz
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden md:flex items-center space-x-2 text-gti-blue-500 hover:text-gti-blue-400 font-semibold transition-colors"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
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
                
                <div className="flex items-center justify-between pt-4 border-t border-gti-blue-500/20">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
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

        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center space-x-2 bg-gti-blue-500 hover:bg-gti-blue-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 racing-glow"
          >
            <span>Ver Todos los Artículos</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
