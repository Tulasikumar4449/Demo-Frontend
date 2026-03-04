import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function AdminNotificationsPage() {
  const { navigate, adminNotifications, markNotificationAsRead, markAllNotificationsAsRead } = useApp()
  const [filter, setFilter] = useState('all') // all, unread, complaints, updates

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getTypeIcon = (type) => {
    switch(type) {
      case 'customer_complaint': return { icon: 'user', color: 'text-blue-600' }
      case 'worker_complaint': return { icon: 'briefcase', color: 'text-purple-600' }
      case 'investigation_update': return { icon: 'search', color: 'text-green-600' }
      case 'enforcement_action': return { icon: 'alertTriangle', color: 'text-orange-600' }
      default: return { icon: 'bell', color: 'text-gray-600' }
    }
  }

  const filteredNotifications = adminNotifications.filter(notification => {
    if (filter === 'unread') return !notification.read
    if (filter === 'complaints') return notification.type.includes('complaint')
    if (filter === 'updates') return !notification.type.includes('complaint')
    return true
  })

  const unreadCount = adminNotifications.filter(n => !n.read).length

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markNotificationAsRead(notification.id)
    }
    if (notification.complaintId) {
      navigate('investigation', { complaintId: notification.complaintId })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('adminDashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <Icon name="back" size={18} />
            <span className="font-medium">Back to Dashboard</span>
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-600 mt-1">
                {unreadCount > 0 
                  ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                  : 'All notifications read'}
              </p>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllNotificationsAsRead}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
              >
                Mark All as Read
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-3">
            {[
              { id: 'all', label: 'All', count: adminNotifications.length },
              { id: 'unread', label: 'Unread', count: unreadCount },
              { id: 'complaints', label: 'Complaints', count: adminNotifications.filter(n => n.type.includes('complaint')).length },
              { id: 'updates', label: 'Updates', count: adminNotifications.filter(n => !n.type.includes('complaint')).length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  filter === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    filter === tab.id ? 'bg-blue-200' : 'bg-gray-200'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="bell" size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Notifications</h3>
            <p className="text-gray-500">
              {filter === 'unread' 
                ? 'All caught up! No unread notifications'
                : 'No notifications match your filter'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map(notification => {
              const typeInfo = getTypeIcon(notification.type)
              return (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  className={`bg-white rounded-xl border-2 p-5 cursor-pointer transition-all hover:shadow-md ${
                    notification.read 
                      ? 'border-gray-200' 
                      : 'border-blue-300 bg-blue-50/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      notification.read ? 'bg-gray-100' : 'bg-blue-100'
                    }`}>
                      <Icon name={typeInfo.icon} size={22} className={typeInfo.color} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <h4 className={`font-semibold text-base mb-1 ${
                            notification.read ? 'text-gray-900' : 'text-blue-900'
                          }`}>
                            {notification.title}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {notification.message}
                          </p>
                        </div>
                        {!notification.read && (
                          <span className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-1"></span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Icon name="clock" size={14} />
                          {notification.time}
                        </span>
                        {notification.priority && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(notification.priority)}`}>
                            {notification.priority.toUpperCase()}
                          </span>
                        )}
                        {notification.type === 'customer_complaint' && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
                            Customer Complaint
                          </span>
                        )}
                        {notification.type === 'worker_complaint' && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
                            Worker Complaint
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
          <h3 className="font-bold text-lg mb-4">Notification Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{adminNotifications.length}</div>
              <div className="text-xs opacity-80">Total</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{unreadCount}</div>
              <div className="text-xs opacity-80">Unread</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{adminNotifications.filter(n => n.type.includes('complaint')).length}</div>
              <div className="text-xs opacity-80">Complaints</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{adminNotifications.filter(n => n.priority === 'critical' || n.priority === 'high').length}</div>
              <div className="text-xs opacity-80">Urgent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
