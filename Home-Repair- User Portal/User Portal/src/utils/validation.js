/**
 * Email validation
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Phone validation
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Password validation
 */
export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  return passwordRegex.test(password)
}

/**
 * Password strength indicator
 */
export const getPasswordStrength = (password) => {
  let strength = 0
  
  if (password.length >= 8) strength++
  if (password.length >= 12) strength++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
  if (/\d/.test(password)) strength++
  if (/[!@#$%^&*]/.test(password)) strength++
  
  const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong']
  return {
    score: strength,
    label: levels[strength],
    percentage: (strength / 5) * 100,
  }
}

/**
 * Form validation
 */
export const validateForm = (formData, rules) => {
  const errors = {}
  
  Object.keys(rules).forEach(field => {
    const value = formData[field]
    const fieldRules = rules[field]
    
    // Required validation
    if (fieldRules.required && (!value || value.toString().trim() === '')) {
      errors[field] = fieldRules.requiredMessage || `${field} is required`
      return
    }
    
    // Email validation
    if (fieldRules.type === 'email' && value && !validateEmail(value)) {
      errors[field] = fieldRules.message || 'Please enter a valid email'
      return
    }
    
    // Phone validation
    if (fieldRules.type === 'phone' && value && !validatePhone(value)) {
      errors[field] = fieldRules.message || 'Please enter a valid phone number'
      return
    }
    
    // Password validation
    if (fieldRules.type === 'password' && value && !validatePassword(value)) {
      errors[field] = fieldRules.message || 'Password must be at least 8 characters with uppercase, lowercase, and number'
      return
    }
    
    // Min length validation
    if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
      errors[field] = fieldRules.message || `${field} must be at least ${fieldRules.minLength} characters`
      return
    }
    
    // Max length validation
    if (fieldRules.maxLength && value && value.length > fieldRules.maxLength) {
      errors[field] = fieldRules.message || `${field} must not exceed ${fieldRules.maxLength} characters`
      return
    }
    
    // Custom validation
    if (fieldRules.custom && !fieldRules.custom(value)) {
      errors[field] = fieldRules.message || `${field} is invalid`
    }
  })
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Sanitize input for XSS prevention
 */
export const sanitizeInput = (input) => {
  const div = document.createElement('div')
  div.textContent = input
  return div.innerHTML
}

/**
 * Validate date is in future
 */
export const validateFutureDate = (date) => {
  return new Date(date) > new Date()
}

/**
 * Validate date is at least N days from now
 */
export const validateMinDaysFromNow = (date, minDays = 1) => {
  const minDate = new Date()
  minDate.setDate(minDate.getDate() + minDays)
  return new Date(date) >= minDate
}

/**
 * Get validation rules for common fields
 */
export const commonValidationRules = {
  email: {
    required: true,
    type: 'email',
    message: 'Please enter a valid email address',
  },
  password: {
    required: true,
    type: 'password',
    message: 'Password must be at least 8 characters with uppercase, lowercase, and number',
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    message: 'Name must be between 2 and 50 characters',
  },
  phone: {
    required: true,
    type: 'phone',
    message: 'Please enter a valid phone number',
  },
  address: {
    required: true,
    minLength: 5,
    maxLength: 200,
    message: 'Address must be between 5 and 200 characters',
  },
}
