import Link from 'next/link'
import { ArrowLeft, TrendingUp, DollarSign, Zap, Shield, MapPin, Calendar, User, CheckCircle, XCircle, Car, Fuel, Gauge } from 'lucide-react'

export default function ComparisonPage() {
  const comparison = {
    id: 1,
    title: 'Nissan Versa vs Chevrolet Aveo: Sedanes Económicos en México',
    excerpt: 'Comparación detallada entre los dos sedanes más populares del mercado mexicano, analizando precio, eficiencia y valor por dinero.',
    cars: [
      {
        name: 'Nissan Versa 2024',
        price: '$289,900 MXN',
        fuelEconomy: '18.5 km/l',
        engine: '1.6L 4 cilindros',
        power: '107 HP',
        transmission: 'CVT',
        warranty: '3 años',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&crop=center'
      },
      {
        name: 'Chevrolet Aveo 2024',
        price: '$275,900 MXN',
        fuelEconomy: '17.2 km/l',
        engine: '1.6L 4 cilindros',
        power: '108 HP',
        transmission: 'Manual/Automática',
        warranty: '3 años',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&crop=center'
      }
    ],
    winner: 'Nissan Versa',
    category: 'Sedanes Económicos',
    location: 'México',
    author: 'Emanuel P',
    date: '2024-01-15',
    fullContent: `
      En el competitivo mercado mexicano de sedanes económicos, dos modelos destacan por su popularidad y valor: el Nissan Versa 2024 y el Chevrolet Aveo 2024. Ambos ofrecen características atractivas para el comprador mexicano, pero cada uno tiene sus fortalezas y debilidades.

      ANÁLISIS DE PRECIOS

      El Chevrolet Aveo 2024 tiene una ventaja inicial en precio, con un costo de $275,900 MXN, mientras que el Nissan Versa 2024 se posiciona en $289,900 MXN. Sin embargo, esta diferencia de $14,000 MXN puede justificarse por las características adicionales del Versa.

      Valor por Dinero:
      - Versa: Mejor equipamiento de serie, mayor espacio interior
      - Aveo: Precio más accesible, mantenimiento económico

      RENDIMIENTO Y EFICIENCIA

      Motor y Potencia:
      Ambos vehículos comparten un motor 1.6L de 4 cilindros, pero con pequeñas diferencias:
      - Versa: 107 HP con transmisión CVT
      - Aveo: 108 HP con opciones de transmisión manual y automática

      Eficiencia de Combustible:
      El Nissan Versa tiene una ligera ventaja en eficiencia:
      - Versa: 18.5 km/l en ciudad, 22 km/l en carretera
      - Aveo: 17.2 km/l en ciudad, 20.5 km/l en carretera

      En nuestras pruebas en la CDMX, el Versa demostró ser más eficiente en tráfico pesado, mientras que el Aveo mostró mejor rendimiento en carreteras abiertas.

      DISEÑO Y ESTÉTICA

      Nissan Versa 2024:
      - Diseño moderno con parrilla V-Motion
      - Líneas laterales elegantes
      - Interior espacioso y bien distribuido
      - Materiales de buena calidad para el segmento

      Chevrolet Aveo 2024:
      - Diseño conservador pero atractivo
      - Frontal con parrilla característica de Chevrolet
      - Interior funcional y práctico
      - Materiales básicos pero duraderos

      INTERIOR Y CONFORT

      Espacio Interior:
      - Versa: Mayor espacio para pasajeros traseros (965mm de espacio para piernas)
      - Aveo: Espacio adecuado pero más compacto (920mm de espacio para piernas)

      Equipamiento:
      - Versa: Mejor equipamiento de serie, incluye cámara de reversa
      - Aveo: Equipamiento básico pero funcional

      TECNOLOGÍA Y CONECTIVIDAD

      Nissan Versa 2024:
      - Sistema de infoentretenimiento con pantalla táctil de 7 pulgadas
      - Apple CarPlay y Android Auto de serie
      - Cámara de reversa
      - Sistema de audio con 4 bocinas

      Chevrolet Aveo 2024:
      - Sistema de audio básico
      - Compatibilidad con Bluetooth
      - Opción de pantalla táctil en versiones superiores
      - Menos características tecnológicas de serie

      SEGURIDAD

      Nissan Versa 2024:
      - 6 airbags
      - Sistema de frenos ABS
      - Control de estabilidad
      - Sistema de frenos de emergencia
      - Alerta de punto ciego (en versiones superiores)

      Chevrolet Aveo 2024:
      - 4 airbags
      - Sistema de frenos ABS
      - Control de estabilidad
      - Menos características de seguridad avanzadas

      MANTENIMIENTO Y CONFIABILIDAD

      Red de Servicio:
      - Nissan: Red de concesionarios más extensa en México
      - Chevrolet: Buena red de servicio, especialmente en ciudades grandes

      Costos de Mantenimiento:
      - Versa: Mantenimiento ligeramente más costoso
      - Aveo: Mantenimiento más económico, repuestos más accesibles

      Confiabilidad:
      Ambos vehículos tienen buena reputación de confiabilidad en México, con el Versa teniendo una ligera ventaja en satisfacción del cliente.

      MANEJO EN CARRETERAS MEXICANAS

      Nissan Versa 2024:
      - Suspensión más suave, mejor para baches
      - Dirección ligera y precisa
      - Transmisión CVT suave pero puede resultar ruidosa
      - Mejor aislamiento acústico

      Chevrolet Aveo 2024:
      - Suspensión más firme, mejor para carreteras en buen estado
      - Dirección más directa
      - Transmisión manual más divertida de manejar
      - Menor aislamiento acústico

      ANÁLISIS POR CATEGORÍAS

      Para Uso Urbano:
      - Ganador: Nissan Versa
      - Razón: Mayor eficiencia en tráfico, mejor comodidad

      Para Uso Familiar:
      - Ganador: Nissan Versa
      - Razón: Mayor espacio interior, mejor equipamiento

      Para Presupuesto Limitado:
      - Ganador: Chevrolet Aveo
      - Razón: Precio más bajo, mantenimiento económico

      Para Manejo Deportivo:
      - Ganador: Chevrolet Aveo
      - Razón: Transmisión manual disponible, manejo más directo

      RECOMENDACIONES POR PERFIL DE USUARIO

      Elige el Nissan Versa si:
      - Priorizas el espacio interior
      - Quieres mejor equipamiento de serie
      - Manejas principalmente en ciudad
      - Buscas mejor eficiencia de combustible
      - Tienes un presupuesto un poco más flexible

      Elige el Chevrolet Aveo si:
      - Tienes un presupuesto muy ajustado
      - Prefieres un manejo más deportivo
      - No necesitas tanto espacio interior
      - Quieres mantenimiento más económico
      - Te gusta la opción de transmisión manual

      CONCLUSIÓN

      Ambas opciones son excelentes para el mercado mexicano, pero el Nissan Versa 2024 se lleva la victoria por su combinación de espacio, equipamiento y eficiencia. Aunque cuesta $14,000 MXN más, la diferencia se justifica por las características adicionales y el mejor valor a largo plazo.

      El Chevrolet Aveo 2024 sigue siendo una opción sólida para compradores con presupuesto muy ajustado o que prefieren un manejo más deportivo. Su precio más accesible y costos de mantenimiento más bajos lo hacen atractivo para ciertos perfiles de usuario.

      La decisión final depende de tus prioridades: si el espacio y el equipamiento son importantes, el Versa es la mejor opción. Si el precio es tu principal consideración, el Aveo ofrece excelente valor por dinero.
    `,
    pros: {
      versa: [
        'Mejor eficiencia de combustible (18.5 km/l)',
        'Mayor espacio interior para pasajeros',
        'Mejor equipamiento de serie',
        'Red de servicio más extensa en México',
        'Mejor aislamiento acústico'
      ],
      aveo: [
        'Precio más bajo ($275,900 MXN)',
        'Mantenimiento más económico',
        'Transmisión manual disponible',
        'Manejo más deportivo',
        'Repuestos más accesibles'
      ]
    },
    cons: {
      versa: [
        'Precio más alto ($289,900 MXN)',
        'Transmisión CVT puede resultar ruidosa',
        'Mantenimiento ligeramente más costoso',
        'Menos opciones de personalización',
        'Suspensión muy suave para algunos'
      ],
      aveo: [
        'Menos espacio interior',
        'Equipamiento básico de serie',
        'Menor eficiencia de combustible',
        'Menos características de seguridad',
        'Aislamiento acústico inferior'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Header */}
      <div className="hero-gradient text-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/comparisons"
            className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Comparaciones</span>
          </Link>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {comparison.category}
            </span>
            <div className="flex items-center space-x-1 text-green-400 text-sm font-bold">
              <Shield className="w-4 h-4" />
              <span>Ganador: {comparison.winner}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4">
            {comparison.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{comparison.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{comparison.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{comparison.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Car Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {comparison.cars.map((car, index) => (
            <div key={index} className="blog-card rounded-xl overflow-hidden">
              <div className="h-64 relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-gti-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {index === 0 ? 'Versa' : 'Aveo'}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{car.name}</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Precio:</span>
                    <span className="text-white font-semibold">{car.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Combustible:</span>
                    <span className="text-white">{car.fuelEconomy}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Motor:</span>
                    <span className="text-white">{car.engine}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Potencia:</span>
                    <span className="text-white">{car.power}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Transmisión:</span>
                    <span className="text-white">{car.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Garantía:</span>
                    <span className="text-white">{car.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Nissan Versa - Ventajas
            </h3>
            <ul className="space-y-2">
              {comparison.pros.versa.map((pro, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
              <XCircle className="w-5 h-5 mr-2" />
              Nissan Versa - Desventajas
            </h3>
            <ul className="space-y-2">
              {comparison.cons.versa.map((con, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Chevrolet Aveo - Ventajas
            </h3>
            <ul className="space-y-2">
              {comparison.pros.aveo.map((pro, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
              <XCircle className="w-5 h-5 mr-2" />
              Chevrolet Aveo - Desventajas
            </h3>
            <ul className="space-y-2">
              {comparison.cons.aveo.map((con, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {comparison.fullContent}
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 bg-gti-black-800/50 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gti-red-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{comparison.author}</h4>
              <p className="text-gray-400">Fanático de los automóviles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
