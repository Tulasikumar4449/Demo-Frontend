import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { SERVICES } from '../data/mockData'
import { Icon } from '../icons/Icon'

export function BookingsPage() {
  const { bookings, navigate } = useApp()
  const [tab, setTab] = useState('upcoming')
  const filtered = bookings.filter(b => tab === 'all' || b.status === tab)
  const statusColors = { 
    upcoming: 'bg-blue-100 text-blue-700', 
    completed: 'bg-emerald-100 text-emerald-700', 
    pending: 'bg-amber-100 text-amber-700', 
    cancelled: 'bg-red-100 text-red-700' 
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['upcoming', 'completed', 'pending', 'all'].map(t => (
          <button 
            key={t} 
            onClick={() => setTab(t)} 
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${tab === t ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">📋</p>
          <p className="text-gray-500">No {tab} bookings</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(b => {
            const s = SERVICES.find(sv => sv.id === b.serviceId) || SERVICES[0]
            return (
              <div key={b.id} className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <img src={s.image} alt={s.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{s.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColors[b.status]}`}>
                        {b.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{s.provider}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Icon name="calendar" size={12} />{b.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="clock" size={12} />{b.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
