# Custom Hooks & Utilities Documentation

## Overview
This document explains the custom hooks, utilities, and infrastructure created for the Home Repair application.

---

## 🎣 Custom Hooks

All custom hooks are available in `src/hooks/index.js` and `src/hooks/useAuth.js`

### 1. **useFetch** - Data Fetching Hook
Manages API data fetching with loading and error states.

```javascript
import { useFetch } from '@/hooks'
import { serviceService } from '@/services'

export function CategoriesPage() {
  const { data: categories, loading, error, refetch } = useFetch(
    () => serviceService.getCategories(),
    [] // dependencies
  )

  if (loading) return <Loader />
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {categories?.map(cat => <CategoryCard key={cat.id} {...cat} />)}
      <button onClick={refetch}>Refresh</button>
    </div>
  )
}
```

### 2. **useForm** - Form State Management
Handles form values, validation errors, and submission state.

```javascript
import { useForm } from '@/hooks'
import { validateForm, commonValidationRules } from '@/utils/validation'

export function LoginPage() {
  const { 
    values, 
    errors, 
    touched, 
    isSubmitting, 
    handleChange, 
    handleBlur, 
    handleSubmit 
  } = useForm(
    { email: '', password: '' },
    async (values) => {
      // Validate
      const { isValid, errors } = validateForm(values, commonValidationRules.login)
      if (!isValid) {
        // Set errors
        return
      }
      // Submit
      await authService.login(values.email, values.password)
    }
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
```

### 3. **useMutation** - Async Operations Hook
For POST, PUT, DELETE operations with loading and error states.

```javascript
import { useMutation } from '@/hooks'
import { bookingService } from '@/services'

export function BookingPage() {
  const { mutate: createBooking, loading, error } = useMutation(
    bookingService.createBooking
  )

  const handleSubmit = async (bookingData) => {
    try {
      const result = await mutate(bookingData)
      console.log('Booking created:', result)
    } catch (err) {
      console.error('Booking failed:', err)
    }
  }

  return (
    <button onClick={() => handleSubmit(data)} disabled={loading}>
      {loading ? 'Creating...' : 'Book Now'}
    </button>
  )
}
```

### 4. **usePagination** - Pagination Management
Manages pagination state for lists.

```javascript
import { usePagination } from '@/hooks'

export function ServiceListingPage() {
  const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(
    services,
    12 // items per page
  )

  return (
    <div>
      <div className="grid grid-cols-3">
        {currentItems.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  )
}
```

### 5. **useDebounce** - Debounced Value Hook
Debounces values for search inputs.

```javascript
import { useDebounce } from '@/hooks'

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const { data: results } = useFetch(
    () => serviceService.search(debouncedSearchTerm),
    [debouncedSearchTerm]
  )

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search services..."
      />
      {results?.map(service => <ServiceCard key={service.id} {...service} />)}
    </div>
  )
}
```

### 6. **useLocalStorage** - Local Storage Hook
Safe local storage management with JSON serialization.

```javascript
import { useLocalStorage } from '@/hooks'

export function HomePage() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  const toggleFavorite = (serviceId) => {
    setFavorites(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  return (
    <div>
      {services.map(service => (
        <ServiceCard
          key={service.id}
          {...service}
          isFavorite={favorites.includes(service.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  )
}
```

### 7. **useOnlineStatus** - Online/Offline Detection
Detects and tracks internet connectivity.

```javascript
import { useOnlineStatus } from '@/hooks'

export function App() {
  const isOnline = useOnlineStatus()

  return (
    <div>
      {!isOnline && <div className="bg-yellow-500 p-4">You are offline</div>}
      {/* Rest of app */}
    </div>
  )
}
```

### 8. **useClickOutside** - Click Outside Hook
Detects clicks outside an element (useful for dropdowns/modals).

```javascript
import { useClickOutside } from '@/hooks'

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useClickOutside(ref, () => setIsOpen(false))

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  )
}
```

### 9. **useKeyPress** - Keyboard Shortcut Hook
Handles keyboard shortcuts.

```javascript
import { useKeyPress } from '@/hooks'

export function App() {
  useKeyPress('Escape', () => {
    // Close open modals
  })

  useKeyPress('/', () => {
    // Focus search input
  })

  return <div>App</div>
}
```

### 10. **usePrevious** - Previous Value Hook
Tracks previous value of a state variable.

```javascript
import { usePrevious } from '@/hooks'

export function NotificationBanner() {
  const [message, setMessage] = useState('')
  const previousMessage = usePrevious(message)

  return <div>{previousMessage}</div>
}
```

### 11. **useAuth** - Authentication Hook
Manages login/logout and authentication state.

```javascript
import { useAuth } from '@/hooks/useAuth'

export function LoginPage() {
  const { login, loading, error, isAuthenticated } = useAuth()

  const handleSubmit = async (email, password) => {
    try {
      await login(email, password)
    } catch (err) {
      console.error(err)
    }
  }

  if (isAuthenticated) {
    return <Navigate to="/home" />
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(email, password)
    }}>
      {/* Form fields */}
      <button disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
    </form>
  )
}
```

---

## 🛠️ Utility Functions

### Validation Utilities (`src/utils/validation.js`)

```javascript
import { 
  validateEmail, 
  validatePhone, 
  validatePassword,
  validateForm,
  getPasswordStrength
} from '@/utils/validation'

// Email validation
validateEmail('user@example.com') // true
validateEmail('invalid') // false

// Phone validation (Indian format)
validatePhone('+91 98765 43210') // true

// Password validation
validatePassword('SecurePass123!') // true
validatePassword('123456') // false

// Password strength
const { score, feedback } = getPasswordStrength('MyPass123!')
console.log(score) // 4-5
console.log(feedback) // "Strong password"

// Form validation with rules
const rules = {
  email: 'required|email',
  password: 'required|min:8',
}
const { isValid, errors } = validateForm(formData, rules)
```

### Helper Functions (`src/utils/helpers.js`)

```javascript
import {
  formatCurrency,
  formatDate,
  formatTime,
  formatRelativeTime,
  formatPhone,
  truncate,
  capitalize,
  toSlug,
  generateId,
  deepClone,
  mergeObjects,
  groupBy,
  sortBy,
  removeDuplicates
} from '@/utils/helpers'

// Formatting
formatCurrency(1500) // "₹1,500.00"
formatDate(new Date()) // "DD-MM-YYYY"
formatTime(new Date()) // "HH:MM AM/PM"
formatRelativeTime(new Date(Date.now() - 3600000)) // "1 hour ago"
formatPhone('9876543210') // "+91 98765 43210"

// String utilities
truncate('Long text here', 10) // "Long text..."
capitalize('hello world') // "Hello World"
toSlug('Hello World!') // "hello-world"
generateId() // "abc123xyz789"

// Object utilities
deepClone({ a: { b: 1 } }) // Deep copy
mergeObjects(obj1, obj2) // Merge two objects

// Array utilities
groupBy(items, 'category') // Group by property
sortBy(items, 'price') // Sort by property
removeDuplicates(items, 'id') // Remove duplicates

// Storage helpers
setItemSafe('key', { data: true })
getItemSafe('key') // { data: true }
removeItemSafe('key')
```

---

## 📋 Configuration Management

### Environment Variables (`.env.local`)

```environment
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000

# App Configuration
VITE_APP_NAME=Home Repair
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development

# Feature Flags
VITE_ENABLE_MOCK_DATA=true
VITE_ENABLE_LOGGING=true

# Third-party Services
VITE_STRIPE_PUBLIC_KEY=your_key
VITE_GOOGLE_MAPS_API_KEY=your_key
VITE_GOOGLE_OAUTH_CLIENT_ID=your_key
```

### Using Configuration (`src/config/index.js`)

```javascript
import { config, logger } from '@/config'

// API URLs
console.log(config.api.baseUrl) // http://localhost:3000/api

// Feature flags
if (config.features.useMockData) {
  // Use mock data
}

// Environment checks
if (config.isDevelopment) {
  // Dev-only code
}

// Logging
logger.log('Message') // Logs if VITE_ENABLE_LOGGING=true
logger.error('Error') // Always logs
```

---

## ⚠️ Error Handling

### Error Boundary Component

```javascript
import ErrorBoundary from '@/components/ErrorBoundary'

export function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  )
}
```

The ErrorBoundary catches React errors and displays a user-friendly error page with options to retry or go home.

---

## 🔌 Services Integration

### Using Services with Hooks

```javascript
import { useFetch, useMutation, useAuth } from '@/hooks'
import { AuthService, bookingService } from '@/services'

export function BookingFlow() {
  // Fetch available time slots
  const { data: slots, loading } = useFetch(
    () => bookingService.getAvailableSlots(serviceId),
    [serviceId]
  )

  // Create booking mutation
  const { mutate: createBooking } = useMutation(
    bookingService.createBooking
  )

  // Login mutation
  const { login } = useAuth()

  const handleBooking = async (bookingData) => {
    try {
      await createBooking(bookingData)
      showToast('Booking created successfully', 'success')
    } catch (err) {
      showToast(err.message, 'error')
    }
  }

  return <div>{/* UI here */}</div>
}
```

---

## 📦 Directory Structure

```
src/
├── hooks/
│   ├── index.js          # All custom hooks (11 hooks)
│   └── useAuth.js        # Authentication hook
├── utils/
│   ├── validation.js     # Validation utilities
│   ├── helpers.js        # Helper functions
├── config/
│   └── index.js          # Configuration management
├── components/
│   ├── ErrorBoundary.jsx # Error boundary
│   └── Router.jsx        # Updated with error boundary
├── services/
│   ├── apiClient.js      # HTTP client
│   └── index.js          # Service modules
└── ...
```

---

## 🚀 Best Practices

1. **Always use custom hooks** for data fetching and form handling
2. **Use validation utilities** before submitting forms
3. **Wrap your app with ErrorBoundary** to catch unexpected errors
4. **Use the config** for all environment-dependent values
5. **Use the logger** for debugging in development
6. **Handle errors gracefully** with try-catch and informative toast messages

---

## 📚 Next Steps

1. Integrate hooks into existing pages
2. Add form validation to all input forms
3. Connect to real backend by updating `VITE_API_BASE_URL`
4. Implement loading states for all async operations
5. Add retry logic for failed API requests
