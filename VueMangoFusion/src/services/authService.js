import api from '@/services/api'

export default {
  async signUp(userData) {
    try {
      const response = await api.post('/auth/register', {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        role: userData.role,
      })
      console.log('Response', response.data)

      if (response.data.isSuccess) {
        return {
          success: true,
          message: 'Registration successful',
        }
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      console.error('Error in Registration:', error)
      throw error
    }
  },

  async signIn(userData) {
    try {
      const response = await api.post('/auth/login', {
        email: userData.email,
        password: userData.password,
      })

      if (response.data.isSuccess) {
        const { token, email } = response.data.result
        const payload = JSON.parse(atob(token.split('.')[1]))
        return {
          token,
          user: {
            email,
            role: payload.role,
            name: payload.fullname,
            id: payload.id,
          },
        }
      } else {
        throw new Error('Login failed')
      }
    } catch (error) {
      console.error('Error in Login:', error)
      throw error
    }
  },
}
