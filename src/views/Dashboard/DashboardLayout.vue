<template>
  <div class="dashboard-container">
    <!-- Sidebar con visibilidad dinámica -->
    <aside :class="['sidebar', { hidden: !showSidebar }]">
      <SidebarMenu @select-module="changeModule"/>
    </aside>

    <div class="main-content">
      <HeaderNav @toggle-sidebar="toggleSidebar" />

      <div class="dashboard-content">
        <h1 class="welcome">Bienvenido al Dashboard 🎯</h1>

        <div v-if="currentModule === 'dashboard'">
          <!-- Dashboard inicial -->
            <div class="card-grid">
              <div class="summary-card accepted">
                <h3>Contratos Aceptados</h3>
                <p class="card-number">23</p>
              </div>

              <div class="summary-card in-contract">
                <h3>En Contrato</h3>
                <p class="card-number">15</p>
              </div>

              <div class="summary-card expiring">
                <h3>Por Expirar</h3>
                <p class="card-number">4</p>
              </div>

              <div class="summary-card finished">
                <h3>Finalizados</h3>
                <p class="card-number">10</p>
              </div>
            </div>


          <div class="charts-grid">
            <div class="chart-card">
              <h3>Estados de Contrato 🥧</h3>
              <ChartPie />
            </div>
            <div class="chart-card h-100">
              <h3>Resumen Mensual 📈</h3>
              <ChartLine />
            </div>
            <div class="chart-card h-100">
              <ChartBar />
            </div>
          </div>
        </div>

        <div class="card-grid">
          <div v-if="currentModule === 'contrataciones'" class="summary-card accepted">
            <h3>Contratos Aceptados</h3>
            <p class="card-number">23</p>
          </div>

          <div v-if="currentModule === 'Empleados'" class="summary-card in-contract">
            <h3>Nuevos Ingresos</h3>
            <p class="card-number">15</p>
          </div>

          <div v-if="currentModule === 'Evaluaciones'" class="summary-card expiring">
            <h3>Vacantes a Cubrir</h3>
            <p class="card-number">4</p>
          </div>

          <div v-if="currentModule === 'Nomina'" class="summary-card finished">
            <h3>Ingresos y Egresos</h3>
            <p class="card-number">10</p>
          </div>

          <div v-if="currentModule === 'Tickets'" class="summary-card finished">
            <h3>Actividades</h3>
            <p class="card-number">10</p>
          </div>
        </div>

        <div class="charts-grid">
          <div v-if="currentModule === 'contrataciones'" class="chart-card">
            <h3>Estados de Contrato 🥧</h3>
            <ChartPie />
          </div>
          <div v-if="currentModule === 'Empleados'" class="chart-card">
            <h3>Nuevos Ingresos🥧</h3>
            <ChartPie />
          </div>
          <div v-if="currentModule === 'Evaluaciones'" class="chart-card">
            <h3>Vacantes a Cubrir 🥧</h3>
            <ChartPie />
          </div>
          <div v-if="currentModule === 'Nomina'" class="chart-card">
            <h3>Ingresos y Egresos 🥧</h3>
            <ChartPie />
          </div>
          <div v-if="currentModule === 'Tickets'" class="chart-card">
            <h3>Actividades 🥧</h3>
            <ChartPie />
          </div>

          <div v-if="currentModule === 'contrataciones'" class="chart-card h-100">
            <h3>Resumen Mensual 📈</h3>
            <ChartLine />
          </div>
          <div v-if="currentModule === 'Empleados'" class="chart-card h-100">
            <h3>Resumen Mensual 📈</h3>
            <ChartLine />
          </div>
          <div v-if="currentModule === 'Evaluaciones'" class="chart-card h-100">
            <h3>Resumen Mensual 📈</h3>
            <ChartLine />
          </div>
          <div v-if="currentModule === 'Nomina'" class="chart-card h-100">
            <h3>Resumen Mensual 📈</h3>
            <ChartLine />
          </div>
          <div v-if="currentModule === 'Tickets'" class="chart-card h-100">
            <h3>Resumen Mensual 📈</h3>
            <ChartLine />
          </div>

        </div>
        <div v-if="currentModule === 'Usuarios'">
          <div class="flex-wrapper">
            <UserPage />
          </div>
        </div> 
      <Footer />
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarMenu from '../../components/SidebarMenu.vue'
import HeaderNav from '../../components/HeaderNav.vue'
import ChartBar from '../../components/ChartBar.vue'
import ChartPie from '../../components/ChartPie.vue'
import ChartLine from '../../components/ChartLine.vue'
import Footer from '../../components/Footer.vue'
import UserPage from '@/views/User/UserPage.vue';

const showSidebar = ref(true)
const currentModule = ref('dashboard')


function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function changeModule(moduleName) {
  currentModule.value = moduleName
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: .2rem;
  transition: all 0.1s ease;
}

/* Oculta el sidebar pero mantiene el flujo del layout */
.sidebar.hidden {
  width: 0;
  overflow: hidden;
  padding: 0;
  border: none;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dashboard-content {
  flex: 1;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.summary-card {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
}

.card-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

/* Colores personalizados */
.accepted {
  border-left: 6px solid #10b981; /* verde */
}

.in-contract {
  border-left: 6px solid #3b82f6; /* azul */
}

.expiring {
  border-left: 6px solid #f59e0b; /* naranja */
}

.finished {
  border-left: 6px solid #9ca3af; /* gris */
}

/* Gráficos */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
}

.chart-card {
  background: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}

.chart-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}


.flex-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;     
  width: 80%;              
  margin: 0 auto;         
height: 100%;
}

/* Animación Fade In + Up */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
