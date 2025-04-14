<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h2 class="mb-4 text-success">Your Cart</h2>
        <div class="text-center py-5">
          <div class="mb-4">
            <i class="bi bi-cart" style="font-size: 2rem"></i>
          </div>
          <h3 class="h5 mb-3">Your cart is empty</h3>
          <p class="text-body-secondary mb-4">
            Looks like you haven't added any items to your cart yet.
          </p>
          <button class="btn btn-success">
            <i class="bi bi-arrow-left-square"></i>
            Continue Shopping
          </button>
        </div>

        <div>
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th scope="col" class="ps-4 fw-light" style="width: 30%">Item</th>
                      <th scope="col" class="text-center fw-light" style="width: 15%">Price</th>
                      <th scope="col" class="" style="width: 45%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="ps-4">
                        <div class="d-flex align-items-center gap-3">
                          <img
                            src="https://placehold.co/50x50"
                            class="img-fluid rounded d-none d-md-block"
                            style="width: 50px; height: 50px; object-fit: cover"
                          />
                          <span class="fw-medium">NAME</span>
                        </div>
                      </td>
                      <td class="text-center align-middle">$$$</td>
                      <td class="align-middle">
                        <div class="input-group input-group-sm justify-content-center" style="">
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
                          <button class="btn btn-sm btn-outline-danger mx-md-4 mx-1">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="row g-4">
            <div class="col-md-6">
              <div class="d-flex gap-2">
                <button class="btn btn-outline-success">
                  <i class="bi bi-arrow-left-square mx-1"></i>
                  <span class="">Continue Shopping</span>
                </button>
                <button class="btn btn-outline-danger">
                  <i class="bi bi-trash mx-1"></i>
                  <span class="">Clear Cart</span>
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <h4 class="card-title h6 mb-3">Order Summary</h4>
                  <div class="d-flex justify-content-between mb-2">
                    <span class="text-body-secondary">Items (0):</span>
                    <span>$$$</span>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between mb-3">
                    <span class="fw-bold">Total:</span>
                    <span class="fw-bold text-success">$$$</span>
                  </div>
                  <button class="btn btn-success w-100">
                    <i class="bi bi-cash-stack"></i>
                    Proceed to Checkout
                  </button>
                  <div class="text-center mt-1">
                    <span class="text-danger">Order will be ready for pickup in 30minutes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
