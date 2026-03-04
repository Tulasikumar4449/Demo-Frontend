import { useApp } from '../context/AppContext'

export function LandingPage() {
  const { navigate } = useApp()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8">
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-lg font-bold">H</div>
            <span className="font-bold text-lg">HomeServ</span>
          </div>
        </div>
        <div className="text-center max-w-2xl mx-auto pb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Home Services,<br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Reimagined.
            </span>
          </h1>
          <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto">
            Book trusted professionals for cleaning, repairs, beauty & more — all from your phone.
          </p>
          <div className="mt-8">
            <button 
              onClick={() => navigate('workerLogin')} 
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all inline-flex items-center gap-2"
            >
              👷 Join as Worker
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
