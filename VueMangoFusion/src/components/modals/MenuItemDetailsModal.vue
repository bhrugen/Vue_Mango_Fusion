<template>
  <div
    class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-black bg-opacity-50"
    style="z-index: 1050"
  >
    <div
      class="modal-dialog modal-dialog-centered m-0 modal-size d-flex flex-column rounded-4"
      style="pointer-events: auto"
    >
      <div
        class="modal-content rounded-4 border-0 rounded-0 rounded-md-4 bg-body h-100 d-flex flex-column"
      >
        <!-- Header -->
        <div
          class="modal-header w-100 d-flex justify-content-between border-0 bg-success bg-opacity-10 px-3 px-sm-4 py-3 rounded-top-0 rounded-md-top-4 sticky-top"
        >
          <h5 class="modal-title d-flex align-items-center gap-2 mb-0 fs-5 fs-sm-4">
            <i class="bi bi-card-heading"></i>
            <span>Menu Details</span>
          </h5>
          <button type="button" class="btn-close" aria-label="Close menu details"></button>
        </div>

        <!-- Body - Scrollable Content -->
        <div class="modal-body p-3 p-sm-4 overflow-auto">
          <div class="row g-3 g-sm-4">
            <!-- Image Column -->
            <div class="col-12 col-md-6">
              <div class="position-relative">
                <img
                  src=""
                  class="rounded-4 w-100 object-fit-cover"
                  style="max-height: 300px; min-height: 200px"
                />
                <div class="position-absolute top-0 end-0 m-2 m-sm-3">
                  <span
                    class="badge bg-success rounded-pill px-2 px-sm-3 py-1 py-sm-2 d-flex align-items-center gap-1 fs-6 fs-sm-5"
                  >
                    $$$
                  </span>
                </div>
              </div>
            </div>

            <!-- Details Column -->
            <div class="col-12 col-md-6">
              <div class="d-flex flex-column gap-3 gap-sm-4">
                <!-- Name -->
                <div>
                  <div class="text-secondary small mb-1">
                    <i class="bi bi-card-text"></i>
                    Name
                  </div>
                  <h4 class="fw-bold mb-0 fs-5 fs-sm-4">NAME</h4>
                </div>

                <!-- Category -->
                <div>
                  <div class="text-secondary small mb-1">
                    <i class="bi bi-tag"></i>
                    Category
                  </div>
                  <div
                    class="badge bg-success bg-opacity-10 text-success rounded-pill px-2 px-sm-3 py-1 py-sm-2 fs-6 fs-sm-5"
                  >
                    CATEGORY
                  </div>
                </div>

                <!-- Special Tag -->
                <div>
                  <div class="text-secondary small mb-1">
                    <i class="bi bi-star"></i>
                    Special Tag
                  </div>
                  <div
                    class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-2 px-sm-3 py-1 py-sm-2 fs-6 fs-sm-5"
                  >
                    TAG
                  </div>
                </div>

                <!-- Description -->
                <div>
                  <div class="text-secondary small mb-1">
                    <i class="bi bi-card-text"></i>
                    Description
                  </div>
                  <p class="mb-0">DESC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 px-3 px-sm-4 pb-3 pb-sm-4 sticky-bottom bg-body">
          <button type="button" class="btn btn-outline-secondary rounded-pill px-3 px-sm-4 w-100">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* In your scoped or global styles */
@media (max-width: 576px) {
  .modal-size {
    width: 95%;
    height: 95%;
  }
}

@media (min-width: 577px) {
  .modal-size {
    width: 60%;
    height: 75%;
  }
}
</style>
