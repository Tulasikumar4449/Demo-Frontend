import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'
import { CATEGORIES } from '../data/mockData'

export function WorkerProfilePage() {
  const { user, navigate } = useApp()
  
  const [workerData] = useState({
    ...user,
    services: [1, 2, 3],
    rating: '4.8',
    completedJobs: 127,
    totalEarnings: '₹45,200',
    availability: 'Available'
  })
  
  const workerServices = CATEGORIES.filter(cat => workerData.services.includes(cat.id))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-8 pb-24">
        {/* Back Button */}
        <button 
          onClick={() => navigate('workerDashboard')}
          className="flex items-center gap-2 text-white/60 mb-6 hover:text-white transition-all group"
        >
          <Icon name="back" size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Dashboard</span>
        </button>

        {/* Profile Header Card */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl text-center overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative">
              {/* Avatar with Animation */}
              <div className="relative inline-block mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  {workerData.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full animate-pulse"></div>
              </div>

              {/* Name & Info */}
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{workerData.name}</h1>
              <p className="text-white/60 text-sm mb-4">{workerData.email}</p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs font-semibold text-white">
                  {workerData.availability}
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                  ⭐ {workerData.rating} Rating
                </span>
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-bold text-green-400 flex items-center gap-1">
                  ✓ Verified Worker
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button 
                  onClick={() => navigate('editWorkerProfile')}
                  className="px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 group"
                >
                  <Icon name="edit" size={16} className="group-hover:rotate-12 transition-transform" />
                  <span>Edit Profile</span>
                </button>
                <button 
                  onClick={() => navigate('workerVerification')}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2 group"
                >
                  🛡️ <span>Verification Status</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { n: workerData.completedJobs, l: 'Jobs Done', icon: '✓', color: 'from-purple-500 to-pink-400' }, 
            { n: workerData.totalEarnings, l: 'Total Earnings', icon: '💰', color: 'from-amber-500 to-orange-400' }, 
            { n: workerData.rating, l: 'Average Rating', icon: '⭐', color: 'from-emerald-500 to-teal-400' }
          ].map(s => (
            <div key={s.l} className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative text-center">
                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <p className="text-2xl font-bold text-white mb-1">{s.n}</p>
                <p className="text-xs text-white/50">{s.l}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 mb-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Services You Offer</h2>
            <button 
              onClick={() => navigate('workerEditServices')} 
              className="text-sm text-emerald-400 font-semibold hover:text-emerald-300 hover:underline transition-colors flex items-center gap-1 group"
            >
              Edit Services
              <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workerServices.map(service => (
              <div key={service.id} className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">{service.name}</p>
                  <p className="text-xs text-white/50 truncate">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Options */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {[
            { icon: 'briefcase', label: 'My Jobs', page: 'workerDashboard', badge: '3 new', color: 'emerald' }, 
            { icon: 'calendar', label: 'Availability', page: 'workerAvailability', color: 'blue' }, 
            { icon: 'wallet', label: 'Earnings', page: 'workerEarnings', color: 'amber' }, 
            { icon: 'bell', label: 'Notifications', page: 'notifications', badge: '5', color: 'purple' }, 
            { icon: 'help', label: 'Help & Support', page: 'help', color: 'pink' },
            { icon: 'info', label: 'About Saheya', page: 'about', color: 'indigo' }
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => item.page && navigate(item.page)} 
              className="w-full group flex items-center gap-4 p-5 hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-b-0"
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-400 rounded-xl flex items-center justify-center text-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                <Icon name={item.icon} size={20} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-base font-semibold text-white">{item.label}</p>
              </div>
              {item.badge && (
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  item.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}>
                  {item.badge}
                </span>
              )}
              <Icon name="arrow-right" size={18} className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button 
          onClick={() => navigate('landing')}
          className="w-full mt-6 py-4 bg-white/5 backdrop-blur border border-white/20 rounded-xl text-white font-semibold hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Icon name="logout" size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Sign Out</span>
        </button>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40 mb-2">Saheya - Your Growth Partner</p>
          <div className="flex items-center justify-center gap-3 text-xs text-white/30">
            <span>v1.0.0</span>
            <span>•</span>
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </div>
  )
}
