import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, Users, Zap, Car, Wrench, BarChart3 } from 'lucide-react'
import { getLatestNews } from '@/data/content'

export default function Hero() {
  const latestNews = getLatestNews(3)
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'review':
        return <Car className="w-4 h-4" />
      case 'tip':
        return <Wrench className="w-4 h-4" />
      case 'comparison':
        return <BarChart3 className="w-4 h-4" />
      default:
        return <TrendingUp className="w-4 h-4" />
    }
  }
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'review':
        return 'Reseña'
      case 'tip':
        return 'Tips'
      case 'comparison':
        return 'Comparación'
      default:
        return 'Noticia'
    }
  }
  
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return `${diffInHours} horas`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays} días`
    }
  }

  return (
    <section className="hero-gradient text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breaking News Banner */}
        <div className="bg-gti-red-600/20 border border-gti-red-500/30 rounded-lg p-4 mb-8 racing-glow">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gti-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold uppercase tracking-wider">Últimas Noticias</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gti-red-500/50 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Hero Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="block text-white">GARAGE</span>
                <span className="block racing-text">DIGITAL</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-2">
                  Racing News & Reviews
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                La fuente definitiva de noticias automotrices, reseñas técnicas y análisis 
                de rendimiento para los verdaderos entusiastas del motor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reviews"
                  className="bg-gti-red-500 hover:bg-gti-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 racing-glow"
                >
                  <Zap className="w-5 h-5" />
                  <span>Últimas Reseñas</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/tips"
                  className="border-2 border-gti-red-500 text-white hover:bg-gti-red-500 font-bold px-8 py-4 rounded-lg transition-all duration-200"
                >
                  Tips de Mecánica
                </Link>
              </div>
            </div>
          </div>

          {/* Latest News Sidebar */}
          <div className="lg:col-span-1">
            <div className="blog-card rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-gti-red-500" />
                <h2 className="text-xl font-bold text-white">Últimas Noticias</h2>
              </div>
              
              <div className="space-y-4">
                {latestNews.map((news) => (
                  <Link
                    key={`${news.type}-${news.id}`}
                    href={news.url}
                    className="block p-4 rounded-lg bg-gti-black-800/50 hover:bg-gti-black-700/50 transition-all duration-200 border border-gti-red-500/20 hover:border-gti-red-500/40"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(news.type)}
                        <span className="news-badge text-xs px-2 py-1 rounded">
                          {getTypeLabel(news.type)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-gti-red-500">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-xs font-bold">NUEVO</span>
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 text-xs mb-2 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-gray-400 text-xs">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>Hace {getTimeAgo(news.date)}</span>
                      </div>
                      <span className="text-gti-red-400">Por {news.author}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex space-x-2 mt-6">
                <Link
                  href="/reviews"
                  className="flex-1 text-center text-gti-red-500 hover:text-gti-red-400 font-semibold text-sm transition-colors"
                >
                  Ver Reseñas →
                </Link>
                <Link
                  href="/tips"
                  className="flex-1 text-center text-gti-red-500 hover:text-gti-red-400 font-semibold text-sm transition-colors"
                >
                  Ver Tips →
                </Link>
                <Link
                  href="/comparisons"
                  className="flex-1 text-center text-gti-red-500 hover:text-gti-red-400 font-semibold text-sm transition-colors"
                >
                  Ver Comparaciones →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
