import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function ProfilePage() {
  const { user, navigate, bookings } = useApp()
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-6 text-white text-center mb-6">
        <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-3">
          {user.avatar}
        </div>
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className="text-white/70 text-sm">{user.email}</p>
        <p className="text-white/50 text-xs mt-1">Member since {user.joined}</p>
        <button 
          onClick={() => navigate('editProfile')} 
          className="mt-4 px-5 py-2 bg-white/20 backdrop-blur rounded-xl text-sm font-medium hover:bg-white/30 transition-colors inline-flex items-center gap-2"
        >
          <Icon name="edit" size={14} />Edit Profile
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { n: bookings.length, l: 'Bookings' }, 
          { n: bookings.filter(b => b.status === 'completed').length, l: 'Completed' }, 
          { n: '4.9', l: 'Rating' }
        ].map(s => (
          <div key={s.l} className="bg-white rounded-2xl p-4 text-center border border-gray-100">
            <p className="text-xl font-bold text-violet-600">{s.n}</p>
            <p className="text-xs text-gray-500">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {[
          { icon: 'map', label: 'Address', value: user.address }, 
          { icon: 'phone', label: 'Phone', value: user.phone }, 
          { icon: 'calendar', label: 'My Bookings', page: 'bookings' }, 
          { icon: 'bell', label: 'Notifications', page: 'notifications' }, 
          { icon: 'help', label: 'Help & Support', page: 'help' }, 
          { icon: 'info', label: 'About', page: 'about' }
        ].map((item, i) => (
          <button 
            key={i} 
            onClick={() => item.page && navigate(item.page)} 
            className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
          >
            <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center">
              <Icon name={item.icon} size={16} className="text-violet-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              {item.value && <p className="text-xs text-gray-500 truncate">{item.value}</p>}
            </div>
            {item.page && <Icon name="back" size={16} className="text-gray-300 rotate-180" />}
          </button>
        ))}
      </div>
    </div>
  )
}
