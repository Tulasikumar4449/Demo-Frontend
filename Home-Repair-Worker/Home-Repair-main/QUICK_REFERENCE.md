# Saheya UI Quick Reference Card

## 🎨 Color System at a Glance

### Backgrounds
```
Main BG:    from-slate-900 via-purple-900 to-slate-900
Card BG:    bg-white/10 or bg-white/5 with backdrop-blur
Hover BG:   hover:bg-white/20 or hover:bg-white/10
```

### Primary Actions
```
Success:    from-emerald-600 to-teal-600
Info:       from-blue-500 to-cyan-400
Warning:    from-amber-500 to-orange-400
Error:      from-red-500 to-rose-400
Premium:    from-purple-500 to-pink-400
```

### Text Colors
```
Primary:    text-white (headings)
Secondary:  text-white/60 (body)
Tertiary:   text-white/40 (labels)
Muted:      text-white/30 (placeholders)
Accent:     text-emerald-400 (links)
```

---

## 📦 Component Templates

### Glassmorphism Card
```jsx
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8">
    Content
  </div>
</div>
```

### Stat Card
```jsx
<div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5">
  <div className="text-3xl mb-2">📊</div>
  <p className="text-2xl font-bold text-white">127</p>
  <p className="text-xs text-white/50">Jobs Done</p>
</div>
```

### Input Field
```jsx
<div className="group">
  <label className="text-xs font-semibold text-white/70 mb-2 block uppercase">Label</label>
  <input className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl 
                    text-white focus:ring-2 focus:ring-emerald-500/50" />
</div>
```

### Gradient Button
```jsx
<button className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group">
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 
                  bg-[length:200%_100%] animate-shimmer"></div>
  <span className="relative">Action</span>
</button>
```

---

## ✨ Essential Animations

### Blob (Background)
```css
.animate-blob - Floating orbs, 7s infinite
```

### Shimmer (Button)
```css
.animate-shimmer - Gradient slide, 2s infinite linear
```

### Fade In (Content)
```css
.animate-fade-in - Smooth entrance, 0.5s ease-out
```

### Pulse (Status)
```css
.animate-pulse - Breathing effect, 2s infinite
```

---

## 🎯 Common Patterns

### Page Container
```jsx
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
                relative overflow-hidden">
  {/* Animated Blobs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 
                    rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
  </div>
  
  {/* Grid Pattern */}
  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
  
  {/* Content */}
  <div className="relative z-10">...</div>
</div>
```

### Back Button
```jsx
<button onClick={() => navigate('previous')} 
        className="flex items-center gap-2 text-white/60 mb-6 hover:text-white transition-all group">
  <Icon name="back" size={18} className="group-hover:-translate-x-1" />
  <span className="text-sm font-medium">Back</span>
</button>
```

### Badge System
```jsx
{/* Success */}
<span className="px-3 py-1 bg-green-500/20 border border-green-500/30 
                 rounded-full text-xs font-bold text-green-400">
  ✓ Verified
</span>

{/* Warning */}
<span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 
                 rounded-full text-xs font-bold text-amber-400">
  ⏳ Pending
</span>

{/* Info */}
<span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 
                 rounded-full text-xs font-bold text-blue-400">
  🔄 In Progress
</span>
```

---

## 📐 Spacing Guide

### Padding
```
p-4  = 16px (small)
p-5  = 20px (medium)
p-6  = 24px (large)
p-8  = 32px (xl)
```

### Gap
```
gap-2  = 8px  (tight)
gap-3  = 12px (normal)
gap-4  = 16px (standard)
gap-6  = 24px (wide)
```

### Border Radius
```
rounded-xl  = 12px (buttons, inputs)
rounded-2xl = 16px (cards)
rounded-3xl = 24px (hero cards)
```

---

## 🔧 Quick Fixes

### Too Dark?
Add more `/10` or `/20` opacity to backgrounds

### Not Enough Depth?
Increase blur: `blur-2xl` → `blur-3xl`

### Animations Choppy?
Use `transform` and `opacity` only (hardware accelerated)

### Text Hard to Read?
Increase opacity: `/60` → `/80` or use `text-white`

### Cards Blend Together?
Increase border opacity: `/10` → `/20`

---

## ✅ Pre-flight Checklist

Before deploying any page:

- [ ] Has animated background blobs
- [ ] Uses glassmorphism for cards
- [ ] Includes gradient buttons with shimmer
- [ ] All inputs have icon indicators
- [ ] Hover states defined on interactive elements
- [ ] Loading states for async actions
- [ ] Proper text contrast ratios
- [ ] Responsive on mobile/tablet/desktop
- [ ] Icons scale/rotate on hover
- [ ] Follows established patterns

---

## 🚀 Pro Tips

1. **Layer Depths**: Use z-index and blur to create depth hierarchy
2. **Animation Timing**: Stagger animations with delays for cascading effects
3. **Color Consistency**: Stick to emerald/teal for primary actions
4. **Performance**: Use CSS transforms over position changes
5. **Accessibility**: Always maintain WCAG AA contrast ratios
6. **Consistency**: Reuse component patterns across pages
7. **Feedback**: Provide visual feedback for every interaction
8. **Simplicity**: Don't over-animate; subtle is better

---

## 📱 Responsive Breakpoints

```css
Mobile:     Default (< 768px)
Tablet:     md: (≥ 768px)
Desktop:    lg: (≥ 1024px)
XL Desktop: xl: (≥ 1280px)
```

**Example:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- Responsive grid -->
</div>
```

---

## 🎭 Status Indicators

### Online Status
```jsx
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 
                border-4 border-slate-900 rounded-full animate-pulse"></div>
```

### Urgent Badge
```jsx
<span className="px-3 py-1 bg-red-500/20 border border-red-500/30 
                 rounded-full text-xs font-bold text-red-400 animate-pulse">
  🔥 Urgent
</span>
```

---

## 💡 Remember

- **Dark theme** builds trust and professionalism
- **Glassmorphism** adds modern premium feel
- **Animations** should be smooth (60fps) and purposeful
- **Contrast** ensures accessibility for all users
- **Consistency** creates familiar, comfortable UX

---

**Quick Access Files:**
- `index.css` - All custom animations
- `ADVANCED_UI_DESIGN.md` - Complete design system
- `VISUAL_DESIGN_REFERENCE.md` - Code templates
- `UI_TRANSFORMATION_SUMMARY.md` - Full overview

---

**Copyright 2024-2026 Saheya Pvt Ltd. All rights reserved.**
