<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="spinner-grow text-success" style="width: 2.5rem; height: 2.5rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div class="container">
    <div class="mx-auto">
      <div class="mb-4 border-bottom d-flex justify-content-between align-items-center py-3">
        <h3 class="fw-semibold text-success">Add Menu</h3>
        <div class="d-flex gap-3">
          <button
            type="submit"
            form="menuForm"
            class="btn btn-success btn-sm gap-2 rounded-1 px-4 py-2"
          >
            <span class="spinner-border spinner-border-sm me-2"></span>
            Create Item
          </button>

          <button type="button" class="btn btn-outline border btn-sm gap-2 rounded-1 px-4 py-2">
            Cancel
          </button>
        </div>
      </div>
      <div class="alert alert-danger pb-0">
        Please fix the following errors:
        <ul>
          <li>ERROR</li>
        </ul>
      </div>
      <form enctype="multipart/form-data" class="needs-validation" id="menuForm">
        <div class="row g-4">
          <div class="col-lg-7">
            <div class="d-flex flex-column g-12">
              <div class="mb-3">
                <label for="name" class="form-label">Item Name</label>
                <input id="name" type="text" class="form-control" placeholder="Enter item name" />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  id="description"
                  class="form-control"
                  placeholder="Describe the menu item..."
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="specialTag" class="form-label">Special Tag (Optional)</label>
                <input
                  id="specialTag"
                  type="text"
                  class="form-control"
                  placeholder="e.g., Chef's Special"
                />
              </div>

              <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <select id="category" class="form-select">
                  <option>CATEGORY</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input id="price" class="form-control" />
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div>
              <img
                src=""
                class="img-fluid w-100 mb-3 rounded"
                style="aspect-ratio: 1/1; object-fit: cover"
              />
              <div class="mb-3">
                <label for="image" class="form-label">Item Image</label>
                <input id="image" type="file" class="form-control" accept="image/*" />
                <div class="form-text">Leave empty to keep existing image</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
