import Link from 'next/link'
import { Clock, User, ArrowRight, Wrench, Car, Settings, TrendingUp, Eye, MapPin, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tips de Mecánica Automotriz México: Guías de Mantenimiento y Cuidado',
  description: 'Tips de mecánica automotriz específicos para México. Guías de mantenimiento, cuidado del auto, sistema de frenos, batería automotriz. Consejos expertos para condiciones mexicanas.',
  keywords: 'tips mecánica automotriz, mantenimiento auto México, cuidado vehículo, sistema frenos auto, batería automotriz, mecánica básica, tips automotrices, guías mantenimiento',
  authors: [{ name: 'Fanático de los automóviles' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: {
    canonical: 'https://garage-digital.netlify.app/tips',
  },
  openGraph: {
    title: 'Tips de Mecánica Automotriz México',
    description: 'Guías de mantenimiento y cuidado automotriz específicas para México. Tips expertos.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://garage-digital.netlify.app/tips',
    siteName: 'Garage Digital',
    images: [
      {
        url: '/images/tips-mecanica-mexico-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Tips de Mecánica Automotriz México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tips de Mecánica Automotriz México',
    description: 'Guías de mantenimiento y cuidado automotriz específicas para México.',
    images: ['/images/tips-mecanica-mexico-twitter.jpg'],
  },
  category: 'Automotive Tips',
  other: {
    'article:section': 'Tips de Mecánica',
  },
}

export default function TipsPage() {
  const tips = [
    {
      id: 1,
      title: 'Cómo Proteger tu Auto del Clima Mexicano: Lluvia y Sol',
      excerpt: 'Tips específicos para proteger tu vehículo de las condiciones climáticas extremas de México: lluvias torrenciales, sol intenso y humedad.',
      category: 'Mantenimiento',
      readTime: '6 min',
      author: 'Emanuel P',
      views: '18.5k',
      trending: true,
      date: '2024-01-15',
      location: 'CDMX',
      content: [
        'Usa protectores solares para el tablero y asientos',
        'Aplica cera cada 3 meses para proteger la pintura',
        'Revisa las gomas de las puertas y ventanas',
        'Mantén el sistema de aire acondicionado en buen estado'
      ]
    },
    {
      id: 2,
      title: 'Cómo Verificar el Sistema de Frenos en Casa',
      excerpt: 'Guía práctica para realizar una inspección básica del sistema de frenos de tu vehículo desde casa, identificando problemas comunes y cuándo acudir al taller.',
      category: 'Seguridad',
      readTime: '7 min',
      author: 'Emanuel P',
      views: '31.2k',
      trending: true,
      date: '2024-02-05',
      location: 'CDMX',
      content: [
        'Revisa el grosor de las pastillas de freno',
        'Verifica el nivel del líquido de frenos',
        'Inspecciona los discos en busca de rayones',
        'Prueba la respuesta del pedal de freno'
      ]
    },
    {
      id: 3,
      title: 'Cómo Mantener la Batería del Auto en Óptimas Condiciones',
      excerpt: 'Guía completa para el cuidado de la batería de tu vehículo, incluyendo cómo prevenir descargas, verificar el estado y prolongar su vida útil en el clima mexicano.',
      category: 'Eléctrico',
      readTime: '6 min',
      author: 'Emanuel P',
      views: '25.8k',
      trending: true,
      date: '2024-02-10',
      location: 'CDMX',
      content: [
        'Limpia los terminales de corrosión regularmente',
        'Verifica el voltaje con un multímetro',
        'Protege la batería del sol excesivo',
        'Revisa el nivel de electrolito si aplica'
      ]
    },
    {
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
      content: [
        'Usa el tipo de aceite recomendado por el fabricante',
        'Cambia el filtro de aceite en cada cambio',
        'Verifica el nivel después de 24 horas',
        'Mantén un cronograma regular de cambios'
      ]
    },
    {
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
      content: [
        'Revisa la presión de los neumáticos semanalmente',
        'Inspecciona el desgaste de la banda de rodamiento',
        'Rota los neumáticos cada 10,000 km',
        'Verifica la alineación si hay desgaste irregular'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gti-black-900">
      {/* Header Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="block text-white">TIPS DE</span>
              <span className="block racing-text">MECÁNICA</span>
              <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-2">
                Específicos para México
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Consejos técnicos y expertos adaptados a las condiciones de manejo, 
              clima y carreteras de México.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-16 bg-gti-black-900 relative">
        <div className="absolute inset-0 racing-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <article
                key={tip.id}
                className="blog-card rounded-xl overflow-hidden card-hover group"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gti-red-600 to-gti-red-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <Wrench className="w-16 h-16 text-white mx-auto mb-2" />
                      <span className="text-white font-bold text-sm">TIPS TÉCNICOS</span>
                    </div>
                    {tip.trending && (
                      <div className="absolute top-4 right-4 bg-gti-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>TRENDING</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="news-badge text-xs px-3 py-1 rounded-full">
                      {tip.category}
                    </span>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
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
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gti-red-400 transition-colors">
                    {tip.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {tip.excerpt}
                  </p>

                  {/* Quick Tips Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gti-red-400 mb-2">Tips Rápidos:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {tip.content.slice(0, 2).map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-gti-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gti-red-500/20">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{tip.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 ml-3">
                        <MapPin className="w-3 h-3" />
                        <span>{tip.location}</span>
                      </div>
                    </div>
                    <Link
                      href={`/tips/${tip.id}`}
                      className="text-gti-red-500 hover:text-gti-red-400 font-semibold flex items-center space-x-1 transition-colors"
                    >
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
