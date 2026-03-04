# Worker Portal Guide

## Overview
The Worker Portal is a dedicated section for service providers (workers) to manage their profile, services, and job bookings. It's designed with the same clean UI as the HomeServ platform but tailored for workers' needs.

## Features

### 1. **Worker Login & Registration** (`/src/pages/WorkerLoginPage.jsx`, `WorkerRegisterPage.jsx`)

#### Worker Login
- Clean emerald-themed login interface
- Navigate to worker dashboard upon successful login
- Link to registration page for new workers

#### Worker Registration
- Full name, email, phone, password fields
- **Service Selection**: Workers can select multiple service categories they offer
  - Interactive grid of all available categories
  - Visual feedback on selection (emerald highlight)
  - Validation to ensure at least one service is selected
- Upon registration, redirects to worker profile

### 2. **Worker Profile** (`/src/pages/WorkerProfilePage.jsx`)

Key sections:
- **Profile Header**: Shows worker name, email, availability status, and rating
- **Stats Grid**: 
  - Jobs Done
  - Total Earnings
  - Overall Rating
- **Services Offered**: Displays all services the worker provides with icons and descriptions
  - Edit button to modify services
- **Menu Options**:
  - My Jobs (with badge for new jobs)
  - Availability Calendar
  - Earnings Dashboard
  - Notifications
  - Help & Support
  - About

### 3. **Edit Worker Profile** (`/src/pages/EditWorkerProfilePage.jsx`)

Editable fields:
- Full Name
- Email
- Phone Number
- Address (textarea)
- Years of Experience
- Hourly Rate
- Bio/Description (textarea)
- Profile Photo (placeholder for future implementation)

Validation ensures required fields are filled before saving.

### 4. **Worker Dashboard** (`/src/pages/WorkerDashboardPage.jsx`)

Main features:
- **Stats Cards**: Quick overview of available jobs, accepted jobs, completed jobs, and earnings
- **Tab System**:
  - **Available Jobs Tab**: Browse and accept/decline job requests
    - Job details include: service, customer, location, date, time, price
    - Accept/Decline buttons for each job
  - **My Jobs Tab**: View accepted jobs with status (upcoming/completed)
    - Shows job status badges
    - View details option for upcoming jobs

## Navigation Flow

```
Landing Page → "Join as Worker" Button
    ↓
Worker Login / Register
    ↓
Worker Profile
    ↓
Worker Dashboard (from navbar dropdown or profile menu)
    ↓
Browse/Accept Jobs
```

## Color Scheme
- **Emerald/Teal Gradient**: Used throughout worker portal for branding
- Consistent with home repair app's violet theme but distinct for workers

## Integration Points

### Context (AppContext.jsx)
Currently uses mock data. For production, integrate with backend API for:
- User authentication
- Service selection storage
- Job listings
- Booking management
- Earnings tracking

### Router Updates
Added routes:
- `workerLogin`
- `workerRegister`
- `workerProfile`
- `editWorkerProfile`
- `workerDashboard`

### Navbar
Added "Worker Portal" link in profile dropdown menu for quick access.

## Mock Data Structure

Worker object includes:
```javascript
{
  ...user,
  services: [1, 2, 3], // Category IDs
  rating: '4.8',
  completedJobs: 127,
  totalEarnings: '₹45,200',
  availability: 'Available',
  experience: '3 years',
  hourlyRate: '₹500/hr'
}
```

## Future Enhancements

1. **Service Management Page**: Dedicated page to edit services with more details (pricing, availability)
2. **Job Details Page**: Full-screen view of individual job details
3. **Calendar Integration**: Visual calendar for availability and scheduling
4. **Earnings Analytics**: Charts and graphs for income tracking
5. **Customer Reviews**: Display ratings and reviews from completed jobs
6. **Real-time Notifications**: Push notifications for new job requests
7. **Chat Feature**: Direct communication with customers
8. **Performance Metrics**: Track acceptance rate, completion rate, etc.

## Testing the Worker Portal

1. Start the development server
2. Navigate to landing page
3. Click "Join as Worker" button
4. Register with your details and select services
5. Complete profile with experience and hourly rate
6. Browse available jobs in dashboard
7. Accept/decline jobs to see status updates

## Files Modified/Created

### Created:
- `/src/pages/WorkerLoginPage.jsx`
- `/src/pages/WorkerRegisterPage.jsx`
- `/src/pages/WorkerProfilePage.jsx`
- `/src/pages/EditWorkerProfilePage.jsx`
- `/src/pages/WorkerDashboardPage.jsx`

### Modified:
- `/src/components/Router.jsx` - Added worker routes
- `/src/pages/LandingPage.jsx` - Added worker portal CTA button
- `/src/components/Navbar.jsx` - Added worker portal link

## Notes

- All worker pages use responsive design (mobile-first)
- Consistent padding and spacing with main app
- Uses same icon system and component library
- Tailwind CSS classes follow existing patterns
- All buttons have hover states and transitions
