<template>
  <aside class="w-64 bg-white border-r min-h-screen p-2">
    <div class="flex items-center justify-center mb-8">
      <img src="../images/logoNexen.png" alt="Logo" class="w-20 h-20 object-contain" />
    </div>

    <nav class="space-y-6">
      <div>

        <button class=" btn btn-outline-info btn-lg "> Contrataciones  </button>
        <ul class="space-y-1">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Nuevos Ingresos</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Vacantes a Cubrir</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Gestión de Examenes</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Entrevistas</a></li>
        </ul>
      </div>

      <div>
        <h3 class="btn btn-outline-info btn-lg">Empleados</h3>
        <ul class="space-y-1">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Nuevos Ingresos</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Capacitaciones</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Asistencia Checador</a></li>
        </ul>
      </div>

      <div>
        <h3 class="btn btn-outline-info btn-lg">Evaluaciones</h3>
        <ul class="space-y-1">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Solicitudes de Aumento</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Rendimiento</a></li>
        </ul>
      </div>

      <div>
        <h3 class="btn btn-outline-info btn-lg">Nómina</h3>
        <ul class="space-y-1">
          <li><a href="#" class="text-gray-700 hover:text-blue-500 bi bi-star">Empleados</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Retenciones</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Avisos</a></li>
        </ul>
      </div>

      <div>
        <h3 class="btn btn-outline-info btn-lg">Tickets</h3>
        <ul class="space-y-1">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500">Seguimiento Tickets</a></li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
const selectedSection = defineModel('selectedSection')
</script>

<style scoped>

</style>
