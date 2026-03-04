import { useApp } from '../context/AppContext'

export function Toast() {
  const { toast } = useApp()
  
  if (!toast) return null
  
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
      <div className={`px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 ${
        toast.type === 'error' 
          ? 'bg-red-500 text-white' 
          : 'bg-emerald-600 text-white'
      }`}>
        <span>{toast.message}</span>
      </div>
    </div>
  )
}
