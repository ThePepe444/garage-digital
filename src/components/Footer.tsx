import Link from 'next/link'
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gti-black-900 border-t border-gti-red-500/20 text-white relative">
      <div className="absolute inset-0 racing-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-gti-red-500 to-gti-red-600 rounded-lg flex items-center justify-center racing-glow">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">GARAGE</span>
                <span className="text-sm font-bold racing-text -mt-1">DIGITAL</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              La fuente definitiva de noticias automotrices en México, reseñas técnicas y análisis 
              de rendimiento para los verdaderos entusiastas del motor mexicano.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gti-red-500 transition-colors p-2 rounded-lg hover:bg-gti-red-500/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gti-red-500 transition-colors p-2 rounded-lg hover:bg-gti-red-500/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gti-red-500 transition-colors p-2 rounded-lg hover:bg-gti-red-500/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gti-red-500 transition-colors p-2 rounded-lg hover:bg-gti-red-500/10">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tips" className="text-gray-300 hover:text-gti-red-500 transition-colors flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gti-red-500 rounded-full"></div>
                  <span>Tips de Mecánica</span>
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-gti-red-500 transition-colors flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gti-red-500 rounded-full"></div>
                  <span>Reseñas de Autos</span>
                </Link>
              </li>
              <li>
                <Link href="/comparisons" className="text-gray-300 hover:text-gti-red-500 transition-colors flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gti-red-500 rounded-full"></div>
                  <span>Comparaciones</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gti-red-500 transition-colors flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gti-red-500 rounded-full"></div>
                  <span>Acerca de Nosotros</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gti-red-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gti-red-500" />
                </div>
                <span className="text-gray-300">info@garagedigital.mx</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gti-red-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gti-red-500" />
                </div>
                <span className="text-gray-300">+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gti-red-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gti-red-500" />
                </div>
                <span className="text-gray-300">Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gti-red-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Garage Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
