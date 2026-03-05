import { AppProvider } from './context/AppContext'
import { Toast } from './components/Toast'
import { Footer } from './components/Footer'
import { Router } from './components/Router'

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <style>{`
          @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes bounce-in { 0% { opacity: 0; transform: translate(-50%, -20px); } 50% { transform: translate(-50%, 4px); } 100% { opacity: 1; transform: translate(-50%, 0); } }
          .animate-fade-in { animation: fade-in 0.3s ease-out; }
          .animate-bounce-in { animation: bounce-in 0.4s ease-out; }
        `}</style>
        <Toast />
        <main className="relative">
          <Router />
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}
