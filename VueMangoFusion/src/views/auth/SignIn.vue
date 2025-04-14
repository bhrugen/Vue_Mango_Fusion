<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow">
          <div class="card-body p-4">
            <h2 class="text-center mb-4">Sign In</h2>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>

              <div class="alert alert-danger">
                <span class="d-block"> ERROR LIST </span>
              </div>

              <button type="submit" class="btn btn-success w-100">Login</button>
            </form>

            <div class="text-center mt-3">
              <a href="#">Don't have an account? Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
