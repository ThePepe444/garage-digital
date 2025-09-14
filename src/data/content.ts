// Datos centralizados para el sitio
export interface ContentItem {
  id: number
  title: string
  excerpt: string
  type: 'review' | 'tip' | 'comparison'
  author: string
  date: string
  category: string
  image?: string
  url: string
}

// Últimas noticias - se actualiza automáticamente con el contenido más reciente
export const latestNews: ContentItem[] = [
  {
    id: 3,
    title: 'BYD Dolphin Mini 2026: El Futuro Eléctrico Compacto',
    excerpt: 'Análisis completo del BYD Dolphin Mini 2026, el vehículo eléctrico compacto que está revolucionando la movilidad urbana en México con tecnología avanzada y autonomía excepcional.',
    type: 'review',
    author: 'Emanuel P',
    date: '2024-02-15',
    category: 'Eléctrico Compacto',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop&crop=center',
    url: '/reviews/3'
  },
  {
    id: 2,
    title: 'VW Jetta GLI 2025: La Máquina Deportiva Alemana',
    excerpt: 'Análisis completo del Volkswagen Jetta GLI 2025, la versión deportiva de alto rendimiento que combina potencia, tecnología avanzada y diseño agresivo.',
    type: 'review',
    author: 'Emanuel P',
    date: '2024-01-20',
    category: 'Sedán Deportivo',
    image: '/images/jetta-gli-2025.jpg',
    url: '/reviews/2'
  },
  {
    id: 1,
    title: 'Nissan Versa 2024: El Sedán que Reta lo Establecido',
    excerpt: 'Análisis completo del Nissan Versa 2024, el sedán más tecnológico y seguro de su segmento según Nissan México.',
    type: 'review',
    author: 'Emanuel P',
    date: '2024-01-15',
    category: 'Sedán',
    image: '/images/nissan-versa-2024.jpg',
    url: '/reviews/1'
  },
  {
    id: 1,
    title: 'Cómo Proteger tu Auto del Clima Mexicano: Lluvia y Sol',
    excerpt: 'Tips específicos para proteger tu vehículo de las condiciones climáticas extremas de México: lluvias torrenciales, sol intenso y humedad.',
    type: 'tip',
    author: 'Emanuel P',
    date: '2024-01-15',
    category: 'Mantenimiento',
    url: '/tips/1'
  },
  {
    id: 2,
    title: 'Cómo Verificar el Sistema de Frenos en Casa',
    excerpt: 'Guía práctica para realizar una inspección básica del sistema de frenos de tu vehículo desde casa, identificando problemas comunes y cuándo acudir al taller.',
    type: 'tip',
    author: 'Emanuel P',
    date: '2024-02-05',
    category: 'Seguridad',
    url: '/tips/2'
  },
  {
    id: 3,
    title: 'Cómo Mantener la Batería del Auto en Óptimas Condiciones',
    excerpt: 'Guía completa para el cuidado de la batería de tu vehículo, incluyendo cómo prevenir descargas, verificar el estado y prolongar su vida útil en el clima mexicano.',
    type: 'tip',
    author: 'Emanuel P',
    date: '2024-02-10',
    category: 'Eléctrico',
    url: '/tips/3'
  },
  {
    id: 1,
    title: 'Nissan Versa vs Chevrolet Aveo: ¿Cuál Elegir en México?',
    excerpt: 'Comparación detallada entre los dos sedanes más populares del mercado mexicano, analizando precio, rendimiento y características.',
    type: 'comparison',
    author: 'Emanuel P',
    date: '2024-01-10',
    category: 'Comparación',
    url: '/comparisons/1'
  }
]

// Función para obtener las últimas noticias ordenadas por fecha
export const getLatestNews = (limit: number = 4): ContentItem[] => {
  return latestNews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Función para obtener noticias por tipo
export const getNewsByType = (type: 'review' | 'tip' | 'comparison', limit: number = 3): ContentItem[] => {
  return latestNews
    .filter(item => item.type === type)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
