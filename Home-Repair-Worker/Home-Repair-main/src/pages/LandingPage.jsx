import { useApp } from '../context/AppContext'
import { Wrench, Shield, TrendingUp, Clock, Award, Users, Star, ArrowRight, CheckCircle, Zap } from 'lucide-react'

export function LandingPage() {
  const { navigate } = useApp()

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Earnings",
      description: "Earn up to ₹50,000 per month",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      description: "Work when you want",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Customers",
      description: "Safe and secure jobs",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Build Reputation",
      description: "Grow your professional profile",
      color: "from-amber-500 to-orange-600"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Active Workers", icon: <Users className="w-6 h-6" /> },
    { number: "₹45,000", label: "Avg Monthly Income", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Zap className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header/Logo Section */}
        <header className="pt-8 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Company Logo */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                  <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <Wrench className="w-10 h-10 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">HomeServ Pro</h1>
                  <p className="text-sm text-white/80 -mt-1">Worker Partner Platform</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={() => navigate('workerLogin')}
                  className="px-8 py-3 text-white font-semibold border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate('workerRegister')}
                  className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">Now Onboarding Workers in Your Area</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              Build Your
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                Service Business
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join India's largest network of home service professionals. 
              Get verified customers, guaranteed payments, and grow your reputation.
            </p>

            {/* CTA Buttons - Mobile */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => navigate('workerRegister')}
                className="group w-full sm:w-auto px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/40 transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                Start Earning Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('workerLogin')}
                className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105"
              >
                I Already Have Account
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-center mb-3 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105 group">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Trust Indicators */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>100% Verified Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Daily Direct Bank Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free Background Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Worker Support</span>
              </div>
            </div>
            
            {/* Mobile CTA */}
            <div className="md:hidden mt-8 flex flex-col gap-3">
              <button 
                onClick={() => navigate('workerRegister')}
                className="w-full px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg"
              >
                Join as Worker
              </button>
              <button 
                onClick={() => navigate('workerLogin')}
                className="w-full px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30"
              >
                Sign In
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
