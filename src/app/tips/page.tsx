import Link from 'next/link'
import { Clock, User, ArrowRight, Wrench, Car, Settings, TrendingUp, Eye, MapPin, Calendar } from 'lucide-react'

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
      title: 'Cómo Elegir el Mejor Aceite para tu Auto en México',
      excerpt: 'Guía completa para seleccionar el aceite motor ideal según el clima mexicano, tipo de conducción y recomendaciones del fabricante.',
      category: 'Mantenimiento',
      readTime: '7 min',
      author: 'Emanuel P',
      views: '15.8k',
      trending: true,
      date: '2024-01-20',
      location: 'CDMX',
      content: [
        'Considera la viscosidad según la temperatura ambiente',
        'Revisa las especificaciones del fabricante',
        'Elige aceites sintéticos para mejor protección',
        'Cambia el aceite cada 5,000-7,500 km en ciudad'
      ]
    },
    {
      id: 3,
      title: 'Cómo Mantener las Llantas en Carreteras Mexicanas',
      excerpt: 'Guía completa para el cuidado de llantas considerando las condiciones específicas de las carreteras mexicanas: baches, calor extremo y diferentes tipos de pavimento.',
      category: 'Mantenimiento',
      readTime: '8 min',
      author: 'Emanuel P',
      views: '22.1k',
      trending: true,
      date: '2024-01-25',
      location: 'CDMX',
      content: [
        'Revisa la presión de aire cada 15 días',
        'Rota las llantas cada 8,000-10,000 km',
        'Evita baches y superficies irregulares',
        'Mantén la alineación cada 20,000 km'
      ]
    },
    {
      id: 4,
      title: 'Cómo Ahorrar Combustible en el Tráfico de México',
      excerpt: 'Estrategias prácticas para optimizar el consumo de combustible en las condiciones de tráfico pesado de las ciudades mexicanas y carreteras nacionales.',
      category: 'Eficiencia',
      readTime: '6 min',
      author: 'Emanuel P',
      views: '28.7k',
      trending: true,
      date: '2024-01-30',
      location: 'CDMX',
      content: [
        'Conduce de forma suave y anticipa el tráfico',
        'Mantén una velocidad constante en carretera',
        'Usa el aire acondicionado de forma eficiente',
        'Planifica rutas para evitar congestionamientos'
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
