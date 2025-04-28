<template>
  <section class="container-fluid min-vh-100 d-flex justify-content-center align-items-center text-dark">
    <div class="card shadow-lg rounded-4 overflow-hidden border border-3 border-dark" style="background-color: beige; max-width: 1000px; width: 100%;">
      <div class="row g-0">
        <!-- Lado izquierdo con logo y texto -->
        <div class="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 bg-white text-start">
          <img src="@/assets/img/rh-sinFondo.png" alt="Logo RH" class="img-fluid mb-4" style="max-width: 250px;">
          <h1 class="fw-semibold mb-2" style="font-size: 2.5rem; font-family: 'Segoe UI', sans-serif; color: #1a1a1a;">
            Sistema Integral
          </h1>
          <p class="text-muted" style="font-size: 1.1rem;">Departamento RH</p>
        </div>

        <!-- Lado derecho con formulario -->
        <div class="col-md-6 d-flex flex-column justify-content-center p-5 bg-white">
          <p class="mb-4 fw-bold text-dark text-center" style="font-size: 1.25rem;">Ingresa tus credenciales</p>

          <div class="mb-3">
            <label class="form-label fw-semibold text-dark" style="font-size: 0.95rem;">Usuario</label>
            <input type="text" class="form-control border-dark" placeholder="Usuario">
          </div>

          <div class="mb-3">
            <label class="form-label fw-semibold text-dark" style="font-size: 0.95rem;">Contraseña</label>
            <div class="input-group">
              <input :type="showPassword ? 'text' : 'password'" class="form-control border-dark" placeholder="Contraseña">
              <span class="input-group-text bg-white border-dark text-dark" @click="togglePassword" style="cursor: pointer;">
                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
              </span>
            </div>
          </div>

          <!-- Aquí es donde haces el emit -->
          <button
            @click="login"
            class="w-100 rounded-pill fw-bold mt-2"
            style="background-color: #007bff; color: white; border: none; outline: none;"
          >
            Iniciar Sesión
          </button>

          <div class="small text-center mt-3">
            <span class="text-muted">¿Olvidaste tu usuario o contraseña?</span><br>
            <a href="#" class="text-primary text-decoration-none">Recuperar usuario y/o contraseña</a>
          </div>

          <p class="text-center mt-4 text-muted">Derechos Reservados 2025</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
