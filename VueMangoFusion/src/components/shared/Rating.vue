<template>
  <div class="d-flex align-items-center">
    <small class="text-secondary me-2">Rate this item:</small>
    <div class="d-flex">
      <div v-for="star in 5" :key="star" class="star-rating me-1">
        <i class="bi-star text-warning" width="16"></i>
      </div>
    </div>

    <div class="spinner-border spinner-border-sm text-warning ms-2" role="status">
      <span class="visually-hidden">Rating...</span>
    </div>
    <div class="text-success ms-2">
      <i class="bi bi-check-circle-fill"></i>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.star-rating {
  transition: transform 0.1s ease;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer:hover {
  transform: scale(1.2);
}
</style>
