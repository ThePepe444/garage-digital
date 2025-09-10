'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular envío de email
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="py-16 bg-gti-black-900 relative overflow-hidden">
      <div className="absolute inset-0 racing-pattern opacity-5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-gti-red-500 to-gti-red-600 rounded-full flex items-center justify-center mx-auto mb-6 racing-glow">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            MANTENTE EN LA PISTA
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recibe las últimas noticias automotrices, reseñas técnicas y análisis 
            de rendimiento directamente en tu bandeja de entrada.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu dirección de email"
                className="w-full px-4 py-4 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gti-red-500 focus:outline-none bg-white/90 backdrop-blur-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gti-red-500 hover:bg-gti-red-600 disabled:bg-gti-red-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 racing-glow"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Suscribirse</span>
                </>
              )}
            </button>
          </div>

          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
              <CheckCircle className="w-5 h-5" />
              <span>¡Gracias! Te has suscrito exitosamente.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <AlertCircle className="w-5 h-5" />
              <span>Por favor, ingresa un email válido.</span>
            </div>
          )}
        </form>

        <div className="mt-8 text-gray-400 text-sm">
          <p>
            Nos comprometemos a respetar tu privacidad. No compartimos tu información 
            con terceros y puedes cancelar tu suscripción en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
