import Hero from '@/components/Hero'
import FeaturedTips from '@/components/FeaturedTips'
import LatestReviews from '@/components/LatestReviews'
import CarComparisons from '@/components/CarComparisons'
import TrafficStats from '@/components/TrafficStats'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedTips />
      <LatestReviews />
      <CarComparisons />
      
      {/* Sección SEO para búsquedas locales */}
      <section className="py-16 bg-gti-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Guía Completa de Autos en México 2024
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Encuentra las mejores reseñas, comparaciones y tips de mecánica para autos disponibles en México. 
              Análisis detallados de precios, especificaciones y rendimiento de los vehículos más populares.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gti-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gti-blue-400 mb-3">
                🚗 Reseñas de Autos México
              </h3>
              <p className="text-gray-300 mb-4">
                Análisis técnicos detallados de los autos más vendidos en México: Nissan Versa, VW Jetta GLI, BYD Dolphin Mini y más.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Precios actualizados 2024</li>
                <li>• Especificaciones técnicas</li>
                <li>• Pros y contras reales</li>
                <li>• Comparaciones de mercado</li>
              </ul>
            </div>
            
            <div className="bg-gti-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gti-blue-400 mb-3">
                🔧 Tips de Mecánica
              </h3>
              <p className="text-gray-300 mb-4">
                Consejos prácticos para mantener tu auto en perfectas condiciones. Especialmente adaptados para las condiciones de México.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Mantenimiento preventivo</li>
                <li>• Protección contra lluvia</li>
                <li>• Sistema de frenos</li>
                <li>• Cuidado de batería</li>
              </ul>
            </div>
            
            <div className="bg-gti-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gti-blue-400 mb-3">
                ⚖️ Comparaciones Técnicas
              </h3>
              <p className="text-gray-300 mb-4">
                Comparaciones detalladas entre modelos para ayudarte a elegir el auto perfecto según tus necesidades y presupuesto.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Nissan Versa vs Chevrolet Aveo</li>
                <li>• Análisis de costos</li>
                <li>• Rendimiento y eficiencia</li>
                <li>• Tecnología y seguridad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <TrafficStats />
      <Newsletter />
    </div>
  )
}
