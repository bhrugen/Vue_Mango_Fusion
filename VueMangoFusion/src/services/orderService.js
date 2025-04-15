import api from '@/services/api'

export default {
  async getOrders(userId = null) {
    try {
      const response = await api.get('/OrderHeader', {
        params: {
          userId: userId,
        },
      })

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error('Failed to fetch Orders')
      }
    } catch (error) {
      console.error('Error fetching Orders:', error)
      throw error
    }
  },
  async getOrderById(id) {
    try {
      const response = await api.get(`/OrderHeader/${id}`)

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error('Failed to fetch order')
      }
    } catch (error) {
      console.error('Error fetching order:', error)
      throw error
    }
  },
  async createOrder(orderData) {
    try {
      const response = await api.post('/OrderHeader', {
        pickUpName: orderData.pickUpName,
        pickUpPhoneNumber: orderData.pickUpPhoneNumber,
        pickUpEmail: orderData.pickUpEmail,
        applicationUserId: orderData.applicationUserId,
        orderTotal: orderData.orderTotal,
        totalItem: orderData.totalItem,
        orderDetailsDTO: orderData.orderDetailsDTO,
      })

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error('Failed to create order')
      }
    } catch (error) {
      console.error('Error creating order:', error)
      throw error
    }
  },
  async updateOrder(id, orderData) {
    try {
      const response = await api.put(`/OrderHeader/${id}`, {
        orderHeaderId: id,
        status: orderData.status,
      })

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error('Failed to update order')
      }
    } catch (error) {
      console.error('Error updating order:', error)
      throw error
    }
  },
  async submitRating(orderDetailsId, rating) {
    try {
      const response = await api.put(`/OrderDetails/${orderDetailsId}`, {
        orderDetailId: orderDetailsId,
        rating: rating,
      })

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error('Failed to update rating')
      }
    } catch (error) {
      console.error('Error updating rating:', error)
      throw error
    }
  },
}
