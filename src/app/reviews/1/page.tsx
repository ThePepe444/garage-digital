import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nissan Versa 2024: Reseña Completa, Precio y Especificaciones México',
  description: 'Reseña técnica completa del Nissan Versa 2024 en México. Precio $289,900 MXN, consumo 18.5 km/l, tecnologías de seguridad avanzadas. Análisis detallado, pros y contras, comparación con competencia.',
  keywords: 'Nissan Versa 2024, precio Nissan Versa, consumo Nissan Versa, sedán económico México, Nissan México, tecnologías seguridad, conectividad, reseña técnica, especificaciones Nissan',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/reviews/1',
  },
  openGraph: {
    title: 'Nissan Versa 2024: Reseña Completa y Precio México',
    description: 'Reseña técnica del Nissan Versa 2024. Precio $289,900 MXN, consumo 18.5 km/l. Análisis completo para México.',
    type: 'article',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/reviews/1',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/nissan-versa-2024-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Nissan Versa 2024 - Sedán Tecnológico México',
      },
    ],
    publishedTime: '2024-01-15T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Fanático de los automóviles'],
    section: 'Reseñas de Autos',
    tags: ['Nissan', 'Versa', 'Sedán', 'México', 'Reseña'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nissan Versa 2024: Reseña Completa México',
    description: 'Precio $289,900 MXN, consumo 18.5 km/l. Análisis técnico completo.',
    images: ['/images/nissan-versa-2024-twitter.jpg'],
  },
  category: 'Automotive Review',
  other: {
    'article:author': 'Fanático de los automóviles',
    'article:section': 'Reseñas de Autos',
    'article:tag': 'Nissan Versa, Sedán, México',
    'product:brand': 'Nissan',
    'product:availability': 'in stock',
    'product:condition': 'new',
    'product:price:amount': '289900',
    'product:price:currency': 'MXN',
  },
}

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

      DISEÑO Y ESTÉTICA MODERNA

      El Versa 2024 presenta un diseño que "reta la belleza en cada detalle", según Nissan. Cuenta con líneas que destacan cada detalle exterior, haciéndolo un sedán con toques deportivos. Las características destacadas incluyen antena tipo aleta de tiburón, faros LED con signature lamps, nuevo diseño de rines de 17 pulgadas y espejos exteriores con luces direccionales tipo LED.

      El diseño frontal se caracteriza por una parrilla V-Motion distintiva de Nissan, mientras que la parte trasera presenta luces LED con diseño moderno. Las líneas del vehículo crean un perfil aerodinámico que mejora tanto la estética como la eficiencia de combustible.

      INTERIOR Y CONECTIVIDAD AVANZADA

      El interior del Versa está diseñado para proporcionar "comodidad en cada uno de tus viajes". Incluye características avanzadas como monitor inteligente de alerta al conductor que detecta signos de cansancio, volante con ajuste de altura y profundidad, cargador inalámbrico y llave inteligente iKey® con función de apertura y cierre de puertas.

      El sistema de infoentretenimiento incluye una pantalla táctil con compatibilidad Apple CarPlay y Android Auto, permitiendo una integración perfecta con dispositivos móviles. La cajuela amplia ofrece "capacidad para todo" según Nissan, siendo una de las más espaciosas de su segmento.

      TECNOLOGÍAS DE SEGURIDAD AVANZADAS

      El Versa 2024 cuenta con el paquete más completo en tecnologías de asistencia y seguridad de Nissan Intelligent Mobility. El Intelligent Emergency Braking (IEM) ayuda a prevenir colisiones mediante frenado automático, mientras que el Blind Spot Warning (BSW) detecta vehículos en punto ciego al cambiar de carril.

      El Hill Start Assist (HSA) previene que el vehículo retroceda cuando se quita el pie del freno en pendientes pronunciadas, y el Forward Collision Warning (FCW) monitora la velocidad y distancia del vehículo frontal, emitiendo alertas en caso de frenado repentino.

      El Intelligent Around View Monitor + Moving Object Detection (I-AVM+MOD) proporciona vista aérea de 360° para estacionamiento y circulación a baja velocidad, con detección de objetos en movimiento. Estas tecnologías trabajan en conjunto para crear un entorno de conducción más seguro.

      VERSIÓN SR DEPORTIVA

      La línea Versa SR va más allá de lo establecido por su segmento, ofreciendo diseño deportivo con toques únicos, combinación perfecta entre deportividad e innovación y presencia inigualable en cada camino. Esta versión incluye detalles estéticos adicionales y mejoras en el manejo.

      El Versa SR presenta rines de diseño exclusivo, detalles deportivos en el exterior y un interior con acabados premium que lo distinguen de las versiones estándar. La suspensión ha sido ajustada para ofrecer un manejo más deportivo sin comprometer la comodidad.

      MANEJO EN CARRETERAS MEXICANAS

      Durante nuestras pruebas en carreteras mexicanas, el Versa demostró un manejo estable y predecible. Las tecnologías de asistencia al conductor funcionan perfectamente en las condiciones típicas de manejo en México, desde el tráfico pesado de la CDMX hasta las carreteras de montaña.

      El motor 1.6L de 4 cilindros ofrece un rendimiento equilibrado entre potencia y eficiencia de combustible, ideal para el uso diario en ciudades mexicanas. La transmisión CVT proporciona cambios suaves y contribuye al excelente consumo de combustible.

      MANTENIMIENTO Y CONFIABILIDAD

      Nissan tiene una red de concesionarios bien establecida en México, lo que facilita el mantenimiento y servicio. Los costos de mantenimiento son razonables, con servicios cada 10,000 km. La confiabilidad del Versa es excelente, respaldada por la garantía oficial de Nissan México de 3 años o 100,000 kilómetros.

      El mantenimiento del Versa 2024 es relativamente económico comparado con otros sedanes del segmento, gracias a la confiabilidad del motor 1.6L y la disponibilidad de repuestos en el mercado mexicano.
    `,
    pros: [
      'Tecnologías de seguridad más avanzadas de su segmento',
      'Monitor inteligente de alerta al conductor único en su clase',
      'Diseño moderno con faros LED y rines de 17 pulgadas',
      'NissanConnect® con MiNissan® App integrada',
      'Versión SR con diseño deportivo disponible',
      'Intelligent Emergency Braking y sistemas de asistencia',
      'Cargador inalámbrico y llave inteligente iKey®',
      'Excelente eficiencia de combustible (18.5 km/l)',
      'Red de servicio Nissan bien establecida en México',
      'Precio competitivo para el equipamiento ofrecido'
    ],
    cons: [
      'Precio ligeramente superior a competidores básicos',
      'Algunas tecnologías solo en versiones superiores',
      'Transmisión CVT puede resultar ruidosa en aceleraciones fuertes',
      'Mantenimiento de tecnologías avanzadas puede ser más costoso',
      'Curva de aprendizaje para sistemas de asistencia',
      'Espacio en cajuela limitado comparado con SUVs'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gti-black-900 via-gti-black-800 to-gti-black-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/reviews" 
            className="inline-flex items-center text-gti-red-500 hover:text-gti-red-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Reseñas
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gti-red-500/20 text-gti-red-400 px-3 py-1 rounded-full text-sm font-medium">
              {review.category}
            </span>
            <span className="bg-gti-gray-600/20 text-gti-gray-300 px-3 py-1 rounded-full text-sm">
              {review.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 racing-text">
            {review.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {review.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{review.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{review.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{review.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{review.views}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{review.location}</span>
            </div>
          </div>
        </div>

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
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Suspensión</td>
                    <td className="px-6 py-4 text-sm text-white">Independiente delantera y trasera</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Frenos</td>
                    <td className="px-6 py-4 text-sm text-white">Discos delanteros, tambores traseros</td>
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

        {/* Características de Conectividad */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Características de Conectividad
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Característica</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Descripción</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Disponibilidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Pantalla Táctil</td>
                    <td className="px-6 py-4 text-sm text-white">Sistema de infoentretenimiento</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Apple CarPlay</td>
                    <td className="px-6 py-4 text-sm text-white">Integración completa con iPhone</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Android Auto</td>
                    <td className="px-6 py-4 text-sm text-white">Integración completa con Android</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">NissanConnect®</td>
                    <td className="px-6 py-4 text-sm text-white">Sistema de conectividad inteligente</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">MiNissan® App</td>
                    <td className="px-6 py-4 text-sm text-white">Control remoto desde smartphone</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Cargador Inalámbrico</td>
                    <td className="px-6 py-4 text-sm text-white">Carga inalámbrica para smartphones</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Llave Inteligente iKey®</td>
                    <td className="px-6 py-4 text-sm text-white">Apertura y cierre remoto de puertas</td>
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
            <ul className="space-y-3">
              {review.pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">❌ Desventajas</h3>
            <ul className="space-y-3">
              {review.cons.map((con, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rating */}
        <div className="bg-gti-black-800/50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Calificación General</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(review.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">{review.rating}/5</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
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
