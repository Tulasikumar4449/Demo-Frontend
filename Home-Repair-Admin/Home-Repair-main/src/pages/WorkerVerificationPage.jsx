import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

export function WorkerVerificationPage() {
  const { navigate, showToast } = useApp()
  
  // Mock verification data - replace with actual API calls
  const [verificationStatus, setVerificationStatus] = useState({
    documentsSubmitted: true,
    documentsVerified: true,
    policeVerification: 'pending',
    backgroundCheck: 'in-progress',
    trainingCompleted: false,
    agreementSigned: true,
    overallStatus: 'in-progress' // pending, in-progress, verified, rejected
  })

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Aadhaar Card', type: 'identity', status: 'verified', uploadedAt: '2026-03-01' },
    { id: 2, name: 'PAN Card', type: 'identity', status: 'verified', uploadedAt: '2026-03-01' },
    { id: 3, name: 'Electricity Bill', type: 'address', status: 'verified', uploadedAt: '2026-03-01' },
    { id: 4, name: 'Trade Certificate', type: 'professional', status: 'pending', uploadedAt: '2026-03-02' },
    { id: 5, name: 'Bank Details', type: 'bank', status: 'verified', uploadedAt: '2026-03-01' },
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'verified': return 'bg-green-100 text-green-700 border-green-200'
      case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'rejected': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'verified': return '✓'
      case 'pending': return '⏳'
      case 'in-progress': return '🔄'
      case 'rejected': return '✗'
      default: return '•'
    }
  }

  const completionPercentage = () => {
    const steps = ['documentsSubmitted', 'documentsVerified', 'policeVerification', 'backgroundCheck', 'trainingCompleted', 'agreementSigned']
    const completed = steps.filter(step => 
      step === 'documentsSubmitted' && verificationStatus.documentsSubmitted ||
      step === 'documentsVerified' && verificationStatus.documentsVerified ||
      step === 'agreementSigned' && verificationStatus.agreementSigned ||
      step === 'trainingCompleted' && verificationStatus.trainingCompleted
    ).length
    return Math.round((completed / steps.length) * 100)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate('workerProfile')} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <Icon name="back" size={20} className="text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Verification Status</h1>
      </div>

      {/* Overall Status Card */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-6 mb-6 shadow-lg text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold mb-1">Verification Progress</h2>
            <p className="text-sm text-emerald-100">Complete all steps to become verified</p>
          </div>
          <div className="text-4xl">🛡️</div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold">Completion</span>
            <span className="font-bold">{completionPercentage()}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-500"
              style={{ width: `${completionPercentage()}%` }}
            ></div>
          </div>
        </div>

        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getStatusColor(verificationStatus.overallStatus)}`}>
          <span className="text-lg">{getStatusIcon(verificationStatus.overallStatus)}</span>
          <span className="font-semibold capitalize">{verificationStatus.overallStatus.replace('-', ' ')}</span>
        </div>
      </div>

      {/* Verification Steps */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Verification Steps</h3>
        
        <div className="space-y-4">
          {/* Step 1: Document Submission */}
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${verificationStatus.documentsSubmitted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              {verificationStatus.documentsSubmitted ? '✓' : '1'}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Submit Documents</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor('verified')}`}>
                  ✓ Completed
                </span>
              </div>
              <p className="text-sm text-gray-500">Upload identity, address, and professional documents</p>
            </div>
          </div>

          {/* Step 2: Document Verification */}
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${verificationStatus.documentsVerified ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              {verificationStatus.documentsVerified ? '✓' : '2'}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Document Verification</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor('verified')}`}>
                  ✓ Verified
                </span>
              </div>
              <p className="text-sm text-gray-500">Our team is verifying your documents</p>
            </div>
          </div>

          {/* Step 3: Police Verification */}
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${verificationStatus.policeVerification === 'verified' ? 'bg-green-100 text-green-600' : verificationStatus.policeVerification === 'pending' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
              {getStatusIcon(verificationStatus.policeVerification)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Police Verification</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(verificationStatus.policeVerification)}`}>
                  {verificationStatus.policeVerification === 'pending' ? '⏳ Pending' : '🔄 In Progress'}
                </span>
              </div>
              <p className="text-sm text-gray-500">Background check with local police department</p>
              {verificationStatus.policeVerification !== 'verified' && (
                <button className="mt-2 text-sm text-emerald-600 font-semibold hover:underline">
                  Track Status →
                </button>
              )}
            </div>
          </div>

          {/* Step 4: Background Check */}
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${verificationStatus.backgroundCheck === 'verified' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
              {getStatusIcon(verificationStatus.backgroundCheck)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Background Verification</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(verificationStatus.backgroundCheck)}`}>
                  🔄 In Progress
                </span>
              </div>
              <p className="text-sm text-gray-500">Criminal record check and reference verification</p>
            </div>
          </div>

          {/* Step 5: Training */}
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${verificationStatus.trainingCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              {verificationStatus.trainingCompleted ? '✓' : '5'}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Complete Training</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(verificationStatus.trainingCompleted ? 'verified' : 'pending')}`}>
                  {verificationStatus.trainingCompleted ? '✓ Completed' : '⏳ Not Started'}
                </span>
              </div>
              <p className="text-sm text-gray-500">Online training on Saheya platform and service quality</p>
              {!verificationStatus.trainingCompleted && verificationStatus.documentsVerified && (
                <button 
                  onClick={() => showToast('Training module will open soon')}
                  className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Start Training
                </button>
              )}
            </div>
          </div>

          {/* Step 6: Agreement */}
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${verificationStatus.agreementSigned ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              {verificationStatus.agreementSigned ? '✓' : '6'}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Sign Partnership Agreement</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor('verified')}`}>
                  ✓ Signed
                </span>
              </div>
              <p className="text-sm text-gray-500">Review and sign the partnership agreement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uploaded Documents */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Uploaded Documents</h3>
          <button className="text-sm text-emerald-600 font-semibold hover:underline">
            + Add More
          </button>
        </div>

        <div className="space-y-3">
          {documents.map(doc => (
            <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl border border-gray-200">
                  📄
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{doc.name}</h4>
                  <p className="text-xs text-gray-500">Uploaded: {doc.uploadedAt}</p>
                </div>
              </div>
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(doc.status)}`}>
                {getStatusIcon(doc.status)} {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits of Verification */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Why Get Verified?</h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="text-xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Trust Badge</h4>
              <p className="text-xs text-gray-600">Show customers you're verified and trustworthy</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">More Jobs</h4>
              <p className="text-xs text-gray-600">Get priority access to high-value jobs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Higher Earnings</h4>
              <p className="text-xs text-gray-600">Charge premium rates for verified services</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-xl">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Insurance Coverage</h4>
              <p className="text-xs text-gray-600">Get covered for accidents and damages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-3">Need help with verification?</p>
        <div className="flex gap-3 justify-center">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
            Contact Support
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  )
}
