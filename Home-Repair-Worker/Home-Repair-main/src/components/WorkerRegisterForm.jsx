import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'
import { CATEGORIES } from '../data/mockData'

export function WorkerRegisterForm({ onClose, onSwitchToLogin }) {
  const { navigate, showToast, setUser } = useApp()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    services: []
  })
  const [isLoading, setIsLoading] = useState(false)
  
  const toggleService = (categoryId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(categoryId) 
        ? prev.services.filter(id => id !== categoryId)
        : [...prev.services, categoryId]
    }))
  }
  
  const handleRegister = () => {
    if (formData.services.length === 0) {
      showToast('Please select at least one service', 'error')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setUser({ name: formData.name, email: formData.email })
      showToast('Account created! Please complete your profile 🎉')
      onClose()
      navigate('workerVerification')
    }, 1500)
  }
  
  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone || !formData.password)) {
      showToast('Please fill all fields', 'error')
      return
    }
    setStep(step + 1)
  }
  
  const prevStep = () => setStep(step - 1)
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-3xl font-black text-white">👷</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-black text-white mb-2">Join Saheya</h1>
        <p className="text-white/60 text-sm">Become a verified service professional</p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-white/70 uppercase">Step {step} of 2</span>
          <span className="text-xs font-bold text-emerald-400">{step === 1 ? 'Personal Info' : 'Select Services'}</span>
        </div>
        <div className="flex gap-2">
          <div className={`flex-1 h-2 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-white/10'}`}></div>
          <div className={`flex-1 h-2 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-white/10'}`}></div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-5 mb-6">
        {step === 1 ? (
          <>
            {/* Name Field */}
            <div className="group">
              <label className="text-xs font-bold text-white/70 mb-2 block uppercase tracking-wide">
                Full Name
              </label>
              <input 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Arjun Mehta" 
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 font-medium"
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="text-xs font-bold text-white/70 mb-2 block uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icon name="email" size={18} className="text-white/40 group-focus-within:text-emerald-400 transition-colors" />
                </div>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="worker@example.com" 
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 font-medium"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="group">
              <label className="text-xs font-bold text-white/70 mb-2 block uppercase tracking-wide">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icon name="phone" size={18} className="text-white/40 group-focus-within:text-emerald-400 transition-colors" />
                </div>
                <input 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210" 
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="text-xs font-bold text-white/70 mb-2 block uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icon name="lock" size={18} className="text-white/40 group-focus-within:text-emerald-400 transition-colors" />
                </div>
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  placeholder="Min 8 characters" 
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 font-medium"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Service Selection */}
            <div className="pt-2">
              <label className="text-xs font-bold text-white/70 mb-3 block uppercase tracking-wide">
                Select Services You Offer
              </label>
              <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto p-3 bg-white/5 rounded-xl border border-white/10 custom-scrollbar">
                {CATEGORIES.map(category => (
                  <button
                    key={category.id}
                    onClick={() => toggleService(category.id)}
                    className={`relative p-4 rounded-xl text-left transition-all duration-300 overflow-hidden group ${
                      formData.services.includes(category.id)
                        ? 'bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-lg shadow-emerald-500/30'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <div className="relative">
                      <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                      <div className={`text-xs font-bold ${formData.services.includes(category.id) ? 'text-white' : 'text-white/90'}`}>
                        {category.name}
                      </div>
                    </div>
                    {formData.services.includes(category.id) && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <Icon name="check" size={12} className="text-emerald-600" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-white/50">Selected: <span className="font-bold text-emerald-400">{formData.services.length}</span> service(s)</p>
                {formData.services.length > 0 && (
                  <button 
                    onClick={() => setFormData({...formData, services: []})}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      
        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-4">
          {step === 2 && (
            <button 
              onClick={prevStep}
              className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white font-bold hover:bg-white/10 transition-all duration-300"
            >
              Back
            </button>
          )}
          <button 
            onClick={step === 2 ? handleRegister : nextStep}
            disabled={isLoading}
            className="flex-1 relative px-6 py-4 rounded-xl font-bold text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-[length:200%_100%] animate-shimmer group-hover:bg-right transition-all duration-500"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{step === 2 ? 'Creating Account...' : 'Next Step...'}</span>
                </>
              ) : (
                <>
                  <span>{step === 2 ? 'Create Account' : 'Continue'}</span>
                  <Icon name="arrow-right" size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    
      {/* Login Link */}
      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <span className="text-sm text-white/60">Already have an account? </span>
        <button 
          onClick={onSwitchToLogin}
          className="text-sm text-emerald-400 font-bold hover:text-emerald-300 hover:underline transition-colors ml-1"
        >
          Sign In
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-xs text-white/40 text-center mb-3 font-medium">Why join Saheya?</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-white/5 rounded-xl">
            <div className="text-2xl mb-1">✓</div>
            <div className="text-xs text-white/50 font-medium">Verified Jobs</div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-xl">
            <div className="text-2xl mb-1">💰</div>
            <div className="text-xs text-white/50 font-medium">Secure Payment</div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-xl">
            <div className="text-2xl mb-1">📈</div>
            <div className="text-xs text-white/50 font-medium">Grow Business</div>
          </div>
        </div>
      </div>
    </div>
  )
}
