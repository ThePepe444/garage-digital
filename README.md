# Garage Digital 🚗

Un sitio web moderno dedicado a tips de mecánica, reseñas de autos, comparaciones y todo lo relacionado con el mundo automotriz.

## 🚀 Características

- **Tips de Mecánica**: Consejos prácticos para el mantenimiento de vehículos
- **Reseñas de Autos**: Análisis detallados de los mejores autos del mercado
- **Comparaciones**: Comparaciones exhaustivas entre diferentes modelos
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Configurado para motores de búsqueda

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos y ligeros
- **ESLint** - Linter para mantener código limpio

## 📦 Instalación

1. **Instalar Node.js** (versión 18 o superior)
   - Descarga desde [nodejs.org](https://nodejs.org/)

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Visita [http://localhost:3000](http://localhost:3000)

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página de inicio
├── components/
│   ├── Header.tsx       # Navegación principal
│   ├── Footer.tsx       # Pie de página
│   ├── Hero.tsx         # Sección hero
│   ├── FeaturedTips.tsx # Tips destacados
│   ├── LatestReviews.tsx # Últimas reseñas
│   ├── CarComparisons.tsx # Comparaciones
│   └── Newsletter.tsx   # Suscripción al newsletter
└── data/
    └── content.ts       # Sistema de noticias dinámicas
```

## 🔄 Sistema de Noticias Dinámicas

El sitio incluye un sistema automático que muestra las últimas noticias en la sección Hero:

### Cómo Agregar Nuevo Contenido

1. **Agregar Nueva Reseña/Tip/Comparación**:
   - Crea la página correspondiente en `src/app/[tipo]/[id]/page.tsx`
   - Agrega la entrada en `src/data/content.ts` en el array `latestNews`

2. **Estructura de Entrada**:
   ```typescript
   {
     id: 3,
     title: 'Título del Artículo',
     excerpt: 'Descripción breve...',
     type: 'review' | 'tip' | 'comparison',
     author: 'Emanuel P',
     date: '2024-01-25', // Formato YYYY-MM-DD
     category: 'Categoría',
     image: '/images/imagen.jpg', // Opcional
     url: '/reviews/3'
   }
   ```

3. **Funcionalidades Automáticas**:
   - ✅ Ordena por fecha (más recientes primero)
   - ✅ Muestra las últimas 3 noticias en el Hero
   - ✅ Categoriza por tipo con iconos
   - ✅ Calcula tiempo transcurrido
   - ✅ Enlaza directamente a las páginas

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.ts`:
- **Primary**: Azul (#0ea5e9)
- **Secondary**: Gris (#64748b)

### Fuentes
- **Inter**: Fuente principal del sitio

## 📱 Páginas Principales

- **Inicio** (`/`) - Página principal con todas las secciones
- **Tips** (`/tips`) - Lista de tips de mecánica
- **Reseñas** (`/reviews`) - Reseñas de autos
- **Comparaciones** (`/comparisons`) - Comparaciones de vehículos

## 🚀 Despliegue

### Netlify (Configurado)
1. Conecta tu repositorio a Netlify
2. El despliegue se realizará automáticamente
3. Configura las variables de entorno en Netlify

### Variables de Entorno
Crea un archivo `.env.local` con:
```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://tu-sitio.netlify.app
```

## 📊 Google Tag Manager y SEO

### Configuración de Google Tag Manager
1. **Crea una cuenta en [Google Tag Manager](https://tagmanager.google.com/)**
2. **Crea un contenedor** para tu sitio web
3. **Obtén tu Container ID** (formato: GTM-XXXXXXX)
4. **Agrega la variable de entorno:**
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
5. **Configura Google Analytics dentro de GTM** (más flexible)

### Google Search Console
1. **Ve a [Google Search Console](https://search.google.com/search-console/)**
2. **Agrega tu propiedad** (URL de tu sitio)
3. **Verifica la propiedad** usando el método HTML tag
4. **Envía tu sitemap:** `https://tu-sitio.netlify.app/sitemap.xml`

### SEO Incluido
- ✅ **Sitemap automático** (`/sitemap.xml`)
- ✅ **Robots.txt** (`/robots.txt`)
- ✅ **Meta tags** optimizados
- ✅ **Open Graph** para redes sociales
- ✅ **Google Tag Manager** integrado
- ✅ **Noscript fallback** para GTM

## 📝 Scripts Disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en modo producción
- `npm run lint` - Ejecutar ESLint

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@garagedigital.com
- **Website**: [garagedigital.com](https://garagedigital.com)

---

¡Disfruta explorando el mundo automotriz con Garage Digital! 🚗✨
