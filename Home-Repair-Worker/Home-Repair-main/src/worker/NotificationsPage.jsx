import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { Bell, AlertCircle, Info, CheckCircle, XCircle, Calendar, Clock, Wrench } from 'lucide-react'

export function NotificationsPage() {
  const { navigate } = useApp()
  const [filter, setFilter] = useState('all')

  // Mock notifications data
  const mockNotifications = [
    {
      id: 1,
      type: 'new-booking',
      title: 'New Job Available',
      message: 'AC Repair job in Sector 15, Gurugram',
      time: '5 minutes ago',
      read: false,
      priority: 'high',
      icon: Wrench,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Upcoming Job Reminder',
      message: 'Plumbing job scheduled for tomorrow at 10:00 AM',
      time: '1 hour ago',
      read: false,
      priority: 'medium',
      icon: Clock,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Received',
      message: '₹1,499 credited to your account',
      time: '2 hours ago',
      read: true,
      priority: 'low',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Customer Complaint',
      message: 'Late arrival reported for job #12345',
      time: 'Yesterday',
      read: true,
      priority: 'high',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 5,
      type: 'info',
      title: 'Profile Update',
      message: 'Your verification status has been updated',
      time: '2 days ago',
      read: true,
      priority: 'low',
      icon: Info,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ]

  const filteredNotifications = filter === 'all' 
    ? mockNotifications 
    : mockNotifications.filter(n => n.priority === filter)

  const markAsRead = (id) => {
    // Implementation for marking notification as read
    console.log('Mark as read:', id)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bell className="w-7 h-7" />
            Notifications
          </h1>
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
        
        <p className="text-white/80 text-sm">Stay updated with your latest activities</p>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-lg p-2 flex gap-2">
          {[
            { id: 'all', label: 'All', count: mockNotifications.length },
            { id: 'high', label: 'Urgent', count: mockNotifications.filter(n => n.priority === 'high').length },
            { id: 'medium', label: 'Pending', count: mockNotifications.filter(n => n.priority === 'medium').length },
            { id: 'low', label: 'Done', count: mockNotifications.filter(n => n.priority === 'low').length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                filter === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
              <span className={`ml-1 text-xs ${
                filter === tab.id ? 'text-white/80' : 'text-gray-400'
              }`}>
                ({tab.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-4 mt-6 space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-500 text-sm">You're all caught up!</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = notification.icon
            
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl p-4 shadow-sm border-l-4 transition-all hover:shadow-md cursor-pointer ${
                  notification.read 
                    ? 'border-gray-200' 
                    : 'border-emerald-500 bg-emerald-50/30'
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${notification.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${notification.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className={`font-semibold text-gray-900 ${!notification.read && 'text-emerald-700'}`}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {notification.time}
                      </span>
                      
                      {notification.priority === 'high' && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
