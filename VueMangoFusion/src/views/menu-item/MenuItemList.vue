<template>
  <div class="container px-3">
    <div v-if="loading" class="d-flex justify-content-center align-items-center vh-100">
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else>
      <div>
        <div
          class="card-header d-flex flex-column flex-md-row justify-content-between align-items-md-center p-3"
        >
          <div>
            <h2 class="h5 text-success">Menu Items</h2>
            <p class="mb-0 text-muted small">Manage your restaurant's offerings</p>
          </div>
          <button
            class="btn btn-success btn-sm gap-2 rounded-1 px-4 py-2"
            @click="router.push({ name: APP_ROUTE_NAMES.CREATE_MENU_ITEM })"
          >
            <i class="bi bi-plus-square"></i> &nbsp;
            <span>Add Item</span>
          </button>
        </div>
        <div class="card-body p-3">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th class="ps-3 small text-muted">Item</th>
                  <th class="small text-muted">Category</th>
                  <th class="small text-muted">Price</th>
                  <th class="small text-muted">Tag</th>
                  <th class="pe-3 text-end small text-muted">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="menuItem in menuItems" :key="menuItem.id">
                  <td class="ps-3">
                    <div class="d-flex align-items-center">
                      <img
                        :src="CONFIG_IMAGE_URL + menuItem.image"
                        alt="Item"
                        class="rounded object-fit-cover me-2"
                        style="width: 50px; height: 50px"
                      />
                      <div>
                        <div class="fw-semibold small">{{ menuItem.name }}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-success bg-opacity-10 text-success small">
                      {{ menuItem.category }}
                    </span>
                  </td>
                  <td class="fw-semibold small">${{ menuItem.price.toFixed(2) }}</td>
                  <td>
                    <span class="badge bg-info bg-opacity-10 text-info small">
                      {{ menuItem.specialTag }}
                    </span>
                  </td>
                  <td class="pe-3 text-end">
                    <div class="d-flex gap-2 justify-content-end">
                      <button
                        class="btn btn-sm btn-outline-success"
                        @click="
                          router.push({
                            name: APP_ROUTE_NAMES.EDIT_MENU_ITEM,
                            params: { id: menuItem.id },
                          })
                        "
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-outline-danger"
                        @click="handleMenuItemDelete(menuItem.id)"
                      >
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import menuitemService from '@/services/menuItemService.js'
import { ref, onMounted, reactive } from 'vue'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { CONFIG_IMAGE_URL } from '@/constants/config'
import { useSwal } from '@/composables/swal'
import { useRouter } from 'vue-router'
const { showConfirm, showError, showSuccess } = useSwal()
const menuItems = reactive([])
const loading = ref(false)
const router = useRouter()
const fetchMenuItems = async () => {
  menuItems.length = 0
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

const handleMenuItemDelete = async (id) => {
  try {
    const confirmResult = await showConfirm('Are you sure you want to delete this MenuItem?')
    console.log(confirmResult)
    if (confirmResult.isConfirmed) {
      loading.value = true
      await menuitemService.deleteMenuItem(id)
      showSuccess('Menu Item delete sccucessfully')
      fetchMenuItems()
    }
  } catch (error) {
    console.log('Error deleting menu item:', error)
  } finally {
    loading.value = false
  }
}
</script>
