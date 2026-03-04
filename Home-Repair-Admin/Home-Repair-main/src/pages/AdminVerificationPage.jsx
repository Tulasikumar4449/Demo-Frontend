import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function AdminVerificationPage() {
  const { navigate, showToast } = useApp()
  const [verificationStep, setVerificationStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    aadhar: '',
    pan: '',
    department: '',
    employeeId: ''
  })
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleNext = () => {
    if (verificationStep === 1) {
      // Validate step 1
      if (!formData.aadhar || !formData.pan || !formData.department) {
        showToast('Please fill all required fields', 'error')
        return
      }
    }
    
    if (verificationStep < 3) {
      setVerificationStep(verificationStep + 1)
    } else {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        showToast('Verification submitted successfully! Wait for admin approval.', 'success')
        setTimeout(() => navigate('adminLogin'), 2000)
      }, 1500)
    }
  }
  
  const handleBack = () => {
    if (verificationStep > 1) {
      setVerificationStep(verificationStep - 1)
    }
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

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center gap-3 ${verificationStep >= 1 ? 'text-blue-400' : 'text-white/40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                verificationStep >= 1 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                  : 'bg-white/10 border border-white/20'
              }`}>
                1
              </div>
              <span className="font-semibold">Identity</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${verificationStep >= 2 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-white/10'}`}></div>
            <div className={`flex items-center gap-3 ${verificationStep >= 2 ? 'text-blue-400' : 'text-white/40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                verificationStep >= 2 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                  : 'bg-white/10 border border-white/20'
              }`}>
                2
              </div>
              <span className="font-semibold">Documents</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${verificationStep >= 3 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-white/10'}`}></div>
            <div className={`flex items-center gap-3 ${verificationStep >= 3 ? 'text-blue-400' : 'text-white/40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                verificationStep >= 3 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                  : 'bg-white/10 border border-white/20'
              }`}>
                3
              </div>
              <span className="font-semibold">Review</span>
            </div>
          </div>
        </div>

        {/* Verification Card */}
        <div className="relative">
          {/* Glassmorphism Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Admin Verification</h1>
              <p className="text-white/60 text-sm">Complete the verification process to gain admin access</p>
            </div>

            {/* Step 1: Identity Verification */}
            {verificationStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                      Aadhar Number *
                    </label>
                    <input 
                      type="text" 
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleChange}
                      placeholder="XXXX-XXXX-XXXX" 
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                      PAN Number *
                    </label>
                    <input 
                      type="text" 
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                      placeholder="ABCDE1234F" 
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-800">Select Department</option>
                    <option value="operations" className="bg-gray-800">Operations</option>
                    <option value="customer-support" className="bg-gray-800">Customer Support</option>
                    <option value="hr" className="bg-gray-800">Human Resources</option>
                    <option value="finance" className="bg-gray-800">Finance</option>
                    <option value="technical" className="bg-gray-800">Technical Support</option>
                    <option value="management" className="bg-gray-800">Management</option>
                  </select>
                </div>

                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <p className="text-sm text-white/70">
                    <Icon name="info" size={16} className="inline mr-2 -mt-1" />
                    Your identity information will be verified against government records. Please ensure all details are accurate.
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Continue to Documents</span>
                  <Icon name="arrowRight" size={18} />
                </button>
              </div>
            )}

            {/* Step 2: Document Upload */}
            {verificationStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="group">
                    <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                      Aadhar Card *
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors cursor-pointer bg-white/5 group-hover:bg-white/10">
                      <Icon name="upload" size={32} className="mx-auto text-white/40 mb-3 group-hover:text-blue-400 transition-colors" />
                      <p className="text-white/60 text-sm mb-1 font-medium">Upload Aadhar Card (Front & Back)</p>
                      <p className="text-white/40 text-xs">PNG, JPG or PDF up to 5MB</p>
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                      PAN Card *
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors cursor-pointer bg-white/5 group-hover:bg-white/10">
                      <Icon name="upload" size={32} className="mx-auto text-white/40 mb-3 group-hover:text-blue-400 transition-colors" />
                      <p className="text-white/60 text-sm mb-1 font-medium">Upload PAN Card</p>
                      <p className="text-white/40 text-xs">PNG, JPG or PDF up to 5MB</p>
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                      Employee ID / Authorization Letter *
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors cursor-pointer bg-white/5 group-hover:bg-white/10">
                      <Icon name="upload" size={32} className="mx-auto text-white/40 mb-3 group-hover:text-blue-400 transition-colors" />
                      <p className="text-white/60 text-sm mb-1 font-medium">Upload Employee ID or Authorization Letter</p>
                      <p className="text-white/40 text-xs">PNG, JPG or PDF up to 5MB</p>
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
                      Profile Photo *
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors cursor-pointer bg-white/5 group-hover:bg-white/10">
                      <Icon name="upload" size={32} className="mx-auto text-white/40 mb-3 group-hover:text-blue-400 transition-colors" />
                      <p className="text-white/60 text-sm mb-1 font-medium">Upload Passport-size Photo</p>
                      <p className="text-white/40 text-xs">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Continue to Review</span>
                    <Icon name="arrowRight" size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {verificationStep === 3 && (
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Review Your Information</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Aadhar Number</p>
                        <p className="text-white font-mono text-sm">{formData.aadhar || 'XXXX-XXXX-1234'}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wide mb-1">PAN Number</p>
                        <p className="text-white font-mono text-sm">{formData.pan || 'ABCDE1234F'}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Department</p>
                      <p className="text-white font-medium capitalize">{formData.department || 'Operations'}</p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-2">Documents Uploaded</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                          📄 Aadhar Card
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                          📄 PAN Card
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">
                          🆔 Employee ID
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs border border-orange-500/30">
                          📷 Profile Photo
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4 mt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-white/60 uppercase tracking-wide">Verification Status</p>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold border border-yellow-500/30">
                          ⏳ Pending Verification
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                  <div className="flex items-start gap-3">
                    <Icon name="info" size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white/80 font-semibold mb-1">Important Information</p>
                      <ul className="text-xs text-white/70 space-y-1 list-disc list-inside">
                        <li>Your documents will be verified within 2-3 business days</li>
                        <li>You will receive an email confirmation once verified</li>
                        <li>Only verified admins can access the complaint management system</li>
                        <li>Ensure all uploaded documents are clear and valid</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isLoading}
                    className="flex-1 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Verification</span>
                        <Icon name="check" size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
