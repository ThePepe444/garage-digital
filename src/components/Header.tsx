'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Wrench, Car, BarChart3, BookOpen } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/', icon: Car },
    { name: 'Tips de Mecánica', href: '/tips', icon: Wrench },
    { name: 'Reseñas', href: '/reviews', icon: BookOpen },
    { name: 'Comparaciones', href: '/comparisons', icon: BarChart3 },
  ]

  return (
    <header className="bg-gti-black-900/95 backdrop-blur-md border-b border-gti-red-500/20 sticky top-0 z-50 racing-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gti-red-500 to-gti-red-600 rounded-lg flex items-center justify-center racing-glow">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">GARAGE</span>
                <span className="text-sm font-bold racing-text -mt-1">DIGITAL</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gti-red-500/20 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border border-transparent hover:border-gti-red-500/30"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-gti-red-500/20 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gti-black-800/95 backdrop-blur-md border-t border-gti-red-500/20">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gti-red-500/20 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
