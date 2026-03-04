import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function BottomNav() {
  const { adminUser, currentPage, navigate, activeTab, setActiveTab } = useApp()

  if (!adminUser) return null
  if (currentPage === 'landing') return null

  // Show bottom nav only on dashboard and related pages
  if (currentPage !== 'adminDashboard') return null

  const navItems = [
    { id: 'all', icon: 'list', label: 'All' },
    { id: 'customer', icon: 'user', label: 'Customers' },
    { id: 'worker', icon: 'briefcase', label: 'Workers' },
    { id: 'pending', icon: 'clock', label: 'Pending' },
    { id: 'investigations', icon: 'search', label: 'Active' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
              activeTab === item.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon name={item.icon} size={20} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
