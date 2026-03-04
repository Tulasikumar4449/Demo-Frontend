import { useState } from 'react'
import { Icon } from '../icons/Icon'

export function HelpPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const faqs = [
    { q: 'How do I book a service?', a: 'Browse categories, select a service, choose date & time, and confirm your booking. It takes less than 2 minutes!' },
    { q: 'Can I cancel a booking?', a: 'Yes, you can cancel up to 4 hours before the scheduled time for a full refund.' },
    { q: 'How are professionals verified?', a: 'All professionals undergo background checks, skill assessments, and regular quality audits.' },
    { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards, net banking, and cash on delivery.' },
    { q: 'Is there a service guarantee?', a: 'Yes! We offer a 30-day service guarantee. If you are not satisfied, we will redo the service for free.' },
  ]
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-6 text-white mb-6">
        <h2 className="font-bold text-lg mb-1">Need help?</h2>
        <p className="text-white/70 text-sm mb-4">Our support team is available 24/7</p>
        <div className="flex gap-3">
          <button className="flex-1 py-2.5 bg-white/20 backdrop-blur rounded-xl text-sm font-medium flex items-center justify-center gap-2">
            <Icon name="phone" size={16} />Call Us
          </button>
          <button className="flex-1 py-2.5 bg-white/20 backdrop-blur rounded-xl text-sm font-medium flex items-center justify-center gap-2">
            <Icon name="send" size={16} />Chat
          </button>
        </div>
      </div>
      <h2 className="font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <button 
              onClick={() => setOpenFaq(openFaq === i ? null : i)} 
              className="w-full px-5 py-4 flex items-center justify-between text-left"
            >
              <span className="font-medium text-sm text-gray-900">{f.q}</span>
              <Icon 
                name={openFaq === i ? 'x' : 'back'} 
                size={16} 
                className={`text-gray-400 transition-transform ${openFaq === i ? '' : 'rotate-[270deg]'}`} 
              />
            </button>
            {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-600 -mt-1">{f.a}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
