import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function Navbar() {
  const { adminUser, navigate, adminNotifications } = useApp()

  // Only show navbar for logged-in admin users
  if (!adminUser) return null

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Saheya Admin</h1>
              <p className="text-xs text-gray-500">Complaint Management System</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notifications Icon */}
            <button
              onClick={() => navigate('adminNotifications')}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-all hover:bg-blue-50 rounded-lg"
            >
              <Icon name="bell" size={22} />
              {adminNotifications && adminNotifications.filter(n => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                  {adminNotifications.filter(n => !n.read).length}
                </span>
              )}
            </button>

            {/* Settings Icon */}
            <button
              onClick={() => navigate('adminSettings')}
              className="p-2 text-gray-600 hover:text-blue-600 transition-all hover:bg-blue-50 rounded-lg"
            >
              <Icon name="settings" size={22} />
            </button>

            {/* Admin Info */}
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{adminUser.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{adminUser.name}</p>
                <p className="text-xs text-gray-500">{adminUser.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
