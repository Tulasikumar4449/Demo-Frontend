import { useState, useCallback, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { authService } from '../services'
import { useLocalStorage } from './index'

/**
 * Hook for authentication management
 */
export const useAuth = () => {
  const { user, navigate, showToast } = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [authToken, setAuthToken] = useLocalStorage('authToken', null)

  const login = useCallback(async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.login(email, password)
      if (response.success) {
        setAuthToken(response.data.token)
        // Update user in context would happen here
        showToast('Login successful', 'success')
        navigate('home', response.data.user)
        return response.data
      } else {
        const err = new Error(response.message)
        setError(err)
        showToast(response.message, 'error')
        throw err
      }
    } catch (err) {
      setError(err)
      showToast(err.message || 'Login failed', 'error')
      throw err
    } finally {
      setLoading(false)
    }
  }, [setAuthToken, navigate, showToast])

  const register = useCallback(async (userData) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.register(userData)
      if (response.success) {
        setAuthToken(response.data.token)
        showToast('Registration successful', 'success')
        navigate('home', response.data.user)
        return response.data
      } else {
        const err = new Error(response.message)
        setError(err)
        showToast(response.message, 'error')
        throw err
      }
    } catch (err) {
      setError(err)
      showToast(err.message || 'Registration failed', 'error')
      throw err
    } finally {
      setLoading(false)
    }
  }, [setAuthToken, navigate, showToast])

  const logout = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      await authService.logout()
      setAuthToken(null)
      showToast('Logged out successfully', 'success')
      navigate('landing')
    } catch (err) {
      setError(err)
      showToast('Logout failed', 'error')
    } finally {
      setLoading(false)
    }
  }, [setAuthToken, navigate, showToast])

  const verifyToken = useCallback(async () => {
    if (!authToken) return false
    try {
      const response = await authService.verifyToken(authToken)
      return response.success
    } catch (err) {
      setAuthToken(null)
      return false
    }
  }, [authToken, setAuthToken])

  const isAuthenticated = !!authToken && !!user

  return {
    user,
    authToken,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    verifyToken,
  }
}
