import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function Toast() {
  const { toast } = useApp()
  if (!toast) return null
  
  const colors = { success: 'bg-emerald-500', error: 'bg-red-500', info: 'bg-blue-500' }
  
  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] ${colors[toast.type]} text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce-in`}>
      <Icon name={toast.type === 'success' ? 'check' : 'info'} size={18} />
      <span className="font-medium text-sm">{toast.message}</span>
    </div>
  )
}
