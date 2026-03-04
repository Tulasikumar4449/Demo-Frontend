# Backend Integration Guide

## Overview
This guide explains how to connect the Home Repair application to a real backend API.

---

## 🔧 Step 1: Update Environment Variables

Update `.env.local` with your backend URL:

```env
# Replace with your actual backend URL
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_API_TIMEOUT=30000
VITE_APP_ENV=development
VITE_ENABLE_MOCK_DATA=false
```

The API client will automatically use this base URL for all requests.

---

## 📡 Step 2: API Client Overview

The API client (`src/services/apiClient.js`) is pre-configured with:
- ✅ Automatic Bearer token authentication
- ✅ 30-second timeout protection
- ✅ Standardized error handling
- ✅ 401 redirect to login on auth failure
- ✅ Consistent response format

### API Client Features

```javascript
import { apiClient } from '@/services/apiClient'

// All methods return: { success: boolean, data: any, message: string }

// GET requests
const response = await apiClient.get('/endpoint', { params: { id: 1 } })

// POST requests
const response = await apiClient.post('/endpoint', { body: data })

// PUT requests (full update)
const response = await apiClient.put('/endpoint', { body: data })

// PATCH requests (partial update)
const response = await apiClient.patch('/endpoint', { body: data })

// DELETE requests
const response = await apiClient.delete('/endpoint')

// Set auth token
apiClient.setAuthToken(token)

// Get auth token
const token = apiClient.getAuthToken()
```

---

## 🔐 Step 3: Authentication Flow

### Login Process

```javascript
import { useAuth } from '@/hooks/useAuth'
import { authService } from '@/services'

export function LoginPage() {
  const { login, loading, error } = useAuth()

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password)
      // Automatically redirects to home on success
      // Token saved to localStorage
    } catch (err) {
      console.error('Login failed:', err.message)
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData.email, formData.password)
    }}>
      {/* Form fields */}
    </form>
  )
}
```

### Expected Backend Response

**POST /auth/login**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "user123",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+91 98765 43210",
      "profileImage": "https://...",
      "role": "customer"
    }
  },
  "message": "Login successful"
}
```

---

## 📚 Step 4: Service Layer Structure

All backend endpoints are defined in `src/services/index.js`. Each service module has pre-defined methods:

### Auth Service
```javascript
import { authService } from '@/services'

await authService.login(email, password)
await authService.register(userData)
await authService.logout()
await authService.verifyToken(token)
await authService.forgotPassword(email)
await authService.resetPassword(token, newPassword)
```

### User Service
```javascript
import { userService } from '@/services'

await userService.getUserProfile()
await userService.updateProfile(userData)
await userService.changePassword(oldPassword, newPassword)
await userService.addAddress(addressData)
await userService.updateAddress(addressId, addressData)
await userService.deleteAddress(addressId)
```

### Service (Professional Services) Service
```javascript
import { serviceService } from '@/services'

await serviceService.getCategories()
await serviceService.searchServices(query, filters)
await serviceService.getServiceDetails(serviceId)
await serviceService.getServiceReviews(serviceId)
await serviceService.rateService(serviceId, rating, review)
```

### Booking Service
```javascript
import { bookingService } from '@/services'

await bookingService.getAvailableSlots(serviceId, date)
await bookingService.createBooking(bookingData)
await bookingService.getUserBookings(status)
await bookingService.getBookingDetails(bookingId)
await bookingService.cancelBooking(bookingId, reason)
await bookingService.rescheduleBooking(bookingId, newDate, newTime)
await bookingService.rateBooking(bookingId, rating, review)
await bookingService.trackBooking(bookingId)
```

### Notification Service
```javascript
import { notificationService } from '@/services'

await notificationService.getNotifications(limit, offset)
await notificationService.markAsRead(notificationId)
await notificationService.deleteNotification(notificationId)
await notificationService.markAllAsRead()
```

### Payment Service
```javascript
import { paymentService } from '@/services'

await paymentService.initiatePayment(bookingId, amount)
await paymentService.verifyPayment(paymentId)
await paymentService.getPaymentHistory(limit, offset)
await paymentService.refundPayment(bookingId, amount)
```

### Professional Service
```javascript
import { professionalService } from '@/services'

await professionalService.searchProfessionals(filters)
await professionalService.getProfessionalProfile(professionalId)
await professionalService.getRatingsAndReviews(professionalId)
await professionalService.checkAvailability(professionalId, date)
```

---

## 🧪 Step 5: Expected Backend Endpoints

Create these endpoints on your backend:

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - Logout
- `POST /auth/verify-token` - Verify JWT token
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password with token

### User Management
- `GET /users/profile` - Get current user profile
- `PUT /users/profile` - Update user profile
- `PUT /users/change-password` - Change password
- `POST /users/addresses` - Add address
- `PUT /users/addresses/:id` - Update address
- `DELETE /users/addresses/:id` - Delete address

### Services
- `GET /services/categories` - Get all categories
- `GET /services/search` - Search services
- `GET /services/:id` - Get service details
- `GET /services/:id/reviews` - Get service reviews
- `POST /services/:id/reviews` - Rate/review service

### Bookings
- `GET /bookings/slots?serviceId=:id&date=:date` - Get available slots
- `POST /bookings` - Create booking
- `GET /bookings` - Get user bookings (with status filter)
- `GET /bookings/:id` - Get booking details
- `PUT /bookings/:id/cancel` - Cancel booking
- `PUT /bookings/:id/reschedule` - Reschedule booking
- `POST /bookings/:id/rate` - Rate booking
- `GET /bookings/:id/track` - Track booking status

### Notifications
- `GET /notifications` - Get notifications (with pagination)
- `PUT /notifications/:id/read` - Mark as read
- `DELETE /notifications/:id` - Delete notification
- `PUT /notifications/read-all` - Mark all as read

### Payments
- `POST /payments/initiate` - Initiate payment
- `POST /payments/:id/verify` - Verify payment
- `GET /payments/history` - Get payment history
- `POST /payments/:id/refund` - Refund payment

### Professionals
- `GET /professionals?search=:query` - Search professionals
- `GET /professionals/:id` - Get professional profile
- `GET /professionals/:id/ratings` - Get ratings/reviews
- `GET /professionals/:id/availability?date=:date` - Check availability

---

## 🔄 Step 6: Example: Integrating a Page

### Before (Mock Data)
```javascript
// Old way - using mock data
import { mockData } from '@/data/mockData'

export function HomePage() {
  const { categories } = mockData
  return <div>{categories.map(cat => <CategoryCard {...cat} />)}</div>
}
```

### After (Real Backend)
```javascript
// New way - using service layer and hooks
import { useFetch } from '@/hooks'
import { serviceService } from '@/services'
import { Loader } from '@/components'

export function HomePage() {
  const { data: categories, loading, error } = useFetch(
    () => serviceService.getCategories(),
    []
  )

  if (loading) return <Loader />
  if (error) return <div className="text-red-500">Error: {error}</div>

  return (
    <div className="grid grid-cols-3 gap-4">
      {categories?.map(cat => (
        <CategoryCard key={cat.id} {...cat} />
      ))}
    </div>
  )
}
```

---

## ✅ Step 7: Validation Example

Integrate validation before API calls:

```javascript
import { useForm } from '@/hooks'
import { validateForm } from '@/utils/validation'
import { bookingService } from '@/services'

export function BookingPage() {
  const { values, errors, touched, handleChange, handleSubmit } = useForm(
    { date: '', time: '', address: '' },
    async (formValues) => {
      // Validate on client side first
      const { isValid, errors: validationErrors } = validateForm(
        formValues,
        { date: 'required', time: 'required', address: 'required' }
      )

      if (!isValid) {
        Object.keys(validationErrors).forEach(field => {
          setFieldError(field, validationErrors[field])
        })
        return
      }

      // Send to backend
      try {
        const response = await bookingService.createBooking(formValues)
        showToast('Booking created!', 'success')
        navigate('bookings')
      } catch (err) {
        showToast(err.message, 'error')
      }
    }
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="date"
        type="date"
        value={values.date}
        onChange={handleChange}
      />
      {touched.date && errors.date && <span className="text-red-500">{errors.date}</span>}
      {/* More fields */}
    </form>
  )
}
```

---

## 🛡️ Step 8: Error Handling

### API Error Response Format
Your backend should return:

```json
{
  "success": false,
  "message": "Invalid email or password",
  "data": null,
  "errors": {
    "email": "Email not found",
    "password": "Invalid password"
  }
}
```

### Error Handling in Components
```javascript
export function LoginPage() {
  const { login, error } = useAuth()

  const handleLogin = async (email, password) => {
    try {
      await login(email, password)
    } catch (err) {
      // Error is automatically shown in toast
      // But you can also handle it manually
      if (err.response?.status === 401) {
        showToast('Invalid credentials', 'error')
      } else {
        showToast('Login failed', 'error')
      }
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleLogin(email, password)
    }}>
      {/* Form */}
    </form>
  )
}
```

---

## 📊 Step 9: Monitoring & Logging

### Enable Logging in Development
```env
VITE_ENABLE_LOGGING=true
```

### Use Logger
```javascript
import { logger } from '@/config'

logger.log('Message')
logger.error('Error occurred')
logger.warn('Warning')
logger.info('Information')
```

---

## 🚀 Step 10: Testing the Integration

### Checklist
- [ ] Update `.env.local` with backend URL
- [ ] Test login/registration flow
- [ ] Test API calls return correct data
- [ ] Test error handling (invalid credentials, network error)
- [ ] Test token refresh on 401
- [ ] Test loading states appear correctly
- [ ] Test error messages display
- [ ] Test data persists after page refresh
- [ ] Test logout clears token and redirects

---

## 💡 Tips

1. **Always set auth token after login:**
   ```javascript
   apiClient.setAuthToken(response.data.token)
   ```

2. **Validate data on client before sending:**
   ```javascript
   const { isValid, errors } = validateForm(data, rules)
   ```

3. **Use try-catch for all async operations:**
   ```javascript
   try {
     await operation()
   } catch (err) {
     showToast(err.message, 'error')
   }
   ```

4. **Show loading states during async operations:**
   ```javascript
   {loading && <Loader />}
   ```

5. **Handle offline scenarios:**
   ```javascript
   const isOnline = useOnlineStatus()
   {!isOnline && <div>You are offline</div>}
   ```

---

## 🆘 Troubleshooting

### 401 Unauthorized errors
- Check if token is being saved correctly: `localStorage.getItem('authToken')`
- Verify backend returns token in response
- Ensure token is sent in Authorization header

### CORS errors
- Add CORS headers to your backend
- Add origin to allowed list: `http://localhost:5174`

### API timeouts
- Increase timeout in `.env.local`: `VITE_API_TIMEOUT=60000`
- Check backend response time

### Data not updating
- Call `refetch()` to manually refresh data
- Check API response format matches expected structure

---

## 📞 Support

For issues or questions about integration, check:
1. Backend API documentation
2. Service layer method signatures in `src/services/index.js`
3. Error messages in browser console
4. Network tab in DevTools to inspect API requests
