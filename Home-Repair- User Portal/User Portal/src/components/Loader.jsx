export function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center">
      <div className="flex gap-1.5">
        {[0, 1, 2].map(i => (
          <div 
            key={i} 
            className="w-3 h-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full animate-bounce" 
            style={{ animationDelay: `${i * 0.15}s` }} 
          />
        ))}
      </div>
    </div>
  )
}
