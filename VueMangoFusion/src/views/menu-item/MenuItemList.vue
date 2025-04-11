<template>Menu Item List {{ menuItems }}</template>
<script setup>
import menuitemService from '@/services/menuitemService.js'
import { ref, onMounted } from 'vue'

const menuItems = ref([])
const loading = ref(false)

const fetchMenuItems = async () => {
  loading.value = true
  try {
    menuItems.value = await menuitemService.getMenuItems()
    console.log(menuItems.value)
  } catch (error) {
    console.log('Error fetch menu items:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchMenuItems)
</script>
