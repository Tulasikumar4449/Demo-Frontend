import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'
import { CATEGORIES } from '../data/mockData'

export function WorkerRegisterPage() {
  const { navigate, showToast } = useApp()
  const [selectedServices, setSelectedServices] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const toggleService = (categoryId) => {
    setSelectedServices(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }
  
  const handleRegister = () => {
    if (selectedServices.length === 0) {
      showToast('Please select at least one service', 'error')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      showToast('Account created! Please complete your profile')
      navigate('workerProfile')
    }, 1500)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <button 
          onClick={() => navigate('landing')} 
          className="flex items-center gap-2 text-white/60 mb-8 hover:text-white transition-all group"
        >
          <Icon name="back" size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>

        {/* Registration Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">👷</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2">Join Saheya</h1>
              <p className="text-white/60 text-sm">Become a verified service professional</p>
            </div>

            {/* Form */}
            <div className="space-y-5 mb-6">
              {/* Name Field */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Full Name
                </label>
                <input 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="email" size={18} className="text-white/40 group-focus-within:text-emerald-400 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="worker@example.com" 
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="phone" size={18} className="text-white/40 group-focus-within:text-emerald-400 transition-colors" />
                  </div>
                  <input 
                    placeholder="+91 98765 43210" 
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="lock" size={18} className="text-white/40 group-focus-within:text-emerald-400 transition-colors" />
                  </div>
                  <input 
                    type="password" 
                    placeholder="Min 8 characters" 
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                </div>
              </div>
            
              {/* Service Selection */}
              <div className="pt-4">
                <label className="text-xs font-semibold text-white/70 mb-3 block uppercase tracking-wide">
                  Select Services You Offer
                </label>
                <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto p-3 bg-white/5 rounded-xl border border-white/10 custom-scrollbar">
                  {CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => toggleService(category.id)}
                      className={`relative p-4 rounded-xl text-left transition-all duration-300 overflow-hidden group ${
                        selectedServices.includes(category.id)
                          ? 'bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/30'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      <div className="relative">
                        <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                        <div className={`text-xs font-bold ${selectedServices.includes(category.id) ? 'text-white' : 'text-white/90'}`}>
                          {category.name}
                        </div>
                      </div>
                      {selectedServices.includes(category.id) && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                          <Icon name="check" size={12} className="text-emerald-600" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs text-white/50">Selected: <span className="font-bold text-emerald-400">{selectedServices.length}</span> service(s)</p>
                  {selectedServices.length > 0 && (
                    <button 
                      onClick={() => setSelectedServices([])}
                      className="text-xs text-white/40 hover:text-white/70 transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            
              {/* Submit Button */}
              <button 
                onClick={handleRegister}
                disabled={isLoading}
                className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_100%] animate-shimmer group-hover:bg-right transition-all duration-500"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <Icon name="arrow-right" size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </div>
          
            {/* Login Link */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <span className="text-sm text-white/60">Already have an account? </span>
              <button 
                onClick={() => navigate('workerLogin')} 
                className="text-sm text-emerald-400 font-semibold hover:text-emerald-300 hover:underline transition-colors ml-1"
              >
                Sign In
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 text-center mb-3">Why join Saheya?</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-xl mb-1">✓</div>
                  <div className="text-xs text-white/50">Verified Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-xl mb-1">💰</div>
                  <div className="text-xs text-white/50">Secure Payment</div>
                </div>
                <div className="text-center">
                  <div className="text-xl mb-1">📈</div>
                  <div className="text-xs text-white/50">Grow Business</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-white/30 text-xs">
          <Icon name="shield" size={14} />
          <span>Your information is secure with Saheya</span>
        </div>
      </div>
    </div>
  )
}
