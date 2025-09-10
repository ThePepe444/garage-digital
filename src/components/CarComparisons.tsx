import Link from 'next/link'
import { ArrowRight, TrendingUp, DollarSign, Zap, Shield } from 'lucide-react'

export default function CarComparisons() {
  const comparisons = [
    {
      id: 1,
      title: 'Nissan Versa vs Chevrolet Aveo: Sedanes Económicos en México',
      excerpt: 'Comparación detallada entre los dos sedanes más populares del mercado mexicano, analizando precio, eficiencia y valor por dinero.',
      cars: ['Nissan Versa 2024', 'Chevrolet Aveo 2024'],
      winner: 'Nissan Versa',
      category: 'Sedanes Económicos',
      metrics: {
        price: 'Versa: $289,900 MXN | Aveo: $275,900 MXN',
        fuelEconomy: 'Versa: 18.5 km/l | Aveo: 17.2 km/l',
        warranty: 'Versa: 3 años | Aveo: 3 años'
      },
      image: '/api/placeholder/400/250',
      location: 'México'
    },
    {
      id: 2,
      title: 'Volkswagen Jetta vs Honda Civic: Sedanes Premium Mexicanos',
      excerpt: 'Análisis comparativo de dos sedanes premium populares en México, evaluando tecnología, confort y rendimiento en carreteras locales.',
      cars: ['Volkswagen Jetta 2024', 'Honda Civic 2024'],
      winner: 'Volkswagen Jetta',
      category: 'Sedanes Premium',
      metrics: {
        price: 'Jetta: $425,900 MXN | Civic: $398,900 MXN',
        fuelEconomy: 'Jetta: 16.8 km/l | Civic: 17.5 km/l',
        features: 'Jetta: Más equipamiento | Civic: Mejor eficiencia'
      },
      image: '/api/placeholder/400/250',
      location: 'México'
    },
    {
      id: 3,
      title: 'Chevrolet Equinox vs Nissan Kicks: SUV para Familias Mexicanas',
      excerpt: 'Comparación de dos SUV populares en México, analizando espacio, tecnología y capacidad para carreteras mexicanas.',
      cars: ['Chevrolet Equinox 2024', 'Nissan Kicks 2024'],
      winner: 'Chevrolet Equinox',
      category: 'SUV Familiares',
      metrics: {
        price: 'Equinox: $589,900 MXN | Kicks: $389,900 MXN',
        fuelEconomy: 'Equinox: 12.5 km/l | Kicks: 15.8 km/l',
        space: 'Equinox: Más espacio | Kicks: Más eficiente'
      },
      image: '/api/placeholder/400/250',
      location: 'México'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comparaciones de Autos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Análisis comparativos detallados para ayudarte a tomar la mejor decisión
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison) => (
            <article
              key={comparison.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    {comparison.category}
                  </span>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <Shield className="w-4 h-4 mr-1" />
                    Ganador: {comparison.winner}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {comparison.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {comparison.excerpt}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{comparison.metrics.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{comparison.metrics.fuelEconomy || comparison.metrics.range || comparison.metrics.horsepower}</span>
                  </div>
                  {comparison.metrics.reliability && (
                    <div className="flex items-center text-gray-600">
                      <Shield className="w-4 h-4 mr-2 text-primary-500" />
                      <span>{comparison.metrics.reliability}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {comparison.cars.length} modelos comparados
                  </div>
                  <Link
                    href={`/comparisons/${comparison.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 transition-colors"
                  >
                    <span>Ver comparación</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/comparisons"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            <span>Ver Todas las Comparaciones</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
