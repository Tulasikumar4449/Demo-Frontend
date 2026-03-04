import React from "react";

const ServiceProviderDashboard = () => {
  // Placeholder for available requests (replace with API data later)
  const availableRequests = [
    { id: 1, title: "Fix leaking faucet", location: "Downtown", date: "2026-02-20" },
    { id: 2, title: "Install ceiling fan", location: "Uptown", date: "2026-02-21" },
    { id: 3, title: "Repair door lock", location: "Suburb", date: "2026-02-22" },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Service Provider Dashboard</h1>
      <h2 className="text-xl font-semibold mb-2">Available Requests</h2>
      <ul className="space-y-4">
        {availableRequests.map((req) => (
          <li key={req.id} className="border rounded p-4 shadow-sm bg-white">
            <div className="font-medium">{req.title}</div>
            <div className="text-sm text-gray-600">Location: {req.location}</div>
            <div className="text-sm text-gray-500">Date: {req.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceProviderDashboard;
