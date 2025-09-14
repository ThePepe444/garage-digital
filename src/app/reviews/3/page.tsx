import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Battery, Zap } from 'lucide-react'

export default function ReviewPage() {
  const review = {
    id: 3,
    title: 'BYD Dolphin Mini 2026: El Futuro Eléctrico Compacto',
    excerpt: 'Análisis completo del BYD Dolphin Mini 2026, el vehículo eléctrico compacto que está revolucionando la movilidad urbana en México con tecnología avanzada y autonomía excepcional.',
    car: 'BYD Dolphin Mini 2026',
    rating: 4.6,
    price: '$489,900 MXN',
    fuelEconomy: '10 kWh/100 km',
    category: 'Eléctrico Compacto',
    image: '/images/byd-dolphin-mini-2026.jpg',
    author: 'Emanuel P',
    date: '2024-02-15',
    location: 'CDMX',
    dealer: 'BYD México',
    fullContent: `
      El BYD Dolphin Mini 2026 representa la evolución perfecta de la movilidad eléctrica urbana. Con un diseño compacto pero espacioso, este vehículo está diseñado específicamente para las necesidades de las ciudades mexicanas, ofreciendo eficiencia, tecnología y sostenibilidad en un paquete accesible.

      DISEÑO Y DIMENSIONES

      El Dolphin Mini destaca por sus dimensiones perfectas para la ciudad: 3.78 metros de longitud, 1.715 metros de ancho y 1.58 metros de altura. Su distancia entre ejes de 2.5 metros garantiza estabilidad en carretera, mientras que su altura libre al suelo de 120mm es ideal para las condiciones urbanas mexicanas.

      El diseño exterior combina líneas modernas con elementos aerodinámicos que no solo son estéticamente atractivos, sino que también contribuyen a la eficiencia energética. Los rines de 16 pulgadas en aluminio con neumáticos Hankook 175/55 R16 ofrecen un equilibrio perfecto entre rendimiento y eficiencia.

      TECNOLOGÍA ELÉCTRICA AVANZADA

      El corazón del Dolphin Mini es su motor eléctrico de 55 kW que genera 135 N·m de torque, proporcionando una aceleración suave y silenciosa. La velocidad máxima de 130 km/h es más que suficiente para el uso urbano y periurbano.

      La batería de 30.08 kWh en la versión Mini ofrece una autonomía de 300 km, mientras que la versión Plus con 38.8 kWh alcanza los 380 km. Ambas versiones mantienen un consumo excepcional de 10 kWh/100 km, lo que se traduce en costos de operación extremadamente bajos.

      SISTEMA DE CARGA VERSÁTIL

      El Dolphin Mini incluye múltiples opciones de carga: carga rápida DC que lleva la batería del 30% al 80% en solo 30 minutos, carga AC de 7 kW para uso doméstico, y un cargador de emergencia de 110V de 1.4 kW. También incluye un cargador de pared de 7 kW para instalación en casa.

      SEGURIDAD INTEGRAL

      En seguridad, el Dolphin Mini no escatima. Incluye airbags frontales para conductor y pasajero, airbags de cortina delanteros y traseros, y en la versión Plus, airbags laterales delanteros adicionales. La cámara de reversa y el sistema de vista 360° (solo en Plus) facilitan el estacionamiento en espacios reducidos.

      Los sistemas de asistencia incluyen IPB (Integrated Power Brake), HBA (Hydraulic Brake Assist), TCS (Traction Control System), VDC (Vehicle Dynamic Control), EBD (Electronic Brake Distribution), HHC (Hill Hold Control), CST (Corner Stability Control) y CRBS (Cooperative Regenerative Brake System).

      INTERIOR TECNOLÓGICO

      El interior del Dolphin Mini está diseñado pensando en la conectividad y comodidad. La pantalla central giratoria de 10.1 pulgadas es el centro de control, ofreciendo CarPlay y Android Auto, conexión 4G con OTA, y el sistema de voz "Hi BYD" para control por comandos de voz.

      Los asientos en piel sintética son cómodos y prácticos, con el asiento trasero reclinable y sistema ISO-FIX para sillas de bebé. La versión Plus incluye asiento del conductor eléctrico de 6 direcciones, mientras que la versión Mini tiene ajuste manual de 4 direcciones.

      MANEJO Y CONTROL

      El sistema de entrada y encendido sin llave, junto con NFC y llave Bluetooth móvil, hacen que el acceso al vehículo sea completamente digital. Los modos de manejo Normal, Sport, Eco y Nieve permiten adaptar el comportamiento del vehículo a diferentes condiciones y preferencias de conducción.

      La dirección asistida eléctrica (C-EPS) proporciona un manejo ligero y preciso, ideal para la ciudad. El control de crucero facilita los viajes en carretera, mientras que el TPMS (Tire Pressure Monitoring System) mantiene informado al conductor sobre el estado de los neumáticos.

      EFICIENCIA Y SOSTENIBILIDAD

      Con un consumo de 10 kWh/100 km, el Dolphin Mini es uno de los vehículos eléctricos más eficientes del mercado. Esto se traduce en costos operativos extremadamente bajos: aproximadamente $50 pesos mexicanos por cada 100 km, comparado con los $200-300 pesos de un vehículo de combustión similar.

      La refrigeración y calefacción de la batería garantizan un rendimiento óptimo en todas las condiciones climáticas de México, desde el calor extremo del desierto hasta las temperaturas más frescas de las montañas.

      VENTAJAS PARA MÉXICO

      El Dolphin Mini está perfectamente adaptado para las condiciones mexicanas: su tamaño compacto es ideal para el tráfico denso de las ciudades, su altura libre al suelo maneja bien los baches, y su autonomía de 300-380 km es más que suficiente para el uso diario urbano.

      El sistema de carga rápida de 30 minutos permite recargas durante viajes largos, y la red de carga eléctrica en expansión en México hace que sea cada vez más práctico viajar fuera de la ciudad.

      COMPARACIÓN CON COMPETENCIA

      En su segmento, el Dolphin Mini se posiciona como una alternativa sólida a vehículos como el Nissan Leaf o el Chevrolet Bolt. Su precio de $489,900 MXN lo coloca en una posición competitiva, especialmente considerando el equipamiento y la tecnología que incluye de serie.

      El BYD Dolphin Mini 2026 representa el futuro de la movilidad urbana: eficiente, tecnológico, seguro y accesible. Es la opción perfecta para quienes buscan dar el salto a la movilidad eléctrica sin comprometer funcionalidad, comodidad o presupuesto.
    `,
    pros: [
      'Autonomía excepcional de 300-380 km',
      'Costos operativos extremadamente bajos',
      'Tecnología avanzada de conectividad',
      'Tamaño perfecto para ciudad',
      'Carga rápida de 30 minutos',
      'Sistemas de seguridad completos',
      'Diseño moderno y aerodinámico',
      'Precio competitivo en su segmento'
    ],
    cons: [
      'Red de carga aún en expansión',
      'Espacio limitado para viajes largos',
      'Servicio técnico especializado limitado',
      'Dependencia de la infraestructura eléctrica',
      'Valor de reventa aún por establecerse',
      'Tiempo de carga más largo que llenar tanque'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gti-gray-900 via-gti-gray-800 to-gti-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/reviews" 
            className="inline-flex items-center text-gti-blue-500 hover:text-gti-blue-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Reseñas
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gti-blue-500/20 text-gti-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              {review.category}
            </span>
            <span className="bg-gti-gray-600/20 text-gti-gray-300 px-3 py-1 rounded-full text-sm">
              {review.date}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold text-white">{review.rating}</span>
            </div>
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
              <MapPin className="w-4 h-4" />
              <span>{review.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>35.2k vistas</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <div className="w-full h-96 bg-gradient-to-br from-gti-blue-600 to-gti-blue-800 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Battery className="w-24 h-24 text-white mx-auto mb-4" />
              <span className="text-white font-bold text-lg">VEHÍCULO ELÉCTRICO</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gti-gray-800/50 rounded-lg p-6 text-center">
            <Gauge className="w-8 h-8 text-gti-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Precio</h3>
            <p className="text-2xl font-black text-gti-blue-500">{review.price}</p>
          </div>
          <div className="bg-gti-gray-800/50 rounded-lg p-6 text-center">
            <Battery className="w-8 h-8 text-gti-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Consumo</h3>
            <p className="text-2xl font-black text-gti-blue-500">{review.fuelEconomy}</p>
          </div>
          <div className="bg-gti-gray-800/50 rounded-lg p-6 text-center">
            <Star className="w-8 h-8 text-gti-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Calificación</h3>
            <p className="text-2xl font-black text-gti-blue-500">{review.rating}/5</p>
          </div>
          <div className="bg-gti-gray-800/50 rounded-lg p-6 text-center">
            <Zap className="w-8 h-8 text-gti-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Autonomía</h3>
            <p className="text-2xl font-black text-gti-blue-500">300-380 km</p>
          </div>
        </div>

        {/* Especificaciones Técnicas */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-blue-500 mr-2" />
            Especificaciones Técnicas
          </h3>
          <div className="bg-gti-gray-800/50 rounded-xl overflow-hidden border border-gti-blue-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-blue-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Especificación</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mini</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mini Plus</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Notas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-blue-500/10">
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Batería</td>
                    <td className="px-6 py-4 text-sm text-white">30.08 kWh</td>
                    <td className="px-6 py-4 text-sm text-white">38.8 kWh</td>
                    <td className="px-6 py-4 text-sm text-white">Litio hierro fosfato</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Autonomía</td>
                    <td className="px-6 py-4 text-sm text-white">300 km</td>
                    <td className="px-6 py-4 text-sm text-white">380 km</td>
                    <td className="px-6 py-4 text-sm text-white">WLTP</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Carga DC</td>
                    <td className="px-6 py-4 text-sm text-white">30 kW</td>
                    <td className="px-6 py-4 text-sm text-white">40 kW</td>
                    <td className="px-6 py-4 text-sm text-white">30%-80% en 30 min</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Motor</td>
                    <td className="px-6 py-4 text-sm text-white">55 kW</td>
                    <td className="px-6 py-4 text-sm text-white">55 kW</td>
                    <td className="px-6 py-4 text-sm text-white">135 N·m torque</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Velocidad Máx</td>
                    <td className="px-6 py-4 text-sm text-white">130 km/h</td>
                    <td className="px-6 py-4 text-sm text-white">130 km/h</td>
                    <td className="px-6 py-4 text-sm text-white">Limitada electrónicamente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tecnologías de Seguridad */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-6 h-6 text-gti-blue-500 mr-2" />
            Tecnologías de Seguridad
          </h3>
          <div className="bg-gti-gray-800/50 rounded-xl overflow-hidden border border-gti-blue-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-blue-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Sistema</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mini</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mini Plus</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-blue-500/10">
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Airbags Frontales</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Conductor y pasajero</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Airbags Cortina</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Delanteros y traseros</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Airbags Laterales</td>
                    <td className="px-6 py-4 text-sm text-red-400">✗ No</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Solo delanteros</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Vista 360°</td>
                    <td className="px-6 py-4 text-sm text-red-400">✗ No</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Cámaras perimetrales</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">TPMS</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Monitoreo presión</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tecnologías de Conectividad */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Zap className="w-6 h-6 text-gti-blue-500 mr-2" />
            Tecnologías de Conectividad
          </h3>
          <div className="bg-gti-gray-800/50 rounded-xl overflow-hidden border border-gti-blue-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-blue-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Característica</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mini</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mini Plus</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Beneficio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-blue-500/10">
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Pantalla Central</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ 10.1"</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ 10.1"</td>
                    <td className="px-6 py-4 text-sm text-white">Giratoria con apps</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">CarPlay/Android Auto</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Integración smartphone</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Carga Inalámbrica</td>
                    <td className="px-6 py-4 text-sm text-red-400">✗ No</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Sin cables</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Sistema de Voz</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ "Hi BYD"</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ "Hi BYD"</td>
                    <td className="px-6 py-4 text-sm text-white">Control manos libres</td>
                  </tr>
                  <tr className="hover:bg-gti-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Conectividad 4G</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Serie</td>
                    <td className="px-6 py-4 text-sm text-white">Actualizaciones OTA</td>
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

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {review.fullContent}
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 bg-gti-gray-800/50 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gti-blue-500 rounded-full flex items-center justify-center">
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
