import Link from 'next/link'
import { ArrowRight, TrendingUp, DollarSign, Zap, Shield, MapPin, Calendar, CheckCircle, XCircle } from 'lucide-react'

export default function ComparisonsPage() {
  const comparisons = [
    {
      id: 1,
      title: 'Nissan Versa vs Chevrolet Aveo: Sedanes Económicos en México',
      excerpt: 'Comparación detallada entre los dos sedanes más populares del mercado mexicano, analizando precio, eficiencia y valor por dinero.',
      cars: ['Nissan Versa 2024', 'Chevrolet Aveo 2024'],
      winner: 'Nissan Versa',
      category: 'Sedanes Económicos',
      price: { versa: '$289,900 MXN', aveo: '$275,900 MXN' },
      fuelEconomy: { versa: '18.5 km/l', aveo: '17.2 km/l' },
      warranty: { versa: '3 años', aveo: '3 años' },
      pros: {
        versa: ['Mejor eficiencia de combustible', 'Más espacio interior', 'Mejor red de servicio'],
        aveo: ['Precio más bajo', 'Mantenimiento económico', 'Buena confiabilidad']
      },
      cons: {
        versa: ['Precio más alto', 'Motor menos potente', 'Interior básico'],
        aveo: ['Menos eficiente', 'Menos espacio', 'Red de servicio limitada']
      },
      location: 'México',
      author: 'Carlos Méndez',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Volkswagen Jetta vs Honda Civic: Sedanes Premium Mexicanos',
      excerpt: 'Análisis comparativo de dos sedanes premium populares en México, evaluando tecnología, confort y rendimiento en carreteras locales.',
      cars: ['Volkswagen Jetta 2024', 'Honda Civic 2024'],
      winner: 'Volkswagen Jetta',
      category: 'Sedanes Premium',
      price: { jetta: '$425,900 MXN', civic: '$398,900 MXN' },
      fuelEconomy: { jetta: '16.8 km/l', civic: '17.5 km/l' },
      warranty: { jetta: '3 años', civic: '3 años' },
      pros: {
        jetta: ['Mejor equipamiento', 'Interior más lujoso', 'Tecnología avanzada'],
        civic: ['Mejor eficiencia', 'Precio más bajo', 'Alta confiabilidad']
      },
      cons: {
        jetta: ['Precio más alto', 'Mantenimiento costoso', 'Menos eficiente'],
        civic: ['Menos equipamiento', 'Interior menos lujoso', 'Tecnología básica']
      },
      location: 'México',
      author: 'Ana Rodríguez',
      date: '2024-01-12'
    },
    {
      id: 3,
      title: 'Chevrolet Equinox vs Nissan Kicks: SUV para Familias Mexicanas',
      excerpt: 'Comparación de dos SUV populares en México, analizando espacio, tecnología y capacidad para carreteras mexicanas.',
      cars: ['Chevrolet Equinox 2024', 'Nissan Kicks 2024'],
      winner: 'Chevrolet Equinox',
      category: 'SUV Familiares',
      price: { equinox: '$589,900 MXN', kicks: '$389,900 MXN' },
      fuelEconomy: { equinox: '12.5 km/l', kicks: '15.8 km/l' },
      warranty: { equinox: '3 años', kicks: '3 años' },
      pros: {
        equinox: ['Más espacio interior', 'Mejor capacidad de carga', 'Tecnología MyLink'],
        kicks: ['Precio más bajo', 'Mejor eficiencia', 'Mantenimiento económico']
      },
      cons: {
        equinox: ['Precio más alto', 'Menos eficiente', 'Mantenimiento costoso'],
        kicks: ['Menos espacio', 'Menos capacidad de carga', 'Tecnología básica']
      },
      location: 'México',
      author: 'Miguel Torres',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Toyota Corolla vs Mazda 3: Sedanes Compactos en México',
      excerpt: 'Comparación entre dos sedanes compactos populares en México, evaluando confiabilidad, eficiencia y valor de reventa.',
      cars: ['Toyota Corolla 2024', 'Mazda 3 2024'],
      winner: 'Toyota Corolla',
      category: 'Sedanes Compactos',
      price: { corolla: '$365,900 MXN', mazda3: '$389,900 MXN' },
      fuelEconomy: { corolla: '17.8 km/l', mazda3: '16.5 km/l' },
      warranty: { corolla: '3 años', mazda3: '3 años' },
      pros: {
        corolla: ['Alta confiabilidad', 'Mejor eficiencia', 'Excelente valor de reventa'],
        mazda3: ['Mejor manejo', 'Diseño más atractivo', 'Interior más lujoso']
      },
      cons: {
        corolla: ['Diseño conservador', 'Manejo menos deportivo', 'Interior básico'],
        mazda3: ['Precio más alto', 'Menos eficiente', 'Mantenimiento más costoso']
      },
      location: 'México',
      author: 'Laura Sánchez',
      date: '2024-01-08'
    }
  ]

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Header Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="block text-white">COMPARACIONES</span>
              <span className="block racing-text">AUTOMOTRICES</span>
              <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-2">
                Mercado Mexicano
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Análisis comparativos detallados de los vehículos más populares en México, 
              con precios locales y condiciones de manejo mexicanas.
            </p>
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-16 bg-gti-black-900 relative">
        <div className="absolute inset-0 racing-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {comparisons.map((comparison) => (
              <article
                key={comparison.id}
                className="blog-card rounded-xl overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center relative">
                  <TrendingUp className="w-16 h-16 text-white" />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {comparison.category}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>Ganador: {comparison.winner}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {comparison.title}
                  </h2>

                  <p className="text-gray-300 mb-6">
                    {comparison.excerpt}
                  </p>

                  {/* Price Comparison */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gti-black-800/50 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-gti-red-400 mb-2">{comparison.cars[0]}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Precio:</span>
                          <span className="text-white font-semibold">{comparison.price.versa || comparison.price.jetta || comparison.price.equinox || comparison.price.corolla}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Combustible:</span>
                          <span className="text-white">{comparison.fuelEconomy.versa || comparison.fuelEconomy.jetta || comparison.fuelEconomy.equinox || comparison.fuelEconomy.corolla}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gti-black-800/50 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-gti-red-400 mb-2">{comparison.cars[1]}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Precio:</span>
                          <span className="text-white font-semibold">{comparison.price.aveo || comparison.price.civic || comparison.price.kicks || comparison.price.mazda3}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Combustible:</span>
                          <span className="text-white">{comparison.fuelEconomy.aveo || comparison.fuelEconomy.civic || comparison.fuelEconomy.kicks || comparison.fuelEconomy.mazda3}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Ventajas
                      </h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {(comparison.pros.versa || comparison.pros.jetta || comparison.pros.equinox || comparison.pros.corolla).slice(0, 3).map((pro, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                        <XCircle className="w-4 h-4 mr-1" />
                        Desventajas
                      </h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {(comparison.cons.versa || comparison.cons.jetta || comparison.cons.equinox || comparison.cons.corolla).slice(0, 3).map((con, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gti-red-500/20">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <span>{comparison.author}</span>
                        <span>•</span>
                        <span>{comparison.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/comparisons/${comparison.id}`}
                      className="text-gti-red-500 hover:text-gti-red-400 font-semibold flex items-center space-x-1 transition-colors"
                    >
                      <span>Ver comparación completa</span>
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
