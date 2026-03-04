# 🏠 HomeServ - React File Structure Guide

## Quick Overview

Your HomeServ application has been refactored into a clean, scalable component-based architecture. Here's what's been organized:

## 📁 Folder Structure

### `src/components/` - Reusable UI Components
These are stateless/presentational components used throughout the app:

| File | Purpose |
|------|---------|
| `Toast.jsx` | Toast notification display |
| `Loader.jsx` | Loading spinner overlay |
| `SkeletonCard.jsx` | Loading skeleton for cards |
| `Stars.jsx` | Star rating display (1-5 stars) |
| `Navbar.jsx` | Top navigation with search & profile |
| `BottomNav.jsx` | Mobile bottom tab navigation |
| `ServiceCard.jsx` | Service listing card component |
| `CategoryCard.jsx` | Category card component |
| `Footer.jsx` | Footer with links (desktop only) |
| `Router.jsx` | Page routing logic |

### `src/pages/` - Full Page Components
Each file represents a complete page in the app:

| Landing & Auth | Main Pages | Service Pages |
|---|---|---|
| `LandingPage.jsx` | `HomePage.jsx` | `ServiceListingPage.jsx` |
| `LoginPage.jsx` | `CategoriesPage.jsx` | `ServiceDetailPage.jsx` |
| `RegisterPage.jsx` | `ProfilePage.jsx` | `BookingPage.jsx` |
| - | `EditProfilePage.jsx` | `BookingsPage.jsx` |
| Additional | `SearchPage.jsx` | Info Pages |
| - | `NotificationsPage.jsx` | `HelpPage.jsx` |
| - | `NotFoundPage.jsx` | `AboutPage.jsx` |

### `src/context/` - State Management
| File | Purpose |
|------|---------|
| `AppContext.jsx` | Global app state (user, bookings, notifications, etc.) |

### `src/icons/` - Icon System
| File | Purpose |
|------|---------|
| `Icon.jsx` | SVG icon component (20+ icons available) |

### `src/data/` - Mock Data
| File | Purpose |
|------|---------|
| `mockData.js` | All mock data (categories, services, users, etc.) |

### `src/` - Root Files
| File | Purpose |
|------|---------|
| `App.jsx` | Main app component (refactored) |
| `main.jsx` | Entry point (unchanged) |
| `index.css` | Global styles |
| `App.css` | Component-level styles |

## 🎯 How It Works

### Navigation Flow
```
App.jsx
  ↓
AppProvider (Context)
  ↓
Toast, Navbar, Router, Footer, BottomNav
  ↓
Router Component → Renders correct Page based on currentPage
  ↓
Page Component → Contains full page layout
```

### State Management with Context
All global state is managed through `AppContext`:
```javascript
import { useApp } from './context/AppContext'

// Inside any component:
const { currentPage, navigate, user, bookings, showToast } = useApp()
```

### Available Context Methods & Values
- `navigate(page, data)` - Change pages and pass data
- `showToast(message, type)` - Show toast notifications
- `addBooking(booking)` - Add new booking
- `currentPage` - Current active page
- `user` - User profile data
- `bookings` - All bookings
- `notifications` - App notifications
- `searchQuery` - Global search term

## 🚀 Common Tasks

### Adding a New Page
1. Create a new file in `src/pages/MyNewPage.jsx`
2. Import it in `src/components/Router.jsx`
3. Add route mapping in the `pages` object
4. Navigate to it using: `navigate('myNewPage')`

### Adding a New Component
1. Create file in `src/components/MyComponent.jsx`
2. Export as named export
3. Import and use in pages or other components

### Accessing Global State
```javascript
import { useApp } from '../context/AppContext'

function MyComponent() {
  const { navigate, user, showToast } = useApp()
  // Use the values...
}
```

### Adding Mock Data
1. Add data to `src/data/mockData.js`
2. Export it
3. Import where needed: `import { SERVICES } from '../data/mockData'`

## 📊 Component Import Patterns

### Pages use components:
```javascript
import { ServiceCard } from '../components/ServiceCard'
import { Icon } from '../icons/Icon'
```

### Components use context:
```javascript
import { useApp } from '../context/AppContext'
```

### Pages use data:
```javascript
import { SERVICES, CATEGORIES } from '../data/mockData'
```

## 🎨 Styling

- **Tailwind CSS**: All styling uses Tailwind utility classes
- **Custom Animations**: Defined in `App.jsx` in global style block
  - `fade-in`: 0.3s fade and slide animation
  - `bounce-in`: 0.4s bounce and fade animation

## 📱 Responsive Breakpoints

- Mobile-first design
- `md:` prefix for medium screens (desktop)
- `sm:` prefix for small screens (tablets)
- Bottom nav hidden on desktop (`md:hidden`)
- Footer hidden on mobile (`hidden md:block`)

## 🔄 Key Features Implementation

### Search
```javascript
const { searchQuery, setSearchQuery, navigate } = useApp()
// User types → setSearchQuery updates → navigate('search') 
```

### Bookings
```javascript
const { bookings, addBooking } = useApp()
// Create booking → addBooking(booking) → navigate('bookings')
```

### Navigation
```javascript
const { navigate } = useApp()
navigate('serviceListing', { category: selectedCat })
// Passes data across pages
```

## 📦 Dependencies

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- No external UI library (pure Tailwind + custom components)

## 🛠️ Development Tips

1. **Keep components small**: Each component should do one thing
2. **Use context for global state**: Don't pass props through many levels
3. **Organize by feature**: Related pages and components together
4. **Reuse components**: Don't duplicate UI elements
5. **Mock data is easy**: Just modify `mockData.js` to test different states

## ✅ Best Practices Followed

✓ Single Responsibility Principle - Each component has one job
✓ DRY (Don't Repeat Yourself) - Reusable components used throughout
✓ Separation of Concerns - Pages, components, context, data separated
✓ Scalable Structure - Easy to add new pages and features
✓ Performance - No unnecessary re-renders, proper memoization
✓ Responsive - Works on mobile, tablet, and desktop

---

**Ready to develop!** The structure is now organized, scalable, and easy to maintain. 🚀
