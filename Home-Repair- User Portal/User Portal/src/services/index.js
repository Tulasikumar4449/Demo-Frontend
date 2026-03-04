import { apiClient } from './apiClient'

// ============ AUTH SERVICES ============

export const authService = {
  /**
   * User login
   */
  login: async (email, password) => {
    return apiClient.post('/auth/login', { email, password })
  },

  /**
   * User registration
   */
  register: async (userData) => {
    return apiClient.post('/auth/register', userData)
  },

  /**
   * Logout
   */
  logout: async () => {
    const response = await apiClient.post('/auth/logout', {})
    localStorage.removeItem('authToken')
    apiClient.setAuthToken(null)
    return response
  },

  /**
   * Verify token
   */
  verifyToken: async () => {
    return apiClient.get('/auth/verify')
  },

  /**
   * Refresh token
   */
  refreshToken: async () => {
    return apiClient.post('/auth/refresh-token', {})
  },
}

// ============ USER SERVICES ============

export const userService = {
  /**
   * Get user profile
   */
  getProfile: async () => {
    return apiClient.get('/users/profile')
  },

  /**
   * Update user profile
   */
  updateProfile: async (userData) => {
    return apiClient.put('/users/profile', userData)
  },

  /**
   * Change password
   */
  changePassword: async (oldPassword, newPassword) => {
    return apiClient.post('/users/change-password', { oldPassword, newPassword })
  },

  /**
   * Get user's address list
   */
  getAddresses: async () => {
    return apiClient.get('/users/addresses')
  },

  /**
   * Add new address
   */
  addAddress: async (addressData) => {
    return apiClient.post('/users/addresses', addressData)
  },

  /**
   * Update address
   */
  updateAddress: async (addressId, addressData) => {
    return apiClient.put(`/users/addresses/${addressId}`, addressData)
  },

  /**
   * Delete address
   */
  deleteAddress: async (addressId) => {
    return apiClient.delete(`/users/addresses/${addressId}`)
  },
}

// ============ SERVICE SERVICES ============

export const serviceService = {
  /**
   * Get all categories
   */
  getCategories: async () => {
    return apiClient.get('/services/categories')
  },

  /**
   * Get single category
   */
  getCategory: async (categoryId) => {
    return apiClient.get(`/services/categories/${categoryId}`)
  },

  /**
   * Search services
   */
  searchServices: async (query, filters = {}) => {
    const params = new URLSearchParams({ q: query, ...filters })
    return apiClient.get(`/services?${params.toString()}`)
  },

  /**
   * Get services by category
   */
  getServicesByCategory: async (categoryId, filters = {}) => {
    const params = new URLSearchParams(filters)
    return apiClient.get(`/services/categories/${categoryId}/services?${params.toString()}`)
  },

  /**
   * Get service details
   */
  getServiceDetails: async (serviceId) => {
    return apiClient.get(`/services/${serviceId}`)
  },

  /**
   * Get service reviews
   */
  getServiceReviews: async (serviceId) => {
    return apiClient.get(`/services/${serviceId}/reviews`)
  },

  /**
   * Get popular services
   */
  getPopularServices: async () => {
    return apiClient.get('/services/popular')
  },
}

// ============ BOOKING SERVICES ============

export const bookingService = {
  /**
   * Create new booking
   */
  createBooking: async (bookingData) => {
    return apiClient.post('/bookings', bookingData)
  },

  /**
   * Get user's bookings
   */
  getBookings: async (filters = {}) => {
    const params = new URLSearchParams(filters)
    return apiClient.get(`/bookings?${params.toString()}`)
  },

  /**
   * Get booking details
   */
  getBookingDetails: async (bookingId) => {
    return apiClient.get(`/bookings/${bookingId}`)
  },

  /**
   * Cancel booking
   */
  cancelBooking: async (bookingId, reason = '') => {
    return apiClient.post(`/bookings/${bookingId}/cancel`, { reason })
  },

  /**
   * Reschedule booking
   */
  rescheduleBooking: async (bookingId, newDate, newTime) => {
    return apiClient.post(`/bookings/${bookingId}/reschedule`, { newDate, newTime })
  },

  /**
   * Rate service
   */
  rateService: async (bookingId, rating, review) => {
    return apiClient.post(`/bookings/${bookingId}/rate`, { rating, review })
  },

  /**
   * Track booking
   */
  trackBooking: async (bookingId) => {
    return apiClient.get(`/bookings/${bookingId}/track`)
  },
}

// ============ NOTIFICATION SERVICES ============

export const notificationService = {
  /**
   * Get notifications
   */
  getNotifications: async (filters = {}) => {
    const params = new URLSearchParams(filters)
    return apiClient.get(`/notifications?${params.toString()}`)
  },

  /**
   * Mark notification as read
   */
  markAsRead: async (notificationId) => {
    return apiClient.put(`/notifications/${notificationId}/read`, {})
  },

  /**
   * Mark all notifications as read
   */
  markAllAsRead: async () => {
    return apiClient.post('/notifications/mark-all-read', {})
  },

  /**
   * Delete notification
   */
  deleteNotification: async (notificationId) => {
    return apiClient.delete(`/notifications/${notificationId}`)
  },
}

// ============ PAYMENT SERVICES ============

export const paymentService = {
  /**
   * Initiate payment
   */
  initiatePayment: async (bookingId, amount, method) => {
    return apiClient.post('/payments/initiate', { bookingId, amount, method })
  },

  /**
   * Verify payment
   */
  verifyPayment: async (paymentId, transactionId) => {
    return apiClient.post('/payments/verify', { paymentId, transactionId })
  },

  /**
   * Get payment methods
   */
  getPaymentMethods: async () => {
    return apiClient.get('/payments/methods')
  },

  /**
   * Get payment history
   */
  getPaymentHistory: async () => {
    return apiClient.get('/payments/history')
  },
}

// ============ PROFESSIONAL SERVICES ============

export const professionalService = {
  /**
   * Get professional profile
   */
  getProfessionalProfile: async (professionalId) => {
    return apiClient.get(`/professionals/${professionalId}`)
  },

  /**
   * Get professional reviews
   */
  getProfessionalReviews: async (professionalId) => {
    return apiClient.get(`/professionals/${professionalId}/reviews`)
  },

  /**
   * Get professional availability
   */
  getProfessionalAvailability: async (professionalId) => {
    return apiClient.get(`/professionals/${professionalId}/availability`)
  },
}
