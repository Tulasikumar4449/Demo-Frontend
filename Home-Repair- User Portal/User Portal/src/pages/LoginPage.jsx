import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function LoginPage() {
  const { navigate, showToast } = useApp()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  
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
          <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
            H
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">Welcome back</h1>
          <p className="text-sm text-gray-500 text-center mb-8">Sign in to your HomeServ account</p>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Password</label>
              <input 
                type="password" 
                value={pass} 
                onChange={e => setPass(e.target.value)} 
                placeholder="••••••••" 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" 
              />
            </div>
            <button className="text-xs text-violet-600 font-medium hover:underline ml-auto block">
              Forgot password?
            </button>
            <button 
              onClick={() => { showToast('Signed in successfully!'); navigate('home') }} 
              className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all"
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500">Don't have an account? </span>
            <button 
              onClick={() => navigate('register')} 
              className="text-sm text-violet-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
