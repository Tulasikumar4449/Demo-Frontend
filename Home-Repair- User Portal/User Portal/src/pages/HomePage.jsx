import { useApp } from '../context/AppContext'
import { SERVICES, CATEGORIES } from '../data/mockData'
import { ServiceCard } from '../components/ServiceCard'
import { CategoryCard } from '../components/CategoryCard'
import { Icon } from '../icons/Icon'

export function HomePage() {
  const { navigate, searchQuery, setSearchQuery } = useApp()
  const popular = SERVICES.filter(s => s.popular)
  
  return (
    <div className="pb-24 md:pb-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white px-6 pt-8 pb-14 -mt-[1px]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            What service do you<br />need today? 🏠
          </h1>
          <p className="text-white/70 text-sm mb-6">Book trusted professionals in minutes</p>
          <div className="relative max-w-lg">
            <Icon name="search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-300" />
            <input 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && searchQuery && navigate('search', { query: searchQuery })} 
              placeholder="Search for cleaning, plumbing, AC repair..." 
              className="w-full pl-11 pr-4 py-3.5 bg-white/15 backdrop-blur rounded-2xl text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" 
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-6">
        {/* Quick promo */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 mb-8 flex items-center justify-between shadow-lg shadow-orange-500/20">
          <div>
            <p className="text-white font-bold text-sm">🎉 First Booking Offer!</p>
            <p className="text-white/80 text-xs mt-1">Get 30% off on your first service booking</p>
          </div>
          <span className="bg-white text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full">NEW30</span>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Categories</h2>
          <button onClick={() => navigate('categories')} className="text-sm text-violet-600 font-medium hover:underline">
            See All
          </button>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-3 mb-8 overflow-x-auto">
          {CATEGORIES.slice(0, 5).map(cat => <CategoryCard key={cat.id} cat={cat} small />)}
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-3 mb-10 overflow-x-auto">
          {CATEGORIES.slice(5, 10).map(cat => <CategoryCard key={cat.id} cat={cat} small />)}
        </div>

        {/* Popular */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Popular Services</h2>
          <button onClick={() => navigate('categories')} className="text-sm text-violet-600 font-medium hover:underline">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {popular.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>

        {/* Trust */}
        <div className="bg-gradient-to-br from-gray-50 to-violet-50 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-4 text-center">Why HomeServ?</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: 'shield', title: 'Verified Pros', desc: 'Background checked' }, 
              { icon: 'clock', title: 'On-Time', desc: '98% punctuality' }, 
              { icon: 'star', title: 'Top Rated', desc: '4.8 avg rating' }
            ].map(f => (
              <div key={f.title} className="text-center">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Icon name={f.icon} size={18} className="text-violet-600" />
                </div>
                <p className="text-xs font-semibold text-gray-900">{f.title}</p>
                <p className="text-[10px] text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
