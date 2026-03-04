# 📂 HomeServ Complete File Map & Reference

## Visual Directory Tree

```
Home-Repair/
│
├── src/
│   ├── components/                    # ✅ 10 Reusable Components
│   │   ├── Toast.jsx                 # Toast notifications
│   │   ├── Loader.jsx                # Loading spinner
│   │   ├── SkeletonCard.jsx          # Skeleton placeholder
│   │   ├── Stars.jsx                 # Rating stars (1-5)
│   │   ├── Navbar.jsx                # Top navigation bar
│   │   ├── BottomNav.jsx             # Mobile bottom tabs
│   │   ├── ServiceCard.jsx           # Service display card
│   │   ├── CategoryCard.jsx          # Category display card
│   │   ├── Footer.jsx                # Footer section
│   │   └── Router.jsx                # Page router
│   │
│   ├── context/                       # ✅ Global State
│   │   └── AppContext.jsx            # App context provider
│   │
│   ├── pages/                         # ✅ 16 Page Components
│   │   ├── LandingPage.jsx           # Welcome page
│   │   ├── LoginPage.jsx             # Login form
│   │   ├── RegisterPage.jsx          # Registration form
│   │   ├── HomePage.jsx              # Home/dashboard
│   │   ├── CategoriesPage.jsx        # All categories
│   │   ├── ServiceListingPage.jsx    # Services by category
│   │   ├── ServiceDetailPage.jsx     # Service details
│   │   ├── BookingPage.jsx           # Booking form
│   │   ├── BookingsPage.jsx          # Bookings list
│   │   ├── ProfilePage.jsx           # User profile
│   │   ├── EditProfilePage.jsx       # Edit profile
│   │   ├── SearchPage.jsx            # Search results
│   │   ├── NotificationsPage.jsx     # Notifications
│   │   ├── HelpPage.jsx              # Help & FAQ
│   │   ├── AboutPage.jsx             # About info
│   │   └── NotFoundPage.jsx          # 404 page
│   │
│   ├── icons/                         # ✅ Icon Library
│   │   └── Icon.jsx                  # 20+ SVG icons
│   │
│   ├── data/                          # ✅ Mock Data
│   │   └── mockData.js               # Categories, services, user data
│   │
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # React entry point
│   ├── index.css                      # Global styles
│   ├── App.css                        # Component styles
│   └── assets/                        # Static files
│
├── FILE_STRUCTURE_GUIDE.md            # This guide
├── STRUCTURE.md                       # File structure documentation
├── package.json                       # Dependencies
├── vite.config.js                     # Vite config
├── tailwind.config.js                 # Tailwind config
├── postcss.config.js                  # PostCSS config
├── eslint.config.js                   # ESLint config
└── index.html                         # HTML entry point
```

## 📤 Import/Export Reference

### App.jsx
```javascript
// IMPORTS
import { AppProvider } from './context/AppContext'
import { Toast } from './components/Toast'
import { Navbar } from './components/Navbar'
import { BottomNav } from './components/BottomNav'
import { Footer } from './components/Footer'
import { Router } from './components/Router'

// EXPORTS
export default function App() { ... }
```

### Context/AppContext.jsx
```javascript
// EXPORTS
export function AppProvider({ children }) { ... }
export const useApp = () => useContext(AppContext)

// KEY VALUES PROVIDED
{
  currentPage, navigate,
  user, setUser,
  bookings, addBooking,
  notifications, setNotifications,
  searchQuery, setSearchQuery,
  selectedCategory, setSelectedCategory,
  selectedService, setSelectedService,
  toast, showToast,
  isLoading
}
```

### Component Example: Navbar.jsx
```javascript
// IMPORTS
import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

// EXPORTS
export function Navbar() { ... }

// USES
- useApp() → navigate, currentPage, notifications, searchQuery
- Icon component → 20+ different icons
```

### Pages Example: HomePage.jsx
```javascript
// IMPORTS
import { useApp } from '../context/AppContext'
import { SERVICES, CATEGORIES } from '../data/mockData'
import { ServiceCard } from '../components/ServiceCard'
import { CategoryCard } from '../components/CategoryCard'
import { Icon } from '../icons/Icon'

// EXPORTS
export function HomePage() { ... }

// USES
- Context: navigate, searchQuery, setSearchQuery
- Components: ServiceCard, CategoryCard, Icon
- Data: SERVICES, CATEGORIES
```

### Router.jsx
```javascript
// IMPORTS
import { useApp } from '../context/AppContext'
import { Loader } from './Loader'
import { LandingPage } from '../pages/LandingPage'
import { LoginPage } from '../pages/LoginPage'
// ... all 16 page imports

// EXPORTS
export function Router() { ... }

// PAGE MAPPING
const pages = {
  'landing': LandingPage,
  'login': LoginPage,
  'register': RegisterPage,
  'home': HomePage,
  'categories': CategoriesPage,
  'serviceListing': ServiceListingPage,
  'serviceDetail': ServiceDetailPage,
  'booking': BookingPage,
  'bookings': BookingsPage,
  'profile': ProfilePage,
  'editProfile': EditProfilePage,
  'search': SearchPage,
  'notifications': NotificationsPage,
  'help': HelpPage,
  'about': AboutPage,
}
```

### Icons/Icon.jsx
```javascript
// EXPORTS
export function Icon({ name, size = 20, className = '' }) { ... }

// AVAILABLE ICONS
'search', 'home', 'grid', 'calendar', 'user', 'bell',
'star', 'back', 'clock', 'map', 'phone', 'check',
'x', 'edit', 'help', 'info', 'menu', 'send',
'heart', 'shield', 'logout'
```

### Data/mockData.js
```javascript
// EXPORTS
export const CATEGORIES = [...]   // 10 categories
export const SERVICES = [...]      // 12 services
export const MOCK_BOOKINGS = [...]  // 5 sample bookings
export const MOCK_USER = {...}      // User profile
export const REVIEWS = [...]       // 3 reviews
export const NOTIFICATIONS = [...]  // 4 notifications
```

## 🔗 Component Usage Patterns

### Using Context (in any component):
```javascript
import { useApp } from '../context/AppContext'

function MyComponent() {
  const { navigate, showToast, user, bookings } = useApp()
  
  // Navigate
  navigate('home')
  navigate('serviceListing', { category: cat })
  
  // Show toast
  showToast('Success!', 'success')
  showToast('Error!', 'error')
  
  // Use values
  console.log(user.name)
  console.log(bookings.length)
}
```

### Using Icons (anywhere):
```javascript
import { Icon } from '../icons/Icon'

function MyComponent() {
  return (
    <>
      <Icon name="search" size={20} />
      <Icon name="heart" size={24} className="text-red-500" />
    </>
  )
}
```

### Using Data (in pages):
```javascript
import { SERVICES, CATEGORIES } from '../data/mockData'

function MyPage() {
  const services = SERVICES.filter(s => s.popular)
  const category = CATEGORIES[0]
  
  return (
    <>
      {services.map(s => <ServiceCard key={s.id} service={s} />)}
    </>
  )
}
```

### Creating Cards (component pattern):
```javascript
import { useApp } from '../context/AppContext'
import { Icon } from '../icons/Icon'

function ServiceCard({ service }) {
  const { navigate } = useApp()
  
  return (
    <button onClick={() => navigate('serviceDetail', { service })}>
      <img src={service.image} />
      <h3>{service.name}</h3>
      <Icon name="clock" /> {service.duration}
    </button>
  )
}
```

## 📊 Data Flow

### Typical User Journey
```
1. User lands on LandingPage
   ↓
2. Clicks "Explore Services" → navigate('home')
   ↓
3. HomePage displays CATEGORIES using CategoryCard component
   ↓
4. Click category → navigate('serviceListing', { category })
   ↓
5. ServiceListingPage filters SERVICES
   ↓
6. Click service → navigate('serviceDetail', { service })
   ↓
7. Click "Book Now" → navigate('booking', { service })
   ↓
8. Fill booking details, click submit → addBooking()
   ↓
9. Navigate to BookingsPage → bookings state updates
   ↓
10. Profile shows booking stats
```

### State Updates
```
User Action → Context State Changes → Components Re-render → UI Updates

Examples:
- setSearchQuery('cleaning') → SearchPage filters services
- navigate('home') → Router shows HomePage
- addBooking(booking) → Bookings list updates
- showToast('Success') → Toast displays
```

## 🎯 Quick Navigation Routes

| Route | Page | File |
|-------|------|------|
| `landing` | Welcome | LandingPage.jsx |
| `login` | Login Form | LoginPage.jsx |
| `register` | Sign Up Form | RegisterPage.jsx |
| `home` | Home Dashboard | HomePage.jsx |
| `categories` | All Categories | CategoriesPage.jsx |
| `serviceListing` | Category Services | ServiceListingPage.jsx |
| `serviceDetail` | Service Info | ServiceDetailPage.jsx |
| `booking` | Book Service | BookingPage.jsx |
| `bookings` | My Bookings | BookingsPage.jsx |
| `profile` | User Profile | ProfilePage.jsx |
| `editProfile` | Edit Profile | EditProfilePage.jsx |
| `search` | Search Results | SearchPage.jsx |
| `notifications` | Notifications | NotificationsPage.jsx |
| `help` | Help & FAQ | HelpPage.jsx |
| `about` | About Info | AboutPage.jsx |
| `notFound` | 404 Error | NotFoundPage.jsx |

## 🚀 Ready to Develop!

All files are organized and ready to use. The structure follows React best practices:
- ✅ Components are small and reusable
- ✅ State management is centralized
- ✅ Data is separate from logic
- ✅ Pages are self-contained
- ✅ Easy to add new features
- ✅ Scalable architecture

Start coding! 🎉
