import axios from 'axios'
import { CONFIG_API_URL } from '@/constants/config'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: CONFIG_API_URL,
})

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token_mango')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

export default api
