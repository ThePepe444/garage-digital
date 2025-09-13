export default function ManualWarning() {
  return (
    <div className="mb-8 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-black font-bold text-sm">!</span>
        </div>
        <div>
          <h4 className="text-lg font-bold text-yellow-400 mb-2">⚠️ IMPORTANTE</h4>
          <p className="text-gray-300">
            <strong>Siempre consulta el manual de tu vehículo</strong> antes de realizar cualquier mantenimiento. 
            Las especificaciones del fabricante son la guía más confiable y garantizan el mejor rendimiento 
            y protección para tu vehículo. Este artículo proporciona información general, pero tu manual 
            tiene las recomendaciones específicas para tu modelo.
          </p>
        </div>
      </div>
    </div>
  )
}
