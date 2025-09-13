import Link from 'next/link'
import { Star, ArrowLeft, Car, Fuel, Gauge, MapPin, Calendar, User, Clock, Eye, Wrench } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'

export default function TipPage() {
  const tip = {
    id: 4,
    title: 'Cómo Ahorrar Combustible en el Tráfico de México',
    excerpt: 'Estrategias prácticas para optimizar el consumo de combustible en las condiciones de tráfico pesado de las ciudades mexicanas y carreteras nacionales.',
    category: 'Eficiencia',
    readTime: '6 min',
    author: 'Emanuel P',
    views: '28.7k',
    date: '2024-01-30',
    location: 'CDMX',
    fullContent: `
      El ahorro de combustible es una preocupación constante para los conductores mexicanos, especialmente considerando los precios fluctuantes y el tráfico pesado en las principales ciudades. Con las técnicas adecuadas, puedes reducir significativamente tu consumo de gasolina.

      FACTORES QUE AFECTAN EL CONSUMO EN MÉXICO

      El consumo de combustible en México se ve afectado por varios factores únicos:

      Tráfico Pesado: Las ciudades como CDMX, Guadalajara y Monterrey tienen tráfico denso que aumenta el consumo
      Altitud: La CDMX está a 2,240m sobre el nivel del mar, afectando la eficiencia del motor
      Calidad del Combustible: La calidad variable del combustible mexicano puede afectar el rendimiento
      Clima: El calor extremo y la humedad requieren más uso del aire acondicionado
      Topografía: Las pendientes pronunciadas en ciudades como Puebla y Oaxaca aumentan el consumo

      TÉCNICAS DE CONDUCCIÓN EFICIENTE

      Conducción Suave: Evita aceleraciones bruscas y frenadas repentinas. Acelera gradualmente y mantén una velocidad constante.

      Anticipación: Observa el tráfico adelante para anticipar cambios de velocidad y reducir frenadas innecesarias.

      Velocidad Constante: En carretera, mantén una velocidad constante entre 80-100 km/h para máxima eficiencia.

      Uso del Embrague: En vehículos manuales, cambia de marcha entre 2,000-2,500 RPM para máxima eficiencia.

      Distancia de Seguridad: Mantén suficiente distancia para evitar frenadas de emergencia.

      OPTIMIZACIÓN DEL VEHÍCULO

      Mantenimiento Regular: Un vehículo bien mantenido consume menos combustible.

      Presión de Llantas: Llantas con la presión correcta reducen la resistencia al rodamiento.

      Filtros Limpios: Filtros de aire y combustible sucios reducen la eficiencia.

      Peso del Vehículo: Elimina peso innecesario del vehículo.

      Aerodinámica: Evita portaequipajes y accesorios que aumenten la resistencia al viento.

      USO DEL AIRE ACONDICIONADO

      El aire acondicionado puede aumentar el consumo hasta 20%:

      Usa el aire acondicionado solo cuando sea necesario
      En ciudad, abre las ventanas a velocidades bajas
      En carretera, usa el aire acondicionado en lugar de ventanas abiertas
      Mantén el sistema de aire acondicionado en buen estado
      Considera usar el modo recirculación en tráfico pesado

      PLANIFICACIÓN DE RUTAS

      Evita Horas Pico: Si es posible, evita conducir durante las horas de mayor tráfico.

      Rutas Alternativas: Conoce rutas alternativas para evitar congestionamientos.

      Aplicaciones de Tráfico: Usa Waze, Google Maps o aplicaciones similares para encontrar rutas más eficientes.

      Combinación de Viajes: Planifica varios recados en un solo viaje.

      Uso de Transporte Público: Considera el transporte público para distancias cortas.

      CONDUCCIÓN EN DIFERENTES CONDICIONES

      En Ciudad: Mantén una velocidad constante, evita aceleraciones bruscas y usa el freno motor.

      En Carretera: Usa la velocidad crucero cuando sea posible y mantén una velocidad constante.

      En Pendientes: Acelera antes de subir y usa el freno motor al bajar.

      En Lluvia: Reduce la velocidad y evita frenadas bruscas.

      En Calor: Usa el aire acondicionado de forma eficiente y estaciona en la sombra.

      TECNOLOGÍAS DE AHORRO

      Sistemas Start-Stop: Apagan el motor automáticamente en paradas largas.

      Modo Eco: Muchos vehículos modernos tienen un modo económico que optimiza el rendimiento.

      Indicadores de Eficiencia: Usa los indicadores de consumo en tiempo real.

      Aplicaciones de Monitoreo: Apps como Fuelly te ayudan a trackear tu consumo.

      HÁBITOS DE CONDUCCIÓN

      Calentamiento del Motor: No necesitas calentar el motor en frío, conduce suavemente los primeros minutos.

      Apagado del Motor: Apaga el motor en paradas de más de 30 segundos.

      Uso de Marchas: En vehículos manuales, usa la marcha más alta posible sin forzar el motor.

      Velocidad de Crucero: En carretera, usa el control de velocidad crucero.

      Anticipación: Observa el tráfico y planifica tus movimientos con anticipación.

      MANTENIMIENTO ESPECÍFICO PARA AHORRO

      Aceite del Motor: Usa el aceite recomendado por el fabricante.

      Filtros: Cambia los filtros de aire y combustible según las recomendaciones.

      Bujías: Mantén las bujías en buen estado para una combustión eficiente.

      Sistema de Inyección: Limpia el sistema de inyección periódicamente.

      Llantas: Mantén las llantas infladas correctamente y alineadas.

      CONSEJOS ESPECÍFICOS PARA MÉXICO

      Combustible Premium: En algunos vehículos, el combustible premium puede mejorar la eficiencia.

      Horarios de Repostaje: Evita repostar durante las horas pico cuando las estaciones están llenas.

      Estaciones de Confianza: Usa estaciones de combustible confiables para mejor calidad.

      Monitoreo de Precios: Usa apps para encontrar las estaciones con mejores precios.

      Mantenimiento Local: Usa talleres confiables que conozcan tu vehículo.

      El ahorro de combustible no solo beneficia tu bolsillo, sino que también reduce las emisiones contaminantes. En México, donde el tráfico puede ser desafiante, estas técnicas te ayudarán a optimizar el rendimiento de tu vehículo y ahorrar dinero en combustible.
    `,
    pros: [
      'Ahorro significativo en gastos de combustible',
      'Reducción de emisiones contaminantes',
      'Menor desgaste del vehículo con conducción suave',
      'Mejor experiencia de conducción',
      'Aplicable a cualquier tipo de vehículo',
      'Técnicas fáciles de implementar',
      'Beneficios inmediatos en el consumo',
      'Contribución al medio ambiente'
    ],
    cons: [
      'Requiere cambio de hábitos de conducción',
      'Puede requerir inversión inicial en mantenimiento',
      'Técnicas requieren práctica para dominarlas',
      'Algunas técnicas pueden aumentar el tiempo de viaje',
      'Depende de las condiciones del tráfico',
      'Requiere disciplina constante'
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
              <Fuel className="w-24 h-24 text-white mx-auto mb-4" />
              <span className="text-white font-bold text-lg">TIPS DE EFICIENCIA</span>
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

        {/* Factores que Afectan el Consumo */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Car className="w-6 h-6 text-gti-red-500 mr-2" />
            Factores que Afectan el Consumo en México
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Factor</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Impacto en Consumo</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Solución</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Ahorro Potencial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Tráfico Pesado</td>
                    <td className="px-6 py-4 text-sm text-white">+30-50%</td>
                    <td className="px-6 py-4 text-sm text-white">Evitar horas pico, rutas alternativas</td>
                    <td className="px-6 py-4 text-sm text-green-400">15-25%</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Altitud (CDMX)</td>
                    <td className="px-6 py-4 text-sm text-white">+10-15%</td>
                    <td className="px-6 py-4 text-sm text-white">Mantenimiento del motor, filtros limpios</td>
                    <td className="px-6 py-4 text-sm text-green-400">5-10%</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Aire Acondicionado</td>
                    <td className="px-6 py-4 text-sm text-white">+15-20%</td>
                    <td className="px-6 py-4 text-sm text-white">Uso eficiente, mantenimiento</td>
                    <td className="px-6 py-4 text-sm text-green-400">10-15%</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Presión de Llantas</td>
                    <td className="px-6 py-4 text-sm text-white">+5-10%</td>
                    <td className="px-6 py-4 text-sm text-white">Revisión cada 15 días</td>
                    <td className="px-6 py-4 text-sm text-green-400">3-7%</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Peso Extra</td>
                    <td className="px-6 py-4 text-sm text-white">+2-5% por 100kg</td>
                    <td className="px-6 py-4 text-sm text-white">Eliminar peso innecesario</td>
                    <td className="px-6 py-4 text-sm text-green-400">2-5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Técnicas de Conducción */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Gauge className="w-6 h-6 text-gti-red-500 mr-2" />
            Técnicas de Conducción Eficiente
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Técnica</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Descripción</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Ahorro</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Dificultad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Conducción Suave</td>
                    <td className="px-6 py-4 text-sm text-white">Aceleración gradual, frenado suave</td>
                    <td className="px-6 py-4 text-sm text-green-400">10-15%</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Anticipación</td>
                    <td className="px-6 py-4 text-sm text-white">Observar tráfico, planificar movimientos</td>
                    <td className="px-6 py-4 text-sm text-green-400">5-10%</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Velocidad Constante</td>
                    <td className="px-6 py-4 text-sm text-white">Mantener velocidad uniforme</td>
                    <td className="px-6 py-4 text-sm text-green-400">8-12%</td>
                    <td className="px-6 py-4 text-sm text-green-400">Fácil</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Uso de Marchas</td>
                    <td className="px-6 py-4 text-sm text-white">Cambiar entre 2,000-2,500 RPM</td>
                    <td className="px-6 py-4 text-sm text-green-400">5-8%</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Apagado del Motor</td>
                    <td className="px-6 py-4 text-sm text-white">Apagar en paradas >30 segundos</td>
                    <td className="px-6 py-4 text-sm text-green-400">3-5%</td>
                    <td className="px-6 py-4 text-sm text-green-400">Fácil</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Uso del Aire Acondicionado */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Fuel className="w-6 h-6 text-gti-red-500 mr-2" />
            Uso Eficiente del Aire Acondicionado
          </h3>
          <div className="bg-gti-black-800/50 rounded-xl overflow-hidden border border-gti-red-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gti-red-500/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Situación</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Recomendación</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Ahorro</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Comodidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gti-red-500/10">
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Velocidad < 60 km/h</td>
                    <td className="px-6 py-4 text-sm text-white">Abrir ventanas</td>
                    <td className="px-6 py-4 text-sm text-green-400">10-15%</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Velocidad > 60 km/h</td>
                    <td className="px-6 py-4 text-sm text-white">Usar aire acondicionado</td>
                    <td className="px-6 py-4 text-sm text-green-400">5-10%</td>
                    <td className="px-6 py-4 text-sm text-green-400">Alta</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Tráfico Pesado</td>
                    <td className="px-6 py-4 text-sm text-white">Modo recirculación</td>
                    <td className="px-6 py-4 text-sm text-green-400">3-5%</td>
                    <td className="px-6 py-4 text-sm text-green-400">Alta</td>
                  </tr>
                  <tr className="hover:bg-gti-black-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">Temperatura Moderada</td>
                    <td className="px-6 py-4 text-sm text-white">Solo ventilador</td>
                    <td className="px-6 py-4 text-sm text-green-400">8-12%</td>
                    <td className="px-6 py-4 text-sm text-yellow-400">Media</td>
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
