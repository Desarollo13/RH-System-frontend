<template>
  <aside class="w-64 bg-white border-r min-h-screen p-2">
    <div class="flex items-center justify-center mb-8">
      <img src="../images/logoNexen.png" alt="Logo" class="w-20 h-20 object-contain" />
    </div>

    <nav class="space-y-6">
      <div>
        <button @click="selectModule('contrataciones')" class="btn btn-outline-info btn-lg w-full">Contrataciones</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Nuevos Ingresos</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Vacantes a Cubrir</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Gestión de Examenes</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Entrevistas</a></li>
        </ul>
      </div>


      <div>
        <button @click="selectModule('Empleados')" class="btn btn-outline-info btn-lg w-full">Empleados</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Nuevos Ingresos</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Capacitaciones</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Asistencia Checador</a></li>
        </ul>
      </div>

      <div>
        <button @click="selectModule('Evaluaciones')"class="btn btn-outline-info btn-lg w-full">Evaluaciones</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Solicitudes de Aumento</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Rendimiento</a></li>
        </ul>
      </div>

      <div>
        <button @click="selectModule('Nomina')"class="btn btn-outline-info btn-lg w-full">Nómina</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Empleados</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Retenciones</a></li>
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Avisos</a></li>
        </ul>
      </div>

      <div>
        <button @click="selectModule('Tickets')"class="btn btn-outline-info btn-lg w-full">Tickets</button>
        <ul class="space-y-1 pl-4">
          <li><a href="#" class="bi bi-star text-gray-700 hover:text-blue-500"> Seguimiento Tickets</a></li>
        </ul>
      </div>
      <div>
        <button @click="selectModule('Usuarios')"class="btn btn-outline-info btn-lg w-full">Usuarios</button>
      </div>
    </nav>
  </aside>
</template>

<script setup>
const emit = defineEmits(['select-module'])

function selectModule(moduleName) {
  emit('select-module', moduleName)
}


</script>

<style scoped>

</style>
