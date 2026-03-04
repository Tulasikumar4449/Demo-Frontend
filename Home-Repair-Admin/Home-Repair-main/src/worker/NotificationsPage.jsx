import React, { useEffect, useState } from 'react'

export default function NotificationsPage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    let bc
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        bc = new BroadcastChannel('home-repair-bookings')
        bc.onmessage = (ev) => {
          const msg = ev.data
          if (msg?.type === 'new-booking') {
            const b = { id: msg.booking.id, text: `New booking for service ${msg.booking.serviceId} on ${msg.booking.date} at ${msg.booking.time}`, booking: msg.booking }
            setItems(prev => [b, ...prev])
            if (Notification && Notification.permission === 'granted') {
              new Notification('New Booking', { body: b.text })
            } else if (Notification && Notification.permission !== 'denied') {
              Notification.requestPermission().then(p => { if (p === 'granted') new Notification('New Booking', { body: b.text }) })
            }
          }
        }
      }
    } catch (e) {
      console.warn('BroadcastChannel unavailable', e)
    }
    return () => { if (bc) bc.close() }
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="bg-white rounded-2xl p-4 shadow">
        {items.length === 0 && <div className="text-gray-500 text-sm">No notifications yet. When a customer books, you'll be notified here.</div>}
        <ul className="space-y-3">
          {items.map(it => (
            <li key={it.id} className="p-3 border rounded-lg">
              <div className="text-sm text-gray-800">{it.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
