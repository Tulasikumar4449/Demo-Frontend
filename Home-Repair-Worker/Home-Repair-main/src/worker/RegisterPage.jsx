import React from 'react'

export default function RegisterPage({ onRegister }) {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Worker Sign up</h1>
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="space-y-4">
          <input placeholder="Full name" className="w-full px-4 py-2 rounded-lg border" />
          <input placeholder="Email" className="w-full px-4 py-2 rounded-lg border" />
          <input placeholder="Phone" className="w-full px-4 py-2 rounded-lg border" />
          <input placeholder="Password" className="w-full px-4 py-2 rounded-lg border" />
          <button onClick={() => onRegister()} className="w-full py-2 bg-violet-600 text-white rounded-lg">Create Account</button>
        </div>
      </div>
    </div>
  )
}
