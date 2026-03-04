/**
 * Environment and Configuration Management
 * Centralized configuration for all environment variables
 */

export const config = {
  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
  },

  // App Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Home Repair',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    environment: import.meta.env.VITE_APP_ENV || 'development',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:5174',
  },

  // Feature Flags
  features: {
    useMockData: import.meta.env.VITE_ENABLE_MOCK_DATA === 'true',
    enableLogging: import.meta.env.VITE_ENABLE_LOGGING === 'true',
  },

  // Third-party Services
  services: {
    stripe: {
      publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
    },
    googleMaps: {
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    },
    googleOAuth: {
      clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID || '',
    },
  },

  // URLs
  urls: {
    privacyPolicy: import.meta.env.VITE_PRIVACY_POLICY_URL || '#',
    termsOfService: import.meta.env.VITE_TERMS_OF_SERVICE_URL || '#',
  },

  // Derived values
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
  isStaging: import.meta.env.VITE_APP_ENV === 'staging',
}

/**
 * Logger utility
 */
export const logger = {
  log: (...args) => {
    if (config.features.enableLogging) {
      console.log('[Home Repair]', ...args)
    }
  },
  error: (...args) => {
    console.error('[Home Repair Error]', ...args)
  },
  warn: (...args) => {
    if (config.features.enableLogging) {
      console.warn('[Home Repair Warning]', ...args)
    }
  },
  info: (...args) => {
    if (config.features.enableLogging) {
      console.info('[Home Repair Info]', ...args)
    }
  },
}

export default config
