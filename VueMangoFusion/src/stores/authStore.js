import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import authService from '@/services/authService'
import router from '@/router/routes'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { useSwal } from '@/composables/swal'
import Cookies from 'js-cookie'
export const useAuthStore = defineStore('authStore', () => {
  //state
  const user = reactive({
    email: '',
    password: '',
    name: '',
    id: '',
  })

  const isAuthenticated = ref(false)

  //getter
  const getUserInfo = computed(() => {
    return isAuthenticated.value ? user : null
  })

  const isAdmin = computed(() => {
    return isAuthenticated.value && user.role === 'Admin'
  })

  function decodeToken(token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return {
      email: payload.email,
      role: payload.role,
      name: payload.fullname,
      id: payload.id,
    }
  }

  //actions

  function initialize() {
    try {
      const token = Cookies.get('token_mango')
      if (token) {
        const userData = decodeToken(token)
        if (userData) {
          Object.assign(user, userData)
          isAuthenticated.value = true
        } else {
          clearAuthData()
        }
      } else {
        clearAuthData()
      }
    } catch (err) {
      console.error('Error initializting auth store', err)
      clearAuthData()
    }
  }

  async function signUp(userData) {
    try {
      await authService.signUp(userData)
      const { showSuccess } = useSwal()
      showSuccess('Registeration Successful')
      router.push({ name: APP_ROUTE_NAMES.SIGN_IN })
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.errorMessages?.join('--') || 'Registeration Failed',
      }
    }
  }

  async function signIn(formObj) {
    try {
      const { token, user: userData } = await authService.signIn(formObj)
      Object.assign(user, userData)
      isAuthenticated.value = true

      Cookies.set('token_mango', token, { expires: 7 })

      router.push('/')
      //const { showSuccess } = useSwal()
      //showSuccess('Registeration Successful')
      //router.push({ name: APP_ROUTE_NAMES.SIGN_IN })
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.errorMessages?.join('--') || 'Login Failed',
      }
    }
  }

  function clearAuthData() {
    Object.assign(user, {
      email: '',
      role: '',
      name: '',
      id: '',
    })
    isAuthenticated.value = false
    Cookies.remove('token_mango')
  }

  function signOut() {
    clearAuthData()
    router.push({ name: APP_ROUTE_NAMES.HOME })
  }

  return {
    user,
    isAuthenticated,
    getUserInfo,
    isAdmin,
    signUp,
    signIn,
    initialize,
    signOut,
  }
})
