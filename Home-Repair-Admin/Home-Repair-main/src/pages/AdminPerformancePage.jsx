import { useState, useMemo } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

export function AdminPerformancePage() {
  const { complaints, investigations, adminUser, navigate } = useApp()
  const [timeFilter, setTimeFilter] = useState('7d') // 'today','7d','30d','custom'
  const [customRange, setCustomRange] = useState({ from: '', to: '' })

  // Basic helpers
  const now = new Date()
  const filterComplaints = (list) => {
    // for simplicity ignore time filter in mock
    return list
  }

  // Metrics computations
  const totalResolved = useMemo(() => complaints.filter(c => c.status === 'resolved').length, [complaints])
  const resolvedToday = useMemo(() => {
    const today = new Date().toISOString().split('T')[0]
    return complaints.filter(c => c.status === 'resolved' && c.date === today).length
  }, [complaints])
  const avgFirstResponse = useMemo(() => '1h 12m', []) // placeholder
  const avgResolution = useMemo(() => '3h 24m', [])
  const active = useMemo(() => complaints.filter(c => c.status !== 'resolved').length, [complaints])
  const critical = useMemo(() => complaints.filter(c => c.severity === 'critical').length, [complaints])
  const slaCompliance = useMemo(() => '92%', [])

  // sample chart data
  const issuesPerDay = {
    labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    datasets: [{ data: [5,4,6,3,7,2,5], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.2)' }]
  }

  const responseTimeData = {
    labels: ['<30m','<1h','<2h','>2h'],
    datasets: [{ data: [40,25,20,15], backgroundColor: ['#10b981','#3b82f6','#fbbf24','#ef4444'] }]
  }

  const resolutionTimeData = {
    labels: ['<1h','1-3h','>3h'],
    datasets: [{ data: [30,50,20], backgroundColor: ['#10b981','#3b82f6','#ef4444'] }]
  }

  const categoryData = {
    labels: ['Worker','Customer','Service Delay','Technical','Payment'],
    datasets: [{ data: [15,25,5,10,8], backgroundColor: ['#3b82f6','#10b981','#f59e0b','#8b5cf6','#ef4444'] }]
  }

  // efficiency score logic placeholder
  const efficiencyScore = 87 // percent

  return (
    <div className="min-h-screen bg-gray-50">
      {/* header reuse from dashboard */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Admin Performance</h1>
          <button
            onClick={() => navigate('adminDashboard')}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <Icon name="home" size={18} />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Resolved', value: totalResolved, icon: 'checkCircle' },
            { label: 'Resolved Today', value: resolvedToday, icon: 'calendar' },
            { label: 'Avg First Response', value: avgFirstResponse, icon: 'clock' },
            { label: 'Avg Resolution Time', value: avgResolution, icon: 'check' },
            { label: 'Active Issues', value: active, icon: 'inbox' },
            { label: 'Critical Issues', value: critical, icon: 'alertTriangle' },
            { label: 'SLA Compliance', value: slaCompliance, icon: 'shield' }
          ].map(card => (
            <div key={card.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all" onClick={() => {/* filter logic */}}>
              <div className="flex items-center gap-4">
                <Icon name={card.icon} size={24} className="text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-sm text-gray-600">{card.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* charts row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Issues Resolved Per Day</h3>
            <div className="h-60">
              <Line data={issuesPerDay} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Response Time Analysis</h3>
            <div className="h-60">
              <Pie data={responseTimeData} />
            </div>
          </div>
        </div>

        {/* charts row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Resolution Time Distribution</h3>
            <div className="h-60">
              <Doughnut data={resolutionTimeData} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Issue Category Analytics</h3>
            <div className="h-60">
              <Bar data={categoryData} />
            </div>
          </div>
        </div>

        {/* activity feed and efficiency score */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Admin Activity Timeline</h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>10:42 AM – Issue #104 resolved</li>
              <li>10:15 AM – Investigation started for Issue #101</li>
              <li>09:58 AM – Response sent to Issue #100</li>
              <li>09:22 AM – Issue #99 escalated</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Efficiency Score</h3>
            <div className="text-5xl font-bold text-green-600">{efficiencyScore}%</div>
            <div className="text-sm text-gray-600 mt-2">Based on resolution rate, response time & SLA</div>
          </div>
        </div>
      </div>
    </div>
  )
}
