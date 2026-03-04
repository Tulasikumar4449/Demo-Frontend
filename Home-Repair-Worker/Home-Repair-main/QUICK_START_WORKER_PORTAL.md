# 🚀 Quick Start Guide - Worker Portal

## Getting Started in 30 Seconds

### Step 1: Start the Application
```bash
cd Home-Repair-main
npm run dev
```

### Step 2: Access Worker Portal
Open your browser and navigate to the app, then:
- **Option A**: Click "👷 Join as Worker" on the landing page
- **Option B**: Click profile icon → "Worker Portal" in navbar

---

## 📸 Visual Guide - What You'll See

### Landing Page
**Location**: `http://localhost:5173/` (or your dev server URL)
- Look for the emerald "👷 Join as Worker" button below the main CTAs
- Click to enter worker registration

### Worker Registration Page
**Route**: `/worker/register` (via navigation)
**File**: `src/pages/WorkerRegisterPage.jsx`

What you'll see:
1. Form fields at top (Name, Email, Phone, Password)
2. **Service Selection Grid** below password field
   - 10 service category cards with icons
   - Click to select/deselect
   - Selected cards turn emerald green
   - Counter shows "Selected: X service(s)"
3. "Create Account" button at bottom

**Try this**: Select 2-3 services you'd offer as a worker

### Worker Login Page
**Route**: `/worker/login`
**File**: `src/pages/WorkerLoginPage.jsx`

Features:
- Clean emerald theme
- Email & Password fields
- "Forgot password?" link (UI only)
- Sign In button

### Worker Profile Page
**Route**: `/worker/profile`
**File**: `src/pages/WorkerProfilePage.jsx`

Sections from top to bottom:
1. **Profile Header** (Emerald gradient)
   - Avatar initials
   - Name & email
   - Availability & Rating badges
   - Edit Profile button

2. **Stats Grid** (3 cards)
   - Jobs Done: 127
   - Earnings: ₹45,200
   - Rating: 4.8

3. **Services You Offer**
   - Shows your selected services
   - "Edit Services" button top-right

4. **Menu List**
   - My Jobs (with "3 new" badge)
   - Availability
   - Earnings
   - Notifications
   - Help & Support
   - About

### Edit Worker Profile
**Route**: `/worker/profile/edit`
**File**: `src/pages/EditWorkerProfilePage.jsx`

Form sections:
1. Profile photo (UI placeholder)
2. Personal Info: Name, Email, Phone
3. Address (textarea)
4. Professional Info: Experience, Hourly Rate
5. Bio (textarea)
6. Save/Cancel buttons

### Worker Dashboard
**Route**: `/worker/dashboard`
**File**: `src/pages/WorkerDashboardPage.jsx`

Main features:

**Top Section - Stats Cards** (4 cards):
- 📋 Available Jobs: 3
- ✅ Accepted: 1
- ✓ Completed: 1
- 💰 Earnings: ₹1,198

**Middle Section - Tabs**:
- "Available Jobs" tab
- "My Jobs" tab

**Bottom Section - Job Cards**:

*Available Jobs Tab*:
Each job card shows:
- Service icon & name
- Customer name
- Date, time, location chips
- Price (large, emerald)
- Decline/Accept buttons

*My Jobs Tab*:
Each card shows:
- Service details
- Status badge (upcoming/completed)
- View Details button (for upcoming)

---

## 🎯 Interactive Elements to Try

### On Registration Page
1. ✅ Click different service categories
2. ✅ Watch them turn emerald when selected
3. ✅ See counter update
4. ✅ Try submitting without selection (shows error)

### On Worker Profile
1. ✅ Click "Edit Profile" button
2. ✅ Fill in experience: "5 years"
3. ✅ Fill hourly rate: "₹600/hr"
4. ✅ Add a bio
5. ✅ Click "Save Changes"

### On Worker Dashboard
1. ✅ Switch between tabs
2. ✅ Click "Accept Job" on any available job
3. ✅ See success toast
4. ✅ Job moves to "My Jobs" (in real app)
5. ✅ Click "Decline Job"
6. ✅ See decline toast

---

## 🔔 Toast Notifications

You'll see these messages:
- ✅ "Account created! Please complete your profile" (after registration)
- ✅ "Welcome back!" (after login)
- ✅ "Profile updated successfully!" (after editing)
- ✅ "Job accepted successfully!" (when accepting job)
- ⚠️ "Please select at least one service" (validation error)
- ⚠️ "Please fill all required fields" (form validation)

---

## 🎨 Color Coding

**Worker Portal Uses Emerald Theme**:
- Buttons: Emerald gradient (from-emerald-600 to-teal-600)
- Backgrounds: Emerald-50, Emerald-100
- Text: Emerald-600 for links/highlights
- Badges: Emerald-100 background, Emerald-600 text

**Customer Portal Uses Violet Theme**:
- Buttons: Violet gradient
- Backgrounds: Violet-50, Violet-100
- Text: Violet-600 for links/highlights

This visual distinction helps users know which portal they're in!

---

## 📱 Responsive Design

The worker portal is fully responsive:

**Desktop** (>768px):
- Full width layouts
- Multi-column grids
- Larger spacing

**Mobile** (<768px):
- Single column layouts
- Stacked elements
- Touch-friendly buttons
- Bottom navigation visible

**Test responsive design**:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select different devices
4. Test all pages

---

## 🧪 Quick Test Checklist

Run through this checklist to verify everything works:

### Registration Flow
- [ ] Navigate to worker registration
- [ ] Fill in name: "Test Worker"
- [ ] Fill in email: "test@worker.com"
- [ ] Fill in phone: "+91 1234567890"
- [ ] Fill in password: "password123"
- [ ] Select 2-3 services
- [ ] Click "Create Account"
- [ ] See success toast
- [ ] Redirect to worker profile

### Profile Management
- [ ] Click "Edit Profile"
- [ ] Update experience field
- [ ] Update hourly rate
- [ ] Add bio text
- [ ] Click "Save Changes"
- [ ] See success toast
- [ ] Return to profile

### Dashboard Navigation
- [ ] Click profile avatar in navbar
- [ ] Click "Worker Portal"
- [ ] Arrive at dashboard
- [ ] See stats cards
- [ ] Switch to "Available Jobs" tab
- [ ] See job listings
- [ ] Switch to "My Jobs" tab
- [ ] See accepted jobs

### Job Actions
- [ ] In "Available Jobs" tab
- [ ] Click "Accept Job" on first job
- [ ] See "Job accepted successfully!" toast
- [ ] Click "Decline Job" on second job
- [ ] See "Job declined" toast

---

## 🐛 Troubleshooting

### Issue: Can't find worker portal button
**Solution**: Make sure you're on the landing page (`/`). The button is below the main CTAs.

### Issue: Router error when accessing worker pages
**Solution**: Verify `Router.jsx` has all worker routes added (should have 5 new routes)

### Issue: Services not showing on profile
**Solution**: Check that you selected services during registration. Mock data defaults to [1, 2, 3]

### Issue: Dashboard shows no jobs
**Solution**: Jobs are hardcoded in `WorkerDashboardPage.jsx`. Check the `availableJobs` and `acceptedJobs` arrays.

### Issue: Toast not showing
**Solution**: Verify `AppContext.jsx` has `showToast` function and `Toast` component is rendered in `App.jsx`

---

## 📋 File Reference

Quick lookup for all worker-related files:

| File | Purpose | Route |
|------|---------|-------|
| `WorkerLoginPage.jsx` | Worker authentication | `/worker/login` |
| `WorkerRegisterPage.jsx` | Worker registration with service selection | `/worker/register` |
| `WorkerProfilePage.jsx` | Worker profile overview | `/worker/profile` |
| `EditWorkerProfilePage.jsx` | Edit worker details | `/worker/profile/edit` |
| `WorkerDashboardPage.jsx` | Job management dashboard | `/worker/dashboard` |

Modified files:
| File | Changes |
|------|---------|
| `Router.jsx` | Added 5 worker routes |
| `LandingPage.jsx` | Added worker CTA button |
| `Navbar.jsx` | Added worker portal dropdown link |

---

## 🎓 Next Steps

Now that you have the worker portal set up:

1. **Customize the mock data** in `WorkerDashboardPage.jsx`
2. **Add backend integration** for real authentication
3. **Implement service management** page
4. **Add calendar** for availability
5. **Create earnings analytics** with charts
6. **Build notification system** for job alerts

---

## 📞 Additional Resources

- **Full Documentation**: `WORKER_PORTAL_GUIDE.md`
- **Implementation Summary**: `WORKER_PORTAL_SUMMARY.md`
- **Project Structure**: `FILE_STRUCTURE_GUIDE.md`
- **Backend Integration**: `BACKEND_INTEGRATION.md`

---

**Happy coding! 🎉**

If you encounter any issues, check the troubleshooting section above or refer to the detailed guides.
