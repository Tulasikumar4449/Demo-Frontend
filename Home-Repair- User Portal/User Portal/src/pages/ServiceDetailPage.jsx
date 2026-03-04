import { useApp } from '../context/AppContext'
import { SERVICES, REVIEWS } from '../data/mockData'
import { Stars } from '../components/Stars'
import { Icon } from '../icons/Icon'

export function ServiceDetailPage() {
  const { selectedService, navigate, showToast } = useApp()
  const s = selectedService || SERVICES[0]
  
  return (
    <div className="max-w-3xl mx-auto pb-24 md:pb-8">
      <img src={s.image} alt={s.name} className="w-full h-56 sm:h-72 object-cover" />
      <div className="px-4 py-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            {s.popular && (
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                ⭐ POPULAR
              </span>
            )}
            <h1 className="text-2xl font-bold text-gray-900 mt-1">{s.name}</h1>
            <p className="text-sm text-gray-500">{s.provider}</p>
          </div>
          <button className="p-2 hover:bg-red-50 rounded-xl transition-colors">
            <Icon name="heart" size={22} className="text-gray-300 hover:text-red-500" />
          </button>
        </div>
        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center gap-1">
            <Stars rating={s.rating} />
            <span className="text-sm font-semibold text-gray-700 ml-1">{s.rating}</span>
            <span className="text-xs text-gray-400">({s.reviews} reviews)</span>
          </div>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Icon name="clock" size={14} />{s.duration}
          </span>
        </div>
        <div className="bg-violet-50 rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-violet-600 font-medium">Service Price</p>
            <p className="text-3xl font-bold text-violet-700">₹{s.price.toLocaleString()}</p>
          </div>
          <span className="text-xs text-violet-500 bg-violet-100 px-3 py-1 rounded-full">
            Inclusive of taxes
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">About this service</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">{s.desc}</p>
        <h3 className="font-semibold text-gray-900 mb-3">What's included</h3>
        <div className="space-y-2 mb-6">
          {[
            'Professional service by verified experts', 
            'Eco-friendly products & equipment', 
            '30-day service guarantee', 
            'Transparent pricing, no hidden charges'
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
              <Icon name="check" size={16} className="text-emerald-500" />
              {item}
            </div>
          ))}
        </div>
        <h3 className="font-semibold text-gray-900 mb-3">Customer Reviews</h3>
        <div className="space-y-3 mb-8">
          {REVIEWS.map(r => (
            <div key={r.id} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm text-gray-900">{r.user}</span>
                <span className="text-xs text-gray-400">{r.date}</span>
              </div>
              <Stars rating={r.rating} size={12} />
              <p className="text-sm text-gray-600 mt-2">{r.text}</p>
            </div>
          ))}
        </div>
        <button 
          onClick={() => navigate('booking', { service: s })} 
          className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-violet-500/30 transition-all"
        >
          Book Now — ₹{s.price.toLocaleString()}
        </button>
      </div>
    </div>
  )
}
