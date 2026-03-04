import { useApp } from '../context/AppContext'
import { CATEGORIES } from '../data/mockData'

export function CategoriesPage() {
  const { navigate } = useApp()
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">All Service Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id} 
            onClick={() => navigate('serviceListing', { category: cat })} 
            className="group bg-white rounded-2xl p-5 flex items-center gap-4 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className={`bg-gradient-to-br ${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-gray-900">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{cat.desc}</p>
              <p className="text-xs text-violet-600 font-medium mt-1">{cat.count} services →</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
