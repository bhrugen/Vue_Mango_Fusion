<template>
  <div class="col-12 col-sm-6 col-lg-4">
    <div class="card h-100 border-0 shadow-sm rounded-4">
      <div class="position-relative">
        <img
          :src="CONFIG_IMAGE_URL + menuItem.image"
          class="card-img-top rounded-top-4 w-100 object-fit-cover"
          style="height: 200px"
        />
        <!-- View Details Button -->
        <div class="position-absolute top-0 end-0 m-2">
          <button
            class="btn btn-light btn-sm rounded shadow-sm d-flex align-items-center gap-2 backdrop-blur-sm bg-opacity-75"
            title="View Details"
            style="backdrop-filter: blur(4px)"
            @click="emit('showDetails', menuItem)"
          >
            <i class="bi bi-eye text-success"></i>
            <span class="text-success small">Details</span>
          </button>
        </div>
      </div>
      <div class="card-body p-3 p-sm-4">
        <!-- Title and Price -->
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h5 class="card-title mb-0 small fw-semibold">{{ menuItem.name }}</h5>
          <div class="d-flex align-items-center ms-2">
            <span class="fw-semibold text-success">${{ menuItem.price.toFixed(2) }}</span>
          </div>
        </div>

        <!-- Description -->
        <p class="card-text text-body-secondary small mb-2 text-truncate d-none d-sm-block">
          {{ menuItem.description }}
        </p>

        <div class="mb-2">
          <Rating :rating="menuItem.rating" :item-id="menuItem.id" :readonly="true"></Rating>
        </div>
        <!-- Tags -->
        <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
          <div
            class="d-flex align-items-center btn btn-outline-secondary disabled px-2 py-1 small"
            v-if="menuItem.specialTag"
          >
            <i class="bi bi-star"></i>&nbsp;
            <span class="small text-body-secondary"> {{ menuItem.specialTag }}</span>
          </div>
          <div class="d-flex align-items-center btn btn-outline-secondary disabled px-2 py-1 small">
            <i class="bi bi-tag-fill"></i> &nbsp;
            <span class="small text-body-secondary text-uppercase">{{ menuItem.category }}</span>
          </div>
        </div>

        <!-- Cart Controls -->
        <div class="d-flex align-items-center justify-content-between">
          <button
            class="btn btn-success w-100 rounded py-2"
            @click="addToCart"
            :disabled="isProcessing"
            v-if="!isInCart"
          >
            <span v-if="isProcessing" class="spinner-border spinner-border-sm me-2"></span>
            <span class="small"><i class="bi bi-cart-plus"></i> &nbsp; Add to Cart</span>
          </button>

          <div class="input-group input-group-sm w-100" v-else>
            <button class="btn btn-outline-secondary" type="button" @click="decreaseQuantity">
              <i class="bi bi-dash"></i>
            </button>
            <input
              type="text"
              class="form-control text-center px-2"
              readonly
              :value="itemQuantity"
              style="max-width: 50px"
            />
            <button class="btn btn-outline-secondary" type="button" @click="increaseQuantity">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CONFIG_IMAGE_URL } from '@/constants/config'
import { useCartStore } from '@/stores/cartStore'
import { computed, ref } from 'vue'
import Rating from '../shared/Rating.vue'
const cartStore = useCartStore()
const isProcessing = ref(false)
const emit = defineEmits(['showDetails'])
const props = defineProps({
  menuItem: Object,
})

const cartItem = computed(() => cartStore.cartItems.find((item) => item.id === props.menuItem.id))
const isInCart = computed(() => !!cartItem.value)
const itemQuantity = computed(() => cartItem.value?.quantity || 0)

const addToCart = () => {
  isProcessing.value = true
  setTimeout(() => {
    cartStore.addToCart(props.menuItem)
    isProcessing.value = false
  }, 300)
}

const increaseQuantity = () => {
  cartStore.updateQuantity(props.menuItem.id, itemQuantity.value + 1)
}
const decreaseQuantity = () => {
  if (itemQuantity.value > 1) {
    cartStore.updateQuantity(props.menuItem.id, itemQuantity.value - 1)
  } else {
    cartStore.removeFromCart(props.menuItem.id)
  }
}
</script>
