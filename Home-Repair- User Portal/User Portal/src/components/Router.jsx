import { useApp } from '../context/AppContext'
import { Loader } from './Loader'
import ErrorBoundary from './ErrorBoundary'
import { LandingPage } from '../pages/LandingPage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { HomePage } from '../pages/HomePage'
import { CategoriesPage } from '../pages/CategoriesPage'
import { ServiceListingPage } from '../pages/ServiceListingPage'
import { ServiceDetailPage } from '../pages/ServiceDetailPage'
import { BookingPage } from '../pages/BookingPage'
import { BookingsPage } from '../pages/BookingsPage'
import { ProfilePage } from '../pages/ProfilePage'
import { EditProfilePage } from '../pages/EditProfilePage'
import { SearchPage } from '../pages/SearchPage'
import { NotificationsPage } from '../pages/NotificationsPage'
import { HelpPage } from '../pages/HelpPage'
import { AboutPage } from '../pages/AboutPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export function Router() {
  const { currentPage, isLoading } = useApp()
  
  if (isLoading) return <Loader />
  
  const pages = {
    landing: LandingPage, 
    login: LoginPage, 
    register: RegisterPage,
    home: HomePage, 
    categories: CategoriesPage, 
    serviceListing: ServiceListingPage,
    serviceDetail: ServiceDetailPage, 
    booking: BookingPage, 
    bookings: BookingsPage,
    profile: ProfilePage, 
    editProfile: EditProfilePage, 
    search: SearchPage,
    notifications: NotificationsPage, 
    help: HelpPage, 
    about: AboutPage,
  }
  
  const Page = pages[currentPage] || NotFoundPage
  return (
    <ErrorBoundary>
      <div className="animate-fade-in"><Page /></div>
    </ErrorBoundary>
  )
}
