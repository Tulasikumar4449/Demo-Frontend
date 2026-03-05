import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { 
  Wrench, TrendingUp, DollarSign, Calendar, Clock, MapPin, Star, AlertCircle, 
  CheckCircle, XCircle, MessageSquare, ThumbsUp, FileText, Shield, Award, Bell, Search,
  ArrowLeft, Settings, LogOut, HelpCircle, ChevronDown, Upload, Megaphone
} from 'lucide-react'
import { RaiseToAdminModal } from '../components/RaiseToAdminModal'

export function WorkerDashboardPage() {
  const { navigate, showToast, user } = useApp()
  const [activeTab, setActiveTab] = useState('requests')
  const [selectedJob, setSelectedJob] = useState(null)
  const [showRaiseToAdmin, setShowRaiseToAdmin] = useState(false)
  const [showSettingsMenu, setShowSettingsMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  
  // Mock Data
  const incomingRequests = [
    { 
      id: 1, 
      service: 'AC Repair', 
      customer: 'Priya Sharma', 
      location: 'Sector 15, Gurugram', 
      date: '2026-03-05', 
      time: '10:00 AM', 
      price: '₹1,499', 
      urgency: 'high',
      rating: 4.8
    },
    { 
      id: 2, 
      service: 'Plumbing', 
      customer: 'Rahul Verma', 
      location: 'DLF Phase 2', 
      date: '2026-03-05', 
      time: '2:00 PM', 
      price: '₹899', 
      urgency: 'medium',
      rating: 4.5
    },
    { 
      id: 3, 
      service: 'Electrical', 
      customer: 'Sneha Patel', 
      location: 'Golf Course Road', 
      date: '2026-03-06', 
      time: '11:00 AM', 
      price: '₹1,199', 
      urgency: 'low',
      rating: 4.9
    },
  ]
  
  const completedJobs = [
    { id: 1, service: 'Carpentry', customer: 'Amit Singh', date: '2026-03-01', price: '₹2,500', status: 'completed', tip: '₹200', rating: 5 },
    { id: 2, service: 'Painting', customer: 'Neha Gupta', date: '2026-03-02', price: '₹3,200', status: 'completed', tip: '₹300', rating: 5 },
    { id: 3, service: 'Cleaning', customer: 'Vikram Joshi', date: '2026-03-03', price: '₹1,800', status: 'completed', tip: '₹150', rating: 4 },
    { id: 4, service: 'AC Repair', customer: 'Pooja Mehta', date: '2026-03-04', price: '₹1,500', status: 'completed', tip: '₹100', rating: 5 },
  ]

  const complaints = [
    { id: 1, type: 'Late Arrival', job: 'Plumbing - Sector 14', date: '2026-02-28', status: 'resolved', resolution: 'Warning issued to customer' },
    { id: 2, type: 'Payment Issue', job: 'Electrical - DLF Phase 3', date: '2026-03-01', status: 'pending', resolution: null },
  ]

  const tips = [
    { id: 1, text: 'Always carry basic tools to every job', category: 'Best Practice' },
    { id: 2, text: 'Take before/after photos for your portfolio', category: 'Growth Tip' },
    { id: 3, text: 'Arrive 10 minutes early to build trust', category: 'Customer Service' },
  ]

  const recentNotifications = [
    { id: 1, title: 'New Job Available', message: 'AC Repair in Sector 15', time: '5 min ago', type: 'info' },
    { id: 2, title: 'Payment Received', message: '₹1,499 credited to your account', time: '2 hours ago', type: 'success' },
    { id: 3, title: 'Job Reminder', message: 'Plumbing job tomorrow at 10 AM', time: '1 day ago', type: 'warning' },
  ]

  const stats = {
    totalEarnings: 45200,
    thisMonth: 28500,
    tips: 2750,
    completedJobs: 127,
    rating: 4.7,
    acceptanceRate: 92
  }

  const verificationStatus = {
    documents: 'verified',
    backgroundCheck: 'verified',
    phoneVerified: true,
    emailVerified: true,
    bankAccount: 'verified'
  }

  const handleAcceptJob = (jobId) => {
    setSelectedJob(jobId)
    setTimeout(() => {
      showToast('Job accepted successfully! 🎉')
      setSelectedJob(null)
    }, 500)
  }
  
  const handleRejectJob = () => showToast('Job declined')

  const handleLogout = () => {
    showToast('Logged out successfully')
    navigate('landing')
  }

  const handlePasswordReset = () => {
    showToast('Password reset link sent to your email')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Main Container - Aligned with Hello Arjun Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Top Navigation Bar - Aligned with Card Edges */}
        <div className="flex items-center justify-between mb-6">
          {/* Back Button - Left Edge */}
          <button
            onClick={() => navigate('landing')}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Home</span>
          </button>

          {/* Right Side Menu Buttons */}
          <div className="flex gap-3">
            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications)
                  setShowSettingsMenu(false)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md"
              >
                <Bell className="w-5 h-5" />
                <span className="hidden md:inline">Notifications</span>
                {recentNotifications.length > 0 && (
                  <span className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {recentNotifications.length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                  <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <h3 className="font-bold flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Recent Notifications
                    </h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {recentNotifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-all">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{notification.title}</h4>
                          <span className="text-xs text-gray-400">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <button className="text-sm text-emerald-600 font-semibold hover:text-emerald-700">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Settings Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowSettingsMenu(!showSettingsMenu)
                  setShowNotifications(false)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md"
              >
                <Settings className="w-5 h-5" />
                <span className="hidden md:inline">Settings</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showSettingsMenu ? 'rotate-180' : ''}`} />
              </button>

              {showSettingsMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                  <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <h3 className="font-bold flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Settings
                    </h3>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => navigate('workerProfile')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-medium">Profile</span>
                    </button>
                    <button
                      onClick={handlePasswordReset}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                    >
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Password Reset</span>
                    </button>
                    <button
                      onClick={() => showToast('Help center coming soon!')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                    >
                      <HelpCircle className="w-5 h-5" />
                      <span className="font-medium">Help</span>
                    </button>
                    <div className="border-t border-gray-100 my-2"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-all"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-semibold">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Welcome Header Card */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 text-white mb-8 shadow-xl shadow-emerald-500/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Hello Arjun! 👋</h2>
              <p className="text-white/90">You've earned ₹28,500 this month! Keep it up! 🎉</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <DollarSign className="w-6 h-6 mb-2 text-amber-300" />
              <div className="text-2xl font-bold">₹{stats.totalEarnings.toLocaleString()}</div>
              <div className="text-sm text-white/80">Total Earnings</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Calendar className="w-6 h-6 mb-2 text-green-300" />
              <div className="text-2xl font-bold">{stats.completedJobs}</div>
              <div className="text-sm text-white/80">Jobs Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Star className="w-6 h-6 mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">{stats.rating}</div>
              <div className="text-sm text-white/80">Your Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Award className="w-6 h-6 mb-2 text-purple-300" />
              <div className="text-2xl font-bold">{stats.acceptanceRate}%</div>
              <div className="text-sm text-white/80">Acceptance Rate</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Scrollable */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { id: 'requests', label: 'Incoming Requests', icon: <Clock className="w-5 h-5" />, count: incomingRequests.length },
            { id: 'completed', label: 'Completed Jobs', icon: <CheckCircle className="w-5 h-5" />, count: completedJobs.length },
            { id: 'earnings', label: 'Earnings & Tips', icon: <DollarSign className="w-5 h-5" /> },
            { id: 'complaints', label: 'Complaints', icon: <AlertCircle className="w-5 h-5" />, count: complaints.length },
            { id: 'verification', label: 'Verification', icon: <Shield className="w-5 h-5" /> },
            { id: 'raise-admin', label: 'Raise to Admin', icon: <Megaphone className="w-5 h-5" />, color: 'bg-red-600' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.id === 'raise-admin') {
                  setShowRaiseToAdmin(true)
                } else {
                  setActiveTab(tab.id)
                }
              }}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? tab.color 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Available Jobs Near You</h3>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                {incomingRequests.length} jobs available
              </span>
            </div>
            
            {incomingRequests.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                    <Wrench className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{job.service}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium text-gray-700">{job.rating}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-600">{job.customer}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{job.price}</div>
                        {job.urgency === 'high' && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full animate-pulse">
                            🔥 Urgent
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>{new Date(job.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>{job.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleRejectJob()}
                        className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                      >
                        Decline
                      </button>
                      <button 
                        onClick={() => handleAcceptJob(job.id)}
                        disabled={selectedJob === job.id}
                        className="flex-1 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all disabled:opacity-70"
                      >
                        {selectedJob === job.id ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                        ) : (
                          'Accept Job'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Your Completed Jobs</h3>
            {completedJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{job.service}</h4>
                      <p className="text-sm text-gray-600 mt-1">{job.customer}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{new Date(job.date).toLocaleDateString('en-IN')}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">{job.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{job.price}</div>
                    {job.tip > 0 && (
                      <div className="text-sm text-green-600 font-semibold mt-1 flex items-center gap-1 justify-end">
                        <ThumbsUp className="w-3 h-3" />
                        +₹{job.tip} Tip
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="space-y-6">
            {/* Earnings Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
                <DollarSign className="w-8 h-8 mb-3 text-emerald-200" />
                <div className="text-3xl font-bold mb-1">₹{stats.thisMonth.toLocaleString()}</div>
                <div className="text-sm text-emerald-100">This Month</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl">
                <ThumbsUp className="w-8 h-8 mb-3 text-amber-200" />
                <div className="text-3xl font-bold mb-1">₹{stats.tips.toLocaleString()}</div>
                <div className="text-sm text-amber-100">Total Tips</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
                <Calendar className="w-8 h-8 mb-3 text-purple-200" />
                <div className="text-3xl font-bold mb-1">₹{stats.totalEarnings.toLocaleString()}</div>
                <div className="text-sm text-purple-100">Lifetime Earnings</div>
              </div>
            </div>

            {/* Tips Received */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-6 h-6 text-green-600" />
                Tips Received
              </h3>
              <div className="space-y-3">
                {completedJobs.filter(j => j.tip > 0).map(job => (
                  <div key={job.id} className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">{job.service} - {job.customer}</div>
                      <div className="text-sm text-gray-600">{new Date(job.date).toLocaleDateString('en-IN')}</div>
                    </div>
                    <div className="text-green-600 font-bold">+₹{job.tip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'complaints' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Complaints & Issues</h3>
            {complaints.map((complaint) => (
              <div key={complaint.id} className={`rounded-2xl p-6 border-l-4 ${
                complaint.status === 'resolved' 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-red-50 border-red-500'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className={`w-5 h-5 ${
                        complaint.status === 'resolved' ? 'text-green-600' : 'text-red-600'
                      }`} />
                      <h4 className="font-bold text-gray-900">{complaint.type}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{complaint.job}</p>
                    <p className="text-xs text-gray-500">{new Date(complaint.date).toLocaleDateString('en-IN')}</p>
                    {complaint.resolution && (
                      <p className="text-sm text-green-700 mt-3 font-medium">✓ Resolved: {complaint.resolution}</p>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    complaint.status === 'resolved' 
                      ? 'bg-green-200 text-green-700' 
                      : 'bg-red-200 text-red-700'
                  }`}>
                    {complaint.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'verification' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Document Verification Status</h3>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="space-y-4">
                {[
                  { name: 'Identity Proof (Aadhaar)', status: verificationStatus.documents, icon: FileText },
                  { name: 'Background Check', status: verificationStatus.backgroundCheck, icon: Shield },
                  { name: 'Phone Number', status: verificationStatus.phoneVerified ? 'verified' : 'pending', icon: MessageSquare },
                  { name: 'Email Address', status: verificationStatus.emailVerified ? 'verified' : 'pending', icon: MessageSquare },
                  { name: 'Bank Account', status: verificationStatus.bankAccount, icon: DollarSign },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-6 h-6 ${
                        item.status === 'verified' ? 'text-green-600' : 'text-amber-600'
                      }`} />
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                    {item.status === 'verified' ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-semibold">Verified</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-amber-600">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm font-semibold">Pending</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-amber-600" />
                Pro Tips for Success
              </h3>
              <div className="space-y-3">
                {tips.map((tip) => (
                  <div key={tip.id} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <ThumbsUp className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{tip.text}</p>
                      <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded mt-2 inline-block">
                        {tip.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {showRaiseToAdmin && (
        <RaiseToAdminModal onClose={() => setShowRaiseToAdmin(false)} />
      )}
    </div>
  )
}
