import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Wrench, Battery } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'

export default function TipPage() {
  const tip = {
    id: 3,
    title: 'Cómo Mantener la Batería del Auto en Óptimas Condiciones',
    excerpt: 'Guía completa para el cuidado de la batería de tu vehículo, incluyendo cómo prevenir descargas, verificar el estado y prolongar su vida útil en el clima mexicano.',
    category: 'Eléctrico',
    readTime: '6 min',
    author: 'Emanuel P',
    views: '25.8k',
    date: '2024-02-10',
    location: 'CDMX',
    fullContent: `
      La batería es el corazón eléctrico de tu vehículo. Sin ella, no importa qué tan bien esté el motor, tu auto no arrancará. En México, donde el calor extremo puede ser un enemigo de las baterías, el mantenimiento adecuado es crucial.

      TIPOS DE BATERÍAS

      Baterías Convencionales: Las más comunes, requieren mantenimiento periódico del nivel de electrolito.

      Baterías de Libre Mantenimiento: Selladas, no requieren agregar agua destilada, pero son más sensibles a sobrecarga.

      Baterías AGM (Absorbed Glass Mat): Tecnología avanzada, más resistentes a vibraciones y descargas profundas.

      Baterías de Gel: Similar a AGM pero con electrolito en forma de gel, excelente para aplicaciones de alta gama.

      FACTORES QUE AFECTAN LA VIDA ÚTIL

      Temperatura: El calor excesivo acelera la corrosión y evapora el electrolito. El frío reduce la capacidad de arranque.

      Uso del Vehículo: Viajes cortos frecuentes no permiten que la batería se recargue completamente.

      Accesorios Eléctricos: Luces, radio, aire acondicionado y otros accesorios consumen energía constantemente.

      Edad: Las baterías tienen una vida útil limitada, típicamente 3-5 años.

      Vibraciones: Los golpes y vibraciones excesivas pueden dañar las placas internas.

      SEÑALES DE PROBLEMAS

      Arranque Lento: El motor tarda más en arrancar, especialmente en frío.

      Luces Tenues: Las luces del tablero y faros se ven más débiles de lo normal.

      Ruidos Extraños: Clicks repetidos al girar la llave indican batería descargada.

      Corrosión: Acumulación blanca o verde en los terminales.

      Batería Hinchada: Indica sobrecarga o calor excesivo.

      Olor a Huevo Podrido: Fugas de gas sulfhídrico, peligroso y requiere reemplazo inmediato.

      INSPECCIÓN VISUAL REGULAR

      Terminales: Verifica que estén limpios y apretados. La corrosión impide la buena conexión.

      Carcasa: Busca grietas, hinchazones o signos de daño físico.

      Electrolito: En baterías convencionales, verifica que el nivel esté sobre las placas.

      Cables: Inspecciona los cables de conexión en busca de desgaste o corrosión.

      Sujeción: Asegúrate de que la batería esté bien sujeta en su compartimento.

      MANTENIMIENTO PREVENTIVO

      Limpieza de Terminales: Usa una mezcla de bicarbonato y agua para limpiar la corrosión.

      Apriete de Conexiones: Verifica que los terminales estén bien apretados cada 3 meses.

      Nivel de Electrolito: En baterías convencionales, agrega agua destilada cuando sea necesario.

      Carga Completa: Realiza viajes largos ocasionalmente para permitir carga completa.

      Desconexión: Si no usarás el auto por más de un mes, desconecta el terminal negativo.

      CUIDADO ESPECÍFICO PARA MÉXICO

      Protección del Sol: Estaciona en sombra cuando sea posible para evitar sobrecalentamiento.

      Ventilación: Asegúrate de que el compartimento de la batería tenga buena ventilación.

      Clima Cálido: En zonas calientes, revisa más frecuentemente el nivel de electrolito.

      Temporada de Lluvias: Protege los terminales de la humedad excesiva.

      Altitud: En ciudades altas como CDMX, las baterías pueden comportarse diferente.

      PRUEBAS BÁSICAS

      Prueba de Voltaje: Con el motor apagado, debe mostrar 12.6V o más.

      Prueba de Carga: Con el motor encendido, debe mostrar 13.5-14.5V.

      Prueba de Arranque: El voltaje no debe bajar de 10V durante el arranque.

      Prueba de Carga Lenta: Usa un cargador lento si la batería está baja.

      Herramientas Necesarias: Multímetro, limpiador de terminales, agua destilada.

      CUÁNDO REEMPLAZAR LA BATERÍA

      Edad: Después de 3-5 años, incluso si funciona bien.

      Fallas Repetidas: Si requiere carga frecuente o no mantiene la carga.

      Daño Físico: Carcasa agrietada, hinchada o terminales corroídos.

      Pruebas Fallidas: Si no pasa las pruebas de voltaje y carga.

      Recomendación del Fabricante: Sigue las especificaciones del manual.

      ELECCIÓN DE BATERÍA NUEVA

      Capacidad: Debe coincidir con las especificaciones del fabricante.

      Tipo: Considera tu tipo de uso y presupuesto.

      Marca: Elige marcas reconocidas con garantía en México.

      Instalación: Asegúrate de que la instalación sea correcta.

      Garantía: Verifica la cobertura y términos de garantía.

      HERRAMIENTAS Y MATERIALES

      Multímetro: Para medir voltaje y corriente.

      Limpiador de Terminales: Cepillo de alambre o herramienta especializada.

      Bicarbonato de Sodio: Para limpiar corrosión.

      Agua Destilada: Para baterías convencionales.

      Grasa para Terminales: Para prevenir corrosión futura.

      Guantes y Gafas: Para protección personal.

      CONSEJOS DE SEGURIDAD

      Trabajo en Área Ventilada: Los gases de la batería son explosivos.

      Sin Fuentes de Chispa: No fumes ni uses herramientas que generen chispas.

      Protección Personal: Usa guantes y gafas de seguridad.

      Orden de Desconexión: Primero negativo, luego positivo.

      Orden de Conexión: Primero positivo, luego negativo.

      El mantenimiento adecuado de la batería puede ahorrarte dinero y evitar inconvenientes. Una batería bien cuidada no solo dura más, sino que también proporciona un arranque confiable en cualquier condición climática.
    `,
    pros: [
      'Arranque confiable en todas las condiciones',
      'Mayor vida útil de la batería',
      'Ahorro en costos de reemplazo',
      'Prevención de fallas inesperadas',
      'Mejor rendimiento de accesorios eléctricos',
      'Reducción de corrosión en terminales',
      'Mantenimiento preventivo económico',
      'Tranquilidad al conducir'
    ],
    cons: [
      'Requiere inspección regular',
      'Necesita herramientas básicas',
      'Algunos tipos requieren mantenimiento especializado',
      'Puede ser peligroso si no se maneja correctamente',
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
              <Battery className="w-24 h-24 text-white mx-auto mb-4" />
              <span className="text-white font-bold text-lg">TIPS ELÉCTRICOS</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gti-black-800/50 rounded-lg p-6 text-center">
            <Battery className="w-8 h-8 text-gti-red-500 mx-auto mb-2" />
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

        {/* Tipos de Baterías */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Wrench className="w-6 h-6 text-gti-red-500 mr-2" />
            Tipos de Baterías para Autos
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Tipo</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Características</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Vida Útil</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Mantenimiento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Convencional</td>
                    <td className="px-6 py-4 text-sm text-white">Más económica, requiere mantenimiento</td>
                    <td className="px-6 py-4 text-sm text-white">3-4 años</td>
                    <td className="px-6 py-4 text-sm text-white">Revisar electrolito mensualmente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Libre Mantenimiento</td>
                    <td className="px-6 py-4 text-sm text-white">Sellada, sin mantenimiento</td>
                    <td className="px-6 py-4 text-sm text-white">4-5 años</td>
                    <td className="px-6 py-4 text-sm text-white">Solo limpieza de terminales</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">AGM</td>
                    <td className="px-6 py-4 text-sm text-white">Alto rendimiento, resistente</td>
                    <td className="px-6 py-4 text-sm text-white">5-7 años</td>
                    <td className="px-6 py-4 text-sm text-white">Mínimo mantenimiento</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Gel</td>
                    <td className="px-6 py-4 text-sm text-white">Máximo rendimiento, premium</td>
                    <td className="px-6 py-4 text-sm text-white">6-8 años</td>
                    <td className="px-6 py-4 text-sm text-white">Sin mantenimiento</td>
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
            Señales de Problemas en la Batería
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Señal</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Descripción</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Urgencia</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Solución</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Arranque Lento</td>
                    <td className="px-6 py-4 text-sm text-white">Motor tarda en arrancar</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                    <td className="px-6 py-4 text-sm text-white">Revisar carga y conexiones</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Luces Tenues</td>
                    <td className="px-6 py-4 text-sm text-white">Iluminación débil</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                    <td className="px-6 py-4 text-sm text-white">Verificar voltaje de batería</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Clicks Repetidos</td>
                    <td className="px-6 py-4 text-sm text-white">Sonido al girar llave</td>
                    <td className="px-6 py-4 text-sm text-red-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">Cargar o reemplazar batería</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Corrosión</td>
                    <td className="px-6 py-4 text-sm text-white">Acumulación en terminales</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                    <td className="px-6 py-4 text-sm text-white">Limpiar terminales</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Batería Hinchada</td>
                    <td className="px-6 py-4 text-sm text-white">Carcasa deformada</td>
                    <td className="px-6 py-4 text-sm text-red-400">Alta</td>
                    <td className="px-6 py-4 text-sm text-white">Reemplazar inmediatamente</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Olor a Huevo</td>
                    <td className="px-6 py-4 text-sm text-white">Gas sulfhídrico</td>
                    <td className="px-6 py-4 text-sm text-red-400">Crítica</td>
                    <td className="px-6 py-4 text-sm text-white">Reemplazar y ventilar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pruebas de Voltaje */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Gauge className="w-6 h-6 text-gti-red-500 mr-2" />
            Pruebas Básicas de Voltaje
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Prueba</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Condición</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Voltaje Correcto</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Interpretación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Reposo</td>
                    <td className="px-6 py-4 text-sm text-white">Motor apagado, 12+ horas</td>
                    <td className="px-6 py-4 text-sm text-white">12.6V o más</td>
                    <td className="px-6 py-4 text-sm text-white">Batería en buen estado</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Carga</td>
                    <td className="px-6 py-4 text-sm text-white">Motor encendido, ralentí</td>
                    <td className="px-6 py-4 text-sm text-white">13.5-14.5V</td>
                    <td className="px-6 py-4 text-sm text-white">Alternador funcionando</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Arranque</td>
                    <td className="px-6 py-4 text-sm text-white">Durante el arranque</td>
                    <td className="px-6 py-4 text-sm text-white">No menos de 10V</td>
                    <td className="px-6 py-4 text-sm text-white">Batería con buena capacidad</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Carga Lenta</td>
                    <td className="px-6 py-4 text-sm text-white">Con cargador externo</td>
                    <td className="px-6 py-4 text-sm text-white">14.4V máximo</td>
                    <td className="px-6 py-4 text-sm text-white">Carga controlada</td>
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
