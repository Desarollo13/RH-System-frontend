    <script>

</script>

<template>
  <header id="page-topbar" class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <!-- Logo y botón menú -->
      <div class="d-flex align-items-center">
        <button class="btn btn-light position-relative">
          <i class="bi bi-list" style="font-size: 30px;"></i>
        </button>
<!--        <button @click="toggleMenu" class="bi bi-menu-down">-->
<!--          <i class="fa fa-bars"></i>-->
<!--        </button>-->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img src="@/assets/img/rh-sinFondo.png" alt="logo" height="60" class="d-inline-block align-text-top" />
        </router-link>

      </div>

      <!-- Sección derecha (Notificaciones y Perfil) -->
      <div class="d-flex align-items-center">
        <!-- Notificaciones -->
        <div class="position-relative me-3">
          <button class="btn btn-light position-relative">
            <i class="bi bi-gear" style="font-size: 30px;"></i>
          </button>
          <button class="btn btn-light position-relative">
            <i class="bi bi-bell" style="font-size: 30px;"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>
        </div>

        <!-- Perfil -->
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="@/assets/img/avatar-3.jpg " alt="user" class="rounded-circle me-2" height="40" />
            <span class="d-none d-md-inline">{{ userName }}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">
                <i class="uil uil-user-circle me-2"></i> Perfil
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="uil uil-cog me-2"></i> Configuraciones
              </a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="uil uil-sign-out-alt me-2"></i> Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </header>
</template>
