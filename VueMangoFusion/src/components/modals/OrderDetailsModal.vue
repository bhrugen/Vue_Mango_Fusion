<template>
  <div
    v-if="order"
    class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-black bg-opacity-50"
    style="z-index: 1050"
  >
    <div
      class="bg-body p-4 rounded-4 shadow-lg mx-3 overflow-auto"
      style="max-width: 800px; width: 100%; max-height: 90vh"
    >
      <div class="modal-content border-0 rounded-4 bg-body">
        <div class="sticky-top bg-body p-3 p-sm-4 border-bottom">
          <div
            class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-2"
          >
            <div class="d-flex align-items-center">
              <i class="bi bi-receipt-cutoff pe-1 text-success"></i>
              <h5 class="mb-0 fs-5 text-success">Order #{{ order.orderHeaderId }}</h5>
            </div>
            <button
              @click="closeModal"
              class="btn-close ms-auto ms-sm-0"
              aria-label="Close modal"
            ></button>
          </div>

          <div
            class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2"
          >
            <div class="d-flex align-items-center">
              <i class="bi bi-calendar pe-1"></i>
              <span class="text-body-secondary small">{{ formatDate(order.orderDate) }}</span>
            </div>
            <span
              class="badge rounded-pill px-3 py-2"
              :class="{
                'bg-warning-subtle text-warning-emphasis': order.status === ORDER_STATUS_CONFIRMED,
                'bg-info-subtle text-info-emphasis': order.status === ORDER_STATUS_READY_FOR_PICKUP,
                'bg-success-subtle text-success-emphasis': order.status === ORDER_STATUS_COMPLETED,
                'bg-danger-subtle text-danger-emphasis': order.status === ORDER_STATUS_CANCELLED,
              }"
            >
              {{ order.status }}
            </span>
          </div>
        </div>

        <div class="modal-body-scrollable p-3 p-sm-4" style="max-height: 70vh; overflow-y: auto">
          <div class="row g-3 g-md-4 mb-4">
            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-3">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-person-circle pe-1"></i>
                    <h6 class="card-title mb-0">Customer Information</h6>
                  </div>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-person-fill pe-1"></i>
                      <span class="small">{{ order.pickUpName }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="bi bi-telephone-fill pe-1"></i>
                      <span class="small">{{ order.pickUpPhoneNumber }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="bi bi-envelope pe-1"></i>
                      <span class="small text-break">{{ order.pickUpEmail }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-3">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-currency-dollar text-success me-2" width="20"></i>
                    <h6 class="card-title mb-0">Order Summary</h6>
                  </div>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="text-body-secondary small">Total Items</span>
                      <span class="fw-bold">{{ order.totalItem }}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="text-body-secondary small">Total Amount</span>
                      <span class="fw-bold text-success">${{ order.orderTotal.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Items -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-3">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-list-check text-success me-2" width="20"></i>
                <h6 class="card-title mb-0">Order Items</h6>
              </div>
              <div class="table-responsive">
                <template v-if="order.orderDetails?.length">
                  <div
                    v-for="item in order.orderDetails"
                    :key="item.orderDetailsId"
                    class="d-flex justify-content-between align-items-center py-2 border-bottom gap-3"
                  >
                    <div class="d-flex align-items-center flex-grow-1 min-width-0">
                      <i class="bi bi-dash"></i>
                      <span class="text-truncate small">{{ item.menuItem.name }}</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 flex-shrink-0">
                      <span class="badge bg-success-subtle text-success"
                        >{{ item.quantity }} x</span
                      >
                      <span class="text-body-secondary small">${{ item.price }} </span>
                    </div>
                  </div>
                </template>
                <div v-else class="text-center text-body-secondary py-3 small">
                  No items in this order
                </div>
              </div>
            </div>
          </div>

          <!-- Order Status -->
          <div class="card border-0 shadow-sm">
            <div class="card-body p-3">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-gear text-success me-2" width="20"></i>
                <h6 class="card-title mb-0">Order Status</h6>
              </div>

              <!-- Status Flow Buttons -->
              <div
                class="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-3"
              >
                <button
                  :class="[
                    'btn btn-success flex-fill',
                    order.status === ORDER_STATUS_CONFIRMED ? 'active' : '',
                    isStatusDisabled(ORDER_STATUS_COMPLETED) ? 'opacity-50' : '',
                  ]"
                  :disabled="isStatusDisabled(ORDER_STATUS_CONFIRMED)"
                >
                  <i class="bi bi-clock me-1"></i>
                  <span class="small">Confirmed</span>
                </button>

                <div class="d-none d-sm-block text-secondary">
                  <i class="bi bi-arrow-right"></i>
                </div>

                <button
                  :class="[
                    'btn btn-success flex-fill',
                    order.status === ORDER_STATUS_READY_FOR_PICKUP ? 'active' : '',
                    isStatusDisabled(ORDER_STATUS_READY_FOR_PICKUP) ? 'opacity-50' : '',
                  ]"
                  @click="updateStatus(ORDER_STATUS_READY_FOR_PICKUP)"
                  :disabled="isStatusDisabled(ORDER_STATUS_READY_FOR_PICKUP)"
                >
                  <i class="bi bi-gear me-1"></i>
                  <span class="small">Ready for Pickup</span>
                </button>

                <div class="d-none d-sm-block text-secondary">
                  <i class="bi bi-arrow-right"></i>
                </div>

                <button
                  :class="[
                    'btn btn-success flex-fill',
                    order.status === ORDER_STATUS_COMPLETED ? 'active' : '',
                    isStatusDisabled(ORDER_STATUS_COMPLETED) ? 'opacity-50' : '',
                  ]"
                  @click="updateStatus(ORDER_STATUS_COMPLETED)"
                  :disabled="isStatusDisabled(ORDER_STATUS_COMPLETED)"
                >
                  <i class="bi bi-check-circle me-1"></i>
                  <span class="small">Completed</span>
                </button>
              </div>

              <!-- Cancel Button -->
              <button
                class="btn btn-outline-danger w-100"
                @click="updateStatus(ORDER_STATUS_CANCELLED)"
                :disabled="isStatusDisabled(ORDER_STATUS_CANCELLED)"
              >
                <i class="bi bi-x-circle me-1"></i>
                <span class="small">Cancel Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import {
  ORDER_STATUS,
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_COMPLETED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_READY_FOR_PICKUP,
} from '@/constants/constants'
import orderService from '@/services/orderService'
import { useSwal } from '@/composables/swal'
const { showSuccess } = useSwal()
const props = defineProps({
  order: {
    type: Object,
    required: false,
    default: () => ({
      orderHeaderId: '',
      pickUpName: '',
      pickUpPhoneNumber: '',
      pickUpEmail: '',
      status: '',
      orderTotal: 0,
      orderDate: '',
      totalItem: 0,
      orderDetails: [],
    }),
  },
})
const emit = defineEmits(['close', 'status-updated'])
const closeModal = () => {
  emit('close')
}

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'

  const date = new Date(dateString)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const updateStatus = async (newStatus) => {
  try {
    await orderService.updateOrder(props.order.orderHeaderId, {
      orderHeaderId: props.order.orderHeaderId,
      status: newStatus,
    })

    showSuccess('Order updated successfully')
    closeModal()
    emit('status-updated')
  } catch (error) {
    console.error('Error updating status', error)
  }
}

const isStatusDisabled = (status) => {
  const statusOrder = [
    ORDER_STATUS_CONFIRMED,
    ORDER_STATUS_READY_FOR_PICKUP,
    ORDER_STATUS_COMPLETED,
    ORDER_STATUS_CANCELLED,
  ]

  const currentIndex = statusOrder.indexOf(props.order.status)
  const targetIndex = statusOrder.indexOf(status)

  if (targetIndex <= currentIndex) {
    return true
  }

  // Can't skip from Confirmed directly to Completed
  if (props.order.status === ORDER_STATUS_CONFIRMED && status === ORDER_STATUS_COMPLETED) {
    return true
  }

  //cannot cancel a completed order
  if (props.order.status === ORDER_STATUS_COMPLETED && status === ORDER_STATUS_CANCELLED) {
    return true
  }
  if (props.order.status === ORDER_STATUS_CANCELLED && status === ORDER_STATUS_CANCELLED) {
    return true
  }

  return false
}
</script>
