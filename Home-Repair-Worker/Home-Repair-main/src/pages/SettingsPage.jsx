import { useApp } from '../context/AppContext'
import { User, Shield, Moon, Sun, LogOut, Edit, CheckCircle, Clock } from 'lucide-react'

export function SettingsPage() {
  const { user, navigate, theme, toggleTheme, showToast } = useApp()

  const handleLogout = () => {
    showToast('Logged out successfully')
    navigate('landing')
  }

  const menuItems = [
    {
      id: 'profile',
      icon: User,
      label: 'Profile',
      description: 'View and edit your personal information',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      action: () => navigate('workerProfile')
    },
    {
      id: 'verification',
      icon: Shield,
      label: 'Verification',
      description: 'Check your document verification status',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      action: () => navigate('workerVerification')
    },
    {
      id: 'theme',
      icon: theme === 'light' ? Moon : Sun,
      label: 'Theme',
      description: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      action: toggleTheme,
      toggle: true,
      toggleState: theme === 'dark'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
        </div>
        
        {/* User Info Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mt-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              S
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-white/80 text-sm">{user.email}</p>
              <div className="flex items-center gap-2 mt-1">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span className="text-xs text-green-200">Verified Worker</span>
              </div>
            </div>
            <button
              onClick={() => navigate('editWorkerProfile')}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all"
            >
              <Edit className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            
            return (
              <button
                key={item.id}
                onClick={item.action}
                className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-all ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>

                {item.toggle ? (
                  <div className={`w-12 h-6 rounded-full transition-colors relative ${
                    item.toggleState ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      item.toggleState ? 'left-7' : 'left-1'
                    }`}></div>
                  </div>
                ) : (
                  <div className="w-6 h-6 text-gray-400">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Additional Options */}
        <div className="bg-white rounded-2xl shadow-lg mt-6 overflow-hidden">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 hover:bg-red-50 transition-all border-b border-gray-100"
          >
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <LogOut className="w-6 h-6 text-red-600" />
            </div>
            
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-red-600">Logout</h3>
              <p className="text-sm text-gray-500">Sign out from your account</p>
            </div>

            <div className="w-6 h-6 text-gray-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* App Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">HomeServ Worker Portal v1.0.0</p>
          <p className="text-xs text-gray-400 mt-1">Made with ❤️ for workers</p>
        </div>
      </div>
    </div>
  )
}
