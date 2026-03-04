import { useApp } from '../context/AppContext'
import { SERVICES, CATEGORIES } from '../data/mockData'
import { ServiceCard } from '../components/ServiceCard'

export function SearchPage() {
  const { searchQuery } = useApp()
  const results = SERVICES.filter(s => 
    s.name.toLowerCase().includes((searchQuery || '').toLowerCase()) || 
    CATEGORIES.find(c => c.id === s.catId)?.name.toLowerCase().includes((searchQuery || '').toLowerCase())
  )
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Search Results</h1>
      <p className="text-sm text-gray-500 mb-6">{results.length} results for "{searchQuery}"</p>
      {results.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-gray-500">No services found. Try a different search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
      )}
    </div>
  )
}
