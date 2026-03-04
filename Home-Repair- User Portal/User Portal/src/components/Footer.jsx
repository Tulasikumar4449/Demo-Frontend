import { useApp } from '../context/AppContext'

export function Footer() {
  const { currentPage, navigate } = useApp()
  
  if (['landing', 'login', 'register'].includes(currentPage)) return null
  
  return (
    <footer className="hidden md:block bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-violet-600 rounded-xl flex items-center justify-center text-sm font-bold">H</div>
              <span className="font-bold">HomeServ</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your trusted partner for all home services. Quality, reliability, and convenience at your fingertips.
            </p>
          </div>
          {[
            { title: 'Services', items: ['Cleaning', 'Plumbing', 'Electrical', 'AC Repair'] }, 
            { title: 'Company', items: ['About Us', 'Careers', 'Blog', 'Press'] }, 
            { title: 'Support', items: ['Help Center', 'Safety', 'Terms', 'Privacy'] }
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-3">{col.title}</h4>
              <div className="space-y-2">
                {col.items.map(item => (
                  <p key={item} className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          © 2025 HomeServ. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
