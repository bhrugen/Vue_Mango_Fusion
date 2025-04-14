import { useAuthStore } from '@/stores/authStore'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'

export const requireAuth = () => {
  const authStore = useAuthStore()

  if (authStore.isAuthenticated) {
    return true
  } else {
    return { name: APP_ROUTE_NAMES.SIGN_IN }
  }
}

export const requireAdmin = () => {
  const authStore = useAuthStore()

  if (authStore.isAuthenticated) {
    if (authStore.isAdmin) {
      return true
    } else {
      return { name: APP_ROUTE_NAMES.ACCESS_DENIED }
    }
  } else {
    return { name: APP_ROUTE_NAMES.SIGN_IN }
  }
}
