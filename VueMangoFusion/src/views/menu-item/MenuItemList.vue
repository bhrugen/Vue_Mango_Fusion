<template>Menu Item List {{ menuItems }}</template>
<script setup>
import menuitemService from '@/services/menuitemService.js'
import { ref, onMounted, reactive } from 'vue'

const menuItems = reactive([])
const loading = ref(false)

const fetchMenuItems = async () => {
  loading.value = true
  try {
    var result = await menuitemService.getMenuItems()
    menuItems.push(...result)
  } catch (error) {
    console.log('Error fetch menu items:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchMenuItems)
</script>
