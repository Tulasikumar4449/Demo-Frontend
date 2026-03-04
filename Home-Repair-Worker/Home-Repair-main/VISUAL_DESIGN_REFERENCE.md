# Saheya Visual Design Quick Reference

## 🎨 Color System

### Background Gradients

#### Login Page
```css
bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900
```

#### Dashboard
```css
bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900
```

### Accent Gradients

| Purpose | Gradient | Usage |
|---------|----------|-------|
| Primary Action | `from-emerald-600 to-teal-600` | Accept buttons, active states |
| Secondary Action | `from-purple-600 to-pink-600` | Completed tab, alternative actions |
| Info/Stats | `from-blue-500 to-cyan-400` | Available jobs, information |
| Warning | `from-amber-500 to-orange-400` | Earnings, alerts |
| Success | `from-green-500 to-emerald-400` | Verified badges, completion |

### Opacity Levels

```css
white/5   - Subtle backgrounds (cards)
white/10  - Interactive elements (buttons)
white/20  - Active states, overlays
white/40  - Muted text
white/60  - Secondary text
white/80  - Emphasized secondary
white     - Primary text
```

---

## 🔲 Component Templates

### Glassmorphism Card

```jsx
<div className="relative">
  {/* Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
  
  {/* Main Card */}
  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8">
    {/* Content */}
  </div>
</div>
```

### Stat Card

```jsx
<div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div className="relative">
    <div className="text-3xl mb-3">📊</div>
    <p className="text-3xl font-bold text-white">127</p>
    <p className="text-xs text-white/50">Jobs Done</p>
  </div>
</div>
```

### Input Field with Icon

```jsx
<div className="group">
  <label className="text-xs font-semibold text-white/70 mb-2 block uppercase tracking-wide">
    Email Address
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Icon name="email" size={18} className="text-white/40 group-focus-within:text-emerald-400 transition-colors" />
    </div>
    <input 
      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl 
                 text-white placeholder-white/30 focus:outline-none 
                 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 
                 transition-all duration-300 hover:bg-white/10"
    />
  </div>
</div>
```

### Gradient Button

```jsx
<button className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_100%] animate-shimmer group-hover:bg-right transition-all duration-500"></div>
  
  {/* Hover Shine */}
  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  {/* Content */}
  <div className="relative flex items-center justify-center gap-2">
    <span>Sign In</span>
    <Icon name="arrow-right" size={18} className="group-hover:translate-x-1 transition-transform" />
  </div>
</button>
```

### Job Card (Available)

```jsx
<div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
  {/* Hover Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  {/* Urgency Badge */}
  {job.urgency === 'high' && (
    <div className="absolute top-4 right-4">
      <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-bold text-red-400 animate-pulse">
        🔥 Urgent
      </span>
    </div>
  )}
  
  <div className="relative flex items-start gap-5">
    {/* Service Icon */}
    <div className={`w-16 h-16 bg-gradient-to-br ${job.service.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
      {job.service.icon}
    </div>
    
    {/* Content */}
    <div className="flex-1">
      <h3 className="text-lg font-bold text-white mb-1">{job.service.name}</h3>
      <p className="text-sm text-white/60">{job.customer}</p>
      
      {/* Metadata Badges */}
      <div className="flex flex-wrap gap-3 mt-3">
        <div className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
          <Icon name="calendar" size={14} className="text-emerald-400" />
          <span>{job.date}</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 px-6 py-3 bg-white/5 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/10 transition-all">
          Decline
        </button>
        <button className="flex-1 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white font-bold">
          Accept Job
        </button>
      </div>
    </div>
  </div>
</div>
```

### Navigation Button (Active State)

```jsx
<button className={`group relative p-4 backdrop-blur border rounded-2xl transition-all duration-300 ${
  activeTab === 'requests' 
    ? 'bg-gradient-to-br from-emerald-500 to-teal-500 border-emerald-400 shadow-lg shadow-emerald-500/30' 
    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/50'
}`}>
  <div className="relative text-center">
    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">📋</div>
    <div className="font-bold text-sm text-white">Requests</div>
    <div className="text-xs text-white/80">Available Jobs</div>
  </div>
</button>
```

---

## ✨ Animation Classes

### Blob Animation (Background)

```css
.animate-blob {
  animation: blob 7s infinite;
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

**Usage:**
```jsx
<div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
```

### Shimmer Animation (Buttons)

```css
.animate-shimmer {
  animation: shimmer 2s infinite linear;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

**Usage:**
```jsx
<div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_100%] animate-shimmer"></div>
```

### Fade In

```css
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Usage:**
```jsx
<div className="animate-fade-in">Content</div>
```

---

## 🎯 Spacing System

### Padding Standards

```
p-4  = 16px  (small cards)
p-5  = 20px  (medium cards)
p-6  = 24px  (large cards)
p-8  = 32px  (hero sections)
```

### Gap Standards

```
gap-2  = 8px   (tightly grouped items)
gap-3  = 12px  (related items)
gap-4  = 16px  (standard spacing)
gap-5  = 20px  (card content)
gap-6  = 24px  (section spacing)
```

### Border Radius

```
rounded-xl  = 12px  (buttons, small cards)
rounded-2xl = 16px  (standard cards)
rounded-3xl = 24px  (hero cards, modals)
```

---

## 🔍 Typography

### Font Sizes

```
text-xs   = 12px  (labels, metadata)
text-sm   = 14px  (secondary text)
text-base = 16px  (body text)
text-lg   = 18px  (subheadings)
text-xl   = 20px  (section titles)
text-2xl  = 24px  (page titles)
text-3xl  = 30px  (display numbers)
```

### Font Weights

```
font-normal = 400 (body text)
font-medium = 500 (interactive elements)
font-semibold = 600 (emphasis)
font-bold = 700 (headings, important info)
```

---

## 🌈 Status Indicators

### Badge Styles

#### Success/Verified
```jsx
<span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-bold text-green-400">
  ✓ Verified
</span>
```

#### In Progress
```jsx
<span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-bold text-blue-400">
  🔄 In Progress
</span>
```

#### Warning/Pending
```jsx
<span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs font-bold text-amber-400">
  ⏳ Pending
</span>
```

#### Error/Rejected
```jsx
<span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-bold text-red-400">
  ✗ Rejected
</span>
```

#### Urgent (Animated)
```jsx
<span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-bold text-red-400 animate-pulse">
  🔥 Urgent
</span>
```

---

## 📐 Layout Patterns

### Hero Section

```jsx
<div className="max-w-6xl mx-auto px-6 py-8">
  <h1 className="text-4xl font-bold text-white mb-2">Welcome</h1>
  <p className="text-white/60">Subtitle</p>
</div>
```

### Grid Layouts

#### 2-Column Responsive
```jsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Items */}
</div>
```

#### 3-Column Equal
```jsx
<div className="grid grid-cols-3 gap-4">
  {/* Items */}
</div>
```

### Flex Layouts

#### Centered Content
```jsx
<div className="flex items-center justify-center gap-4">
  {/* Items */}
</div>
```

#### Space Between
```jsx
<div className="flex items-center justify-between">
  <div>Left Content</div>
  <div>Right Content</div>
</div>
```

---

## 🎮 Interaction States

### Hover Effects

```css
/* Scale Up */
hover:scale-105

/* Lift */
hover:-translate-y-1

/* Glow */
hover:shadow-lg hover:shadow-emerald-500/30

/* Border Brighten */
hover:border-emerald-500/50

/* Background Brighten */
hover:bg-white/10
```

### Focus States

```css
/* Ring */
focus:ring-2 focus:ring-emerald-500/50

/* Border Color */
focus:border-emerald-500/50

/* Outline (for accessibility) */
focus:outline-none focus:outline-emerald-500
```

### Active States

```css
/* Press Down */
active:scale-95

/* Brighten */
active:bg-white/20
```

---

## 📱 Responsive Breakpoints

```css
Mobile:     Default (< 768px)
Tablet:     md: (≥ 768px)
Desktop:    lg: (≥ 1024px)
Large Desktop: xl: (≥ 1280px)
```

**Example:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Responsive grid */}
</div>
```

---

## 🎭 Special Effects

### Glow Effects

#### Emerald Glow
```css
.glow-emerald {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.5),
              0 0 40px rgba(16, 185, 129, 0.3);
}
```

#### Purple Glow
```css
.glow-purple {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5),
              0 0 40px rgba(168, 85, 247, 0.3);
}
```

### Blur Effects

```css
backdrop-blur      = 8px blur
backdrop-blur-xl   = 24px blur
backdrop-blur-2xl  = 40px blur
backdrop-blur-3xl  = 64px blur
```

### Shadow System

```css
shadow-sm   = 0 1px 2px
shadow      = 0 1px 3px
shadow-lg   = 0 10px 15px
shadow-2xl  = 0 25px 50px
shadow-glow = 0 0 20px color
```

---

## ✅ Quick Checklist

Before deploying any UI component:

- [ ] Has glassmorphism effect (if card/container)
- [ ] Uses proper gradient colors
- [ ] Has hover state defined
- [ ] Includes loading state (if interactive)
- [ ] Proper spacing (padding/margin)
- [ ] Responsive on all breakpoints
- [ ] Icons are properly sized
- [ ] Text has proper contrast
- [ ] Animations are smooth (60fps)
- [ ] Follows design system patterns

---

**Copyright 2024-2026 Saheya Pvt Ltd. All rights reserved.**
