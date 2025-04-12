import api from '@/services/api'

export default {
  async getMenuItems() {
    try {
      const response = await api.get('/menuItem')

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error('Failed to fetch menu items')
      }
    } catch (error) {
      console.error('Error fetching menu items:', error)
      throw error
    }
  },
  async createMenuItem(data) {
    try {
      const response = await api.post('/menuItem', data)

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error('Failed to create menu items')
      }
    } catch (error) {
      console.error('Error creating menu items:', error)
      throw error
    }
  },
}
