import React, { useState, useCallback, createContext, useContext } from 'react'
import { MOCK_USER, MOCK_BOOKINGS, NOTIFICATIONS, COMPLAINTS, INVESTIGATIONS, ENFORCEMENT_ACTIONS, COMMUNICATION_LOGS, ADMIN_USERS, ADMIN_NOTIFICATIONS } from '../data/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('landing')
  const [user, setUser] = useState(MOCK_USER)
  const [adminUser, setAdminUser] = useState(null)
  const [bookings, setBookings] = useState(MOCK_BOOKINGS)
  const [notifications, setNotifications] = useState(NOTIFICATIONS)
  const [adminNotifications, setAdminNotifications] = useState(ADMIN_NOTIFICATIONS)
  const [complaints, setComplaints] = useState(COMPLAINTS)
  const [investigations, setInvestigations] = useState(INVESTIGATIONS)
  const [enforcementActions, setEnforcementActions] = useState(ENFORCEMENT_ACTIONS)
  const [communicationLogs, setCommunicationLogs] = useState(COMMUNICATION_LOGS)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [toast, setToast] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('all')

  const navigate = useCallback((page, data) => {
    setIsLoading(true)
    if (data?.category) setSelectedCategory(data.category)
    if (data?.service) setSelectedService(data.service)
    if (data?.query) setSearchQuery(data.query)
    setTimeout(() => { setCurrentPage(page); setIsLoading(false) }, 300)
  }, [])

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  const addBooking = useCallback((booking) => {
    setBookings(prev => [{ ...booking, id: Date.now(), status: 'upcoming' }, ...prev])
    showToast('Booking confirmed successfully!')
  }, [showToast])

  // Admin functions
  const updateComplaintStatus = useCallback((complaintId, status) => {
    setComplaints(prev => prev.map(c => 
      c.id === complaintId ? { ...c, status } : c
    ))
    showToast(`Complaint status updated to ${status}`)
  }, [showToast])

  const addInvestigationNote = useCallback((investigationId, note) => {
    setInvestigations(prev => prev.map(inv => 
      inv.id === investigationId 
        ? { ...inv, notes: [...inv.notes, { ...note, date: new Date().toISOString().split('T')[0], author: adminUser?.name || 'Admin' }] }
        : inv
    ))
    showToast('Note added successfully')
  }, [showToast, adminUser])

  const takeEnforcementAction = useCallback((action) => {
    setEnforcementActions(prev => [{ 
      ...action, 
      id: Date.now(), 
      date: new Date().toISOString().split('T')[0],
      takenBy: adminUser?.name || 'Admin'
    }, ...prev])
    showToast('Enforcement action recorded successfully')
  }, [showToast, adminUser])

  const addCommunicationMessage = useCallback((complaintId, message) => {
    setCommunicationLogs(prev => {
      const existing = prev.find(log => log.complaintId === complaintId)
      if (existing) {
        return prev.map(log => 
          log.complaintId === complaintId 
            ? { ...log, messages: [...log.messages, message] }
            : log
        )
      } else {
        return [...prev, {
          id: Date.now(),
          complaintId,
          participants: [adminUser?.name || 'Admin'],
          messages: [message]
        }]
      }
    })
    showToast('Message sent successfully')
  }, [showToast, adminUser])

  // Admin notification functions
  const markNotificationAsRead = useCallback((notificationId) => {
    setAdminNotifications(prev => prev.map(n => 
      n.id === notificationId ? { ...n, read: true } : n
    ))
  }, [])

  const markAllNotificationsAsRead = useCallback(() => {
    setAdminNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }, [])

  const updateAdminProfile = useCallback((updatedData) => {
    setAdminUser(prev => ({ ...prev, ...updatedData }))
    showToast('Profile updated successfully', 'success')
  }, [showToast])

  return (
    <AppContext.Provider value={{ 
      currentPage, navigate, user, setUser, adminUser, setAdminUser, bookings, addBooking, 
      notifications, setNotifications, adminNotifications, setAdminNotifications, complaints, setComplaints, investigations, setInvestigations,
      enforcementActions, setEnforcementActions, communicationLogs, setCommunicationLogs,
      searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, 
      selectedService, setSelectedService, activeTab, setActiveTab,
      toast, showToast, isLoading,
      updateComplaintStatus, addInvestigationNote, takeEnforcementAction, addCommunicationMessage,
      markNotificationAsRead, markAllNotificationsAsRead, updateAdminProfile
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
