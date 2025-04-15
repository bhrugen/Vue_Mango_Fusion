<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card shadow d-flex flex-row">
          <img
            src="@/assets/hero.jpg"
            class="card-img-left img-fluid"
            style="width: 50%; object-fit: cover"
          />
          <div class="card-body p-5" style="width: 50%">
            <h2 class="text-center mb-4">Sign In</h2>
            <form @submit.prevent="onSignInSubmit">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="formObj.email" class="form-control" id="email" />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  v-model="formObj.password"
                  class="form-control"
                  id="password"
                />
              </div>

              <div class="alert alert-danger" v-if="errorList.length > 0">
                <span class="d-block" v-for="error in errorList" :key="error"> {{ error }} </span>
              </div>

              <button :disabled="isLoading" type="submit" class="btn btn-secondary w-100">
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                Login
              </button>
            </form>

            <div class="text-center mt-3">
              <router-link :to="{ name: APP_ROUTE_NAMES.SIGN_UP }"
                >Don't have an account? Sign up</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ROLES } from '@/constants/constants'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()
const formObj = reactive({
  email: '',
  password: '',
})

const isLoading = ref(false)

const errorList = reactive([])

const onSignInSubmit = async () => {
  isLoading.value = true
  errorList.length = 0
  console.log(formObj)
  if (formObj.email === undefined || formObj.email.length === 0) {
    errorList.push('Email is required.')
  }

  if (formObj.password === undefined || formObj.password.length === 0) {
    errorList.push('Password is required.')
  }
  if (errorList.length > 0) {
    isLoading.value = false
    return
  }

  try {
    const response = await authStore.signIn(formObj)
    console.log(response)
    if (response.success) {
      console.log('success')
    } else {
      if (response.message !== undefined) {
        response.message.split('--').forEach((error) => {
          errorList.push(error)
        })
      }
    }
  } catch (err) {
    errorList.push(err)
  } finally {
    isLoading.value = false
  }
}
</script>
