import { Calendar, Clock, User, MapPin, Car, Star, Battery, DollarSign, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mejores Autos Eléctricos en México 2025: Guía de Compra | Garage Digital',
  description: 'Ranking de los mejores vehículos eléctricos disponibles en México para 2025. Precios, autonomía, características y recomendaciones por presupuesto.',
  keywords: 'mejores autos eléctricos México 2025, BYD Tesla México, ranking autos eléctricos, precios autos eléctricos México, autonomía vehículos eléctricos, guía compra auto eléctrico',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/articles/2',
  },
  openGraph: {
    title: 'Mejores Autos Eléctricos en México 2025: Guía de Compra',
    description: 'Ranking de los mejores vehículos eléctricos disponibles en México para 2025.',
    type: 'article',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/articles/2',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/mejores-autos-electricos-mexico-2025-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mejores Autos Eléctricos en México 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mejores Autos Eléctricos en México 2025: Guía de Compra',
    description: 'Ranking de los mejores vehículos eléctricos disponibles en México para 2025.',
    images: ['/images/mejores-autos-electricos-mexico-2025-twitter.jpg'],
  },
  category: 'Autos Eléctricos',
  other: {
    'article:section': 'Artículos',
    'article:tag': 'autos eléctricos, ranking, México, 2025, guía compra',
  },
}

export default function MejoresElectricos2025Page() {
  const article = {
    id: 2,
    title: 'Mejores Autos Eléctricos en México 2025: Guía de Compra',
    excerpt: 'Ranking de los mejores vehículos eléctricos disponibles en México para 2025. Precios, autonomía, características y recomendaciones por presupuesto.',
    category: 'Autos Eléctricos',
    readTime: '15 min',
    author: 'Emanuel P',
    views: '52.8k',
    trending: true,
    date: '2024-02-28',
    location: 'CDMX',
    content: `
      El mercado mexicano de autos eléctricos está en **plena expansión**. Para 2025, más de **20 modelos** estarán disponibles, desde opciones económicas hasta vehículos de lujo. Esta guía te ayudará a elegir el mejor auto eléctrico según tu presupuesto y necesidades.

      El crecimiento del mercado eléctrico en México ha sido **exponencial**, con ventas que superaron las **15,000 unidades** en 2024. Para 2025, se espera que esta cifra se **duplique**, gracias a nuevas marcas, modelos más accesibles y una infraestructura de carga en constante expansión.

      ## Ranking por Categorías de Precio

      ### Categoría Económica (Menos de $500,000 MXN)

      #### BYD Dolphin Mini - El Más Accesible
      - **Precio**: $399,000 MXN
      - **Autonomía**: 300 km (WLTP)
      - **Motor**: 55 kW / 135 N·m
      - **Carga rápida**: 30 min (30-80%)
      - **Características**: Pantalla giratoria 10.1", CarPlay/Android Auto
      - **Pros**: Precio accesible, tecnología avanzada, garantía 6 años
      - **Contras**: Autonomía limitada, espacio reducido

      Chevrolet Bolt EV - La Opción Americana
      - Precio: $450,000 MXN
      - Autonomía: 380 km (EPA)
      - Motor: 150 kW / 360 N·m
      - Carga rápida: 30 min (30-80%)
      - Características: Super Cruise, carga bidireccional
      - Pros: Autonomía decente, tecnología GM, red de servicio
      - Contras: Diseño conservador, interior básico

      Categoría Media ($500,000 - $800,000 MXN)

      BYD Dolphin - El Equilibrio Perfecto
      - Precio: $550,000 MXN
      - Autonomía: 420 km (WLTP)
      - Motor: 70 kW / 180 N·m
      - Carga rápida: 25 min (30-80%)
      - Características: Vista 360°, asientos eléctricos, carga inalámbrica
      - Pros: Excelente relación precio-calidad, tecnología avanzada
      - Contras: Marca nueva en México, red de servicio limitada

      Tesla Model 3 Standard - El Icono
      - Precio: $750,000 MXN
      - Autonomía: 450 km (EPA)
      - Motor: 208 kW / 350 N·m
      - Carga rápida: 15 min (10-80%)
      - Características: Autopilot, actualizaciones OTA, Supercharger
      - Pros: Tecnología líder, red de carga, software avanzado
      - Contras: Precio elevado, servicio costoso

      Categoría Premium ($800,000 - $1,200,000 MXN)

      Tesla Model Y - El SUV Eléctrico
      - Precio: $950,000 MXN
      - Autonomía: 480 km (EPA)
      - Motor: 258 kW / 400 N·m
      - Carga rápida: 15 min (10-80%)
      - Características: 7 asientos, maletero amplio, Autopilot
      - Pros: Versatilidad, tecnología Tesla, espacio
      - Contras: Precio alto, calidad de acabados variable

      BMW iX3 - El Lujo Alemán
      - Precio: $1,100,000 MXN
      - Autonomía: 460 km (WLTP)
      - Motor: 210 kW / 400 N·m
      - Carga rápida: 20 min (10-80%)
      - Características: iDrive 8, asientos de cuero, sonido Harman Kardon
      - Pros: Calidad premium, manejo deportivo, lujo
      - Contras: Precio muy alto, mantenimiento costoso

      Categoría de Lujo (Más de $1,200,000 MXN)

      Tesla Model S - El Sedán Premium
      - Precio: $1,500,000 MXN
      - Autonomía: 650 km (EPA)
      - Motor: 493 kW / 1,000 N·m
      - Carga rápida: 12 min (10-80%)
      - Características: Plaid mode, pantalla 17", Autopilot FSD
      - Pros: Rendimiento excepcional, autonomía líder, tecnología
      - Contras: Precio muy alto, depreciación rápida

      Porsche Taycan - El Deportivo Eléctrico
      - Precio: $1,800,000 MXN
      - Autonomía: 400 km (WLTP)
      - Motor: 300 kW / 500 N·m
      - Carga rápida: 18 min (5-80%)
      - Características: Manejo deportivo, interior lujoso, sonido Bose
      - Pros: Manejo excepcional, calidad Porsche, exclusividad
      - Contras: Autonomía limitada, precio muy alto

      Análisis Técnico Detallado

      Autonomía Real vs Oficial
      - BYD Dolphin Mini: 250 km reales vs 300 km oficial
      - Tesla Model 3: 380 km reales vs 450 km oficial
      - BMW iX3: 400 km reales vs 460 km oficial
      - Tesla Model S: 550 km reales vs 650 km oficial

      Tiempos de Carga
      - Carga doméstica (7 kW): 6-12 horas
      - Carga rápida (50 kW): 30-60 minutos
      - Carga ultrarrápida (150+ kW): 15-30 minutos
      - Supercharger Tesla: 10-20 minutos

      Eficiencia Energética
      - BYD Dolphin Mini: 12 kWh/100 km
      - Tesla Model 3: 14 kWh/100 km
      - BMW iX3: 18 kWh/100 km
      - Tesla Model S: 16 kWh/100 km

      Recomendaciones por Perfil de Usuario

      Para Familias Jóvenes
      - Mejor opción: BYD Dolphin Mini
      - Presupuesto: $400,000-500,000 MXN
      - Uso: Ciudad, trayectos cortos
      - Ventajas: Precio accesible, tecnología, garantía

      Para Profesionales Urbanos
      - Mejor opción: Tesla Model 3
      - Presupuesto: $700,000-800,000 MXN
      - Uso: Ciudad, viajes interurbanos
      - Ventajas: Tecnología, red de carga, software

      Para Familias con Niños
      - Mejor opción: Tesla Model Y
      - Presupuesto: $900,000-1,000,000 MXN
      - Uso: Ciudad, viajes familiares
      - Ventajas: Espacio, versatilidad, seguridad

      Para Entusiastas del Automóvil
      - Mejor opción: Porsche Taycan
      - Presupuesto: $1,500,000+ MXN
      - Uso: Conducción deportiva, lujo
      - Ventajas: Manejo, calidad, exclusividad

      Comparación de Costos de Operación

      Costo Total de Propiedad (5 años)

      BYD Dolphin Mini
      - Precio: $399,000 MXN
      - Seguro: $60,000 MXN
      - Mantenimiento: $20,000 MXN
      - Electricidad: $30,000 MXN
      - Total: $509,000 MXN

      Tesla Model 3
      - Precio: $750,000 MXN
      - Seguro: $90,000 MXN
      - Mantenimiento: $30,000 MXN
      - Electricidad: $40,000 MXN
      - Total: $910,000 MXN

      BMW iX3
      - Precio: $1,100,000 MXN
      - Seguro: $120,000 MXN
      - Mantenimiento: $50,000 MXN
      - Electricidad: $45,000 MXN
      - Total: $1,315,000 MXN

      Infraestructura de Carga por Marca

      Tesla
      - Superchargers: 45 estaciones en México
      - Carga ultrarrápida: 250 kW
      - Tiempo de carga: 10-20 minutos
      - Costo: $8-15 MXN por kWh

      BYD
      - Carga rápida: 50 kW
      - Tiempo de carga: 30-45 minutos
      - Red de carga: 200+ estaciones
      - Costo: $6-12 MXN por kWh

      BMW
      - Carga rápida: 50-150 kW
      - Tiempo de carga: 20-40 minutos
      - Red de carga: 150+ estaciones
      - Costo: $8-18 MXN por kWh

      Consideraciones de Compra

      Factores a Evaluar
      - Presupuesto total disponible
      - Uso principal del vehículo
      - Acceso a carga doméstica
      - Red de servicio de la marca
      - Valor de reventa esperado

      Preguntas Clave
      - ¿Cuántos kilómetros manejas al día?
      - ¿Tienes acceso a carga doméstica?
      - ¿Realizas viajes largos frecuentemente?
      - ¿Qué tan importante es la tecnología?
      - ¿Cuál es tu presupuesto máximo?

      Proceso de Compra
      - Investigar modelos disponibles
      - Solicitar cotizaciones
      - Probar manejo del vehículo
      - Evaluar financiamiento
      - Negociar precio final

      Financiamiento y Incentivos

      Opciones de Financiamiento
      - Crédito automotriz tradicional: 8-12% anual
      - Leasing operativo: $15,000-25,000 MXN mensual
      - Financiamiento del fabricante: 6-10% anual
      - Crédito verde: 4-8% anual

      Incentivos Gubernamentales
      - Exención de tenencia (CDMX)
      - Descuentos en peajes
      - Estacionamiento preferencial
      - Acceso a carriles exclusivos

      Perspectivas Futuras

      Nuevos Modelos 2025
      - BYD Seal: Sedán deportivo
      - Tesla Cybertruck: Pickup eléctrica
      - BMW iX: SUV de lujo
      - Mercedes EQS: Sedán premium

      Evolución del Mercado
      - Precios más competitivos
      - Mayor autonomía
      - Carga más rápida
      - Tecnología avanzada

      Conclusión

      El mercado mexicano de autos eléctricos ofrece opciones para todos los presupuestos y necesidades. Desde el BYD Dolphin Mini por $399,000 MXN hasta el Porsche Taycan por $1,800,000 MXN, cada vehículo tiene sus ventajas específicas.

      Para la mayoría de usuarios mexicanos, el BYD Dolphin Mini representa la mejor relación precio-calidad, mientras que el Tesla Model 3 ofrece la mejor tecnología y red de carga. Los vehículos premium como BMW iX3 y Porsche Taycan son ideales para quienes buscan lujo y rendimiento.

      La elección final debe basarse en presupuesto, necesidades de uso, acceso a infraestructura de carga y preferencias personales. Con la evolución constante del mercado, 2025 promete ser un año emocionante para la movilidad eléctrica en México.
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
                <Car className="w-8 h-8 text-gti-blue-400" />
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
                if (paragraph.startsWith('Ranking por Categorías de Precio') ||
                    paragraph.startsWith('Análisis Técnico Detallado') ||
                    paragraph.startsWith('Recomendaciones por Perfil de Usuario') ||
                    paragraph.startsWith('Comparación de Costos de Operación') ||
                    paragraph.startsWith('Infraestructura de Carga por Marca') ||
                    paragraph.startsWith('Consideraciones de Compra') ||
                    paragraph.startsWith('Financiamiento y Incentivos') ||
                    paragraph.startsWith('Perspectivas Futuras') ||
                    paragraph.startsWith('Conclusión')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                      {paragraph}
                    </h2>
                  )
                } else if (paragraph.startsWith('Categoría Económica') ||
                          paragraph.startsWith('Categoría Media') ||
                          paragraph.startsWith('Categoría Premium') ||
                          paragraph.startsWith('Categoría de Lujo') ||
                          paragraph.startsWith('BYD Dolphin Mini') ||
                          paragraph.startsWith('Chevrolet Bolt EV') ||
                          paragraph.startsWith('BYD Dolphin') ||
                          paragraph.startsWith('Tesla Model 3') ||
                          paragraph.startsWith('Tesla Model Y') ||
                          paragraph.startsWith('BMW iX3') ||
                          paragraph.startsWith('Tesla Model S') ||
                          paragraph.startsWith('Porsche Taycan') ||
                          paragraph.startsWith('Autonomía Real vs Oficial') ||
                          paragraph.startsWith('Tiempos de Carga') ||
                          paragraph.startsWith('Eficiencia Energética') ||
                          paragraph.startsWith('Para Familias Jóvenes') ||
                          paragraph.startsWith('Para Profesionales Urbanos') ||
                          paragraph.startsWith('Para Familias con Niños') ||
                          paragraph.startsWith('Para Entusiastas del Automóvil') ||
                          paragraph.startsWith('Factores a Evaluar') ||
                          paragraph.startsWith('Preguntas Clave') ||
                          paragraph.startsWith('Proceso de Compra') ||
                          paragraph.startsWith('Opciones de Financiamiento') ||
                          paragraph.startsWith('Incentivos Gubernamentales') ||
                          paragraph.startsWith('Nuevos Modelos 2025') ||
                          paragraph.startsWith('Evolución del Mercado')) {
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
