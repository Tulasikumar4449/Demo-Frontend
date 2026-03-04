import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'
import { ComplaintCard } from '../components/admin/ComplaintCard'

export function AdminDashboardPage() {
  const { navigate, adminUser, complaints, investigations, enforcementActions, activeTab, setActiveTab } = useApp()
  const [filterSeverity, setFilterSeverity] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  
  // Filter complaints
  const filteredComplaints = complaints.filter(complaint => {
    if (filterSeverity !== 'all' && complaint.severity !== filterSeverity) return false
    if (filterStatus !== 'all' && complaint.status !== filterStatus) return false
    return true
  })

  // Stats
  const stats = {
    total: complaints.length,
    pending: complaints.filter(c => c.status === 'pending').length,
    underInvestigation: complaints.filter(c => c.status === 'under_investigation').length,
    resolved: complaints.filter(c => c.status === 'resolved').length,
    critical: complaints.filter(c => c.severity === 'critical').length
  }

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      navigate('landing')
    }
  }

  if (!adminUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Admin Access Required</h1>
          <p className="text-white/60 mb-6">Please login to access the admin portal</p>
          <button
            onClick={() => navigate('adminLogin')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Login to Admin Portal
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Saheya Admin Portal</h1>
              <p className="text-blue-100">Welcome back, {adminUser.name} ({adminUser.role})</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('landing')}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Icon name="home" size={18} />
                <span className="hidden sm:inline">Home</span>
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500/80 backdrop-blur-sm rounded-lg hover:bg-red-500 transition-all flex items-center gap-2"
              >
                <Icon name="logout" size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">{stats.total}</div>
              <div className="text-blue-100 text-sm">Total</div>
            </div>
            <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-300">{stats.pending}</div>
              <div className="text-yellow-100 text-sm">Pending</div>
            </div>
            <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-300">{stats.underInvestigation}</div>
              <div className="text-orange-100 text-sm">Investigating</div>
            </div>
            <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-green-300">{stats.resolved}</div>
              <div className="text-green-100 text-sm">Resolved</div>
            </div>
            <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-red-300">{stats.critical}</div>
              <div className="text-red-100 text-sm">Critical</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="flex overflow-x-auto">
            {[
              { id: 'all', label: 'All Complaints', icon: 'list', count: stats.total },
              { id: 'customer', label: 'From Customers', icon: 'user', count: complaints.filter(c => c.type === 'customer').length },
              { id: 'worker', label: 'From Workers', icon: 'briefcase', count: complaints.filter(c => c.type === 'worker').length },
              { id: 'pending', label: 'Pending Action', icon: 'clock', count: stats.pending },
              { id: 'investigations', label: 'Active Investigations', icon: 'search', count: stats.underInvestigation }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
                <span className="px-2 py-0.5 bg-gray-200 rounded-full text-xs">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs font-semibold text-gray-600 mb-2 block uppercase tracking-wide">
                Filter by Severity
              </label>
              <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Severities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs font-semibold text-gray-600 mb-2 block uppercase tracking-wide">
                Filter by Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="under_investigation">Under Investigation</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs font-semibold text-gray-600 mb-2 block uppercase tracking-wide">
                Search
              </label>
              <input
                type="text"
                placeholder="Search complaints..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Complaints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComplaints.map(complaint => (
            <ComplaintCard key={complaint.id} complaint={complaint} />
          ))}
        </div>

        {filteredComplaints.length === 0 && (
          <div className="text-center py-12">
            <Icon name="inbox" size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Complaints Found</h3>
            <p className="text-gray-500">Adjust your filters or check back later</p>
          </div>
        )}

        {/* Recent Enforcement Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Enforcement Actions</h2>
          <div className="space-y-3">
            {enforcementActions.slice(0, 5).map(action => (
              <div key={action.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    action.actionType === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    action.actionType === 'fine' ? 'bg-red-100 text-red-600' :
                    action.actionType === 'suspension' ? 'bg-orange-100 text-orange-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <Icon name={
                      action.actionType === 'warning' ? 'alertTriangle' :
                      action.actionType === 'fine' ? 'dollarSign' :
                      action.actionType === 'suspension' ? 'ban' : 'checkCircle'
                    } size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{action.target.name}</p>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 capitalize">{action.actionType}</p>
                  <p className="text-xs text-gray-500">{action.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
