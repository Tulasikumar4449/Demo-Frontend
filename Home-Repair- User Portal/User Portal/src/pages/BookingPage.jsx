import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { SERVICES } from '../data/mockData'

export function BookingPage() {
  const { selectedService, navigate, addBooking, showToast } = useApp()
  const s = selectedService || SERVICES[0]
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [address, setAddress] = useState('42 Park Avenue, Sector 15, Gurugram')
  const [notes, setNotes] = useState('')
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

  const handleBook = () => {
    if (!date || !time) { 
      showToast('Please select date and time', 'error'); 
      return 
    }
    addBooking({ serviceId: s.id, date, time, address, notes })
    navigate('bookings')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Book Service</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 mb-6">
        <img src={s.image} alt={s.name} className="w-16 h-16 rounded-xl object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm">{s.name}</h3>
          <p className="text-xs text-gray-500">{s.provider}</p>
        </div>
        <span className="text-lg font-bold text-violet-600">₹{s.price.toLocaleString()}</span>
      </div>
      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Select Date</label>
          <input 
            type="date" 
            value={date} 
            onChange={e => setDate(e.target.value)} 
            min={new Date().toISOString().split('T')[0]} 
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Select Time</label>
          <div className="grid grid-cols-4 gap-2">
            {times.map(t => (
              <button 
                key={t} 
                onClick={() => setTime(t)} 
                className={`py-2.5 rounded-xl text-xs font-medium transition-all ${time === t ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Address</label>
          <input 
            value={address} 
            onChange={e => setAddress(e.target.value)} 
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" 
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Special Instructions (optional)</label>
          <textarea 
            value={notes} 
            onChange={e => setNotes(e.target.value)} 
            rows={3} 
            placeholder="Any specific requirements..." 
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" 
          />
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Service charge</span>
            <span className="text-gray-900">₹{s.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Platform fee</span>
            <span className="text-gray-900">₹49</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Discount</span>
            <span className="text-emerald-600">-₹0</span>
          </div>
          <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
            <span>Total</span>
            <span className="text-violet-600">₹{(s.price + 49).toLocaleString()}</span>
          </div>
        </div>
        <button 
          onClick={handleBook} 
          className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-violet-500/30 transition-all"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  )
}
