import { Calendar, Clock, User, MapPin, Wrench, Droplets, AlertTriangle, CheckCircle } from 'lucide-react'
import ManualWarning from '@/components/ManualWarning'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cómo Cambiar el Aceite del Motor: Guía Paso a Paso | Garage Digital',
  description: 'Aprende a cambiar el aceite de tu vehículo de forma segura y correcta. Guía completa con tipos de aceite recomendados para México, herramientas necesarias y cronograma de mantenimiento.',
  keywords: 'cambiar aceite motor, mantenimiento aceite auto, tipos aceite México, filtro aceite, cronograma mantenimiento, aceite motor recomendado, guía cambio aceite',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/tips/4',
  },
  openGraph: {
    title: 'Cómo Cambiar el Aceite del Motor: Guía Paso a Paso',
    description: 'Guía completa para cambiar el aceite de tu vehículo de forma segura. Tips específicos para México.',
    type: 'article',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/tips/4',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/cambio-aceite-motor-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía para cambiar aceite del motor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Cambiar el Aceite del Motor: Guía Paso a Paso',
    description: 'Guía completa para cambiar el aceite de tu vehículo de forma segura.',
    images: ['/images/cambio-aceite-motor-twitter.jpg'],
  },
  category: 'Automotive Tips',
  other: {
    'article:section': 'Tips de Mecánica',
    'article:tag': 'cambio aceite, mantenimiento motor, filtro aceite',
  },
}

export default function CambioAceitePage() {
  const tip = {
    id: 4,
    title: 'Cómo Cambiar el Aceite del Motor: Guía Paso a Paso',
    excerpt: 'Aprende a cambiar el aceite de tu vehículo de forma segura y correcta. Incluye tipos de aceite recomendados para México, herramientas necesarias y cronograma de mantenimiento.',
    category: 'Motor',
    readTime: '8 min',
    author: 'Emanuel P',
    views: '42.1k',
    trending: true,
    date: '2024-02-15',
    location: 'CDMX',
    content: `
      El cambio de aceite es uno de los mantenimientos más importantes para tu vehículo. En México, donde las condiciones climáticas y de manejo pueden ser extremas, es crucial mantener un cronograma regular de cambios de aceite para proteger el motor y garantizar un rendimiento óptimo.

      ## ¿Por qué es Importante el Cambio de Aceite?

      El aceite del motor cumple múltiples funciones esenciales:
      - **Lubricación**: Reduce la fricción entre las piezas móviles
      - **Refrigeración**: Ayuda a disipar el calor del motor
      - **Limpieza**: Transporta partículas y residuos al filtro
      - **Protección**: Previene la corrosión y el desgaste

      ## Tipos de Aceite Recomendados para México

      ### Aceites Convencionales
      - **Viscosidad**: 10W-30, 10W-40
      - **Cambio**: Cada 5,000 km o 3 meses
      - **Ideal para**: Vehículos con más de 100,000 km

      ### Aceites Sintéticos
      - **Viscosidad**: 5W-30, 5W-40
      - **Cambio**: Cada 10,000 km o 6 meses
      - **Ideal para**: Vehículos nuevos y de alto rendimiento

      ### Aceites Semi-Sintéticos
      - **Viscosidad**: 10W-30, 10W-40
      - **Cambio**: Cada 7,500 km o 4 meses
      - **Ideal para**: Equilibrio entre costo y rendimiento

      ## Herramientas Necesarias

      ### Herramientas Básicas
      - Llave para filtro de aceite
      - Llave de tuercas o llave de tubo
      - Embudo para aceite
      - Guantes de trabajo
      - Gafas de seguridad

      ### Herramientas Adicionales
      - Gato hidráulico o rampas
      - Soporte de seguridad
      - Contenedor para aceite usado
      - Trapos o papel absorbente

      ## Proceso Paso a Paso

      ### 1. Preparación
      - Estaciona el vehículo en terreno nivelado
      - Asegúrate de que el motor esté frío
      - Coloca el gato o rampas de forma segura
      - Usa soportes de seguridad

      ### 2. Drenado del Aceite
      - Localiza el tapón de drenaje en el cárter
      - Coloca el contenedor debajo del tapón
      - Retira el tapón con cuidado
      - Deja drenar completamente (15-20 minutos)

      ### 3. Cambio del Filtro
      - Localiza el filtro de aceite
      - Usa la llave especial para retirarlo
      - Limpia la superficie de contacto
      - Aplica aceite nuevo en la junta del filtro
      - Instala el filtro nuevo (aprieta a mano + 3/4 de vuelta)

      ### 4. Llenado de Aceite
      - Reinstala el tapón de drenaje
      - Vierte el aceite nuevo usando el embudo
      - Verifica el nivel con la varilla
      - Arranca el motor por 30 segundos
      - Verifica el nivel nuevamente

      ## Cronograma de Mantenimiento

      ### Vehículos en Ciudad (CDMX, Guadalajara, Monterrey)
      - **Aceite convencional**: Cada 4,000 km
      - **Aceite sintético**: Cada 8,000 km
      - **Filtro de aceite**: En cada cambio

      ### Vehículos en Carretera
      - **Aceite convencional**: Cada 5,000 km
      - **Aceite sintético**: Cada 10,000 km
      - **Filtro de aceite**: En cada cambio

      ### Condiciones Extremas
      - **Polvo excesivo**: Reducir intervalos en 25%
      - **Tráfico intenso**: Reducir intervalos en 20%
      - **Clima muy caliente**: Usar aceite de mayor viscosidad

      ## Señales de que Necesitas Cambiar el Aceite

      ### Indicadores Visuales
      - Aceite muy oscuro o negro
      - Consistencia espesa o grumosa
      - Nivel bajo en la varilla
      - Luces de advertencia en el tablero

      ### Indicadores de Rendimiento
      - Motor más ruidoso
      - Menor rendimiento de combustible
      - Humo excesivo del escape
      - Vibraciones anormales

      ## Errores Comunes a Evitar

      ### Errores de Cantidad
      - Agregar demasiado aceite
      - No agregar suficiente aceite
      - No verificar el nivel después del cambio

      ### Errores de Calidad
      - Mezclar diferentes tipos de aceite
      - Usar aceite de viscosidad incorrecta
      - No cambiar el filtro de aceite

      ### Errores de Procedimiento
      - Cambiar aceite con motor caliente
      - No limpiar la superficie del filtro
      - Apretar demasiado el filtro

      ## Disposición del Aceite Usado

      ### Opciones de Reciclaje
      - Llevar a centros de reciclaje autorizados
      - Entregar en talleres mecánicos
      - Usar servicios de recolección municipal
      - **Nunca** verter en drenajes o suelo

      ## Costos Aproximados en México

      ### Aceite Convencional
      - **Aceite**: $200-400 MXN (4-5 litros)
      - **Filtro**: $150-300 MXN
      - **Total**: $350-700 MXN

      ### Aceite Sintético
      - **Aceite**: $400-800 MXN (4-5 litros)
      - **Filtro**: $150-300 MXN
      - **Total**: $550-1,100 MXN

      ### Servicio en Taller
      - **Cambio básico**: $500-800 MXN
      - **Cambio premium**: $800-1,200 MXN

      ## Beneficios del Mantenimiento Regular

      ### Beneficios Técnicos
      - Mayor vida útil del motor
      - Mejor rendimiento de combustible
      - Reducción de emisiones contaminantes
      - Menor desgaste de componentes

      ### Beneficios Económicos
      - Menor costo de reparaciones
      - Mayor valor de reventa
      - Menor consumo de combustible
      - Reducción de averías inesperadas

      ## Consejos Específicos para México

      ### Clima Caliente
      - Usar aceites de mayor viscosidad en verano
      - Verificar niveles más frecuentemente
      - Proteger el motor del sol excesivo

      ### Carreteras con Polvo
      - Cambiar filtro de aire más frecuentemente
      - Usar aceites de mayor calidad
      - Limpiar el compartimento del motor

      ### Tráfico Intenso
      - Reducir intervalos de cambio
      - Usar aceites sintéticos
      - Verificar temperatura del motor

      El cambio de aceite regular es una inversión en la salud y longevidad de tu vehículo. Con esta guía, podrás realizar este mantenimiento de forma segura y efectiva, adaptándolo a las condiciones específicas de manejo en México.
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
                <Droplets className="w-8 h-8 text-gti-blue-400" />
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
