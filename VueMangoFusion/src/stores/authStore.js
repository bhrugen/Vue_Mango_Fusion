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
      user.isLoggedIn = true
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

  return {
    user,
    isAuthenticated,
    getUserInfo,
    signUp,
    signIn,
  }
})
