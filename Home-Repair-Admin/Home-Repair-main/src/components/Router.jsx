import { useApp } from '../context/AppContext'
import { Loader } from './Loader'
import ErrorBoundary from './ErrorBoundary'
import { LandingPage } from '../pages/LandingPage'
import { WorkerLoginPage } from '../pages/WorkerLoginPage'
import { WorkerRegisterPage } from '../pages/WorkerRegisterPage'
import { WorkerProfilePage } from '../pages/WorkerProfilePage'
import { EditWorkerProfilePage } from '../pages/EditWorkerProfilePage'
import { WorkerDashboardPage } from '../pages/WorkerDashboardPage'
import { WorkerVerificationPage } from '../pages/WorkerVerificationPage'
import { AdminLoginPage } from '../pages/AdminLoginPage'
import { AdminRegisterPage } from '../pages/AdminRegisterPage'
import { AdminVerificationPage } from '../pages/AdminVerificationPage'
import { AdminDashboardPage } from '../pages/AdminDashboardPage'
import { AdminPerformancePage } from '../pages/AdminPerformancePage'
import { InvestigationPage } from '../pages/InvestigationPage'
import { AdminSettingsPage } from '../pages/AdminSettingsPage'
import { AdminNotificationsPage } from '../pages/AdminNotificationsPage'

export function Router() {
  const { currentPage, isLoading } = useApp()
  
  if (isLoading) return <Loader />
  
  const pages = {
    landing: LandingPage,
    workerLogin: WorkerLoginPage,
    workerRegister: WorkerRegisterPage,
    workerProfile: WorkerProfilePage,
    editWorkerProfile: EditWorkerProfilePage,
    workerDashboard: WorkerDashboardPage,
    workerVerification: WorkerVerificationPage,
    adminLogin: AdminLoginPage,
    adminRegister: AdminRegisterPage,
    adminVerification: AdminVerificationPage,
    adminDashboard: AdminDashboardPage,
    adminPerformance: AdminPerformancePage,
    investigation: InvestigationPage,
    adminSettings: AdminSettingsPage,
    adminNotifications: AdminNotificationsPage,
  }
  
  const Page = pages[currentPage] || LandingPage
  return (
    <ErrorBoundary>
      <div className="animate-fade-in"><Page /></div>
    </ErrorBoundary>
  )
}
