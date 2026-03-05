import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { X, Upload, AlertCircle, FileText, CheckCircle } from 'lucide-react'

export function RaiseToAdminModal({ onClose }) {
  const { showToast } = useApp()
  const [issueType, setIssueType] = useState('')
  const [criticality, setCriticality] = useState('medium')
  const [description, setDescription] = useState('')
  const [attachment, setAttachment] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const issueTypes = [
    { value: 'customer', label: 'Customer Issue', icon: AlertCircle, description: 'Issue related to customer behavior or payment' },
    { value: 'technical', label: 'Technical Issue', icon: FileText, description: 'Portal, app, or system related problem' },
  ]

  const criticalityLevels = [
    { value: 'high', label: 'High', color: 'bg-red-100 text-red-700 border-red-200' },
    { value: 'medium', label: 'Medium', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    { value: 'normal', label: 'Normal', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  ]

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setAttachment(file)
    } else {
      showToast('Please upload a file less than 5MB', 'error')
    }
  }

  const handleSubmit = () => {
    if (!issueType) {
      showToast('Please select an issue type', 'error')
      return
    }
    if (!description.trim()) {
      showToast('Please provide a description', 'error')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      showToast('Complaint raised to admin successfully! 🎉')
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <AlertCircle className="w-7 h-7" />
                Raise to Admin
              </h2>
              <p className="text-white/80 text-sm mt-1">Report an issue that needs admin attention</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Issue Type Selection */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-3 block">
              Select Issue Type *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {issueTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.value}
                    onClick={() => setIssueType(type.value)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      issueType === type.value
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-2 ${
                      issueType === type.value ? 'text-emerald-600' : 'text-gray-400'
                    }`} />
                    <div className="font-semibold text-gray-900 mb-1">{type.label}</div>
                    <div className="text-xs text-gray-600">{type.description}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Criticality Level */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-3 block">
              Criticality Level
            </label>
            <div className="space-y-2">
              {criticalityLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setCriticality(level.value)}
                  className={`w-full p-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                    criticality === level.value
                      ? level.color + ' border-current shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-semibold">{level.label}</span>
                  {criticality === level.value && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Describe the Issue *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Clearly mention your issue with all details..."
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
            />
          </div>

          {/* File Attachment */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Photo Attachments (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 mb-1">
                  {attachment ? (
                    <span className="text-emerald-600 font-medium">✓ {attachment.name}</span>
                  ) : (
                    <>
                      <span className="font-medium text-emerald-600">Click to upload</span> or drag and drop
                    </>
                  )}
                </div>
                <div className="text-xs text-gray-500">PNG, JPG up to 5MB</div>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
              ) : (
                'Submit to Admin'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
