import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'
import { SERVICES } from '../data/mockData'

export function WorkerDashboardPage() {
  const { navigate, showToast } = useApp()
  const [activeTab, setActiveTab] = useState('requests')
  const [selectedJob, setSelectedJob] = useState(null)
  
  const availableJobs = [
    { id: 1, service: SERVICES[0], customer: 'Priya Sharma', location: 'Sector 15, Gurugram', date: '2026-03-05', time: '10:00 AM', price: '₹1,499', urgency: 'high' },
    { id: 2, service: SERVICES[2], customer: 'Rahul Verma', location: 'DLF Phase 2', date: '2026-03-05', time: '2:00 PM', price: '₹499', urgency: 'medium' },
    { id: 3, service: SERVICES[4], customer: 'Sneha Patel', location: 'Golf Course Road', date: '2026-03-06', time: '11:00 AM', price: '₹999', urgency: 'low' },
  ]
  
  const acceptedJobs = [
    { id: 4, service: SERVICES[1], customer: 'Amit Singh', location: 'Sector 29', date: '2026-03-04', time: '9:00 AM', price: '₹799', status: 'upcoming' },
    { id: 5, service: SERVICES[3], customer: 'Neha Gupta', location: 'MG Road', date: '2026-03-03', time: '3:00 PM', price: '₹399', status: 'completed' },
  ]
  
  const handleAcceptJob = (jobId) => {
    setSelectedJob(jobId)
    setTimeout(() => {
      showToast('Job accepted successfully! 🎉')
      setSelectedJob(null)
    }, 500)
  }
  
  const handleRejectJob = () => showToast('Job declined')
  
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 pb-24">
        {/* Welcome Header Card */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-5">
                  {/* Avatar with Animation */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                      👷
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      Hello Arjun Mehta! 👋
                    </h2>
                    <p className="text-white/60 text-sm md:text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      Welcome to Saheya - Your Growth Partner
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <button 
                  onClick={() => navigate('workerProfile')}
                  className="px-5 py-2.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group"
                >
                  <Icon name="settings" size={18} />
                  <span className="hidden md:inline">Profile Settings</span>
                </button>
              </div>

              {/* Navigation Buttons */}
              <div className="grid grid-cols-3 gap-4">
                <button 
                  onClick={() => navigate('workerProfile')}
                  className="group relative p-4 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                  <div className="relative text-center">
                    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">👤</div>
                    <div className="text-white/90 font-bold text-sm">Profile</div>
                    <div className="text-white/40 text-xs mt-1">View & Edit</div>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveTab('requests')}
                  className={`group relative p-4 backdrop-blur border rounded-2xl transition-all duration-300 overflow-hidden ${
                    activeTab === 'requests' 
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 border-emerald-400 shadow-lg shadow-emerald-500/30' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="relative text-center">
                    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">📋</div>
                    <div className={`font-bold text-sm ${activeTab === 'requests' ? 'text-white' : 'text-white/90'}`}>Requests</div>
                    <div className={`text-xs mt-1 ${activeTab === 'requests' ? 'text-white/80' : 'text-white/40'}`}>Available Jobs</div>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveTab('completed')}
                  className={`group relative p-4 backdrop-blur border rounded-2xl transition-all duration-300 overflow-hidden ${
                    activeTab === 'completed' 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-purple-400 shadow-lg shadow-purple-500/30' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50'
                  }`}
                >
                  <div className="relative text-center">
                    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">✅</div>
                    <div className={`font-bold text-sm ${activeTab === 'completed' ? 'text-white' : 'text-white/90'}`}>Completed</div>
                    <div className={`text-xs mt-1 ${activeTab === 'completed' ? 'text-white/80' : 'text-white/40'}`}>Job History</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Available Jobs', value: '3', icon: '📋', color: 'from-blue-500 to-cyan-400', gradient: 'from-blue-500/20 to-cyan-500/20' },
            { label: 'Accepted', value: '1', icon: '✅', color: 'from-emerald-500 to-teal-400', gradient: 'from-emerald-500/20 to-teal-500/20' },
            { label: 'Completed', value: '127', icon: '✓', color: 'from-purple-500 to-pink-400', gradient: 'from-purple-500/20 to-pink-500/20' },
            { label: 'Total Earnings', value: '₹45,200', icon: '💰', color: 'from-amber-500 to-orange-400', gradient: 'from-amber-500/20 to-orange-500/20' },
          ].map((stat, i) => (
            <div key={i} className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative">
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Job Listings Section */}
        <div className="space-y-4">
          {activeTab === 'requests' ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Available Jobs Near You</h3>
                <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-semibold text-emerald-400">
                  {availableJobs.length} jobs available
                </span>
              </div>
              
              {availableJobs.map((job, index) => (
                <div key={job.id} className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-start gap-5">
                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${job.service.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                      {job.service.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-bold text-white">{job.service.name}</h3>
                            {job.urgency === 'high' && (
                              <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-bold text-red-400 animate-pulse flex-shrink-0">
                                🔥 Urgent
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-white/60 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            {job.customer}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            {job.price}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                          <Icon name="calendar" size={14} className="text-emerald-400" />
                          <span>{new Date(job.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                          <Icon name="clock" size={14} className="text-emerald-400" />
                          <span>{job.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                          <Icon name="map" size={14} className="text-emerald-400" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => handleRejectJob()}
                          className="flex-1 md:flex-none px-6 py-3 bg-white/5 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                        >
                          Decline
                        </button>
                        <button 
                          onClick={() => handleAcceptJob(job.id)}
                          disabled={selectedJob === job.id}
                          className="flex-1 md:flex-none relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white font-bold overflow-hidden group disabled:opacity-70"
                        >
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative flex items-center justify-center gap-2">
                            {selectedJob === job.id ? (
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <>
                                <span>Accept Job</span>
                                <Icon name="check" size={18} />
                              </>
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Your Jobs</h3>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-400">
                  {acceptedJobs.length} jobs
                </span>
              </div>
              
              {acceptedJobs.map(job => (
                <div key={job.id} className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-start gap-5">
                    <div className={`w-16 h-16 bg-gradient-to-br ${job.service.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                      {job.service.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{job.service.name}</h3>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                          job.status === 'completed' 
                            ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                            : 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                      <p className="text-sm text-white/60 mb-3">{job.customer}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                          <Icon name="calendar" size={14} className="text-purple-400" />
                          <span>{new Date(job.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                          <Icon name="clock" size={14} className="text-purple-400" />
                          <span>{job.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                          <Icon name="map" size={14} className="text-purple-400" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          {job.price}
                        </div>
                        {job.status === 'upcoming' && (
                          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                            View Details
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
