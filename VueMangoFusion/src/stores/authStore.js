import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import authService from '@/services/authService'
import router from '@/router/routes'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'

export const useAuthStore = defineStore('authStore', () => {
  //state
  const user = reactive({
    email: '',
    password: '',
    name: '',
    id: '',
    isLoggedIn: false,
  })

  const isAuthenticated = ref(false)

  //getter
  const getUserInfo = computed(() => {
    return isAuthenticated.value ? user : null
  })

  //actions
  async function signUp(userData) {
    try {
      await authService.signUp(userData)
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.errorMessages?.join('--') || 'Registeration Failed',
      }
    }
  }

  return {
    user,
    isAuthenticated,
    getUserInfo,
    signUp,
  }
})
