import { useState } from 'react'
import { useApp } from '../context/AppContext'

export function EditProfilePage() {
  const { user, setUser, navigate, showToast } = useApp()
  const [form, setForm] = useState({ ...user })
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white">
            {form.avatar}
          </div>
        </div>
        {[
          { key: 'name', label: 'Full Name' }, 
          { key: 'email', label: 'Email' }, 
          { key: 'phone', label: 'Phone' }, 
          { key: 'address', label: 'Address' }
        ].map(f => (
          <div key={f.key}>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">{f.label}</label>
            <input 
              value={form[f.key]} 
              onChange={e => setForm({ ...form, [f.key]: e.target.value })} 
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
            />
          </div>
        ))}
        <button 
          onClick={() => { setUser(form); showToast('Profile updated!'); navigate('profile') }} 
          className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}
