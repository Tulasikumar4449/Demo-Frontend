import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { Icon } from '../../icons/Icon'

export function ComplaintCard({ complaint }) {
  const { navigate, updateComplaintStatus } = useApp()
  const [showActions, setShowActions] = useState(false)

  const severityColors = {
    critical: 'bg-red-100 text-red-700 border-red-200',
    high: 'bg-orange-100 text-orange-700 border-orange-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-blue-100 text-blue-700 border-blue-200'
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    under_investigation: 'bg-orange-100 text-orange-700',
    resolved: 'bg-green-100 text-green-700'
  }

  const typeIcons = {
    customer: 'user',
    worker: 'briefcase'
  }

  const handleQuickAction = (status) => {
    updateComplaintStatus(complaint.id, status)
    setShowActions(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              complaint.type === 'customer' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
            }`}>
              <Icon name={typeIcons[complaint.type]} size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{complaint.complainant.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{complaint.type} Complaint</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${severityColors[complaint.severity]}`}>
              {complaint.severity.toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[complaint.status]}`}>
              {complaint.status.replace('_', ' ').toUpperCase()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <Icon name="calendar" size={14} />
          <span>{complaint.date}</span>
          <span className="mx-1">•</span>
          <Icon name="clock" size={14} />
          <span>{complaint.timestamp}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icon name="tag" size={14} />
          <span className="font-medium">{complaint.category}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {complaint.description}
        </p>

        {/* Against Info */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">Against</p>
          <p className="text-sm font-medium text-gray-900">{complaint.against.name}</p>
          {complaint.against.service && (
            <p className="text-xs text-gray-600">Service: {complaint.against.service}</p>
          )}
        </div>

        {/* Evidence */}
        {complaint.evidence && complaint.evidence.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Evidence ({complaint.evidence.length})</p>
            <div className="flex gap-2 overflow-x-auto">
              {complaint.evidence.slice(0, 3).map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  alt={`Evidence ${idx + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => navigate('investigation', { complaintId: complaint.id })}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Icon name="search" size={16} />
            Investigate
          </button>
          
          <div className="relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Icon name="moreVertical" size={16} />
              Actions
            </button>
            
            {showActions && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <div className="py-2">
                  <button
                    onClick={() => handleQuickAction('pending')}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                  >
                    Mark as Pending
                  </button>
                  <button
                    onClick={() => handleQuickAction('under_investigation')}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  >
                    Start Investigation
                  </button>
                  <button
                    onClick={() => handleQuickAction('resolved')}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    Mark as Resolved
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
