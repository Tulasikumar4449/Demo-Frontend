import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function NotificationsPage() {
  const { notifications, setNotifications } = useApp()
  
  const markRead = (id) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  const typeIcons = { success: 'check', promo: 'star', info: 'info' }
  const typeColors = { success: 'bg-emerald-100 text-emerald-600', promo: 'bg-amber-100 text-amber-600', info: 'bg-blue-100 text-blue-600' }
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <button 
          onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))} 
          className="text-sm text-violet-600 font-medium"
        >
          Mark all read
        </button>
      </div>
      <div className="space-y-3">
        {notifications.map(n => (
          <button 
            key={n.id} 
            onClick={() => markRead(n.id)} 
            className={`w-full text-left bg-white rounded-2xl p-4 border transition-all hover:shadow-md ${n.read ? 'border-gray-100' : 'border-violet-200 bg-violet-50/30'}`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${typeColors[n.type]}`}>
                <Icon name={typeIcons[n.type]} size={16} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-gray-900">{n.title}</h3>
                  {!n.read && <span className="w-2 h-2 bg-violet-600 rounded-full" />}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{n.msg}</p>
                <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
