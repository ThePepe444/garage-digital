import { Calendar, Clock, User, MapPin, Wrench, AlertTriangle, CheckCircle, Gauge } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cómo Detectar y Solucionar Problemas de Neumáticos | Garage Digital',
  description: 'Guía completa para identificar desgaste irregular, problemas de alineación, presión incorrecta y cuándo cambiar tus neumáticos. Especialmente importante para las carreteras mexicanas.',
  keywords: 'problemas neumáticos, desgaste neumáticos, alineación auto, presión neumáticos, rotación neumáticos, cambio neumáticos México, mantenimiento neumáticos',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/tips/5',
  },
  openGraph: {
    title: 'Cómo Detectar y Solucionar Problemas de Neumáticos',
    description: 'Guía completa para identificar y solucionar problemas de neumáticos. Tips específicos para México.',
    type: 'article',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/tips/5',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/problemas-neumaticos-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía para detectar problemas de neumáticos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Detectar y Solucionar Problemas de Neumáticos',
    description: 'Guía completa para identificar y solucionar problemas de neumáticos.',
    images: ['/images/problemas-neumaticos-twitter.jpg'],
  },
  category: 'Automotive Tips',
  other: {
    'article:section': 'Tips de Mecánica',
    'article:tag': 'neumáticos, alineación, presión, desgaste',
  },
}

export default function ProblemasNeumaticosPage() {
  const tip = {
    id: 5,
    title: 'Cómo Detectar y Solucionar Problemas de Neumáticos',
    excerpt: 'Guía completa para identificar desgaste irregular, problemas de alineación, presión incorrecta y cuándo cambiar tus neumáticos. Especialmente importante para las carreteras mexicanas.',
    category: 'Neumáticos',
    readTime: '7 min',
    author: 'Emanuel P',
    views: '38.7k',
    trending: true,
    date: '2024-02-20',
    location: 'CDMX',
    content: `
      Los neumáticos son el único punto de contacto entre tu vehículo y la carretera. En México, donde las condiciones de las carreteras pueden ser variables, es crucial mantener los neumáticos en perfecto estado para garantizar seguridad, rendimiento y eficiencia de combustible.

      Importancia del Mantenimiento de Neumáticos

      Los neumáticos en buen estado proporcionan:
      - Seguridad: Mejor tracción y frenado
      - Eficiencia: Menor consumo de combustible
      - Comodidad: Mejor manejo y confort
      - Economía: Mayor duración y menor desgaste

      Tipos de Desgaste y sus Causas

      Desgaste Central
      - Causa: Presión excesiva
      - Síntoma: Banda de rodamiento desgastada en el centro
      - Solución: Reducir presión a la recomendada

      Desgaste en los Bordes
      - Causa: Presión insuficiente
      - Síntoma: Desgaste en los lados exteriores
      - Solución: Aumentar presión a la recomendada

      Desgaste Irregular
      - Causa: Problemas de alineación
      - Síntoma: Patrones de desgaste asimétricos
      - Solución: Realizar alineación y balanceo

      Desgaste en Escamas
      - Causa: Problemas de suspensión
      - Síntoma: Desgaste en forma de escamas
      - Solución: Revisar amortiguadores y suspensión

      Presión Correcta de Neumáticos

      Cómo Verificar la Presión
      - Usar un manómetro de calidad
      - Verificar con neumáticos fríos
      - Revisar la presión recomendada en el manual
      - Verificar mensualmente

      Presiones Recomendadas por Tipo de Vehículo

      Sedanes Compactos (Nissan Versa, Honda City)
      - Delanteros: 32-35 PSI
      - Traseros: 30-33 PSI
      - Verificación: Cada 2 semanas

      Sedanes Medianos (VW Jetta, Toyota Corolla)
      - Delanteros: 35-38 PSI
      - Traseros: 33-36 PSI
      - Verificación: Cada 2 semanas

      SUVs y Crossovers
      - Delanteros: 38-42 PSI
      - Traseros: 36-40 PSI
      - Verificación: Cada 2 semanas

      Rotación de Neumáticos

      Patrón de Rotación Recomendado
      - Tracción delantera: Cruzar traseros hacia adelante
      - Tracción trasera: Cruzar delanteros hacia atrás
      - Tracción 4x4: Rotación cruzada completa
      - Frecuencia: Cada 10,000 km

      Beneficios de la Rotación
      - Desgaste uniforme
      - Mayor duración
      - Mejor rendimiento
      - Ahorro de dinero

      Inspección Visual de Neumáticos

      Elementos a Revisar
      - Profundidad de la banda: Mínimo 1.6 mm
      - Grietas o cortes: En la banda y laterales
      - Bultos o deformaciones: En la estructura
      - Objetos incrustados: Clavos, tornillos, piedras

      Prueba de la Moneda
      - Usar una moneda de $1 peso
      - Insertar en la banda de rodamiento
      - Si se ve la cabeza completa, cambiar neumático
      - Profundidad mínima: 1.6 mm

      Problemas Comunes en México

      Carreteras con Baches
      - Problema: Daños por impacto
      - Síntoma: Bultos en los laterales
      - Prevención: Reducir velocidad en baches
      - Solución: Cambiar neumático dañado

      Clima Caliente
      - Problema: Desgaste acelerado
      - Síntoma: Banda de rodamiento blanda
      - Prevención: Usar neumáticos de verano
      - Solución: Verificar presión más frecuentemente

      Polvo y Arena
      - Problema: Desgaste abrasivo
      - Síntoma: Banda de rodamiento lisa
      - Prevención: Limpiar neumáticos regularmente
      - Solución: Usar neumáticos de mayor calidad

      Cuándo Cambiar los Neumáticos

      Indicadores de Desgaste
      - Profundidad: Menos de 1.6 mm
      - Edad: Más de 6 años
      - Daños: Grietas, bultos, cortes
      - Desgaste irregular: Después de alineación

      Señales de Advertencia
      - Vibraciones en el volante
      - Ruido excesivo al rodar
      - Dificultad para mantener dirección
      - Mayor distancia de frenado

      Tipos de Neumáticos para México

      Neumáticos de Verano
      - Ideal para: Clima cálido y seco
      - Ventajas: Mejor tracción en seco
      - Desventajas: Menor rendimiento en lluvia
      - Recomendado: Todo el año en México

      Neumáticos Todo Clima
      - Ideal para: Variaciones climáticas
      - Ventajas: Versatilidad
      - Desventajas: Compromiso en rendimiento
      - Recomendado: Para uso general

      Neumáticos de Alto Rendimiento
      - Ideal para: Vehículos deportivos
      - Ventajas: Mejor manejo
      - Desventajas: Mayor desgaste
      - Recomendado: VW Jetta GLI, autos deportivos

      Costos de Mantenimiento en México

      Servicios Básicos
      - Verificación de presión: Gratis
      - Rotación: $200-400 MXN
      - Balanceo: $300-500 MXN
      - Alineación: $400-800 MXN

      Neumáticos por Categoría
      - Económicos: $1,500-2,500 MXN c/u
      - Medios: $2,500-4,000 MXN c/u
      - Premium: $4,000-6,000 MXN c/u
      - Deportivos: $5,000-8,000 MXN c/u

      Mantenimiento Preventivo

      Rutina Semanal
      - Verificar presión visualmente
      - Inspeccionar daños obvios
      - Limpiar neumáticos
      - Revisar objetos incrustados

      Rutina Mensual
      - Medir presión con manómetro
      - Inspección detallada
      - Verificar profundidad
      - Limpieza profunda

      Rutina Trimestral
      - Rotación de neumáticos
      - Balanceo
      - Alineación
      - Inspección profesional

      Consejos de Conducción

      Para Prolongar la Vida
      - Evitar frenadas bruscas
      - No acelerar en curvas
      - Mantener velocidad constante
      - Evitar sobrecarga del vehículo

      En Condiciones Adversas
      - Reducir velocidad en lluvia
      - Aumentar distancia de seguimiento
      - Evitar maniobras bruscas
      - Usar neumáticos apropiados

      Tecnologías Modernas

      Sistemas TPMS
      - Función: Monitoreo de presión
      - Ventaja: Alerta temprana
      - Mantenimiento: Verificar sensores
      - Costo: $500-1,000 MXN por sensor

      Neumáticos Run-Flat
      - Función: Rodar sin aire
      - Ventaja: Seguridad adicional
      - Desventaja: Mayor costo
      - Recomendado: Vehículos premium

      El mantenimiento adecuado de los neumáticos no solo garantiza tu seguridad, sino que también mejora el rendimiento de tu vehículo y reduce los costos de operación. Con esta guía, podrás identificar problemas temprano y mantener tus neumáticos en óptimas condiciones para las carreteras mexicanas.
    `
  }

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gti-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <Gauge className="w-8 h-8 text-gti-blue-400" />
              </div>
              <div className="text-left">
                <span className="text-gti-blue-400 font-bold text-sm uppercase tracking-wider">
                  {tip.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tip.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{tip.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{tip.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="block text-white">{tip.title}</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {tip.excerpt}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(tip.date).toLocaleDateString('es-MX', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="w-4 h-4" />
                <span>{tip.views} visualizaciones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ManualWarning />
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              {tip.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-gti-blue-400 mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('#### ')) {
                  return (
                    <h4 key={index} className="text-lg font-bold text-gti-orange-400 mt-4 mb-2">
                      {paragraph.replace('#### ', '')}
                    </h4>
                  )
                } else if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-gti-blue-500/20">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gti-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-gti-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Fanático de los automóviles</h3>
                <p className="text-gray-300 mb-4">
                  Especialista en análisis automotriz con experiencia en el mercado mexicano. 
                  Comprometido con brindar información técnica precisa y consejos prácticos 
                  para el mantenimiento de vehículos en condiciones locales.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>México</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Experiencia: 10+ años</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
