<template>
  <div class="col-12 col-sm-6 col-lg-4">
    <div class="card h-100 border-0 shadow-sm rounded-4">
      <div class="position-relative">
        <img
          src="https://placehold.co/300x200"
          class="card-img-top rounded-top-4 w-100 object-fit-cover"
          style="height: 200px"
        />
        <!-- View Details Button -->
        <div class="position-absolute top-0 end-0 m-2">
          <button
            class="btn btn-light btn-sm rounded shadow-sm d-flex align-items-center gap-2 backdrop-blur-sm bg-opacity-75"
            title="View Details"
            style="backdrop-filter: blur(4px)"
          >
            <i class="bi bi-eye text-success"></i>
            <span class="text-success small">Details</span>
          </button>
        </div>
      </div>
      <div class="card-body p-3 p-sm-4">
        <!-- Title and Price -->
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h5 class="card-title mb-0 small fw-semibold">NAME</h5>
          <div class="d-flex align-items-center ms-2">
            <span class="fw-semibold text-success">$$$</span>
          </div>
        </div>

        <!-- Description -->
        <p class="card-text text-body-secondary small mb-2 text-truncate d-none d-sm-block">
          DESCRIPTION
        </p>

        <!-- Tags -->
        <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
          <div class="d-flex align-items-center btn btn-outline-secondary disabled px-2 py-1 small">
            <i class="bi bi-star"></i>&nbsp;
            <span class="small text-body-secondary"> TAG</span>
          </div>
          <div class="d-flex align-items-center btn btn-outline-secondary disabled px-2 py-1 small">
            <i class="bi bi-tag-fill"></i> &nbsp;
            <span class="small text-body-secondary text-uppercase">CATEGORY</span>
          </div>
        </div>

        <!-- Cart Controls -->
        <div class="d-flex align-items-center justify-content-between">
          <button class="btn btn-success w-100 rounded py-2">
            <span class="spinner-border spinner-border-sm me-2"></span>
            <span class="small"><i class="bi bi-cart-plus"></i> &nbsp; Add to Cart</span>
          </button>

          <div class="input-group input-group-sm w-100">
            <button class="btn btn-outline-secondary" type="button">
              <i class="bi bi-dash"></i>
            </button>
            <input
              type="text"
              class="form-control text-center px-2"
              readonly
              style="max-width: 50px"
            />
            <button class="btn btn-outline-secondary" type="button">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
