<template>
  <div class="container py-5">
    <div class="d-flex align-items-center mb-4">
      <i class="bi bi-bag" style="font-size: 2.5rem"></i> &nbsp;
      <h1 class="mb-0">My Orders</h1>
    </div>

    <div class="text-center py-5">
      <p class="text-body-secondary">Loading your orders...</p>
    </div>

    <div class="text-center py-5">
      <div class="bg-body-tertiary rounded-4 p-5">
        <i class="bi bi-bag" style="font-size: 2.5rem"></i>
        <h3 class="mb-3">No Orders Yet</h3>
        <p class="text-body-secondary mb-4">
          Start your culinary journey by exploring our delicious menu!
        </p>
        <a href="#" class="btn btn-success btn-lg">
          <i class="bi bi-menu-button-wide"></i>
          Browse Menu
        </a>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4">
        <!-- Order Card -->
        <OrderListCard></OrderListCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import OrderListCard from '@/components/card/OrderListCard.vue'
</script>
