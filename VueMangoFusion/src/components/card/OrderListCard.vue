<template>
  <div class="card h-100 border-0 shadow-sm hover-shadow transition-all">
    <div class="card-header border-bottom-0 pt-4">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <i class="bi bi-receipt-cutoff text-success pe-2" style="font-size: 2rem"></i>
          <h5 class="card-title mb-0">Order #</h5>
        </div>
        <span class="bg-danger-subtle text-danger-emphasis"> STATUS </span>
      </div>
    </div>
    <div class="card-body">
      <div class="mb-4">
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-person-square text-success pe-2" style="font-size: 1.5rem"></i>
          <div>
            <h6 class="mb-0">NAME</h6>
            <small class="text-body-secondary">PHONE</small>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-envelope text-success pe-2"></i>
          <span>EMAIL</span>
        </div>
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-bag text-success pe-2"></i>
          <span>XX items</span>
        </div>
        <div class="d-flex align-items-center">
          <i class="bi bi-cash-coin text-success pe-2"></i><span class="fw-bold">$$$</span>
        </div>
      </div>

      <div class="bg-body-tertiary rounded-3 p-3">
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-card-list text-success pe-2"></i>
          <h6 class="mb-0">Order Items</h6>
        </div>
        <div class="mb-3 pb-3 border-bottom">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <span class="text-truncate me-3">NAME</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="badge bg-success-subtle text-success me-2">QTY x</span>
              <span class="text-body-secondary">$$$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
