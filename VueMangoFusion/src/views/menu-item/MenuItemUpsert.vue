<template>
  <div class="d-flex justify-content-center align-items-center" v-if="loading">
    <div class="spinner-grow text-success" style="width: 2.5rem; height: 2.5rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div class="container" v-else>
    <div class="mx-auto">
      <div class="mb-4 border-bottom d-flex justify-content-between align-items-center py-3">
        <h3 class="fw-semibold text-success">Add Menu</h3>
        <div class="d-flex gap-3">
          <button
            type="submit"
            form="menuForm"
            class="btn btn-success btn-sm gap-2 rounded-1 px-4 py-2"
            :disabled="isProcessing"
          >
            <span v-if="isProcessing" class="spinner-border spinner-border-sm me-2"></span>
            {{ menuItemIdForUpdate ? 'Update' : 'Create' }} Item
          </button>

          <button
            type="button"
            class="btn btn-outline border btn-sm gap-2 rounded-1 px-4 py-2"
            @click="router.push({ name: APP_ROUTE_NAMES.MENU_ITEM_LIST })"
          >
            Cancel
          </button>
        </div>
      </div>
      <div class="alert alert-danger pb-0" v-if="errorList.length > 0">
        Please fix the following errors:
        <ul>
          <li v-for="error in errorList" :key="error">{{ error }}</li>
        </ul>
      </div>
      <form
        enctype="multipart/form-data"
        class="needs-validation"
        id="menuForm"
        @submit="onFormSubmit"
      >
        <div class="row g-4">
          <div class="col-lg-7">
            <div class="d-flex flex-column g-12">
              <div class="mb-3">
                <label for="name" class="form-label">Item Name</label>
                <input
                  id="name"
                  type="text"
                  v-model="menuItemObj.name"
                  class="form-control"
                  placeholder="Enter item name"
                />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  id="description"
                  class="form-control"
                  placeholder="Describe the menu item..."
                  rows="3"
                  v-model="menuItemObj.description"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="specialTag" class="form-label">Special Tag (Optional)</label>
                <input
                  id="specialTag"
                  type="text"
                  class="form-control"
                  placeholder="e.g., Chef's Special"
                  v-model="menuItemObj.specialTag"
                />
              </div>

              <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <select id="category" class="form-select" v-model="menuItemObj.category">
                  <option value="" selected disabled>--Select a category--</option>
                  <option v-for="category in CATEGROIES" :key="category">{{ category }}</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input id="price" class="form-control" v-model="menuItemObj.price" />
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div>
              <img
                v-if="menuItemIdForUpdate > 0 || newUploadedImage_base64 != ''"
                :src="
                  newUploadedImage_base64 != ''
                    ? newUploadedImage_base64
                    : CONFIG_IMAGE_URL + menuItemObj.image
                "
                class="img-fluid w-100 mb-3 rounded"
                style="aspect-ratio: 1/1; object-fit: cover"
              />
              <div class="mb-3">
                <label for="image" class="form-label">Item Image</label>
                <input
                  id="image"
                  type="file"
                  class="form-control"
                  accept="image/*"
                  @change="handleFileChange"
                />
                <div class="form-text">Leave empty to keep existing image</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { CONFIG_IMAGE_URL } from '@/constants/config'
import { CATEGROIES } from '@/constants/constants'
import menuitemService from '@/services/menuItemService'
import { useSwal } from '@/composables/swal'
const { showError, showSuccess, showConfirm } = useSwal()
const router = new useRouter()
const route = new useRoute()
const loading = ref(false)
const isProcessing = ref(false)
const errorList = reactive([])
const newUploadedImage = ref(null)
const newUploadedImage_base64 = ref('')
const menuItemIdForUpdate = route.params.id
const menuItemObj = reactive({
  name: '',
  description: '',
  specialTag: '',
  category: '',
  price: 0.0,
  image: '',
})
const formData = new FormData()

onMounted(async () => {
  if (!menuItemIdForUpdate) return
  loading.value = true
  try {
    const result = await menuitemService.getMenuItemById(menuItemIdForUpdate)
    Object.assign(menuItemObj, result)
  } catch (err) {
    console.log('Error while fetching menu item', err)
  } finally {
    loading.value = false
  }
})

const handleFileChange = (event) => {
  isProcessing.value = true
  const file = event.target.files[0]
  newUploadedImage.value = file
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      newUploadedImage_base64.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
  isProcessing.value = false
}

const onFormSubmit = async (event) => {
  event.preventDefault()
  isProcessing.value = true
  errorList.length = 0 //clear it

  //validations
  if (menuItemObj.name.length < 3) {
    errorList.push('Name should be at least 3 char long.')
  }
  if (menuItemObj.price <= 0) {
    errorList.push('Price should be greater than 0.')
  }
  if (menuItemObj.category === '') {
    errorList.push('Category must be selected.')
  }
  if (newUploadedImage.value) {
    // add to formdata
    formData.append('File', newUploadedImage.value)
  } else {
    if (menuItemIdForUpdate == 0) {
      errorList.push('Image must be uploaded.')
    }
  }
  if (!errorList.length) {
    //no errors
    Object.entries(menuItemObj).forEach(([key, value]) => {
      formData.append(key, value)
    })

    if (menuItemIdForUpdate == 0) {
      menuitemService
        .createMenuItem(formData)
        .then(() => {
          showSuccess('Menu Item created successfully.')
          router.push({ name: APP_ROUTE_NAMES.MENU_ITEM_LIST })
        })
        .catch((err) => {
          isProcessing.value = false
          showError('Menu Item create failed.')
          console.log('Create Failed', err)
        })
    } else {
      //update
      menuitemService
        .updateMenuItem(menuItemIdForUpdate, formData)
        .then(() => {
          showSuccess('Menu Item updated successfully.')
          router.push({ name: APP_ROUTE_NAMES.MENU_ITEM_LIST })
        })
        .catch((err) => {
          isProcessing.value = false
          showError('Menu Item update failed.')
          console.log('update Failed', err)
        })
    }
    console.log(menuItemObj)
  }
  isProcessing.value = false
}
</script>
