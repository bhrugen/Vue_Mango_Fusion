<template>
  <div class="card h-100 border-0 shadow-sm hover-shadow transition-all">
    <div class="card-header border-bottom-0 pt-4">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <i class="bi bi-receipt-cutoff text-success pe-2" style="font-size: 2rem"></i>
          <h5 class="card-title mb-0">Order # {{ order.orderHeaderId }}</h5>
        </div>
        <span class="bg-danger-subtle text-danger-emphasis rounded p-2"> {{ order.status }} </span>
      </div>
    </div>
    <div class="card-body">
      <div class="mb-4">
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-person-square text-success pe-2" style="font-size: 1.5rem"></i>
          <div>
            <h6 class="mb-0">{{ order.pickUpName }}</h6>
            <small class="text-body-secondary">{{ order.pickUpPhoneNumber }}</small>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-envelope text-success pe-2"></i>
          <span>{{ order.pickUpEmail }}</span>
        </div>
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-bag text-success pe-2"></i>
          <span> {{ order.totalItem }}</span>
        </div>
        <div class="d-flex align-items-center">
          <i class="bi bi-cash-coin text-success pe-2"></i
          ><span class="fw-bold">${{ order.orderTotal }}</span>
        </div>
      </div>

      <div class="bg-body-tertiary rounded-3 p-3">
        <div class="d-flex align-items-center mb-3 border-bottom">
          <i class="bi bi-card-list text-success pe-2"></i>
          <h6 class="mb-0">Order Items</h6>
        </div>
        <div
          class="mb-3 pb-2 border-bottom"
          v-for="item in order.orderDetails"
          :key="item.orderDetailId"
        >
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <span class="text-truncate me-3">{{ item.menuItem.name }}</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="badge bg-success-subtle text-success me-2">{{ item.quantity }} x</span>
              <span class="text-body-secondary">${{ item.price }}</span>
            </div>
          </div>
          <Rating @rate="onRateItem" :rating="item.rating" :item-id="item.orderDetailId"></Rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Rating from '../shared/Rating.vue'

const emit = defineEmits(['rate'])
const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
})

const onRateItem = (itemId, rating) => {
  console.log('OrderLIstCard', itemId)
  emit('rate', itemId, rating)
}
</script>
