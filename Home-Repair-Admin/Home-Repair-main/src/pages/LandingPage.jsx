import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function LandingPage() {
  const { navigate } = useApp()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* grid overlay */}
        <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
        {/* decorative wave */}
        <svg className="absolute bottom-0 left-0 w-full h-20 text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity="0.5" d="M0,192L30,170.7C60,149,120,107,180,122.7C240,139,300,213,360,229.3C420,245,480,203,540,186.7C600,171,660,181,720,186.7C780,192,840,192,900,170.7C960,149,1020,107,1080,117.3C1140,128,1200,192,1260,218.7C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 backdrop-blur rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
              S
            </div>
            <div>
              <span className="font-bold text-xl block">Saheya Admin</span>
              <span className="text-sm text-white/60">Complaint Management System</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-screen text-center max-w-3xl mx-auto pb-20">
        <div className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight relative inline-block">
            Admin Portal,<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Efficiently Managed.
            </span>
            {/* subtle glow */}
            <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-blue-400 to-indigo-400 mix-blend-screen"></div>
          </div>
          <p className="text-lg text-white/70 mb-4 max-w-2xl mx-auto">
            Manage complaints, investigate issues, and ensure quality service for both customers and workers.
          </p>
          <p className="text-base text-white/60 mb-10 max-w-lg mx-auto">
            Streamlined complaint resolution • Fair investigations • Effective enforcement
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('adminLogin')} 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all inline-flex items-center justify-center gap-2 min-w-[200px]"
            >
              🔐 Admin Login
            </button>
            <button 
              onClick={() => navigate('adminRegister')} 
              className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 min-w-[200px]"
            >
              📝 Request Access
            </button>
          </div>

          {/* scroll indicator */}
          <div className="mt-8 flex justify-center">
            <Icon name="arrowDown" size={24} className="text-white/60 animate-bounce" />
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 bg-indigo-900/20 backdrop-blur-sm">
        <h2 className="text-center text-3xl font-extrabold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-bold text-lg mb-2">Complaint Management</h3>
              <p className="text-white/60 text-sm">Receive and organize complaints from customers and workers efficiently</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-bold text-lg mb-2">Investigation Tools</h3>
              <p className="text-white/60 text-sm">Review evidence, communicate with parties, and make fair determinations</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="font-bold text-lg mb-2">Enforcement Actions</h3>
              <p className="text-white/60 text-sm">Take appropriate actions including fines, suspensions, or refunds</p>
            </div>
        </div>
      </div>
    </div>
  )
}
