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
    excerpt: 'Guía completa para mantener tu vehículo en perfectas condiciones durante la temporada de lluvias y el intenso sol mexicano.',
    type: 'tip',
    author: 'Emanuel P',
    date: '2024-01-12',
    category: 'Mantenimiento',
    url: '/tips/1'
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
