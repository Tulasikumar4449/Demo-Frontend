import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function AdminRegisterPage() {
  const { navigate, showToast } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleRegister = () => {
    const { name, email, phone, department, password, confirmPassword } = formData
    
    if (!name || !email || !phone || !department || !password || !confirmPassword) {
      showToast('Please fill all required fields', 'error')
      return
    }
    
    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error')
      return
    }
    
    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error')
      return
    }
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      showToast('Registration successful! Redirecting to login...', 'success')
      setTimeout(() => navigate('adminLogin'), 2000)
    }, 1500)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="w-full max-w-lg relative z-10">
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
          {/* Glassmorphism Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8">
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">A</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2">Admin Registration</h1>
              <p className="text-white/60 text-sm">Request access to Saheya Admin Portal</p>
            </div>

            {/* Registration Form */}
            <div className="space-y-5">
              {/* Full Name */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="user" size={18} className="text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Official Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="email" size={18} className="text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="official@saheya.com" 
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="phone" size={18} className="text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone} 
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                </div>
              </div>

              {/* Department */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Department *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="briefcase" size={18} className="text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <select 
                    name="department"
                    value={formData.department} 
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-800">Select Department</option>
                    <option value="operations" className="bg-gray-800">Operations</option>
                    <option value="customer-support" className="bg-gray-800">Customer Support</option>
                    <option value="hr" className="bg-gray-800">Human Resources</option>
                    <option value="finance" className="bg-gray-800">Finance</option>
                    <option value="technical" className="bg-gray-800">Technical Support</option>
                    <option value="management" className="bg-gray-800">Management</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <Icon name="chevronDown" size={18} className="text-white/40" />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="lock" size={18} className="text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    name="password"
                    value={formData.password} 
                    onChange={handleChange}
                    placeholder="Minimum 6 characters" 
                    className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white/60 transition-colors"
                  >
                    <Icon name={showPassword ? 'eyeOff' : 'eye'} size={18} />
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="group">
                <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                  Confirm Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="lock" size={18} className="text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input 
                    type={showConfirmPassword ? 'text' : 'password'} 
                    name="confirmPassword"
                    value={formData.confirmPassword} 
                    onChange={handleChange}
                    placeholder="Re-enter password" 
                    className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white/60 transition-colors"
                  >
                    <Icon name={showConfirmPassword ? 'eyeOff' : 'eye'} size={18} />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleRegister}
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Icon name="arrowRight" size={18} />
                  </>
                )}
              </button>

              {/* Login Link */}
              <p className="text-center text-white/60 text-sm">
                Already have an admin account?{' '}
                <button 
                  onClick={() => navigate('adminLogin')} 
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Sign In
                </button>
              </p>
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <p className="text-xs text-white/70">
                <strong>Note:</strong> Admin access requires approval from system administrator. Your request will be reviewed and you will be contacted within 2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
