<template>
  <div
    class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-black bg-opacity-50"
    style="z-index: 1050"
  >
    <div
      class="bg-body p-4 rounded-4 shadow-lg mx-3 overflow-auto"
      style="max-width: 500px; width: 100%; max-height: 90vh"
    >
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="fw-bold m-0">Complete Your Order</h4>
        <button class="btn"><i class="bi bi-x-circle"></i></button>
      </div>

      <div class="alert alert-danger" role="alert">
        <span class="d-block"> ERROR </span>
      </div>

      <form>
        <div class="mb-3">
          <label for="pickupName" class="form-label">Name</label>
          <input type="text" class="form-control" id="pickupName" />
        </div>

        <div class="mb-3">
          <label for="pickupPhoneNumber" class="form-label">Phone Number</label>
          <input type="tel" class="form-control" id="pickupPhoneNumber" />
        </div>

        <div class="mb-4">
          <label for="pickupEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="pickupEmail" />
        </div>

        <div class="bg-body-tertiary rounded-3 p-3 mb-4">
          <h5 class="fw-bold mb-3">Order Summary</h5>
          <div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="fw-medium">NAME</span>
              <div class="d-flex align-items-center gap-3">
                <span class="text-body-secondary">quantity x</span>
                <span class="fw-medium">$ </span>
              </div>
            </div>
            <div class="border-top pt-3 mt-3">
              <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold">Total</span>
                <span class="fw-bold fs-5">$</span>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-outline-secondary px-4">Cancel</button>
          <button type="submit" class="btn btn-success px-4">
            <span class="d-flex align-items-center gap-2">
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              Processing...
            </span>
            <span>Place Order</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
