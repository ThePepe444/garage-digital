import { Calendar, Clock, User, MapPin, Zap, Battery, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ventajas y Desventajas de los Autos Eléctricos en México 2025 | Garage Digital',
  description: 'Análisis completo de los pros y contras de los vehículos eléctricos en México. Costos, infraestructura, rendimiento y consideraciones para el mercado mexicano.',
  keywords: 'autos eléctricos México, ventajas desventajas vehículos eléctricos, infraestructura carga México, costos autos eléctricos, BYD Tesla México, movilidad eléctrica',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/articles/1',
  },
  openGraph: {
    title: 'Ventajas y Desventajas de los Autos Eléctricos en México 2025',
    description: 'Análisis completo de los pros y contras de los vehículos eléctricos en México.',
    type: 'article',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/articles/1',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/autos-electricos-ventajas-desventajas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ventajas y Desventajas de Autos Eléctricos en México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ventajas y Desventajas de los Autos Eléctricos en México 2025',
    description: 'Análisis completo de los pros y contras de los vehículos eléctricos en México.',
    images: ['/images/autos-electricos-ventajas-desventajas-twitter.jpg'],
  },
  category: 'Autos Eléctricos',
  other: {
    'article:section': 'Artículos',
    'article:tag': 'autos eléctricos, ventajas, desventajas, México, movilidad eléctrica',
  },
}

export default function VentajasDesventajasElectricosPage() {
  const article = {
    id: 1,
    title: 'Ventajas y Desventajas de los Autos Eléctricos en México 2025',
    excerpt: 'Análisis completo de los pros y contras de los vehículos eléctricos en México. Costos, infraestructura, rendimiento y consideraciones para el mercado mexicano.',
    category: 'Autos Eléctricos',
    readTime: '12 min',
    author: 'Emanuel P',
    views: '45.2k',
    trending: true,
    date: '2024-02-25',
    location: 'CDMX',
    content: `
      Los vehículos eléctricos están transformando la movilidad en México. Con marcas como **BYD, Tesla** y otras estableciéndose en el mercado mexicano, es crucial entender las ventajas y desventajas reales de estos vehículos en nuestro contexto nacional.

      El mercado mexicano de autos eléctricos ha experimentado un crecimiento significativo en 2024, con más de **15,000 unidades vendidas**, representando un aumento del **180%** respecto al año anterior. Sin embargo, la adopción masiva aún enfrenta desafíos únicos en México.

      ## Ventajas de los Autos Eléctricos en México

      ### Ahorro en Combustible
      - **Costo por kilómetro**: $0.50-1.00 MXN vs $3.50-4.50 MXN en gasolina
      - **Ahorro mensual promedio**: $2,000-4,000 MXN
      - **Recuperación de inversión**: 3-5 años
      - **Exención de verificación vehicular** en CDMX

      ### Mantenimiento Reducido
      - Sin cambios de aceite
      - Sin filtros de combustible
      - Sin correas de distribución
      - **Menos piezas móviles** = menos desgaste
      - **Ahorro anual en mantenimiento**: $8,000-15,000 MXN

      ### Beneficios Ambientales
      - **Cero emisiones directas**
      - Contribución a la calidad del aire
      - Cumplimiento con normativas ambientales
      - Acceso a programas de incentivos gubernamentales

      ### Experiencia de Conducción
      - **Aceleración instantánea** y suave
      - **Operación silenciosa**
      - Tecnología avanzada de serie
      - Conectividad y actualizaciones OTA

      ### Incentivos Gubernamentales
      - **Exención de tenencia vehicular** (CDMX)
      - Descuentos en peajes
      - Acceso a carriles exclusivos
      - Estacionamiento preferencial

      ## Desventajas de los Autos Eléctricos en México

      ### Infraestructura de Carga Limitada
      - **Solo 1,200 estaciones públicas** en todo el país
      - Concentración en **CDMX, Guadalajara y Monterrey**
      - **Tiempo de carga**: 30 minutos a 8 horas
      - Dependencia de la red eléctrica nacional

      ### Costo Inicial Elevado
      - **Precio base**: $400,000-1,500,000 MXN
      - **Seguro más caro**: +30-50% vs autos convencionales
      - **Costo de instalación de cargador doméstico**: $15,000-30,000 MXN
      - Depreciación inicial más rápida

      ### Limitaciones de Autonomía
      - **Autonomía real**: 200-500 km por carga
      - **Reducción en clima caliente**: -15-20%
      - Ansiedad de autonomía en viajes largos
      - Planificación de rutas necesaria

      ### Dependencia de la Red Eléctrica
      - **Apagones afectan la carga**
      - Tarifas eléctricas variables
      - Carga lenta en zonas rurales
      - Impacto en la red eléctrica nacional

      ### Tiempo de Carga
      - **Carga doméstica**: 6-12 horas
      - **Carga rápida**: 30-60 minutos
      - Colas en estaciones públicas
      - Planificación de viajes necesaria

      Análisis de Costos en México

      Costo Total de Propiedad (5 años)

      BYD Dolphin Mini (Base)
      - Precio: $399,000 MXN
      - Ahorro en combustible: $120,000 MXN
      - Ahorro en mantenimiento: $40,000 MXN
      - Costo total: $239,000 MXN

      Tesla Model 3 (Standard)
      - Precio: $1,200,000 MXN
      - Ahorro en combustible: $150,000 MXN
      - Ahorro en mantenimiento: $60,000 MXN
      - Costo total: $990,000 MXN

      Comparación con Autos Convencionales
      - Nissan Versa: $350,000 MXN + $180,000 MXN (combustible) = $530,000 MXN
      - VW Jetta: $450,000 MXN + $200,000 MXN (combustible) = $650,000 MXN

      Infraestructura de Carga en México

      Estaciones Públicas por Estado
      - Ciudad de México: 450 estaciones
      - Estado de México: 180 estaciones
      - Jalisco: 120 estaciones
      - Nuevo León: 100 estaciones
      - Querétaro: 80 estaciones
      - Resto del país: 270 estaciones

      Tipos de Carga Disponibles
      - Carga lenta (AC): 3-7 kW, 6-12 horas
      - Carga rápida (DC): 50-150 kW, 30-60 minutos
      - Carga ultrarrápida (DC): 250+ kW, 15-30 minutos

      Costos de Carga
      - Carga doméstica: $2-4 MXN por kWh
      - Carga pública: $8-15 MXN por kWh
      - Carga rápida: $12-25 MXN por kWh

      Consideraciones Específicas para México

      Clima y Rendimiento
      - Temperaturas altas reducen autonomía
      - Uso del aire acondicionado impacta la batería
      - Protección solar recomendada
      - Ventilación adecuada en garajes

      Carreteras y Topografía
      - Pendientes pronunciadas consumen más energía
      - Tráfico intenso favorece la regeneración
      - Baches pueden dañar la parte inferior
      - Necesidad de neumáticos especializados

      Aspectos Legales y Regulatorios
      - Normas de importación para vehículos usados
      - Regulaciones de carga en condominios
      - Seguros especializados requeridos
      - Certificaciones de seguridad necesarias

      Recomendaciones por Perfil de Usuario

      Para Uso Urbano (CDMX, Guadalajara, Monterrey)
      - Ideal para trayectos diarios de 50-100 km
      - Acceso a infraestructura de carga
      - Ahorro significativo en combustible
      - Beneficios de incentivos locales

      Para Viajes Interurbanos
      - Planificación de rutas necesaria
      - Autonomía de 400+ km recomendada
      - Carga rápida en carreteras principales
      - Considerar vehículo híbrido como alternativa

      Para Uso Rural
      - Instalación de cargador doméstico esencial
      - Autonomía extendida recomendada
      - Generador de respaldo sugerido
      - Considerar vehículo convencional

      Perspectivas Futuras para México

      Crecimiento del Mercado
      - Proyección 2025: 25,000 unidades vendidas
      - Nuevas marcas entrando al mercado
      - Precios más competitivos esperados
      - Mayor variedad de modelos

      Infraestructura en Desarrollo
      - 2,000 nuevas estaciones para 2025
      - Carga ultrarrápida en carreteras principales
      - Integración con energías renovables
      - Red inteligente de carga

      Incentivos Gubernamentales
      - Programas de subsidio en desarrollo
      - Exenciones fiscales ampliadas
      - Infraestructura pública gratuita
      - Normativas favorables

      Conclusión

      Los autos eléctricos en México ofrecen ventajas significativas en términos de ahorro, mantenimiento y beneficios ambientales, especialmente para uso urbano. Sin embargo, las limitaciones de infraestructura, costo inicial y autonomía requieren una evaluación cuidadosa según el perfil de uso.

      Para usuarios urbanos con acceso a carga doméstica y trayectos predecibles, los vehículos eléctricos representan una excelente opción. Para usuarios que requieren viajes largos frecuentes o viven en áreas con infraestructura limitada, un vehículo híbrido o convencional puede ser más práctico.

      La evolución del mercado mexicano hacia la electrificación es inevitable, pero el timing de la adopción debe basarse en necesidades específicas, presupuesto y acceso a infraestructura de carga.
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
                <Zap className="w-8 h-8 text-gti-blue-400" />
              </div>
              <div className="text-left">
                <span className="text-gti-blue-400 font-bold text-sm uppercase tracking-wider">
                  {article.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{article.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="block text-white">{article.title}</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('es-MX', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Battery className="w-4 h-4" />
                <span>{article.views} visualizaciones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('Ventajas de los Autos Eléctricos en México') || 
                    paragraph.startsWith('Desventajas de los Autos Eléctricos en México') ||
                    paragraph.startsWith('Análisis de Costos en México') ||
                    paragraph.startsWith('Infraestructura de Carga en México') ||
                    paragraph.startsWith('Consideraciones Específicas para México') ||
                    paragraph.startsWith('Recomendaciones por Perfil de Usuario') ||
                    paragraph.startsWith('Perspectivas Futuras para México') ||
                    paragraph.startsWith('Conclusión')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                      {paragraph}
                    </h2>
                  )
                } else if (paragraph.startsWith('Ahorro en Combustible') ||
                          paragraph.startsWith('Mantenimiento Reducido') ||
                          paragraph.startsWith('Beneficios Ambientales') ||
                          paragraph.startsWith('Experiencia de Conducción') ||
                          paragraph.startsWith('Incentivos Gubernamentales') ||
                          paragraph.startsWith('Infraestructura de Carga Limitada') ||
                          paragraph.startsWith('Costo Inicial Elevado') ||
                          paragraph.startsWith('Limitaciones de Autonomía') ||
                          paragraph.startsWith('Dependencia de la Red Eléctrica') ||
                          paragraph.startsWith('Tiempo de Carga') ||
                          paragraph.startsWith('Costo Total de Propiedad (5 años)') ||
                          paragraph.startsWith('Comparación con Autos Convencionales') ||
                          paragraph.startsWith('Estaciones Públicas por Estado') ||
                          paragraph.startsWith('Tipos de Carga Disponibles') ||
                          paragraph.startsWith('Costos de Carga') ||
                          paragraph.startsWith('Clima y Rendimiento') ||
                          paragraph.startsWith('Carreteras y Topografía') ||
                          paragraph.startsWith('Aspectos Legales y Regulatorios') ||
                          paragraph.startsWith('Para Uso Urbano') ||
                          paragraph.startsWith('Para Viajes Interurbanos') ||
                          paragraph.startsWith('Para Uso Rural') ||
                          paragraph.startsWith('Crecimiento del Mercado') ||
                          paragraph.startsWith('Infraestructura en Desarrollo') ||
                          paragraph.startsWith('Incentivos Gubernamentales')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-gti-blue-400 mt-6 mb-3">
                      {paragraph}
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
                  para la movilidad eléctrica en México.
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
