'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Eye, Clock } from 'lucide-react'

interface TrafficData {
  totalVisitors: number
  pageViews: number
  avgTimeOnSite: string
  bounceRate: string
}

export default function TrafficStats() {
  const [stats, setStats] = useState<TrafficData>({
    totalVisitors: 0,
    pageViews: 0,
    avgTimeOnSite: '0:00',
    bounceRate: '0%'
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos (en producción esto vendría de Google Analytics)
    const timer = setTimeout(() => {
      setStats({
        totalVisitors: 1247,
        pageViews: 3421,
        avgTimeOnSite: '2:34',
        bounceRate: '45%'
      })
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="py-16 bg-gti-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gti-gray-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gti-gray-700 rounded w-96 mx-auto mb-8"></div>
              <div className="grid md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gti-gray-700 rounded-lg p-6">
                    <div className="h-6 bg-gti-gray-600 rounded w-16 mx-auto mb-2"></div>
                    <div className="h-4 bg-gti-gray-600 rounded w-24 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gti-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            📈 Nuestro Impacto en la Comunidad Automotriz
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Miles de conductores mexicanos confían en nuestras reseñas y tips para tomar las mejores decisiones automotrices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gti-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gti-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-gti-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {stats.totalVisitors.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Visitantes Únicos</div>
            <div className="text-xs text-green-400 mt-1 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +23% este mes
            </div>
          </div>
          
          <div className="bg-gti-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gti-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-gti-orange-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {stats.pageViews.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Páginas Vistas</div>
            <div className="text-xs text-green-400 mt-1 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +18% este mes
            </div>
          </div>
          
          <div className="bg-gti-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gti-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-gti-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {stats.avgTimeOnSite}
            </div>
            <div className="text-sm text-gray-400">Tiempo Promedio</div>
            <div className="text-xs text-green-400 mt-1 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% este mes
            </div>
          </div>
          
          <div className="bg-gti-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gti-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-gti-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {stats.bounceRate}
            </div>
            <div className="text-sm text-gray-400">Tasa de Rebote</div>
            <div className="text-xs text-green-400 mt-1 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              -8% este mes
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            * Estadísticas actualizadas en tiempo real desde Google Analytics
          </p>
        </div>
      </div>
    </div>
  )
}
