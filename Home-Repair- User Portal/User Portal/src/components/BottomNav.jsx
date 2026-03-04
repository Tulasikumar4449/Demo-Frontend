import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function BottomNav() {
  const { currentPage, navigate } = useApp()
  const isLanding = ['landing', 'login', 'register'].includes(currentPage)
  
  if (isLanding) return null
  
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'categories', label: 'Services', icon: 'grid' },
    { id: 'bookings', label: 'Bookings', icon: 'calendar' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ]
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-gray-100 md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map(tab => {
          const active = currentPage === tab.id
          return (
            <button 
              key={tab.id} 
              onClick={() => navigate(tab.id)} 
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${active ? 'text-violet-600' : 'text-gray-400'}`}
            >
              <Icon name={tab.icon} size={20} className={active ? 'text-violet-600' : ''} />
              <span className="text-[10px] font-medium">{tab.label}</span>
              {active && <div className="w-1 h-1 bg-violet-600 rounded-full" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
