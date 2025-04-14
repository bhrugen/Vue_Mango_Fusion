<template>
  <div
    v-if="order"
    class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-black bg-opacity-50"
    style="z-index: 1050"
  >
    <div
      class="bg-body p-4 rounded-4 shadow-lg mx-3 overflow-auto"
      style="max-width: 800px; width: 100%; max-height: 90vh"
    >
      <div class="modal-content border-0 rounded-4 bg-body">
        <div class="sticky-top bg-body p-3 p-sm-4 border-bottom">
          <div
            class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-2"
          >
            <div class="d-flex align-items-center">
              <i class="bi bi-receipt-cutoff pe-1 text-success"></i>
              <h5 class="mb-0 fs-5 text-success">Order #</h5>
            </div>
            <button
              @click="closeModal"
              class="btn-close ms-auto ms-sm-0"
              aria-label="Close modal"
            ></button>
          </div>

          <div
            class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2"
          >
            <div class="d-flex align-items-center">
              <i class="bi bi-calendar pe-1"></i>
              <span class="text-body-secondary small">DATE</span>
            </div>
            <span> STATUS </span>
          </div>
        </div>

        <div class="modal-body-scrollable p-3 p-sm-4" style="max-height: 70vh; overflow-y: auto">
          <div class="row g-3 g-md-4 mb-4">
            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-3">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-person-circle pe-1"></i>
                    <h6 class="card-title mb-0">Customer Information</h6>
                  </div>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-person-fill pe-1"></i>
                      <span class="small">NAME</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="bi bi-telephone-fill pe-1"></i>
                      <span class="small">PHONE</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="bi bi-envelope pe-1"></i>
                      <span class="small text-break">EMAIL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body p-3">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-currency-dollar text-success me-2" width="20"></i>
                    <h6 class="card-title mb-0">Order Summary</h6>
                  </div>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="text-body-secondary small">Total Items</span>
                      <span class="fw-bold">QTY</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="text-body-secondary small">Total Amount</span>
                      <span class="fw-bold text-success">$TOTAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Items -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-3">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-list-check text-success me-2" width="20"></i>
                <h6 class="card-title mb-0">Order Items</h6>
              </div>
              <div class="table-responsive">
                <template>
                  <div
                    class="d-flex justify-content-between align-items-center py-2 border-bottom gap-3"
                  >
                    <div class="d-flex align-items-center flex-grow-1 min-width-0">
                      <i class="bi bi-dash"></i>
                      <span class="text-truncate small">NAME</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 flex-shrink-0">
                      <span class="badge bg-success-subtle text-success">QTY x</span>
                      <span class="text-body-secondary small">$PRICE </span>
                    </div>
                  </div>
                </template>
                <div class="text-center text-body-secondary py-3 small">No items in this order</div>
              </div>
            </div>
          </div>

          <!-- Order Status -->
          <div class="card border-0 shadow-sm">
            <div class="card-body p-3">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-gear text-success me-2" width="20"></i>
                <h6 class="card-title mb-0">Order Status</h6>
              </div>

              <!-- Status Flow Buttons -->
              <div
                class="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-3"
              >
                <button class="btn btn-success flex-fill">
                  <i class="bi bi-clock me-1"></i>
                  <span class="small">Confirmed</span>
                </button>

                <div class="d-none d-sm-block text-secondary">
                  <i class="bi bi-arrow-right"></i>
                </div>

                <button class="btn btn-success flex-fill">
                  <i class="bi bi-gear me-1"></i>
                  <span class="small">Ready for Pickup</span>
                </button>

                <div class="d-none d-sm-block text-secondary">
                  <i class="bi bi-arrow-right"></i>
                </div>

                <button class="'btn btn-success flex-fill',">
                  <i class="bi bi-check-circle me-1"></i>
                  <span class="small">Completed</span>
                </button>
              </div>

              <!-- Cancel Button -->
              <button class="btn btn-outline-danger w-100">
                <i class="bi bi-x-circle me-1"></i>
                <span class="small">Cancel Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: false,
    default: () => ({
      orderHeaderId: '',
      pickupName: '',
      pickupPhoneNumber: '',
      pickupEmail: '',
      status: '',
      orderTotal: 0,
      orderDate: '',
      totalItems: 0,
      orderDetails: [],
    }),
  },
})
const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close')
}
</script>
