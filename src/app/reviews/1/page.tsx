import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Shield } from 'lucide-react'

export default function ReviewPage() {
  const review = {
    id: 1,
    title: 'Nissan Versa 2024: El Sedán que Reta lo Establecido',
    excerpt: 'Análisis completo del Nissan Versa 2024, el sedán más tecnológico y seguro de su segmento según Nissan México. Evaluamos sus tecnologías de seguridad avanzadas, diseño deportivo y conectividad inteligente.',
    car: 'Nissan Versa 2024',
    rating: 4.3,
    price: '$289,900 MXN',
    fuelEconomy: '18.5 km/l',
    category: 'Sedán',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop&crop=center',
    author: 'Emanuel P',
    date: '2024-01-15',
    location: 'CDMX',
    dealer: 'Nissan México',
    readTime: '8 min',
    views: '25.3k',
    fullContent: `
      El Nissan Versa 2024 se mantiene como el sedán más vendido en México por una buena razón. Con un precio de $289,900 MXN, ofrece un excelente valor por dinero que es difícil de superar en el mercado mexicano. Según el catálogo oficial de Nissan México, este vehículo ha sido diseñado para "retar lo establecido" y demostrar que es el más tecnológico y seguro de su segmento.

      DISEÑO Y ESTÉTICA

      El Versa 2024 presenta un diseño que "reta la belleza en cada detalle", según Nissan. Cuenta con líneas que destacan cada detalle exterior, haciéndolo un sedán con toques deportivos. Las características destacadas incluyen:
      - Antena tipo aleta de tiburón
      - Faros LED con signature lamps
      - Nuevo diseño de rines de 17 pulgadas
      - Espejos exteriores con luces direccionales tipo LED

      INTERIOR Y CONFORT

      El interior del Versa está diseñado para proporcionar "comodidad en cada uno de tus viajes". Incluye características avanzadas como:
      - Monitor inteligente de alerta al conductor que detecta signos de cansancio
      - Volante con ajuste de altura y profundidad
      - Cargador inalámbrico
      - Llave inteligente iKey® con función de apertura y cierre de puertas
      - Cajuela amplia con "capacidad para todo"

      TECNOLOGÍAS DE SEGURIDAD AVANZADAS

      El Versa 2024 cuenta con el paquete más completo en tecnologías de asistencia y seguridad de Nissan Intelligent Mobility, incluyendo:

      Intelligent Emergency Braking (IEM) - Frenado Inteligente de Emergencia:
      Sistema que ayuda a prevenir colisiones mediante frenado automático.

      Blind Spot Warning (BSW) - Alerta de Punto Ciego:
      Detecta vehículos en punto ciego al cambiar de carril, emitiendo alertas visuales y auditivas.

      Hill Start Assist (HSA) - Asistente de Arranque en Pendientes:
      Previene que el vehículo retroceda cuando se quita el pie del freno en pendientes pronunciadas.

      Forward Collision Warning (FCW) - Alerta de Colisión Frontal:
      Monitora la velocidad y distancia del vehículo frontal, emitiendo alertas en caso de frenado repentino.

      Intelligent Around View Monitor + Moving Object Detection (I-AVM+MOD):
      Proporciona vista aérea de 360° para estacionamiento y circulación a baja velocidad, con detección de objetos en movimiento.

      CONECTIVIDAD Y ENTERTAINMENT

      El Versa incluye NissanConnect®, el conjunto de herramientas digitales que ofrecen sincronía entre tu auto y tu vida:
      - MiNissan® App para control remoto
      - Sistema de infoentretenimiento con pantalla táctil
      - Compatibilidad con Apple CarPlay y Android Auto
      - Cargador inalámmico integrado

      VERSIÓN SR DEPORTIVA

      La línea Versa SR va más allá de lo establecido por su segmento, ofreciendo:
      - Diseño deportivo con toques únicos
      - Combinación perfecta entre deportividad e innovación
      - Presencia inigualable en cada camino

      MANEJO EN CARRETERAS MEXICANAS

      Durante nuestras pruebas en carreteras mexicanas, el Versa demostró un manejo estable y predecible. Las tecnologías de asistencia al conductor funcionan perfectamente en las condiciones típicas de manejo en México, desde el tráfico pesado de la CDMX hasta las carreteras de montaña.

      MANTENIMIENTO Y CONFIABILIDAD

      Nissan tiene una red de concesionarios bien establecida en México, lo que facilita el mantenimiento y servicio. Los costos de mantenimiento son razonables, con servicios cada 10,000 km. La confiabilidad del Versa es excelente, respaldada por la garantía oficial de Nissan México.

      PROS Y CONTRAS

      Pros:
      - Tecnologías de seguridad más avanzadas de su segmento
      - Diseño moderno con toques deportivos
      - Excelente conectividad con NissanConnect®
      - Monitor de alerta al conductor único en su clase
      - Buena red de servicio en México
      - Versión SR con diseño deportivo

      Contras:
      - Precio ligeramente superior a competidores básicos
      - Algunas tecnologías solo disponibles en versiones superiores
      - Transmisión CVT puede resultar ruidosa en aceleraciones fuertes

      CONCLUSIÓN

      El Nissan Versa 2024 es verdaderamente el sedán que "reta lo establecido" en su segmento. Con tecnologías de seguridad avanzadas como el Intelligent Emergency Braking y el monitor de alerta al conductor, ofrece características que normalmente se encuentran en vehículos de segmentos superiores. Su diseño moderno y conectividad avanzada lo convierten en una opción inteligente para el mercado mexicano.

      Para compradores que buscan tecnología, seguridad y diseño en un sedán accesible, el Versa 2024 representa una excelente inversión que cumple y supera las expectativas del segmento.
    `,
    pros: [
      'Tecnologías de seguridad más avanzadas de su segmento',
      'Monitor inteligente de alerta al conductor único en su clase',
      'Diseño moderno con faros LED y rines de 17 pulgadas',
      'NissanConnect® con MiNissan® App integrada',
      'Versión SR con diseño deportivo disponible',
      'Intelligent Emergency Braking y sistemas de asistencia',
      'Cargador inalámbrico y llave inteligente iKey®'
    ],
    cons: [
      'Precio ligeramente superior a competidores básicos',
      'Algunas tecnologías solo en versiones superiores',
      'Transmisión CVT puede resultar ruidosa en aceleraciones fuertes',
      'Mantenimiento de tecnologías avanzadas puede ser más costoso',
      'Curva de aprendizaje para sistemas de asistencia'
    ]
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Header */}
      <div className="hero-gradient text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/reviews"
            className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Reseñas</span>
          </Link>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gti-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {review.category}
            </span>
            <div className="flex items-center">
              {renderStars(review.rating)}
              <span className="ml-2 text-sm">({review.rating})</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4">
            {review.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{review.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{review.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{review.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{review.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>{review.views}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src={review.image} 
            alt={review.car}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Gauge className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Precio</h3>
            <p className="text-2xl font-black text-gti-red-500">{review.price}</p>
          </div>
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Fuel className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Combustible</h3>
            <p className="text-2xl font-black text-gti-red-500">{review.fuelEconomy}</p>
          </div>
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Car className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Categoría</h3>
            <p className="text-2xl font-black text-gti-red-500">{review.category}</p>
          </div>
        </div>

        {/* Especificaciones Técnicas */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Especificaciones Técnicas
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Característica</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Especificación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Motor</td>
                    <td className="px-6 py-4 text-sm text-white">1.6L 4 cilindros</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Potencia</td>
                    <td className="px-6 py-4 text-sm text-white">107 HP</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Torque</td>
                    <td className="px-6 py-4 text-sm text-white">104 lb-pie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Transmisión</td>
                    <td className="px-6 py-4 text-sm text-white">CVT (Continuously Variable)</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Consumo Ciudad</td>
                    <td className="px-6 py-4 text-sm text-white">18.5 km/l</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Consumo Carretera</td>
                    <td className="px-6 py-4 text-sm text-white">22 km/l</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Capacidad de Pasajeros</td>
                    <td className="px-6 py-4 text-sm text-white">5 pasajeros</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Capacidad de Carga</td>
                    <td className="px-6 py-4 text-sm text-white">Cajuela amplia</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Rines</td>
                    <td className="px-6 py-4 text-sm text-white">17 pulgadas</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Faros</td>
                    <td className="px-6 py-4 text-sm text-white">LED con signature lamps</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Garantía</td>
                    <td className="px-6 py-4 text-sm text-white">3 años / 100,000 km</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tecnologías de Seguridad */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-6 h-6 text-gti-red-500 mr-2" />
            Tecnologías de Seguridad
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Sistema</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Descripción</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Disponibilidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Intelligent Emergency Braking</td>
                    <td className="px-6 py-4 text-sm text-white">Frenado automático de emergencia</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Blind Spot Warning</td>
                    <td className="px-6 py-4 text-sm text-white">Alerta de punto ciego</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Hill Start Assist</td>
                    <td className="px-6 py-4 text-sm text-white">Asistente de arranque en pendientes</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Forward Collision Warning</td>
                    <td className="px-6 py-4 text-sm text-white">Alerta de colisión frontal</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Around View Monitor</td>
                    <td className="px-6 py-4 text-sm text-white">Vista aérea 360° con detección de objetos</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Versiones superiores</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Monitor de Alerta al Conductor</td>
                    <td className="px-6 py-4 text-sm text-white">Detección de cansancio del conductor</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Airbags</td>
                    <td className="px-6 py-4 text-sm text-white">6 airbags de seguridad</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">✅ Ventajas</h3>
            <ul className="space-y-2">
              {review.pros.map((pro, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">❌ Desventajas</h3>
            <ul className="space-y-2">
              {review.cons.map((con, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Review Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {review.fullContent}
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 bg-gti-black-800/50 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gti-red-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{review.author}</h4>
              <p className="text-gray-400">Fanático de los automóviles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
