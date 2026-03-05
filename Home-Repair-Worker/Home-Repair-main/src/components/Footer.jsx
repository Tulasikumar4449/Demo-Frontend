import { Wrench, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">HomeServ</span>
                <p className="text-xs text-gray-400 -mt-1">Professional Home Services</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for professional home repair and maintenance services. Quality workmanship guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">Our Services</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Plumbing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Electrical</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Carpentry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Painting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">AC Repair</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Cleaning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <span className="text-gray-300">123 Service Street, City Center, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">support@homeserv.com</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
              <p className="text-sm text-emerald-300 font-medium">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} HomeServ. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500" /> for our customers
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
