import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function InvestigationPage() {
  const { navigate, complaints, investigations, addInvestigationNote, takeEnforcementAction, addCommunicationMessage, adminUser } = useApp()
  const [complaint, setComplaint] = useState(null)
  const [investigation, setInvestigation] = useState(null)
  const [activeSection, setActiveSection] = useState('overview')
  const [noteText, setNoteText] = useState('')
  const [messageText, setMessageText] = useState('')
  const [showEnforcementModal, setShowEnforcementModal] = useState(false)
  const [enforcementType, setEnforcementType] = useState('')
  const [finding, setFinding] = useState('')
  
  // Get complaint ID from navigation (in real app, this would come from route params)
  useEffect(() => {
    // For demo, using first pending complaint
    const pendingComplaint = complaints.find(c => c.status === 'pending') || complaints[0]
    setComplaint(pendingComplaint)
    
    const relatedInvestigation = investigations.find(inv => inv.complaintId === pendingComplaint?.id)
    if (relatedInvestigation) {
      setInvestigation(relatedInvestigation)
    }
  }, [])

  if (!complaint) return <div className="p-8 text-center">Loading...</div>

  const handleAddNote = () => {
    if (!noteText.trim()) return
    addInvestigationNote(investigation?.id || 1, { text: noteText })
    setNoteText('')
  }

  const handleSendMessage = (recipient) => {
    if (!messageText.trim()) return
    addCommunicationMessage(complaint.id, {
      sender: adminUser?.name || 'Admin',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toISOString().split('T')[0]
    })
    setMessageText('')
  }

  const handleEnforcementAction = (actionData) => {
    takeEnforcementAction({
      complaintId: complaint.id,
      target: actionData.target,
      actionType: actionData.type,
      description: actionData.description,
      amount: actionData.amount,
      duration: actionData.duration
    })
    setShowEnforcementModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('adminDashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <Icon name="back" size={18} />
            <span className="font-medium">Back to Dashboard</span>
          </button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Investigation Panel</h1>
              <p className="text-gray-600">Case #{complaint.id} - {complaint.category}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                complaint.severity === 'critical' ? 'bg-red-100 text-red-700' :
                complaint.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {complaint.severity.toUpperCase()} PRIORITY
              </span>
              <button
                onClick={() => setShowEnforcementModal(true)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold flex items-center gap-2"
              >
                <Icon name="alertTriangle" size={18} />
                Take Action
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Complaint Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Complaint Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Complaint Overview</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Complainant</p>
                    <p className="font-semibold text-gray-900">{complaint.complainant.name}</p>
                    <p className="text-sm text-gray-600">{complaint.complainant.email || complaint.complainant.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Against</p>
                    <p className="font-semibold text-gray-900">{complaint.against.name}</p>
                    <p className="text-sm text-gray-600">{complaint.against.workerId || complaint.against.customerId}</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Description</p>
                  <p className="text-gray-700">{complaint.description}</p>
                </div>

                {complaint.evidence && complaint.evidence.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-3">Evidence Photos</p>
                    <div className="grid grid-cols-3 gap-3">
                      {complaint.evidence.map((photo, idx) => (
                        <img
                          key={idx}
                          src={photo}
                          alt={`Evidence ${idx + 1}`}
                          className="w-full h-32 object-cover rounded-lg border border-gray-200 cursor-pointer hover:opacity-75 transition-opacity"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Communication */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Communication Log</h2>
              
              {/* Message with Customer */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-700">Communication with Customer</h3>
                  <span className="text-xs text-gray-500">{complaint.complainant.name}</span>
                </div>
                <div className="space-y-3 mb-3 max-h-60 overflow-y-auto">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-800">Hello, I need clarification on the service quality issue reported.</p>
                    <p className="text-xs text-gray-500 mt-1">10:30 AM - Today</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleSendMessage(complaint.complainant.name)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    <Icon name="send" size={18} />
                  </button>
                </div>
              </div>

              {/* Message with Worker */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-700">Communication with Worker</h3>
                  <span className="text-xs text-gray-500">{complaint.against.name}</span>
                </div>
                <div className="space-y-3 mb-3 max-h-60 overflow-y-auto">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm text-gray-800">Please explain what happened during the service.</p>
                    <p className="text-xs text-gray-500 mt-1">11:15 AM - Today</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleSendMessage(complaint.against.name)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                  >
                    <Icon name="send" size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Investigation Notes */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Investigation Notes</h2>
              
              <div className="space-y-3 mb-4">
                {investigation?.notes?.map((note, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-800">{note.text}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span className="font-medium">{note.author}</span>
                      <span>•</span>
                      <span>{note.date}</span>
                    </div>
                  </div>
                )) || <p className="text-gray-500 text-sm">No notes yet</p>}
              </div>

              <div className="flex gap-2">
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add investigation note..."
                  rows={3}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <button
                  onClick={handleAddNote}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all self-end"
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Actions */}
          <div className="space-y-6">
            
            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Case Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Date Reported:</span>
                  <span className="font-medium text-gray-900">{complaint.date}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-gray-900 capitalize">{complaint.status.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium text-gray-900">{complaint.category}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-medium text-gray-900">#{complaint.bookingId}</span>
                </div>
              </div>
            </div>

            {/* Finding Decision */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Investigation Finding</h3>
              <p className="text-sm text-gray-600 mb-4">Based on your investigation, select the finding:</p>
              
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  finding === 'true_customer' ? 'border-blue-500 bg-blue-100' : 'border-gray-200 bg-white hover:border-blue-300'
                }`}>
                  <input
                    type="radio"
                    name="finding"
                    value="true_customer"
                    checked={finding === 'true_customer'}
                    onChange={(e) => setFinding(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Customer is Genuine</p>
                    <p className="text-xs text-gray-600">Take action against worker</p>
                  </div>
                </label>

                <label className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  finding === 'true_worker' ? 'border-blue-500 bg-blue-100' : 'border-gray-200 bg-white hover:border-blue-300'
                }`}>
                  <input
                    type="radio"
                    name="finding"
                    value="true_worker"
                    checked={finding === 'true_worker'}
                    onChange={(e) => setFinding(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Worker is Genuine</p>
                    <p className="text-xs text-gray-600">Provide support to customer</p>
                  </div>
                </label>

                <label className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  finding === 'false_complaint' ? 'border-blue-500 bg-blue-100' : 'border-gray-200 bg-white hover:border-blue-300'
                }`}>
                  <input
                    type="radio"
                    name="finding"
                    value="false_complaint"
                    checked={finding === 'false_complaint'}
                    onChange={(e) => setFinding(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">False Complaint</p>
                    <p className="text-xs text-gray-600">Complaint lacks evidence</p>
                  </div>
                </label>
              </div>

              {finding && (
                <button
                  onClick={() => setShowEnforcementModal(true)}
                  className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
                >
                  Proceed with Action
                </button>
              )}
            </div>

            {/* History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Related History</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">Previous Complaints by Customer</p>
                  <p className="font-semibold text-gray-900">2 complaints</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">Previous Complaints against Worker</p>
                  <p className="font-semibold text-gray-900">1 complaint</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">Worker Rating</p>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900">4.2</span>
                    <span className="text-yellow-500">★★★★☆</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enforcement Modal */}
      {showEnforcementModal && (
        <EnforcementActionModal
          complaint={complaint}
          finding={finding}
          onClose={() => setShowEnforcementModal(false)}
          onSubmit={handleEnforcementAction}
        />
      )}
    </div>
  )
}

// Enforcement Action Modal Component
function EnforcementActionModal({ complaint, finding, onClose, onSubmit }) {
  const [selectedAction, setSelectedAction] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [duration, setDuration] = useState('')

  const handleSubmit = () => {
    if (finding === 'true_customer' || finding === 'false_complaint') {
      // Action against worker
      onSubmit({
        target: { type: 'worker', name: complaint.against.name, id: complaint.against.workerId },
        type: selectedAction,
        description: description,
        amount: selectedAction === 'fine' ? amount : null,
        duration: selectedAction === 'suspension' ? duration : null
      })
    } else {
      // Support for customer
      onSubmit({
        target: { type: 'customer', name: complaint.complainant.name, id: complaint.complainant.customerId },
        type: selectedAction,
        description: description
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Take Enforcement Action</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Action Type</label>
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an action</option>
              {finding === 'true_customer' || finding === 'false_complaint' ? (
                <>
                  <option value="warning">Warning</option>
                  <option value="fine">Fine</option>
                  <option value="suspension">Temporary Suspension</option>
                  <option value="ban">Permanent Ban</option>
                  <option value="license_revocation">License Revocation</option>
                </>
              ) : (
                <>
                  <option value="refund">Refund</option>
                  <option value="re-service">Re-service</option>
                  <option value="coupon">Coupon/Discount</option>
                  <option value="apology">Formal Apology</option>
                </>
              )}
            </select>
          </div>

          {selectedAction === 'fine' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Fine Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {selectedAction === 'suspension' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Suspension Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 7 days, 2 weeks"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the action and reason..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedAction || !description}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Action
          </button>
        </div>
      </div>
    </div>
  )
}
