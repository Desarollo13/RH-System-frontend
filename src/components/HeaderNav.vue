<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['toggle-sidebar'])

function toggle() {
  emit('toggle-sidebar')
}
</script>

<template>
  <header id="page-topbar" class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid d-flex justify-between align-items-center">
      <div class="d-flex align-items-center">
        <button class="btn btn-light" @click="toggle">
          <i class="bi bi-list" style="font-size: 30px;"></i>
        </button>

        <!-- Logo -->
        <router-link to="/" class="navbar-brand d-flex align-items-center ms-3">
          <img src="@/assets/img/rh-sinFondo.png" alt="logo" height="60" class="d-inline-block align-text-top" />
        </router-link>
      </div>

      <!-- Menú derecho -->
      <div class="d-flex align-items-center">
        <div class="me-3 d-flex align-items-center gap-2">
          <button class="btn btn-light">
            <i class="bi bi-gear" style="font-size: 24px;"></i>
          </button>
          <button class="btn btn-light position-relative">
            <i class="bi bi-bell" style="font-size: 24px;"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>
        </div>

        <!-- Menú de usuario -->
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="@/assets/img/avatar-3.jpg" alt="user" class="rounded-circle me-2" height="40" />
            <span class="d-none d-md-inline">Usuario</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#"><i class="bi bi-person-circle me-2"></i>Perfil</a></li>
            <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Configuración</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}
</style>
