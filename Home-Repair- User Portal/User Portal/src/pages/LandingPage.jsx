import { useApp } from '../context/AppContext'

export function LandingPage() {
  const { navigate } = useApp()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white/10 animate-pulse" 
            style={{ 
              width: `${80 + i * 60}px`, 
              height: `${80 + i * 60}px`, 
              top: `${10 + i * 15}%`, 
              left: `${5 + i * 16}%`, 
              animationDelay: `${i * 0.5}s` 
            }} 
          />
        ))}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8">
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-lg font-bold">H</div>
            <span className="font-bold text-lg">HomeServ</span>
          </div>
          <button 
            onClick={() => navigate('login')} 
            className="px-5 py-2 bg-white/10 backdrop-blur rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
          >
            Sign In
          </button>
        </div>
        <div className="text-center max-w-2xl mx-auto pb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-8 text-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Trusted by 50,000+ homes
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Home Services,<br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Reimagined.
            </span>
          </h1>
          <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto">
            Book trusted professionals for cleaning, repairs, beauty & more — all from your phone. Fast, reliable, affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('home')} 
              className="px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5"
            >
              Explore Services →
            </button>
            <button 
              onClick={() => navigate('register')} 
              className="px-8 py-4 bg-white/10 backdrop-blur rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Create Account
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-md mx-auto">
            {[
              { n: '500+', l: 'Professionals' }, 
              { n: '50K+', l: 'Bookings' }, 
              { n: '4.8★', l: 'Rating' }
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold">{s.n}</div>
                <div className="text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
