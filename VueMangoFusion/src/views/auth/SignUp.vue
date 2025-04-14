<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow">
          <div class="card-body p-4">
            <h2 class="text-center mb-4">Sign Up</h2>

            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" />
              </div>

              <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <select class="form-select" id="role">
                  <option v-for="role in ROLES" :key="role">{{ role }}</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>

              <div class="alert alert-danger" v-if="errorList.length > 0">
                <span class="d-block" v-for="error in errorList" :key="error"> {{ error }} </span>
              </div>

              <button :disabled="isLoading" type="submit" class="btn btn-secondary w-100">
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                Sign Up
              </button>
            </form>

            <div class="text-center mt-3">
              <router-link :to="{ name: APP_ROUTE_NAMES.SIGN_IN }"
                >Already have an account? Login</router-link
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
const formObj = reactive({
  name: '',
  email: '',
  password: '',
  role: 'Customer',
})

const isLoading = ref(false)

const errorList = reactive([])
</script>
