import { useApp } from '../context/AppContext'
import { SERVICES, CATEGORIES } from '../data/mockData'
import { ServiceCard } from '../components/ServiceCard'

export function ServiceListingPage() {
  const { selectedCategory } = useApp()
  const cat = selectedCategory || CATEGORIES[0]
  const services = SERVICES.filter(s => s.catId === cat.id)
  const allServices = services.length > 0 ? services : SERVICES.slice(0, 4)
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <div className={`bg-gradient-to-br ${cat.color} rounded-2xl p-6 mb-6 text-white`}>
        <div className="text-4xl mb-2">{cat.icon}</div>
        <h1 className="text-2xl font-bold">{cat.name}</h1>
        <p className="text-white/80 text-sm mt-1">
          {cat.desc} • {allServices.length} services available
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allServices.map(s => <ServiceCard key={s.id} service={s} />)}
      </div>
    </div>
  )
}
