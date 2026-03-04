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
  }
  
  const Page = pages[currentPage] || LandingPage
  return (
    <ErrorBoundary>
      <div className="animate-fade-in"><Page /></div>
    </ErrorBoundary>
  )
}
