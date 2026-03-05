import { useApp } from '../context/AppContext'
import { Home, Bell, Settings, User, ClipboardList } from 'lucide-react'

export function BottomNav() {
  const { currentPage, navigate } = useApp()

  const navItems = [
    { id: 'workerDashboard', icon: Home, label: 'Home' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
    { id: 'workerProfile', icon: User, label: 'Profile' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center justify-center w-full py-3 transition-all ${
                isActive 
                  ? 'text-emerald-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
              {isActive && (
                <div className="w-1 h-1 bg-emerald-600 rounded-full mt-1"></div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
