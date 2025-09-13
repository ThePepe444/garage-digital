import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Wrench } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'

export default function TipPage() {
  const tip = {
    id: 2,
    title: 'Cómo Elegir el Mejor Aceite para tu Auto en México',
    excerpt: 'Guía completa para seleccionar el aceite motor ideal según el clima mexicano, tipo de conducción y recomendaciones del fabricante.',
    category: 'Mantenimiento',
    readTime: '7 min',
    author: 'Emanuel P',
    views: '15.8k',
    date: '2024-01-20',
    location: 'CDMX',
    fullContent: `
      Elegir el aceite correcto para tu vehículo en México es crucial para mantener el motor en perfecto estado. Con las variaciones climáticas que van desde el calor extremo del desierto hasta la humedad costera, es importante seleccionar un aceite que proteja adecuadamente tu motor.

      IMPORTANTE: Siempre consulta el manual de tu vehículo antes de elegir cualquier aceite. Las especificaciones del fabricante son la guía más confiable y seguir sus recomendaciones garantiza el mejor rendimiento y protección para tu motor.

      TIPOS DE ACEITE DISPONIBLES EN MÉXICO

      En el mercado mexicano encuentras tres tipos principales de aceite motor:

      Aceite Convencional: El más económico, ideal para vehículos antiguos o con poco uso. Requiere cambios más frecuentes pero es perfecto para presupuestos ajustados.

      Aceite Semi-Sintético: Combina aceite convencional con sintético, ofreciendo mejor protección que el convencional a un precio intermedio. Ideal para vehículos de uso mixto.

      Aceite Sintético: El más avanzado tecnológicamente, ofrece la mejor protección y durabilidad. Aunque es más caro, puede extenderse hasta 10,000 km entre cambios.

      VISCOSIDAD Y CLIMA MEXICANO

      La viscosidad del aceite es crucial en México debido a las variaciones de temperatura. Sin embargo, recuerda que estas son recomendaciones generales y siempre debes verificar en el manual de tu vehículo qué viscosidad específica recomienda el fabricante:

      Para climas cálidos (CDMX, Guadalajara, Monterrey): Usa aceites 10W-30 o 10W-40. El "10W" indica que fluye bien en frío, mientras que el "30" o "40" protege en calor.

      Para climas muy cálidos (Cancún, Mérida, Hermosillo): Considera aceites 15W-40 o 20W-50. Estos mantienen mejor la viscosidad en temperaturas altas.

      Para climas templados (Puebla, Querétaro): Los aceites 5W-30 o 5W-40 son ideales, ofreciendo buena protección tanto en frío como en calor.

      NOTA: Algunos vehículos modernos requieren viscosidades específicas como 0W-20 o 5W-20. Siempre verifica el manual antes de decidir.

      RECOMENDACIONES POR TIPO DE CONDUCCIÓN

      Conducción en Ciudad (Tráfico Pesado):
      - Usa aceites sintéticos o semi-sintéticos
      - Cambia cada 5,000-7,500 km
      - Considera aceites con aditivos anti-desgaste

      Conducción en Carretera:
      - Aceites convencionales o semi-sintéticos son suficientes
      - Cambia cada 7,500-10,000 km
      - El motor trabaja de forma más constante

      Conducción Mixta:
      - Aceites semi-sintéticos son ideales
      - Cambia cada 6,000-8,000 km
      - Balance perfecto entre protección y costo

      MARCAS RECOMENDADAS EN MÉXICO

      Las marcas más confiables disponibles en México incluyen:

      Castrol: Excelente para vehículos europeos y americanos, con amplia disponibilidad en autopartes.

      Mobil 1: Líder en aceites sintéticos, ideal para vehículos de alto rendimiento.

      Valvoline: Buena relación calidad-precio, especialmente sus líneas semi-sintéticas.

      Quaker State: Opción económica con buena protección, ideal para vehículos de uso diario.

      Pennzoil: Excelente para motores con alta tecnología, especialmente vehículos japoneses.

      CUÁNDO CAMBIAR EL ACEITE

      Los intervalos de cambio varían según el tipo de aceite, pero SIEMPRE consulta el manual de tu vehículo para conocer los intervalos específicos recomendados por el fabricante:

      Aceite Convencional: Cada 3,000-5,000 km o 3 meses
      Aceite Semi-Sintético: Cada 5,000-7,500 km o 6 meses
      Aceite Sintético: Cada 7,500-10,000 km o 12 meses

      IMPORTANTE: Algunos vehículos modernos con sistemas de monitoreo de aceite pueden extender estos intervalos. El manual de tu auto te dirá exactamente cuándo cambiar el aceite.

      Señales de que necesitas cambiar el aceite:
      - El aceite se ve oscuro y espeso
      - Ruidos extraños del motor
      - Consumo excesivo de combustible
      - Luces de advertencia en el tablero

      CONSEJOS ESPECÍFICOS PARA MÉXICO

      Considera la altitud: En ciudades como CDMX (2,240m), el motor trabaja diferente. Los aceites sintéticos son más estables a estas alturas.

      Humedad costera: En ciudades como Veracruz o Cancún, la humedad puede afectar el aceite. Cambia más frecuentemente.

      Contaminación urbana: En ciudades grandes, el polvo y contaminación pueden degradar el aceite más rápido.

      Calidad del combustible: La calidad variable del combustible mexicano hace que los aditivos del aceite sean más importantes.

      MANTENIMIENTO PREVENTIVO

      Revisa el nivel de aceite cada 1,000 km
      Usa siempre el filtro de aceite recomendado por el fabricante
      Mantén un registro de los cambios de aceite
      Considera hacer análisis de aceite cada 20,000 km en vehículos de alto valor

      RECORDATORIO FINAL

      El manual de tu vehículo es tu mejor guía. Contiene las especificaciones exactas de aceite, intervalos de cambio y recomendaciones específicas para tu modelo. Nunca ignores estas recomendaciones, ya que están diseñadas para optimizar el rendimiento y la durabilidad de tu motor.

      El aceite correcto no solo protege tu motor, sino que también mejora el rendimiento, reduce el consumo de combustible y prolonga la vida útil de tu vehículo. En México, donde las condiciones de manejo pueden ser extremas, elegir el aceite adecuado siguiendo las especificaciones del fabricante es una inversión que vale la pena.
    `,
    pros: [
      'Protección superior del motor en climas extremos',
      'Mejor rendimiento de combustible con aceite sintético',
      'Intervalos de cambio más largos con aceites premium',
      'Reducción de desgaste en condiciones de tráfico pesado',
      'Mayor durabilidad del motor a largo plazo',
      'Mejor arranque en frío durante inviernos mexicanos',
      'Protección contra corrosión por humedad costera',
      'Estabilidad térmica en altas temperaturas del desierto'
    ],
    cons: [
      'Costo más alto de aceites sintéticos',
      'Necesidad de cambiar más frecuentemente en ciudad',
      'Mayor complejidad para elegir la viscosidad correcta',
      'Dependencia de la calidad del combustible mexicano',
      'Necesidad de filtros de aceite de mayor calidad',
      'Posible incompatibilidad con motores muy antiguos'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gti-black-900 via-gti-black-800 to-gti-black-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/tips" 
            className="inline-flex items-center text-gti-red-500 hover:text-gti-red-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Tips
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gti-red-500/20 text-gti-red-400 px-3 py-1 rounded-full text-sm font-medium">
              {tip.category}
            </span>
            <span className="bg-gti-gray-600/20 text-gti-gray-300 px-3 py-1 rounded-full text-sm">
              {tip.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 racing-text">
            {tip.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {tip.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{tip.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{tip.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{tip.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{tip.views}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{tip.location}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <div className="w-full h-96 bg-gradient-to-br from-gti-red-600 to-gti-red-800 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Wrench className="w-24 h-24 text-white mx-auto mb-4" />
              <span className="text-white font-bold text-lg">TIPS DE MANTENIMIENTO</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Wrench className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Categoría</h3>
            <p className="text-2xl font-black text-gti-red-500">{tip.category}</p>
          </div>
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Clock className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Tiempo de Lectura</h3>
            <p className="text-2xl font-black text-gti-red-500">{tip.readTime}</p>
          </div>
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Eye className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-white mb-1">Visualizaciones</h3>
            <p className="text-2xl font-black text-gti-red-500">{tip.views}</p>
          </div>
        </div>

        {/* Aviso Importante */}
        <ManualWarning />

        {/* Tipos de Aceite */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Wrench className="w-6 h-6 text-gti-red-500 mr-2" />
            Tipos de Aceite Disponibles
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Tipo</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Características</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Intervalo de Cambio</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Ideal Para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Convencional</td>
                    <td className="px-6 py-4 text-sm text-white">Más económico, protección básica</td>
                    <td className="px-6 py-4 text-sm text-white">3,000-5,000 km</td>
                    <td className="px-6 py-4 text-sm text-white">Vehículos antiguos, bajo presupuesto</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Semi-Sintético</td>
                    <td className="px-6 py-4 text-sm text-white">Balance precio-protección</td>
                    <td className="px-6 py-4 text-sm text-white">5,000-7,500 km</td>
                    <td className="px-6 py-4 text-sm text-white">Uso mixto, vehículos modernos</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Sintético</td>
                    <td className="px-6 py-4 text-sm text-white">Máxima protección y durabilidad</td>
                    <td className="px-6 py-4 text-sm text-white">7,500-10,000 km</td>
                    <td className="px-6 py-4 text-sm text-white">Alto rendimiento, vehículos premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Viscosidad por Clima */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Viscosidad Recomendada por Clima
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Clima</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Viscosidad Recomendada</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Ciudades Ejemplo</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Temperatura Promedio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Cálido</td>
                    <td className="px-6 py-4 text-sm text-white">10W-30 / 10W-40</td>
                    <td className="px-6 py-4 text-sm text-white">CDMX, Guadalajara, Monterrey</td>
                    <td className="px-6 py-4 text-sm text-white">20-30°C</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Muy Cálido</td>
                    <td className="px-6 py-4 text-sm text-white">15W-40 / 20W-50</td>
                    <td className="px-6 py-4 text-sm text-white">Cancún, Mérida, Hermosillo</td>
                    <td className="px-6 py-4 text-sm text-white">30-40°C</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Templado</td>
                    <td className="px-6 py-4 text-sm text-white">5W-30 / 5W-40</td>
                    <td className="px-6 py-4 text-sm text-white">Puebla, Querétaro, San Luis Potosí</td>
                    <td className="px-6 py-4 text-sm text-white">15-25°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Marcas Recomendadas */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Fuel className="w-6 h-6 text-gti-red-500 mr-2" />
            Marcas Recomendadas en México
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Marca</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Fortalezas</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Ideal Para</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Disponibilidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Castrol</td>
                    <td className="px-6 py-4 text-sm text-white">Tecnología avanzada, amplia gama</td>
                    <td className="px-6 py-4 text-sm text-white">Vehículos europeos y americanos</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Excelente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Mobil 1</td>
                    <td className="px-6 py-4 text-sm text-white">Líder en aceites sintéticos</td>
                    <td className="px-6 py-4 text-sm text-white">Alto rendimiento y lujo</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Excelente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Valvoline</td>
                    <td className="px-6 py-4 text-sm text-white">Buena relación calidad-precio</td>
                    <td className="px-6 py-4 text-sm text-white">Uso diario y mixto</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Excelente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Quaker State</td>
                    <td className="px-6 py-4 text-sm text-white">Precio accesible, buena protección</td>
                    <td className="px-6 py-4 text-sm text-white">Vehículos de uso diario</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Buena</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Pennzoil</td>
                    <td className="px-6 py-4 text-sm text-white">Tecnología para motores modernos</td>
                    <td className="px-6 py-4 text-sm text-white">Vehículos japoneses</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Excelente</td>
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
              {tip.pros.map((pro, index) => (
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
              {tip.cons.map((con, index) => (
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
            {tip.fullContent}
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 bg-gti-black-800/50 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gti-red-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{tip.author}</h4>
              <p className="text-gray-400">Fanático de los automóviles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
