import { useApp } from '../context/AppContext'
import { Stars } from './Stars'
import { Icon } from '../icons/Icon'

export function ServiceCard({ service, compact }) {
  const { navigate } = useApp()
  
  return (
    <button 
      onClick={() => navigate('serviceDetail', { service })} 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gray-100 hover:border-violet-200 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {service.popular && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            ⭐ POPULAR
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-violet-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{service.provider}</p>
        <div className="flex items-center gap-2 mb-3">
          <Stars rating={service.rating} size={12} />
          <span className="text-xs text-gray-500">{service.rating} ({service.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-violet-600">₹{service.price.toLocaleString()}</span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Icon name="clock" size={12} />{service.duration}
          </span>
        </div>
      </div>
    </button>
  )
}
