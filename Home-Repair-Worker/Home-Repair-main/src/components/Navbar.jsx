import { useState, useEffect } from 'react'
import { Menu, X, Wrench, User, LogIn, ChevronDown } from 'lucide-react'
import { useApp } from '../context/AppContext'

export function Navbar() {
  const { navigate, currentPage } = useApp()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isAuthPage = currentPage === 'workerLogin' || currentPage === 'workerRegister'

  if (isAuthPage) return null

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('landing')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                HomeServ
              </span>
              <p className="text-xs text-gray-500 -mt-1">Professional Home Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Testimonials
            </a>
            <button className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              More <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => navigate('workerLogin')}
              className="flex items-center gap-2 px-6 py-3 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-xl transition-all"
            >
              <LogIn className="w-5 h-5" />
              Login
            </button>
            <button 
              onClick={() => navigate('workerRegister')}
              className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <User className="w-5 h-5" />
                Join as Worker
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
              Services
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
              How It Works
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">
              Testimonials
            </a>
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button 
                onClick={() => {
                  navigate('workerLogin')
                  setIsMobileMenuOpen(false)
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-emerald-600 font-semibold border-2 border-emerald-600 rounded-xl hover:bg-emerald-50 transition-all"
              >
                <LogIn className="w-5 h-5" />
                Login
              </button>
              <button 
                onClick={() => {
                  navigate('workerRegister')
                  setIsMobileMenuOpen(false)
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg"
              >
                Join as Worker
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
