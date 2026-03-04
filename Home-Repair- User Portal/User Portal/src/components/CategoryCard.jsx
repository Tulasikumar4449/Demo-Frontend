import { useApp } from '../context/AppContext'

export function CategoryCard({ cat, small }) {
  const { navigate } = useApp()
  
  return (
    <button 
      onClick={() => navigate('serviceListing', { category: cat })} 
      className={`group bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${small ? 'p-3 text-center' : 'p-5 flex items-center gap-4'}`}
    >
      <div className={`bg-gradient-to-br ${cat.color} ${small ? 'w-12 h-12 mx-auto mb-2' : 'w-14 h-14'} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
        {cat.icon}
      </div>
      <div className={small ? '' : 'flex-1'}>
        <h3 className={`font-semibold text-gray-900 ${small ? 'text-xs' : 'text-sm'}`}>
          {cat.name}
        </h3>
        {!small && <p className="text-xs text-gray-500 mt-0.5">{cat.count} services</p>}
      </div>
    </button>
  )
}
