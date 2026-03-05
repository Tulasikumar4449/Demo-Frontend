import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Wrench, Mail, Phone, User, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Shield, Zap, Award } from 'lucide-react'
import { CATEGORIES } from '../data/mockData'

export function WorkerRegisterPage() {
  const { navigate, showToast } = useApp()
  const [selectedServices, setSelectedServices] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })
  
  const toggleService = (categoryId) => {
    setSelectedServices(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }
  
  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      showToast('Please fill in all fields', 'error')
      return
    }
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="hidden md:block space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    HomeServ
                  </span>
                  <p className="text-sm text-gray-500 -mt-1">Professional Home Services</p>
                </div>
              </div>
              
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Start Your Journey <br/>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  With Success
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join India's fastest-growing home services platform. Earn great income, work flexible hours, and build your reputation.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Earn up to ₹50,000 per month',
                  'Choose your own working hours',
                  'Get paid directly to your bank account',
                  'Free training and support',
                  'Build your reputation with reviews'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <Award className="w-8 h-8 text-emerald-600 mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Verified Profile</div>
                  <div className="text-xs text-gray-500">Build trust with customers</div>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <Shield className="w-8 h-8 text-teal-600 mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Insurance Covered</div>
                  <div className="text-xs text-gray-500">Work with peace of mind</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="w-full">
            {/* Registration Card */}
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-white backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                  <p className="text-gray-500 text-sm">Join thousands of workers earning great income</p>
                </div>

                {/* Form */}
                <div className="space-y-5 mb-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                      </div>
                      <input 
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe" 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 focus:bg-white transition-all duration-300 hover:bg-gray-100 font-medium"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                      </div>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="worker@example.com" 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 focus:bg-white transition-all duration-300 hover:bg-gray-100 font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                      </div>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210" 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 focus:bg-white transition-all duration-300 hover:bg-gray-100 font-medium"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="group">
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                      </div>
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        placeholder="••••••••" 
                        className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 focus:bg-white transition-all duration-300 hover:bg-gray-100 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      Select Your Services
                    </label>
                    <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto p-2 bg-gray-50 rounded-xl border border-gray-200">
                      {CATEGORIES.map(category => (
                        <button
                          key={category.id}
                          onClick={() => toggleService(category.id)}
                          className={`p-3 rounded-lg text-sm font-medium transition-all ${
                            selectedServices.includes(category.id)
                              ? 'bg-emerald-500 text-white shadow-md'
                              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Create Account Button */}
                  <button 
                    onClick={handleRegister}
                    disabled={isLoading}
                    className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_100%] animate-shimmer group-hover:bg-right transition-all duration-500"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Creating Account...</span>
                        </>
                      ) : (
                        <>
                          <span>Create Account</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-4 bg-white text-gray-500">Already have an account?</span>
                    </div>
                  </div>

                  {/* Login Link */}
                  <button 
                    onClick={() => navigate('workerLogin')} 
                    className="w-full py-4 rounded-xl border-2 border-emerald-600 text-emerald-600 font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-3">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    <span>Quick registration - takes 2 minutes</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <Shield className="w-3 h-3 text-emerald-600" />
                      <span>Secure Data</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified Platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
