import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Wrench, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react'

export function WorkerLoginPage() {
  const { navigate, showToast } = useApp()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const handleLogin = () => {
    if (!email || !pass) {
      showToast('Please enter email and password', 'error')
      return
    }
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      showToast('Welcome back to HomeServ!')
      navigate('workerDashboard')
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
                Welcome Back to <br/>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Your Success
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join thousands of workers earning great income with flexible schedules and guaranteed payments.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  'Guaranteed daily payments',
                  'Flexible work schedule',
                  'Verified customers only',
                  '24/7 support team'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Active Workers</div>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-1">₹45K+</div>
                  <div className="text-sm text-gray-600">Avg Monthly Income</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full">
            {/* Login Card */}
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-white backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-10">
                {/* Logo Section */}
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
                  <p className="text-gray-500 text-sm">Enter your credentials to access your account</p>
                </div>

                {/* Login Form */}
                <div className="space-y-6">
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
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="worker@example.com" 
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
                        value={pass} 
                        onChange={e => setPass(e.target.value)} 
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

                  {/* Forgot Password */}
                  <div className="flex justify-end">
                    <button className="text-sm text-emerald-600 font-semibold hover:text-emerald-700 transition-colors hover:underline">
                      Forgot password?
                    </button>
                  </div>

                  {/* Sign In Button */}
                  <button 
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_100%] animate-shimmer group-hover:bg-right transition-all duration-500"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Signing in...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In</span>
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
                      <span className="px-4 bg-white text-gray-500">Don't have an account?</span>
                    </div>
                  </div>

                  {/* Register Link */}
                  <button 
                    onClick={() => navigate('workerRegister')} 
                    className="w-full py-4 rounded-xl border-2 border-emerald-600 text-emerald-600 font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-3">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span>Your data is secure with HomeServ</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <Zap className="w-3 h-3 text-emerald-600" />
                      <span>Instant Booking</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified Customers</span>
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
