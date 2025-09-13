import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Wrench } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'

export default function TipPage() {
  const tip = {
    id: 3,
    title: 'Cómo Mantener las Llantas en Carreteras Mexicanas',
    excerpt: 'Guía completa para el cuidado de llantas considerando las condiciones específicas de las carreteras mexicanas: baches, calor extremo y diferentes tipos de pavimento.',
    category: 'Mantenimiento',
    readTime: '8 min',
    author: 'Emanuel P',
    views: '22.1k',
    date: '2024-01-25',
    location: 'CDMX',
    fullContent: `
      Las llantas son el único punto de contacto entre tu vehículo y el pavimento, por lo que su mantenimiento es crucial para la seguridad. En México, las condiciones de las carreteras presentan desafíos únicos que requieren atención especial.

      TIPOS DE PAVIMENTO EN MÉXICO

      Las carreteras mexicanas presentan una gran variedad de superficies que afectan el desgaste de las llantas:

      Pavimento Asfáltico: La mayoría de carreteras principales y autopistas. Proporciona buena tracción pero puede ser resbaloso cuando está mojado.

      Concreto: Común en carreteras de cuota y algunas vías urbanas. Más abrasivo que el asfalto, causando mayor desgaste.

      Adoquín: Frecuente en centros históricos y algunas zonas residenciales. Puede causar vibraciones y desgaste irregular.

      Terracería: Carreteras rurales y de acceso. Muy abrasiva y puede dañar las llantas si no se maneja con cuidado.

      Baches y Reparaciones: Comunes en carreteras urbanas, pueden causar daños graves a las llantas.

      PRESIÓN DE AIRE CORRECTA

      La presión de aire es fundamental para el rendimiento y seguridad de las llantas:

      Revisa la presión cada 15 días o antes de viajes largos
      Usa la presión recomendada en el manual del vehículo o en la etiqueta del marco de la puerta
      Ajusta la presión según la carga del vehículo
      Considera la temperatura ambiente - el calor aumenta la presión

      Presiones típicas para vehículos en México:
      - Sedanes: 30-32 PSI
      - SUVs: 32-35 PSI
      - Pickups: 35-40 PSI

      ROTACIÓN DE LLANTAS

      La rotación regular prolonga la vida útil de las llantas:

      Frecuencia recomendada: Cada 8,000-10,000 km
      Patrón de rotación: Cruzado para tracción delantera, directo para tracción trasera
      Incluye la llanta de refacción en la rotación si es del mismo tamaño
      Marca la posición de cada llanta para seguimiento

      ALINEACIÓN Y BALANCEO

      Estos servicios son cruciales para el desgaste uniforme:

      Alineación: Cada 20,000 km o si notas que el volante se desvía
      Balanceo: Cada 10,000 km o si sientes vibraciones en el volante
      Revisa la alineación después de golpear baches fuertes
      Considera la geometría de la suspensión en vehículos con kilometraje alto

      CUIDADO ESPECÍFICO PARA MÉXICO

      Protección contra el Sol: El sol intenso degrada el caucho. Usa protectores solares para llantas cuando estaciones por períodos largos.

      Baches: Reduce la velocidad al pasar por baches. Si no puedes evitarlos, pasa lentamente y en ángulo recto.

      Lluvia: Revisa el dibujo de las llantas antes de la temporada de lluvias. El mínimo legal es 1.6mm, pero se recomienda cambiar a 3mm.

      Calor Extremo: En zonas desérticas, considera llantas con mayor resistencia al calor.

      SEÑALES DE DESGASTE

      Revisa regularmente estas señales de desgaste:

      Desgaste Irregular: Indica problemas de alineación o balanceo
      Desgaste en los Bordes: Presión incorrecta o problemas de suspensión
      Desgaste en el Centro: Presión excesiva
      Desgate en los Lados: Presión insuficiente
      Grietas o Abultamientos: Reemplazo inmediato necesario

      ELECCIÓN DE LLANTAS PARA MÉXICO

      Considera estos factores al elegir llantas:

      Clima: Llantas para todo clima son ideales para la mayoría de México
      Tipo de Conducción: Ciudad vs carretera vs mixta
      Presupuesto: Balance entre calidad y costo
      Marca: Bridgestone, Michelin, Continental, Goodyear son confiables
      Garantía: Verifica la cobertura en México

      MANTENIMIENTO PREVENTIVO

      Rutina de mantenimiento recomendada:

      Revisión Visual: Cada semana
      Presión de Aire: Cada 15 días
      Rotación: Cada 8,000-10,000 km
      Alineación: Cada 20,000 km
      Balanceo: Cada 10,000 km
      Reemplazo: Según desgaste o edad (máximo 6 años)

      CONSEJOS DE CONDUCCIÓN

      Para prolongar la vida de tus llantas:

      Evita frenadas bruscas y aceleraciones fuertes
      Reduce la velocidad en curvas cerradas
      Mantén distancia de seguridad para evitar frenadas de emergencia
      Evita sobrecargar el vehículo
      Conduce suavemente sobre baches y superficies irregulares

      El mantenimiento adecuado de las llantas no solo mejora la seguridad, sino que también optimiza el rendimiento de combustible y la comodidad de manejo. En México, donde las condiciones de las carreteras pueden ser desafiantes, el cuidado preventivo es especialmente importante.
    `,
    pros: [
      'Mayor seguridad en carreteras mexicanas',
      'Mejor rendimiento de combustible con presión correcta',
      'Desgaste uniforme con rotación regular',
      'Mayor durabilidad en condiciones extremas',
      'Mejor tracción en lluvia y superficies mojadas',
      'Reducción de vibraciones y ruido',
      'Ahorro a largo plazo con mantenimiento preventivo',
      'Mejor manejo y estabilidad del vehículo'
    ],
    cons: [
      'Costo de rotación y balanceo regulares',
      'Necesidad de revisión frecuente de presión',
      'Costo de alineación periódica',
      'Desgaste más rápido en carreteras con baches',
      'Necesidad de reemplazo más frecuente en climas extremos',
      'Costo inicial de llantas de calidad'
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

        {/* Tipos de Pavimento */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Tipos de Pavimento en México
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Tipo de Pavimento</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Características</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Efecto en Llantas</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Ubicaciones Comunes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Asfáltico</td>
                    <td className="px-6 py-4 text-sm text-white">Superficie lisa, buena tracción</td>
                    <td className="px-6 py-4 text-sm text-white">Desgaste normal</td>
                    <td className="px-6 py-4 text-sm text-white">Autopistas, carreteras principales</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Concreto</td>
                    <td className="px-6 py-4 text-sm text-white">Superficie abrasiva, duradera</td>
                    <td className="px-6 py-4 text-sm text-white">Mayor desgaste</td>
                    <td className="px-6 py-4 text-sm text-white">Carreteras de cuota, vías urbanas</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Adoquín</td>
                    <td className="px-6 py-4 text-sm text-white">Superficie irregular, histórica</td>
                    <td className="px-6 py-4 text-sm text-white">Desgaste irregular</td>
                    <td className="px-6 py-4 text-sm text-white">Centros históricos, zonas residenciales</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Terracería</td>
                    <td className="px-6 py-4 text-sm text-white">Superficie de tierra, irregular</td>
                    <td className="px-6 py-4 text-sm text-white">Alto desgaste, riesgo de daños</td>
                    <td className="px-6 py-4 text-sm text-white">Carreteras rurales, accesos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Presión de Aire */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Gauge className="w-6 h-6 text-gti-red-500 mr-2" />
            Presión de Aire Recomendada
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Tipo de Vehículo</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Presión Fría (PSI)</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Presión Caliente (PSI)</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Frecuencia de Revisión</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Sedanes</td>
                    <td className="px-6 py-4 text-sm text-white">30-32 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">32-34 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 15 días</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">SUVs</td>
                    <td className="px-6 py-4 text-sm text-white">32-35 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">34-37 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 15 días</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Pickups</td>
                    <td className="px-6 py-4 text-sm text-white">35-40 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">37-42 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 15 días</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Deportivos</td>
                    <td className="px-6 py-4 text-sm text-white">28-32 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">30-34 PSI</td>
                    <td className="px-6 py-4 text-sm text-white">Cada semana</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mantenimiento Preventivo */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Wrench className="w-6 h-6 text-gti-red-500 mr-2" />
            Cronograma de Mantenimiento
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Actividad</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Frecuencia</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Importancia</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Costo Aproximado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Revisión Visual</td>
                    <td className="px-6 py-4 text-sm text-white">Cada semana</td>
                    <td className="px-6 py-4 text-sm text-green-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">Gratis</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Presión de Aire</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 15 días</td>
                    <td className="px-6 py-4 text-sm text-green-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">Gratis</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Rotación</td>
                    <td className="px-6 py-4 text-sm text-white">8,000-10,000 km</td>
                    <td className="px-6 py-4 text-sm text-green-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">$200-400 MXN</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Balanceo</td>
                    <td className="px-6 py-4 text-sm text-white">10,000 km</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                    <td className="px-6 py-4 text-sm text-white">$300-500 MXN</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Alineación</td>
                    <td className="px-6 py-4 text-sm text-white">20,000 km</td>
                    <td className="px-6 py-4 text-sm text-green-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">$400-800 MXN</td>
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
