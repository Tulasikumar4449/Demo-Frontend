import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function Navbar() {
  const { navigate, currentPage, notifications, searchQuery, setSearchQuery } = useApp()
  const [showSearch, setShowSearch] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const unread = notifications.filter(n => !n.read).length
  const isLanding = currentPage === 'landing'

  if (isLanding) return null

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {!['home', 'categories', 'bookings', 'profile'].includes(currentPage) && (
            <button onClick={() => navigate('home')} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Icon name="back" size={20} />
            </button>
          )}
          <button onClick={() => navigate('home')} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-sm font-bold">H</div>
            <span className="font-bold text-gray-900 hidden sm:block">HomeServ</span>
          </button>
        </div>

        {showSearch ? (
          <div className="flex-1 mx-4 max-w-md">
            <div className="relative">
              <Icon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                autoFocus 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && searchQuery && navigate('search', { query: searchQuery })} 
                placeholder="Search services..." 
                className="w-full pl-9 pr-8 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
              />
              <button 
                onClick={() => { setShowSearch(false); setSearchQuery('') }} 
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <Icon name="x" size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowSearch(true)} 
              className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Icon name="search" size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={() => navigate('notifications')} 
              className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors relative"
            >
              <Icon name="bell" size={20} className="text-gray-600" />
              {unread > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowProfile(!showProfile)} 
                className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xs font-bold"
              >
                AM
              </button>
              {showProfile && (
                <div className="absolute right-0 top-12 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fade-in">
                  {[
                    { label: 'My Profile', page: 'profile', icon: 'user' }, 
                    { label: 'My Bookings', page: 'bookings', icon: 'calendar' }, 
                    { label: 'Help & Support', page: 'help', icon: 'help' }, 
                    { label: 'About', page: 'about', icon: 'info' }
                  ].map(item => (
                    <button 
                      key={item.page} 
                      onClick={() => { navigate(item.page); setShowProfile(false) }} 
                      className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 text-sm text-gray-700"
                    >
                      <Icon name={item.icon} size={16} />{item.label}
                    </button>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button 
                      onClick={() => { navigate('landing'); setShowProfile(false) }} 
                      className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 text-sm text-red-500"
                    >
                      <Icon name="logout" size={16} />Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
