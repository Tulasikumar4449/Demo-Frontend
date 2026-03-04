import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function EditWorkerProfilePage() {
  const { navigate, showToast, setUser, user } = useApp()
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    address: user.address || '',
    experience: '',
    hourlyRate: '',
    bio: ''
  })
  
  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }))
  
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please fill all required fields', 'error')
      return
    }
    setUser({ ...user, ...formData })
    showToast('Profile updated successfully!')
    navigate('workerProfile')
  }
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate('workerProfile')} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <Icon name="back" size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Edit Profile</h1>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">Full Name *</label>
            <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">Email *</label>
            <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="you@example.com" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">Phone *</label>
            <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">Address</label>
            <textarea value={formData.address} onChange={(e) => handleChange('address', e.target.value)} placeholder="Your full address" rows={3} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Experience</label>
              <input type="text" value={formData.experience} onChange={(e) => handleChange('experience', e.target.value)} placeholder="e.g., 3 years" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Hourly Rate</label>
              <input type="text" value={formData.hourlyRate} onChange={(e) => handleChange('hourlyRate', e.target.value)} placeholder="₹500/hr" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">Bio</label>
            <textarea value={formData.bio} onChange={(e) => handleChange('bio', e.target.value)} placeholder="Tell customers about yourself..." rows={4} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none" />
          </div>
        </div>
        
        <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
          <button onClick={() => navigate('workerProfile')} className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">Cancel</button>
          <button onClick={handleSubmit} className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all">Save Changes</button>
        </div>
      </div>
    </div>
  )
}
