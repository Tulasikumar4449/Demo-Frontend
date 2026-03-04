# HomeServ - Domestic Services Application

A premium React-based home services platform connecting customers with verified professionals.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Toast.jsx              # Toast notification component
│   ├── Loader.jsx             # Loading spinner component
│   ├── SkeletonCard.jsx        # Skeleton loader for cards
│   ├── Stars.jsx              # Star rating component
│   ├── Navbar.jsx             # Top navigation bar
│   ├── BottomNav.jsx          # Mobile bottom navigation
│   ├── ServiceCard.jsx        # Service listing card
│   ├── CategoryCard.jsx       # Category card component
│   ├── Footer.jsx             # Footer component
│   └── Router.jsx             # Page router logic
│
├── context/             # React Context & State Management
│   └── AppContext.jsx         # Global app context and provider
│
├── pages/              # Page components (one per page)
│   ├── LandingPage.jsx        # Welcome/landing page
│   ├── LoginPage.jsx          # User login page
│   ├── RegisterPage.jsx       # User registration page
│   ├── HomePage.jsx           # Main home page
│   ├── CategoriesPage.jsx     # All categories page
│   ├── ServiceListingPage.jsx # Services by category
│   ├── ServiceDetailPage.jsx  # Single service details
│   ├── BookingPage.jsx        # Booking confirmation page
│   ├── BookingsPage.jsx       # User's bookings list
│   ├── ProfilePage.jsx        # User profile page
│   ├── EditProfilePage.jsx    # Edit profile page
│   ├── SearchPage.jsx         # Search results page
│   ├── NotificationsPage.jsx  # Notifications page
│   ├── HelpPage.jsx           # Help & FAQ page
│   ├── AboutPage.jsx          # About page
│   └── NotFoundPage.jsx       # 404 page
│
├── icons/              # Icon components
│   └── Icon.jsx              # SVG icon component library
│
├── data/               # Mock data and constants
│   └── mockData.js           # All mock data (categories, services, etc.)
│
├── App.jsx             # Main app component
├── main.jsx            # Application entry point
├── index.css           # Global styles
└── App.css             # Component styles
```

## Features

### Authentication
- Landing page with sign-in/sign-up
- Login and registration pages

### Home Page
- Search functionality
- Category browsing (10+ categories)
- Popular services showcase
- Trust indicators

### Service Discovery
- Browse all categories
- Filter services by category
- Search services by name or category
- Detailed service information with reviews

### Bookings
- Select date and time
- Edit booking address
- Add special instructions
- View booking history (upcoming, completed, pending)

### User Profile
- View profile information
- Edit profile details
- View booking statistics
- Access help and support

### Additional Features
- Notifications system
- Help & FAQ section
- About page
- Responsive design (mobile & desktop)
- Toast notifications
- Loading states

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **JavaScript ES6+**: Programming language

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Context API Usage

The app uses React Context for global state management:
- `currentPage`: Current page/route
- `user`: User profile data
- `bookings`: User's bookings
- `notifications`: App notifications
- `searchQuery`: Search input
- `selectedCategory`: Currently selected category
- `selectedService`: Currently selected service
- `toast`: Toast notification state

## Mock Data

All mock data is centralized in `src/data/mockData.js`:
- **Categories**: 10 service categories
- **Services**: 12 sample services across categories
- **Bookings**: Sample user bookings
- **User**: Mock user profile
- **Reviews**: Sample service reviews
- **Notifications**: Sample notifications

## Component Hierarchy

```
App
├── AppProvider (Context)
├── Toast
├── Navbar
├── Router
│   └── [Page Components]
├── Footer
└── BottomNav
```

## Responsive Design

- Mobile-first approach
- Mobile navigation (bottom tab bar)
- Desktop-optimized layout
- Tablets supported

## Notes

- All navigation uses the `navigate()` function from `useApp()`
- Data persistence is simulated (no backend)
- All styling uses Tailwind CSS
- SVG icons are inline for better performance
