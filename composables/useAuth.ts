import { ref, computed } from 'vue'
import { getCurrentUser, signOut, fetchAuthSession } from 'aws-amplify/auth'

export const useAuth = () => {
  const user = ref<any>(null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!user.value)

  const checkAuth = async () => {
    try {
      loading.value = true
      const currentUser = await getCurrentUser()
      user.value = currentUser
      return true
    } catch (error) {
      user.value = null
      return false
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await signOut()
      user.value = null
      navigateTo('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const getUserAttributes = async () => {
    try {
      const session = await fetchAuthSession()
      return session
    } catch (error) {
      console.error('Error fetching user attributes:', error)
      return null
    }
  }

  return {
    user,
    loading,
    isAuthenticated,
    checkAuth,
    logout,
    getUserAttributes,
  }
}

