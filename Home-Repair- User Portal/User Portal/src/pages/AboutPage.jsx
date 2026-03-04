export function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
          H
        </div>
        <h1 className="text-2xl font-bold text-gray-900">HomeServ</h1>
        <p className="text-sm text-gray-500 mt-1">Home Services, Reimagined.</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          HomeServ connects you with verified, skilled professionals for all your home service needs. From cleaning and plumbing to beauty services and pest control — we make it effortless to maintain your home.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mt-3">
          Founded in 2023, we've served over 50,000 homes across 15 cities with a 4.8-star average rating. Our mission is to make quality home services accessible, affordable, and reliable for everyone.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { n: '50K+', l: 'Happy Homes' }, 
          { n: '500+', l: 'Professionals' }, 
          { n: '15', l: 'Cities' }, 
          { n: '4.8★', l: 'Avg Rating' }
        ].map(s => (
          <div key={s.l} className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
            <p className="text-xl font-bold text-violet-600">{s.n}</p>
            <p className="text-xs text-gray-500">{s.l}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-gray-400">Version 2.0.0 • Made with ❤️ in India</p>
    </div>
  )
}
