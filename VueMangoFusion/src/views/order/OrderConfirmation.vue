<template>
  <div class="container py-5">
    <div class="card shadow-sm mb-4">
      <div class="card-header bg-success text-white">
        <h4 class="mb-0">Order Summary</h4>
      </div>
      <div class="card-body text-center">
        <div class="text-center my-2">
          <div class="alert alert-success d-inline-block px-5 py-3 fs-4" role="alert">
            <strong>Thank you!</strong> Your order has been confirmed.
          </div>
        </div>
        <p><strong>Order Number:</strong> #{{ orderId }}</p>
        <p><strong>Date: </strong>{{ new Date().toLocaleDateString() }}</p>
        <img
          src="/src/assets/confirm.jpg"
          alt="Order Confirmation"
          style="width: 500px; object-fit: cover"
          class="img-fluid rounded-3 mb-3"
        />
      </div>
      <p class="px-3 text-center">
        We are excited to prepare your order! Please allow us at least 30 minutes to ensure
        everything is freshly made and ready for pickup.
      </p>
    </div>

    <div class="text-center">
      <a href="/" class="btn btn-success px-4">Back to Home</a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const orderId = ref(route.params.orderId)
</script>
