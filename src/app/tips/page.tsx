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
      author: 'Carlos Méndez',
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
      title: 'Mantenimiento de Frenos en Carreteras Mexicanas',
      excerpt: 'Guía completa para el mantenimiento de frenos considerando las condiciones de las carreteras mexicanas, baches y tráfico pesado.',
      category: 'Seguridad',
      readTime: '8 min',
      author: 'Ana Rodríguez',
      views: '22.3k',
      trending: true,
      date: '2024-01-14',
      location: 'Guadalajara',
      content: [
        'Revisa las pastillas cada 15,000 km en ciudad',
        'Cambia el líquido de frenos cada 2 años',
        'Inspecciona los discos por desgaste irregular',
        'Considera frenos de mayor calidad para baches'
      ]
    },
    {
      id: 3,
      title: 'Ahorro de Gasolina: Tips para el Tráfico de la CDMX',
      excerpt: 'Consejos prácticos para optimizar el consumo de combustible en el tráfico pesado de la Ciudad de México y otras metrópolis.',
      category: 'Eficiencia',
      readTime: '5 min',
      author: 'Miguel Torres',
      views: '31.2k',
      trending: true,
      date: '2024-01-13',
      location: 'Monterrey',
      content: [
        'Mantén una velocidad constante en el tráfico',
        'Usa el aire acondicionado de forma eficiente',
        'Planifica rutas para evitar congestionamientos',
        'Mantén las llantas infladas correctamente'
      ]
    },
    {
      id: 4,
      title: 'Cómo Manejar en Temporada de Lluvias en México',
      excerpt: 'Guía completa para conducir de forma segura durante la temporada de lluvias en México, incluyendo mantenimiento preventivo.',
      category: 'Seguridad',
      readTime: '7 min',
      author: 'Laura Sánchez',
      views: '25.7k',
      trending: false,
      date: '2024-01-11',
      location: 'Puebla',
      content: [
        'Revisa el estado de las llantas y su dibujo',
        'Mantén limpios los faros y luces traseras',
        'Verifica el funcionamiento de los limpiaparabrisas',
        'Reduce la velocidad en carreteras mojadas'
      ]
    },
    {
      id: 5,
      title: 'Mantenimiento del Aire Acondicionado en Clima Mexicano',
      excerpt: 'Tips para mantener el sistema de aire acondicionado funcionando perfectamente en el clima cálido y húmedo de México.',
      category: 'Mantenimiento',
      readTime: '4 min',
      author: 'Roberto Jiménez',
      views: '19.8k',
      trending: false,
      date: '2024-01-09',
      location: 'Cancún',
      content: [
        'Cambia el filtro de aire cada 15,000 km',
        'Recarga el gas refrigerante cada 2 años',
        'Limpia los conductos de ventilación',
        'Usa el recirculador en tráfico pesado'
      ]
    },
    {
      id: 6,
      title: 'Protección contra Robo de Autos en México',
      excerpt: 'Medidas de seguridad para proteger tu vehículo contra robos, especialmente en las principales ciudades de México.',
      category: 'Seguridad',
      readTime: '6 min',
      author: 'Patricia López',
      views: '28.4k',
      trending: true,
      date: '2024-01-07',
      location: 'Tijuana',
      content: [
        'Instala un sistema de alarma confiable',
        'Usa dispositivos de bloqueo adicionales',
        'Estaciona en lugares bien iluminados',
        'No dejes objetos de valor a la vista'
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
