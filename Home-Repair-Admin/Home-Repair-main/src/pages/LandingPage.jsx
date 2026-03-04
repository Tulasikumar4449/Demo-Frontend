import { useApp } from '../context/AppContext'

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

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8">
        <div className="flex items-center justify-between mb-20">
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
        
        <div className="text-center max-w-3xl mx-auto pb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Admin Portal,<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Efficiently Managed.
            </span>
          </h1>
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-lg mb-2">Complaint Management</h3>
              <p className="text-white/60 text-sm">Receive and organize complaints from customers and workers efficiently</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-bold text-lg mb-2">Investigation Tools</h3>
              <p className="text-white/60 text-sm">Review evidence, communicate with parties, and make fair determinations</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-bold text-lg mb-2">Enforcement Actions</h3>
              <p className="text-white/60 text-sm">Take appropriate actions including fines, suspensions, or refunds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
