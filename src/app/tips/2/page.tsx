import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Wrench, Shield } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'

export default function TipPage() {
  const tip = {
    id: 2,
    title: 'Cómo Verificar el Sistema de Frenos en Casa',
    excerpt: 'Guía práctica para realizar una inspección básica del sistema de frenos de tu vehículo desde casa, identificando problemas comunes y cuándo acudir al taller.',
    category: 'Seguridad',
    readTime: '7 min',
    author: 'Emanuel P',
    views: '31.2k',
    date: '2024-02-05',
    location: 'CDMX',
    fullContent: `
      El sistema de frenos es el componente de seguridad más crítico de tu vehículo. Una inspección regular te permite detectar problemas antes de que se conviertan en emergencias costosas o peligrosas.

      COMPONENTES DEL SISTEMA DE FRENOS

      El sistema de frenos moderno incluye varios componentes que trabajan en conjunto:

      Pastillas de Freno: Se comprimen contra los discos para generar fricción y detener el vehículo. Son el componente que más se desgasta.

      Discos de Freno: Rotores metálicos que giran con las ruedas. Las pastillas se comprimen contra ellos para detener el vehículo.

      Tambores de Freno: En algunos vehículos traseros, especialmente en modelos más antiguos o económicos.

      Líquido de Freno: Transmite la presión desde el pedal hasta las pastillas. Debe mantenerse en el nivel correcto.

      Mangueras y Líneas: Conectan el sistema hidráulico y deben estar libres de fugas o daños.

      Pedal de Freno: El punto de contacto entre el conductor y el sistema de frenos.

      SEÑALES DE PROBLEMAS COMUNES

      Ruidos Anormales: Chirridos, rechinidos o sonidos metálicos pueden indicar pastillas desgastadas o discos dañados.

      Vibración del Pedal: Si el pedal vibra al frenar, puede indicar discos deformados o desbalanceados.

      Pedal Suave o Esponjoso: Sugiere aire en el sistema o fuga de líquido de frenos.

      Pedal Duro: Puede indicar problemas con el servofreno o el sistema de vacío.

      Vehículo que se Desvía: Si el auto se mueve hacia un lado al frenar, puede haber problemas con las pastillas o el sistema hidráulico.

      Luces de Advertencia: La luz ABS o de frenos en el tablero indica problemas que requieren atención inmediata.

      INSPECCIÓN VISUAL BÁSICA

      Pastillas de Freno: Revisa el grosor de las pastillas. Si tienen menos de 3mm de material, necesitan reemplazo.

      Discos de Freno: Busca rayones profundos, grietas o deformaciones. Los discos deben tener una superficie lisa.

      Líquido de Freno: Verifica el nivel en el depósito. Debe estar entre las marcas mínima y máxima.

      Mangueras: Inspecciona las mangueras de freno en busca de grietas, abultamientos o signos de desgaste.

      Fugas: Busca manchas de líquido de frenos debajo del vehículo o en las ruedas.

      PRUEBA DE FUNCIONAMIENTO

      Prueba en Estacionamiento: Con el motor encendido, presiona el pedal de freno y verifica que se sienta firme.

      Prueba de Distancia: En un área segura, prueba el frenado desde baja velocidad para verificar la respuesta.

      Prueba de Estacionamiento: Aplica el freno de estacionamiento y verifica que mantenga el vehículo inmóvil.

      Prueba de ABS: En condiciones seguras, prueba el sistema ABS para asegurar que funcione correctamente.

      MANTENIMIENTO PREVENTIVO

      Revisión Regular: Inspecciona el sistema de frenos cada 15,000 km o 6 meses.

      Cambio de Líquido: Reemplaza el líquido de frenos cada 2 años o según las recomendaciones del fabricante.

      Limpieza: Mantén las ruedas limpias para facilitar la inspección visual.

      Rotación de Llantas: La rotación regular ayuda a identificar problemas de frenos temprano.

      CUIDADO ESPECÍFICO PARA MÉXICO

      Clima Cálido: El calor extremo puede afectar el líquido de frenos y causar desgaste prematuro.

      Tráfico Pesado: El uso intensivo en ciudad desgasta más rápido las pastillas y discos.

      Calidad del Aire: El polvo y la contaminación pueden acelerar el desgaste de los componentes.

      Baches: Los impactos fuertes pueden dañar los discos y causar vibraciones.

      CUÁNDO ACUDIR AL TALLER

      Problemas de Seguridad: Cualquier problema que afecte la capacidad de frenado requiere atención inmediata.

      Ruidos Persistentes: Los chirridos o rechinidos constantes indican desgaste que necesita atención.

      Pedal Anormal: Cualquier cambio en la sensación del pedal requiere inspección profesional.

      Luces de Advertencia: Las luces del tablero nunca deben ignorarse.

      Mantenimiento Programado: Sigue el cronograma de mantenimiento recomendado por el fabricante.

      HERRAMIENTAS BÁSICAS NECESARIAS

      Linterna: Para inspeccionar componentes en áreas oscuras.

      Guantes: Para proteger las manos durante la inspección.

      Lupa: Para examinar detalles pequeños en pastillas y discos.

      Cinta Métrica: Para medir el grosor de las pastillas.

      Espejo: Para inspeccionar áreas difíciles de alcanzar.

      CONSEJOS DE SEGURIDAD

      Nunca trabajes en el sistema de frenos sin conocimiento adecuado.

      Siempre usa el gato correcto y soportes de seguridad al levantar el vehículo.

      No conduzcas si sospechas de problemas serios en el sistema de frenos.

      Mantén el área de trabajo limpia y organizada.

      Usa protección personal apropiada.

      El mantenimiento regular del sistema de frenos no solo mejora la seguridad, sino que también puede prevenir reparaciones costosas. Una inspección básica en casa te ayuda a identificar problemas temprano y mantener tu vehículo en condiciones óptimas.
    `,
    pros: [
      'Detección temprana de problemas de seguridad',
      'Ahorro en costos de reparación',
      'Mayor seguridad en la conducción',
      'Conocimiento del estado real del vehículo',
      'Prevención de fallas inesperadas',
      'Mejor planificación del mantenimiento',
      'Reducción del desgaste prematuro',
      'Tranquilidad al conducir'
    ],
    cons: [
      'Requiere tiempo para inspección regular',
      'Necesita herramientas básicas',
      'Algunos problemas requieren experiencia profesional',
      'Puede generar preocupación innecesaria si no se interpreta correctamente',
      'Limitado a inspecciones visuales básicas'
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
              <Shield className="w-24 h-24 text-white mx-auto mb-4" />
              <span className="text-white font-bold text-lg">TIPS DE SEGURIDAD</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Shield className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
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

        {/* Componentes del Sistema */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Wrench className="w-6 h-6 text-gti-red-500 mr-2" />
            Componentes del Sistema de Frenos
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Componente</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Función</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Desgaste Típico</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Reemplazo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Pastillas</td>
                    <td className="px-6 py-4 text-sm text-white">Generan fricción para detener el vehículo</td>
                    <td className="px-6 py-4 text-sm text-white">20,000-60,000 km</td>
                    <td className="px-6 py-4 text-sm text-white">Cuando quedan < 3mm</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Discos</td>
                    <td className="px-6 py-4 text-sm text-white">Rotores que giran con las ruedas</td>
                    <td className="px-6 py-4 text-sm text-white">60,000-120,000 km</td>
                    <td className="px-6 py-4 text-sm text-white">Cuando están rayados o deformados</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Líquido</td>
                    <td className="px-6 py-4 text-sm text-white">Transmite presión hidráulica</td>
                    <td className="px-6 py-4 text-sm text-white">Absorbe humedad con el tiempo</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 2 años</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Mangueras</td>
                    <td className="px-6 py-4 text-sm text-white">Conectan el sistema hidráulico</td>
                    <td className="px-6 py-4 text-sm text-white">Grietas y endurecimiento</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 4-6 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Señales de Problemas */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Señales de Problemas Comunes
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Señal</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Causa Probable</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Urgencia</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Chirridos</td>
                    <td className="px-6 py-4 text-sm text-white">Pastillas desgastadas</td>
                    <td className="px-6 py-4 text-sm text-red-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">Revisar inmediatamente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Vibración</td>
                    <td className="px-6 py-4 text-sm text-white">Discos deformados</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                    <td className="px-6 py-4 text-sm text-white">Revisar en 1-2 semanas</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Pedal suave</td>
                    <td className="px-6 py-4 text-sm text-white">Aire en el sistema</td>
                    <td className="px-6 py-4 text-sm text-red-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">Revisar inmediatamente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Desviación</td>
                    <td className="px-6 py-4 text-sm text-white">Pastillas desiguales</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                    <td className="px-6 py-4 text-sm text-white">Revisar en 1 semana</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Luz ABS</td>
                    <td className="px-6 py-4 text-sm text-white">Problema del sistema ABS</td>
                    <td className="px-6 py-4 text-sm text-red-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">Revisar inmediatamente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cronograma de Mantenimiento */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Gauge className="w-6 h-6 text-gti-red-500 mr-2" />
            Cronograma de Mantenimiento
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Actividad</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Frecuencia</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Puedes Hacerlo</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Costo Aproximado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Inspección Visual</td>
                    <td className="px-6 py-4 text-sm text-white">Cada mes</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Sí</td>
                    <td className="px-6 py-4 text-sm text-white">Gratis</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Revisión de Nivel</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 15 días</td>
                    <td className="px-6 py-4 text-sm text-green-400">✓ Sí</td>
                    <td className="px-6 py-4 text-sm text-white">Gratis</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Cambio de Pastillas</td>
                    <td className="px-6 py-4 text-sm text-white">Según desgaste</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Con experiencia</td>
                    <td className="px-6 py-4 text-sm text-white">$800-2,500 MXN</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Cambio de Líquido</td>
                    <td className="px-6 py-4 text-sm text-white">Cada 2 años</td>
                    <td className="px-6 py-4 text-sm text-red-400">No recomendado</td>
                    <td className="px-6 py-4 text-sm text-white">$400-800 MXN</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Rectificado de Discos</td>
                    <td className="px-6 py-4 text-sm text-white">Según necesidad</td>
                    <td className="px-6 py-4 text-sm text-red-400">No</td>
                    <td className="px-6 py-4 text-sm text-white">$600-1,200 MXN</td>
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
