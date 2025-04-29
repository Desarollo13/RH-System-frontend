<template>
  <aside
    class="fixed top-16 left-0 z-50 w-15 h-full bg-white/90 backdrop-blur-md shadow-lg overflow-y-auto transition-transform duration-300"
    :class="showSidebar ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex items-center justify-center mb-8 mt-4">
      <img src="../images/logoNexen.png" alt="Logo" class="w-20 h-20 object-contain" />
    </div>

    <nav class="space-y-6 p-2">
      <div>
        <button class="btn btn-outline-info btn-lg w-full">Contrataciones</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Nuevos Ingresos</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Vacantes a Cubrir</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Gestión de Examenes</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Entrevistas</a></li>
        </ul>
      </div>


      <div>
        <button class="btn btn-outline-info btn-lg w-full">Empleados</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Nuevos Ingresos</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Capacitaciones</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Asistencia Checador</a></li>
        </ul>
      </div>

      <div>
        <button class="btn btn-outline-info btn-lg w-full">Evaluaciones</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Solicitudes de Aumento</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Rendimiento</a></li>
        </ul>
      </div>

      <div>
        <button class="btn btn-outline-info btn-lg w-full">Nómina</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Empleados</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Retenciones</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Avisos</a></li>
        </ul>
      </div>

      <div>
        <button class="btn btn-outline-info btn-lg w-full">Tickets</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Seguimiento Tickets</a></li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
defineProps({
  collapsed: Boolean,
  isMobile: Boolean
})
</script>

<style>

</style>
