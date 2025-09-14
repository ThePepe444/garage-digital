import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VW Jetta GLI 2025: Reseña Completa, Precio y Especificaciones México',
  description: 'Reseña técnica completa del Volkswagen Jetta GLI 2025 en México. Precio $589,900 MXN, motor 2.0 TSI 228 HP, transmisión DSG. Análisis detallado, pros y contras, características deportivas.',
  keywords: 'VW Jetta GLI 2025, Volkswagen Jetta GLI, precio Jetta GLI, motor 2.0 TSI, DSG, sedán deportivo México, VW México, 228 HP, transmisión automática, reseña técnica',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/reviews/2',
  },
  openGraph: {
    title: 'VW Jetta GLI 2025: Reseña Completa y Precio México',
    description: 'Reseña técnica del VW Jetta GLI 2025. Precio $589,900 MXN, motor 2.0 TSI 228 HP. Análisis completo para México.',
    type: 'article',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/reviews/2',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/jetta-gli-2025-og.jpg',
        width: 1200,
        height: 630,
        alt: 'VW Jetta GLI 2025 - Sedán Deportivo México',
      },
    ],
    publishedTime: '2024-01-20T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Fanático de los automóviles'],
    section: 'Reseñas de Autos',
    tags: ['Volkswagen', 'Jetta GLI', 'Sedán Deportivo', 'México', 'Reseña'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VW Jetta GLI 2025: Reseña Completa México',
    description: 'Precio $589,900 MXN, motor 2.0 TSI 228 HP. Análisis técnico completo.',
    images: ['/images/jetta-gli-2025-twitter.jpg'],
  },
  category: 'Automotive Review',
  other: {
    'article:author': 'Fanático de los automóviles',
    'article:section': 'Reseñas de Autos',
    'article:tag': 'Volkswagen Jetta GLI, Sedán Deportivo, México',
    'product:brand': 'Volkswagen',
    'product:availability': 'in stock',
    'product:condition': 'new',
    'product:price:amount': '589900',
    'product:price:currency': 'MXN',
  },
}

export default function ReviewPage() {
  const review = {
    id: 2,
    title: 'VW Jetta GLI 2025: La Máquina Deportiva Alemana',
    excerpt: 'Análisis completo del Volkswagen Jetta GLI 2025, la versión deportiva de alto rendimiento que combina potencia, tecnología avanzada y diseño agresivo. Evaluamos su motor 2.0 TSI, transmisión DSG y características deportivas únicas.',
    car: 'Volkswagen Jetta GLI 2025',
    rating: 4.7,
    price: '$589,900 MXN',
    fuelEconomy: '16.2 km/l',
    category: 'Sedán Deportivo',
    image: '/images/jetta-gli-2025.jpg',
    author: 'Emanuel P',
    date: '2024-01-20',
    location: 'CDMX',
    dealer: 'Volkswagen México',
    readTime: '10 min',
    views: '18.7k',
    fullContent: `
      El Volkswagen Jetta GLI 2025 representa la cúspide del rendimiento deportivo en el segmento de sedanes compactos. Con un precio de $589,900 MXN, esta versión de alto rendimiento combina la potencia del motor 2.0 TSI con características deportivas exclusivas que lo convierten en una verdadera máquina de carretera.

      DISEÑO DEPORTIVO Y AGRESIVO

      El Jetta GLI 2025 presenta un diseño completamente diferenciado de las versiones estándar. La parrilla frontal GLI con detalles rojos distintivos le otorga una presencia agresiva, mientras que los faros LED con firma GLI mejoran tanto la estética como la funcionalidad. La fascia delantera y trasera han sido diseñadas específicamente para el rendimiento, con entradas de aire optimizadas y un difusor trasero que mejora la aerodinámica.

      Los rines GLI exclusivos de 18 pulgadas con diseño único complementan el aspecto deportivo. Las líneas del vehículo han sido optimizadas para crear un perfil más agresivo, con detalles rojos que destacan la herencia deportiva de la marca.

      INTERIOR Y CONECTIVIDAD

      El interior del Jetta 2025 ha sido completamente rediseñado para ofrecer mayor confort y conectividad. Destaca una pantalla táctil de 10 pulgadas con conectividad Apple CarPlay y Android Auto, que permite una integración perfecta con dispositivos móviles. La iluminación ambiental configurable crea una atmósfera personalizable según las preferencias del conductor.

      Los materiales utilizados en el habitáculo son de alta calidad, con acabados premium que reflejan la herencia alemana de Volkswagen. Los asientos ergonómicos, disponibles con ajuste eléctrico y calefacción en versiones superiores, garantizan una experiencia de conducción placentera incluso en viajes largos.

      MOTORIZACIÓN Y RENDIMIENTO DEPORTIVO

      El Jetta GLI 2025 está equipado con el potente motor 2.0 litros TSI que genera 230 caballos de fuerza y 258 lb-pie de torque. Este motor está acoplado a una transmisión automática DSG de 7 velocidades, que ofrece cambios ultrarrápidos y suaves. La aceleración de 0 a 100 km/h se logra en apenas 6.2 segundos, convirtiéndolo en uno de los sedanes más rápidos de su segmento.

      El sistema de tracción delantera con diferencial electrónico XDS+ mejora significativamente la tracción y estabilidad en curvas. El modo deportivo permite una configuración más agresiva del motor, transmisión y dirección, ofreciendo una experiencia de conducción verdaderamente deportiva.

      TECNOLOGÍAS DE SEGURIDAD

      En términos de seguridad, el Jetta 2025 está equipado con seis bolsas de aire, control de velocidad crucero adaptativo y frenado autónomo de emergencia como estándar. Las versiones superiores incluyen monitoreo de punto ciego y asistente de mantenimiento de carril, tecnologías que mejoran significativamente la seguridad activa del vehículo.

      El sistema de asistencia al conductor incluye alertas de colisión frontal, detección de peatones y ciclistas, y asistente de arranque en pendientes. Estas tecnologías trabajan en conjunto para crear un entorno de conducción más seguro y confiable.

      CONECTIVIDAD Y TECNOLOGÍA

      La pantalla táctil de 10 pulgadas es el centro de comando del vehículo, ofreciendo acceso a todas las funciones de conectividad. Apple CarPlay y Android Auto permiten una integración perfecta con smartphones, mientras que el sistema de navegación integrado ofrece rutas optimizadas y actualizaciones en tiempo real.

      La iluminación ambiental configurable permite personalizar la atmósfera del interior, con múltiples colores y intensidades disponibles. El sistema de sonido premium, disponible en versiones superiores, ofrece una experiencia auditiva excepcional.

      VERSIONES DISPONIBLES

      El Jetta 2025 está disponible en cinco versiones: Trendline, Comfortline, Sportline, 70 Aniversario y GLI. Cada versión ofrece diferentes niveles de equipamiento y tecnología, permitiendo a los compradores elegir la configuración que mejor se adapte a sus necesidades y presupuesto.

      La versión GLI representa la cúspide del rendimiento, con su motor 2.0 TSI y características deportivas que incluyen suspensión deportiva, frenos de alto rendimiento y detalles estéticos únicos.

      MANTENIMIENTO Y GARANTÍA

      Volkswagen México ofrece una garantía de 3 años o 100,000 kilómetros, lo que proporciona tranquilidad a los propietarios. La red de concesionarios en México es extensa, facilitando el mantenimiento y servicio del vehículo en todo el país.

      El mantenimiento del Jetta 2025 es relativamente económico comparado con otros sedanes premium, gracias a la confiabilidad del motor TSI y la disponibilidad de repuestos en el mercado mexicano.
    `,
    pros: [
      'Motor 2.0 TSI con 230 HP y excelente rendimiento',
      'Transmisión DSG de 7 velocidades con cambios ultrarrápidos',
      'Aceleración 0-100 km/h en solo 6.2 segundos',
      'Suspensión deportiva GLI para mejor manejo',
      'Frenos de alto rendimiento con discos ventilados',
      'Diseño agresivo con detalles rojos distintivos',
      'Diferencial electrónico XDS+ para mejor tracción',
      'Modo deportivo para experiencia de conducción agresiva',
      'Rines GLI exclusivos de 18 pulgadas',
      'Tecnologías de seguridad avanzadas de serie'
    ],
    cons: [
      'Precio premium de $589,900 MXN',
      'Consumo de combustible mayor (16.2 km/l)',
      'Mantenimiento más costoso que versiones estándar',
      'Transmisión DSG requiere mantenimiento especializado',
      'Suspensión deportiva puede ser firme para uso diario',
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
                    <td className="px-6 py-4 text-sm text-white">2.0L TSI Turbo</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Potencia</td>
                    <td className="px-6 py-4 text-sm text-white">230 HP</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Torque</td>
                    <td className="px-6 py-4 text-sm text-white">258 lb-pie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Transmisión</td>
                    <td className="px-6 py-4 text-sm text-white">DSG 7 velocidades</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Consumo Ciudad</td>
                    <td className="px-6 py-4 text-sm text-white">16.2 km/l</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Consumo Carretera</td>
                    <td className="px-6 py-4 text-sm text-white">19.8 km/l</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Capacidad de Pasajeros</td>
                    <td className="px-6 py-4 text-sm text-white">5 pasajeros</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Capacidad de Carga</td>
                    <td className="px-6 py-4 text-sm text-white">399 L</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Rines</td>
                    <td className="px-6 py-4 text-sm text-white">18 pulgadas GLI exclusivos</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Faros</td>
                    <td className="px-6 py-4 text-sm text-white">LED con firma GLI</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Suspensión</td>
                    <td className="px-6 py-4 text-sm text-white">Deportiva GLI</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Frenos</td>
                    <td className="px-6 py-4 text-sm text-white">De alto rendimiento</td>
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
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Frenado Autónomo de Emergencia</td>
                    <td className="px-6 py-4 text-sm text-white">Frenado automático para evitar colisiones</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Control de Velocidad Crucero Adaptativo</td>
                    <td className="px-6 py-4 text-sm text-white">Mantiene distancia segura automáticamente</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Monitoreo de Punto Ciego</td>
                    <td className="px-6 py-4 text-sm text-white">Alerta de vehículos en punto ciego</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Asistente de Mantenimiento de Carril</td>
                    <td className="px-6 py-4 text-sm text-white">Ayuda a mantener el vehículo en el carril</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Detección de Peatones y Ciclistas</td>
                    <td className="px-6 py-4 text-sm text-white">Alerta de presencia de peatones y ciclistas</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Asistente de Arranque en Pendientes</td>
                    <td className="px-6 py-4 text-sm text-white">Previene retroceso en pendientes</td>
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

        {/* Características Deportivas GLI */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Características Deportivas GLI
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Característica</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Descripción</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Beneficio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Motor 2.0 TSI</td>
                    <td className="px-6 py-4 text-sm text-white">230 HP y 258 lb-pie de torque</td>
                    <td className="px-6 py-4 text-sm text-green-400">Aceleración 0-100 km/h en 6.2s</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Transmisión DSG</td>
                    <td className="px-6 py-4 text-sm text-white">7 velocidades con cambios automáticos</td>
                    <td className="px-6 py-4 text-sm text-green-400">Cambios más rápidos y suaves</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Suspensión Deportiva</td>
                    <td className="px-6 py-4 text-sm text-white">Ajustada para mayor agilidad</td>
                    <td className="px-6 py-4 text-sm text-green-400">Mejor manejo en curvas</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Frenos de Alto Rendimiento</td>
                    <td className="px-6 py-4 text-sm text-white">Discos ventilados delanteros</td>
                    <td className="px-6 py-4 text-sm text-green-400">Frenado más eficiente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Rines GLI Exclusivos</td>
                    <td className="px-6 py-4 text-sm text-white">18 pulgadas con diseño único</td>
                    <td className="px-6 py-4 text-sm text-green-400">Estética deportiva distintiva</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Modo Deportivo</td>
                    <td className="px-6 py-4 text-sm text-white">Configuración de manejo agresiva</td>
                    <td className="px-6 py-4 text-sm text-green-400">Respuesta más rápida del motor</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Diferencial Electrónico</td>
                    <td className="px-6 py-4 text-sm text-white">XDS+ para mejor tracción</td>
                    <td className="px-6 py-4 text-sm text-green-400">Mayor estabilidad en curvas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tecnologías de Conectividad */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Tecnologías de Conectividad
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
                    <td className="px-6 py-4 text-sm text-white">10 pulgadas con resolución HD</td>
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
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Iluminación Ambiental</td>
                    <td className="px-6 py-4 text-sm text-white">Configurable con múltiples colores</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Navegación Integrada</td>
                    <td className="px-6 py-4 text-sm text-white">Sistema de navegación con mapas actualizados</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Sistema de Sonido Premium</td>
                    <td className="px-6 py-4 text-sm text-white">Audio de alta calidad con múltiples altavoces</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Carga Inalámbrica</td>
                    <td className="px-6 py-4 text-sm text-white">Carga inalámbrica para smartphones</td>
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
