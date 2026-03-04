import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function RegisterPage() {
  const { navigate, showToast } = useApp()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button 
          onClick={() => navigate('landing')} 
          className="flex items-center gap-2 text-gray-500 mb-8 hover:text-gray-700"
        >
          <Icon name="back" size={18} />Back
        </button>
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">Create Account</h1>
          <p className="text-sm text-gray-500 text-center mb-8">Join 50,000+ happy homeowners</p>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Full Name</label>
              <input 
                placeholder="John Doe" 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Phone</label>
              <input 
                placeholder="+91 98765 43210" 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Password</label>
              <input 
                type="password" 
                placeholder="Min 8 characters" 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
              />
            </div>
            <button 
              onClick={() => { showToast('Account created!'); navigate('home') }} 
              className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all"
            >
              Create Account
            </button>
          </div>
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500">Already have an account? </span>
            <button 
              onClick={() => navigate('login')} 
              className="text-sm text-violet-600 font-semibold hover:underline"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
