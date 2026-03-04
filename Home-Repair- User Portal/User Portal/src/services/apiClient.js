// API Configuration
import { config } from '../config'

const API_BASE_URL = config.api.baseUrl
const API_TIMEOUT = config.api.timeout

class APIClient {
  constructor(baseURL = API_BASE_URL, timeout = API_TIMEOUT) {
    this.baseURL = baseURL
    this.timeout = timeout
    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  /**
   * Set authorization token
   */
  setAuthToken(token) {
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`
    } else {
      delete this.headers['Authorization']
    }
  }

  /**
   * Get authorization token from localStorage
   */
  getAuthToken() {
    return localStorage.getItem('authToken')
  }

  /**
   * Build full URL
   */
  buildURL(endpoint) {
    return `${this.baseURL}${endpoint}`
  }

  /**
   * Handle API errors
   */
  handleError(error) {
    if (error.response) {
      // Server responded with error status
      const status = error.response.status
      const message = error.response.data?.message || 'An error occurred'
      
      if (status === 401) {
        // Unauthorized - clear token and redirect to login
        localStorage.removeItem('authToken')
        window.location.href = '/login'
      }
      
      return {
        status,
        message,
        data: error.response.data,
      }
    } else if (error.request) {
      // Request made but no response
      return {
        status: 0,
        message: 'No response from server',
        data: null,
      }
    }
    
    // Error in request setup
    return {
      status: -1,
      message: error.message || 'Network error',
      data: null,
    }
  }

  /**
   * Make API request
   */
  async request(method, endpoint, data = null, config = {}) {
    try {
      const url = this.buildURL(endpoint)
      const options = {
        method,
        headers: { ...this.headers, ...config.headers },
        signal: AbortSignal.timeout(this.timeout),
      }

      if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        options.body = JSON.stringify(data)
      }

      const response = await fetch(url, options)
      
      // Handle response
      let responseData = null
      try {
        responseData = await response.json()
      } catch {
        responseData = null
      }

      if (!response.ok) {
        throw {
          response: {
            status: response.status,
            data: responseData || { message: response.statusText },
          },
        }
      }

      return {
        success: true,
        status: response.status,
        data: responseData,
      }
    } catch (error) {
      const errorResponse = this.handleError(error)
      return {
        success: false,
        ...errorResponse,
      }
    }
  }

  /**
   * GET request
   */
  async get(endpoint, config = {}) {
    return this.request('GET', endpoint, null, config)
  }

  /**
   * POST request
   */
  async post(endpoint, data, config = {}) {
    return this.request('POST', endpoint, data, config)
  }

  /**
   * PUT request
   */
  async put(endpoint, data, config = {}) {
    return this.request('PUT', endpoint, data, config)
  }

  /**
   * PATCH request
   */
  async patch(endpoint, data, config = {}) {
    return this.request('PATCH', endpoint, data, config)
  }

  /**
   * DELETE request
   */
  async delete(endpoint, config = {}) {
    return this.request('DELETE', endpoint, null, config)
  }
}

// Export singleton instance
export const apiClient = new APIClient()

// Re-initialize auth token on load
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('authToken')
  if (token) {
    apiClient.setAuthToken(token)
  }
}
