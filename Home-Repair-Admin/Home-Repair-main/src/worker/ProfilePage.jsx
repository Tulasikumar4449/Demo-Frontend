import React from 'react'

export default function ProfilePage({ user }) {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="text-center">
          <div className="w-20 h-20 bg-violet-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">{user.avatar}</div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </div>
    </div>
  )
}
