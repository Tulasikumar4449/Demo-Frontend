import React, { useState, useCallback, createContext, useContext } from 'react'
import { MOCK_USER, MOCK_BOOKINGS, NOTIFICATIONS } from '../data/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('landing')
  const [user, setUser] = useState(MOCK_USER)
  const [bookings, setBookings] = useState(MOCK_BOOKINGS)
  const [notifications, setNotifications] = useState(NOTIFICATIONS)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [toast, setToast] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <AppContext.Provider value={{ 
      currentPage, navigate, user, setUser, bookings, addBooking, 
      notifications, setNotifications, searchQuery, setSearchQuery, 
      selectedCategory, setSelectedCategory, selectedService, setSelectedService, 
      toast, showToast, isLoading 
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
