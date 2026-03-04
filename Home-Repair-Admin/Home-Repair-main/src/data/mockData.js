export const CATEGORIES = [
  { id: 1, name: 'Home Services', icon: '🏠', color: 'from-blue-500 to-cyan-400', count: 24, desc: 'Professional home services' },
  { id: 2, name: 'Personal Services', icon: '💆', color: 'from-pink-500 to-rose-400', count: 18, desc: 'Personal care and wellness' },
  { id: 3, name: 'Laundry Services', icon: '🧺', color: 'from-sky-500 to-blue-400', count: 15, desc: 'Washing and ironing services' },
  { id: 4, name: 'Pest Control Services', icon: '🛡️', color: 'from-green-600 to-emerald-400', count: 12, desc: 'Safe pest elimination' },
  { id: 5, name: 'Carpenter Works', icon: '🪚', color: 'from-amber-600 to-orange-400', count: 20, desc: 'Custom woodwork & repairs' },
  { id: 6, name: 'Plumbing', icon: '🔧', color: 'from-emerald-500 to-teal-400', count: 16, desc: 'Expert plumbing solutions' },
  { id: 7, name: 'Drivers and Driving Class & License Services', icon: '🚗', color: 'from-purple-500 to-pink-400', count: 14, desc: 'Professional drivers and driving lessons' },
  { id: 8, name: 'Medical & Well Being Services', icon: '🏥', color: 'from-red-500 to-rose-400', count: 10, desc: 'Healthcare and wellness' },
  { id: 9, name: 'Emergency Services', icon: '🚨', color: 'from-orange-500 to-red-400', count: 22, desc: '24/7 emergency support' },
  { id: 10, name: 'Chef & Cooking Services', icon: '👨‍🍳', color: 'from-indigo-500 to-violet-400', count: 8, desc: 'Professional cooking services' },
  { id: 11, name: 'Function Hall & Infra Services', icon: '🏛️', color: 'from-yellow-500 to-amber-400', count: 12, desc: 'Venue and infrastructure' },
  { id: 12, name: 'Gardening & Outdoor Services', icon: '🌿', color: 'from-green-500 to-emerald-400', count: 10, desc: 'Garden maintenance and outdoor work' },
  { id: 13, name: 'Education & Tutoring Services', icon: '📚', color: 'from-teal-500 to-cyan-400', count: 16, desc: 'Academic tutoring and education support' },
  { id: 14, name: 'Automobile Mechanic Services', icon: '🔧', color: 'from-gray-600 to-slate-500', count: 18, desc: 'Vehicle repair and maintenance' },
]

export const SERVICES = [
  { id: 1, catId: 1, name: 'Full Home Cleaning', price: 1499, rating: 4.8, reviews: 342, duration: '3-4 hrs', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400', provider: 'CleanPro Services', desc: 'Complete home cleaning including all rooms, kitchen, and bathrooms. Our trained professionals use eco-friendly products.', popular: true },
  { id: 2, catId: 1, name: 'Kitchen Deep Clean', price: 799, rating: 4.7, reviews: 218, duration: '2-3 hrs', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400', provider: 'SparkleHome', desc: 'Intensive kitchen cleaning including chimney, cabinets, and appliances.', popular: true },
  { id: 3, catId: 2, name: 'Pipe Leak Repair', price: 499, rating: 4.6, reviews: 156, duration: '1-2 hrs', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400', provider: 'FixIt Plumbing', desc: 'Quick and reliable pipe leak detection and repair service.' },
  { id: 4, catId: 3, name: 'Wiring & Switches', price: 399, rating: 4.5, reviews: 189, duration: '1-2 hrs', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400', provider: 'PowerFix Electric', desc: 'Complete wiring solutions and switch installation/repair.' },
  { id: 5, catId: 4, name: 'AC Service & Gas Refill', price: 999, rating: 4.9, reviews: 445, duration: '1-2 hrs', image: 'https://images.unsplash.com/photo-1631545806609-05faf3d8839a?w=400', provider: 'CoolAir Services', desc: 'Complete AC servicing with gas top-up and filter cleaning.', popular: true },
  { id: 6, catId: 5, name: 'Room Painting', price: 2499, rating: 4.7, reviews: 267, duration: '1-2 days', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400', provider: 'ColorCraft', desc: 'Professional room painting with premium paints and finish.' },
  { id: 7, catId: 6, name: 'Washing Machine Repair', price: 599, rating: 4.4, reviews: 134, duration: '1-2 hrs', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400', provider: 'ApplianceCare', desc: 'Expert washing machine diagnosis and repair.' },
  { id: 8, catId: 7, name: 'Furniture Assembly', price: 699, rating: 4.6, reviews: 98, duration: '2-3 hrs', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400', provider: 'WoodWorks Pro', desc: 'Professional furniture assembly and installation.' },
  { id: 9, catId: 8, name: 'Full Home Pest Control', price: 1299, rating: 4.8, reviews: 312, duration: '2-3 hrs', image: 'https://images.unsplash.com/photo-1632935190508-1c1e1d041d42?w=400', provider: 'SafeGuard Pest', desc: 'Complete pest control treatment for your entire home.', popular: true },
  { id: 10, catId: 9, name: 'Bridal Makeup Package', price: 4999, rating: 4.9, reviews: 523, duration: '3-4 hrs', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400', provider: 'GlamSquad', desc: 'Complete bridal makeup with hairstyling at your doorstep.', popular: true },
  { id: 11, catId: 9, name: 'Haircut & Styling', price: 499, rating: 4.5, reviews: 287, duration: '45 min', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400', provider: 'StyleAt Home', desc: 'Professional haircut and styling service at home.' },
  { id: 12, catId: 10, name: 'Move-in Deep Clean', price: 2999, rating: 4.8, reviews: 198, duration: '5-6 hrs', image: 'https://images.unsplash.com/photo-1527515637462-cee1395c108c?w=400', provider: 'DeepClean Pro', desc: 'Thorough deep cleaning for new homes before moving in.' },
]

export const MOCK_BOOKINGS = [
  { id: 1, serviceId: 5, date: '2025-02-15', time: '10:00 AM', status: 'completed', address: '42 Park Avenue, Sector 15' },
  { id: 2, serviceId: 1, date: '2025-02-18', time: '2:00 PM', status: 'upcoming', address: '42 Park Avenue, Sector 15' },
  { id: 3, serviceId: 10, date: '2025-02-20', time: '11:00 AM', status: 'upcoming', address: '42 Park Avenue, Sector 15' },
  { id: 4, serviceId: 3, date: '2025-01-28', time: '9:00 AM', status: 'completed', address: '42 Park Avenue, Sector 15' },
  { id: 5, serviceId: 9, date: '2025-02-25', time: '3:00 PM', status: 'pending', address: '42 Park Avenue, Sector 15' },
]

export const MOCK_USER = { 
  name: 'Arjun Mehta', 
  email: 'arjun@example.com', 
  phone: '+91 98765 43210', 
  avatar: 'AM', 
  address: '42 Park Avenue, Sector 15, Gurugram', 
  joined: 'Jan 2024' 
}

export const REVIEWS = [
  { id: 1, user: 'Priya S.', rating: 5, text: 'Absolutely fantastic service! The team was professional and thorough.', date: '2 days ago' },
  { id: 2, user: 'Rahul K.', rating: 4, text: 'Good work overall. Arrived on time and did a great job.', date: '1 week ago' },
  { id: 3, user: 'Sneha M.', rating: 5, text: 'Best service I have ever used. Will definitely book again!', date: '2 weeks ago' },
]

export const NOTIFICATIONS = [
  { id: 1, title: 'Booking Confirmed', msg: 'Your AC Service booking for Feb 18 is confirmed.', time: '2 hrs ago', read: false, type: 'success' },
  { id: 2, title: '20% Off Cleaning!', msg: 'Use code CLEAN20 for 20% off on all cleaning services.', time: '5 hrs ago', read: false, type: 'promo' },
  { id: 3, title: 'Service Completed', msg: 'Your plumbing service has been marked as completed. Rate now!', time: '1 day ago', read: true, type: 'info' },
  { id: 4, title: 'New Services Available', msg: 'Check out our new Salon at Home packages starting at ₹299.', time: '3 days ago', read: true, type: 'promo' },
]

// Admin Notifications
export const ADMIN_NOTIFICATIONS = [
  {
    id: 1,
    type: 'customer_complaint',
    title: 'New Customer Complaint',
    message: 'Arjun Mehta reported poor service quality by Rajesh Kumar (Plumbing)',
    time: '2 hrs ago',
    read: false,
    priority: 'high',
    complaintId: 1
  },
  {
    id: 2,
    type: 'worker_complaint',
    title: 'Worker Complaint Filed',
    message: 'Rajesh Kumar reported payment dispute with Priya Sharma',
    time: '1 day ago',
    read: false,
    priority: 'medium',
    complaintId: 2
  },
  {
    id: 3,
    type: 'customer_complaint',
    title: 'Critical Complaint - Misconduct',
    message: 'Sneha Gupta reported misconduct by Amit Singh (AC Repair)',
    time: '5 hrs ago',
    read: false,
    priority: 'critical',
    complaintId: 3
  },
  {
    id: 4,
    type: 'investigation_update',
    title: 'Investigation Completed',
    message: 'Case #4 resolved - Customer warned for harassment',
    time: '1 week ago',
    read: true,
    priority: 'low',
    complaintId: 4
  },
  {
    id: 5,
    type: 'enforcement_action',
    title: 'Fine Imposed',
    message: '₹500 fine imposed on Suresh Yadav for poor service quality',
    time: '2 weeks ago',
    read: true,
    priority: 'medium'
  }
]

// Admin Users Data
export const ADMIN_USERS = [
  { 
    id: 1, 
    name: 'Admin User', 
    email: 'admin@saheya.com', 
    phone: '+91 99999 88888', 
    avatar: 'AU', 
    role: 'Super Admin',
    permissions: ['manage_complaints', 'manage_workers', 'manage_customers', 'view_analytics'],
    joined: 'Jan 2024' 
  }
]

// Complaints Database
export const COMPLAINTS = [
  {
    id: 1,
    type: 'customer',
    complainant: { name: 'Arjun Mehta', email: 'arjun@example.com', phone: '+91 98765 43210' },
    against: { name: 'Rajesh Kumar', workerId: 'W123', service: 'Plumbing' },
    category: 'Poor Service Quality',
    description: 'The worker did not fix the leak properly and left a mess. Very unprofessional behavior.',
    severity: 'high',
    status: 'pending',
    evidence: [
      'https://images.unsplash.com/photo-1585704032915-c852d0e9436e?w=400',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400'
    ],
    bookingId: 3,
    date: '2025-02-10',
    timestamp: '2 hrs ago'
  },
  {
    id: 2,
    type: 'worker',
    complainant: { name: 'Rajesh Kumar', workerId: 'W123', phone: '+91 87654 32109' },
    against: { name: 'Priya Sharma', customerId: 'C456' },
    category: 'Payment Dispute',
    description: 'Customer refused to pay after I completed the work. She claims the price was too high but I followed the standard rates.',
    severity: 'medium',
    status: 'under_investigation',
    evidence: [],
    bookingId: 7,
    date: '2025-02-08',
    timestamp: '1 day ago'
  },
  {
    id: 3,
    type: 'customer',
    complainant: { name: 'Sneha Gupta', email: 'sneha@example.com', phone: '+91 76543 21098' },
    against: { name: 'Amit Singh', workerId: 'W789', service: 'AC Repair' },
    category: 'Misconduct',
    description: 'Worker arrived late and was rude. He also tried to overcharge me for gas refill.',
    severity: 'critical',
    status: 'pending',
    evidence: [
      'https://images.unsplash.com/photo-1542013936691-ec76a9e0c2b8?w=400'
    ],
    bookingId: 12,
    date: '2025-02-12',
    timestamp: '5 hrs ago'
  },
  {
    id: 4,
    type: 'worker',
    complainant: { name: 'Vikram Patel', workerId: 'W456', phone: '+91 65432 10987' },
    against: { name: 'Anita Desai', customerId: 'C789' },
    category: 'Harassment',
    description: 'Customer verbally abused me and threatened to file false complaint. I want to report this incident.',
    severity: 'high',
    status: 'resolved',
    evidence: [],
    bookingId: 9,
    date: '2025-02-05',
    timestamp: '1 week ago',
    resolution: {
      finding: 'false',
      action: 'Customer warned',
      notes: 'After investigation, found worker exaggerated the situation. Customer issued warning.'
    }
  }
]

// Active Investigations
export const INVESTIGATIONS = [
  {
    id: 1,
    complaintId: 2,
    assignedTo: 'Admin User',
    status: 'in_progress',
    startedDate: '2025-02-09',
    lastUpdated: '1 day ago',
    notes: [
      { date: '2025-02-09', author: 'Admin User', text: 'Reviewed booking details. Price seems standard.' },
      { date: '2025-02-09', author: 'Admin User', text: 'Contacted customer for statement.' }
    ],
    communications: []
  }
]

// Enforcement Actions History
export const ENFORCEMENT_ACTIONS = [
  {
    id: 1,
    complaintId: 4,
    target: { type: 'customer', name: 'Anita Desai', id: 'C789' },
    actionType: 'warning',
    description: 'Formal warning issued for verbal abuse towards worker',
    date: '2025-02-06',
    takenBy: 'Admin User'
  },
  {
    id: 2,
    complaintId: 8,
    target: { type: 'worker', name: 'Suresh Yadav', id: 'W321' },
    actionType: 'fine',
    amount: 500,
    description: 'Fine imposed for poor service quality',
    date: '2025-02-01',
    takenBy: 'Admin User'
  },
  {
    id: 3,
    complaintId: 11,
    target: { type: 'worker', name: 'Deepak Joshi', id: 'W654' },
    actionType: 'suspension',
    duration: '7 days',
    description: 'Temporary suspension for repeated complaints',
    date: '2025-01-28',
    takenBy: 'Admin User'
  }
]

// Communication Logs
export const COMMUNICATION_LOGS = [
  {
    id: 1,
    complaintId: 2,
    participants: ['Admin User', 'Priya Sharma'],
    messages: [
      { sender: 'Admin User', text: 'Hello Priya, we received a complaint regarding booking #7. Can you please share your side?', time: '10:30 AM', date: '2025-02-09' },
      { sender: 'Priya Sharma', text: 'I already told him the price was too high. He didn\'t inform me beforehand.', time: '11:15 AM', date: '2025-02-09' }
    ]
  }
]
