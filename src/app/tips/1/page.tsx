import Link from 'next/link'
import { ArrowLeft, Wrench, Clock, User, MapPin, Calendar, Eye, Sun, CloudRain, Droplets } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'

export default function TipPage() {
  const tip = {
    id: 1,
    title: 'Cómo Proteger tu Auto del Clima Mexicano: Lluvia y Sol',
    excerpt: 'Tips específicos para proteger tu vehículo de las condiciones climáticas extremas de México: lluvias torrenciales, sol intenso y humedad.',
    category: 'Mantenimiento',
    readTime: '6 min',
    author: 'Emanuel P',
    views: '18.5k',
    date: '2024-01-15',
    location: 'CDMX',
    fullContent: `
      México presenta condiciones climáticas únicas que pueden afectar significativamente tu vehículo. Desde el sol intenso del norte hasta las lluvias torrenciales del sur, es crucial proteger tu auto adecuadamente.

      PROTECCIÓN CONTRA EL SOL INTENSO

      El sol mexicano puede ser extremadamente dañino para tu vehículo, especialmente en estados como Sonora, Chihuahua y Baja California.

      Protección de la Pintura:
      - Aplica cera cada 3 meses: La cera actúa como protector solar para la pintura
      - Usa protectores solares: Cubre el tablero y asientos cuando estaciones al sol
      - Lava regularmente: El polvo y la arena pueden rayar la pintura
      - Considera un toldo: Si no tienes garaje, un toldo puede proteger significativamente

      Protección del Interior:
      - Usa parasoles: Coloca parasoles en el parabrisas y ventanas laterales
      - Cubre los asientos: Usa fundas o toallas para proteger los asientos
      - Mantén el aire acondicionado: Revisa el sistema de A/C regularmente
      - Hidrata las gomas: Aplica productos especiales en las gomas de puertas y ventanas

      PROTECCIÓN CONTRA LA LLUVIA

      La temporada de lluvias en México puede ser especialmente agresiva, especialmente en el centro y sur del país.

      Mantenimiento Preventivo:
      - Revisa las llantas: Asegúrate de que tengan suficiente dibujo (mínimo 1.6mm)
      - Limpia los faros: Mantén los faros y luces traseras limpios y funcionando
      - Verifica los limpiaparabrisas: Cambia las gomas cada 6 meses
      - Revisa el sistema de drenaje: Asegúrate de que no haya obstrucciones

      Durante la Lluvia:
      - Reduce la velocidad: Maneja más lento en carreteras mojadas
      - Mantén distancia: Aumenta la distancia con el vehículo de adelante
      - Usa las luces: Enciende las luces de cruce, no las altas
      - Evita charcos: No pases por charcos de los que no conoces la profundidad

      PROTECCIÓN CONTRA LA HUMEDAD

      La humedad alta en zonas costeras puede causar corrosión y problemas eléctricos.

      Prevención de Corrosión:
      - Lava regularmente: Especialmente después de manejar cerca del mar
      - Aplica anticorrosivo: Usa productos especiales en la carrocería
      - Revisa el sistema de escape: La humedad puede corroer el escape
      - Mantén limpio el motor: Limpia regularmente el compartimiento del motor

      Protección Eléctrica:
      - Revisa las conexiones: Asegúrate de que todas las conexiones estén secas
      - Usa dieléctrico: Aplica grasa dieléctrica en las conexiones eléctricas
      - Mantén la batería seca: Limpia los terminales de la batería regularmente
      - Revisa las luces: Asegúrate de que todas las luces funcionen correctamente

      MANTENIMIENTO ESTACIONAL

      Antes de la Temporada de Lluvias (Mayo):
      - Cambia el aceite y filtros
      - Revisa el sistema de frenos
      - Verifica el sistema de enfriamiento
      - Revisa las llantas y alineación

      Antes del Verano (Marzo):
      - Revisa el sistema de aire acondicionado
      - Verifica el sistema de enfriamiento
      - Cambia el líquido de frenos si es necesario
      - Revisa la batería

      PRODUCTOS RECOMENDADOS PARA MÉXICO

      Para Protección Solar:
      - Cera Meguiar's: Excelente para proteger la pintura
      - Protectores solares 3M: Para el tablero y asientos
      - Toldos automotrices: Varias marcas disponibles en México

      Para Protección contra Lluvia:
      - Líquido limpiaparabrisas: Usa productos de calidad
      - Gomas de limpiaparabrisas: Marcas como Bosch o Trico
      - Anticorrosivo: Productos especializados para México

      CONSEJOS ESPECÍFICOS POR REGIÓN

      Norte de México:
      - Protección extrema contra el sol
      - Mantenimiento frecuente del sistema de enfriamiento
      - Uso de protectores solares todo el año

      Centro de México:
      - Preparación para temporada de lluvias
      - Protección contra la contaminación urbana
      - Mantenimiento del sistema de frenos

      Sur de México:
      - Protección contra humedad alta
      - Mantenimiento frecuente contra corrosión
      - Preparación para lluvias intensas

      CONCLUSIÓN

      Proteger tu vehículo del clima mexicano requiere un enfoque integral que considere las condiciones específicas de tu región. Con el mantenimiento adecuado y los productos correctos, puedes mantener tu auto en excelente condición sin importar el clima.

      Recuerda que la prevención es siempre más económica que la reparación, especialmente en un país con condiciones climáticas tan variadas como México.
    `,
    quickTips: [
      'Aplica cera cada 3 meses para proteger la pintura del sol',
      'Usa parasoles y protectores solares en el interior',
      'Revisa las llantas antes de la temporada de lluvias',
      'Mantén limpios los faros y luces traseras',
      'Aplica anticorrosivo en zonas costeras',
      'Lava regularmente, especialmente después de manejar cerca del mar'
    ]
  }

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Header */}
      <div className="hero-gradient text-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/tips"
            className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Tips</span>
          </Link>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gti-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {tip.category}
            </span>
            <div className="flex items-center space-x-4 text-gray-300 text-sm">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{tip.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{tip.views}</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4">
            {tip.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{tip.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{tip.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{tip.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-gti-red-600 to-gti-red-800 rounded-xl p-8 text-center">
            <Wrench className="w-20 h-20 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">TIPS TÉCNICOS</h2>
            <p className="text-gray-200">{tip.excerpt}</p>
          </div>
        </div>

        {/* Aviso Importante */}
        <ManualWarning />

        {/* Quick Tips */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Sun className="w-6 h-6 text-yellow-400 mr-2" />
            Tips Rápidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tip.quickTips.map((quickTip, index) => (
              <div key={index} className="bg-gti-black-800/50 rounded-lg p-4 border border-gti-red-500/20">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gti-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{quickTip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Climate Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 text-center">
            <Sun className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-yellow-400 mb-2">Protección Solar</h3>
            <p className="text-gray-300 text-sm">Tips para proteger tu auto del sol intenso mexicano</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 text-center">
            <CloudRain className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-blue-400 mb-2">Temporada de Lluvias</h3>
            <p className="text-gray-300 text-sm">Preparación para las lluvias torrenciales</p>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6 text-center">
            <Droplets className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-cyan-400 mb-2">Protección Humedad</h3>
            <p className="text-gray-300 text-sm">Prevención de corrosión en zonas costeras</p>
          </div>
        </div>

        {/* Full Content */}
        <div className="prose prose-invert max-w-none">
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
