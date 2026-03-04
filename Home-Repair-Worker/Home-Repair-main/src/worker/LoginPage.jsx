import React, { useState } from 'react'

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Worker Sign in</h1>
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-600">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border mt-1" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600">Password</label>
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} className="w-full px-4 py-2 rounded-lg border mt-1" />
          </div>
          <button onClick={() => onLogin()} className="w-full py-2 bg-violet-600 text-white rounded-lg">Sign In</button>
          <div className="text-center text-sm text-gray-500">or <button onClick={() => onLogin(false)} className="text-violet-600">Sign Up</button></div>
        </div>
      </div>
    </div>
  )
}
