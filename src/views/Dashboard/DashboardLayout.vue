<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <SidebarMenu />
    </aside>

    <div class="main-content">
      <HeaderNav />

      <div class="dashboard-content">
        <h1 class="welcome">Bienvenido al Dashboard 🎯</h1>

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
        <div class="charts-grid ">
        <div class="chart-card">
          <h3>Estados de Contrato 🥧</h3>
          <ChartPie/>
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
    </div>
  </div>
</template>

<script setup>
import SidebarMenu from '../../components/SidebarMenu.vue'
import HeaderNav from '../../components/HeaderNav.vue'
import ChartBar from '../../components/ChartBar.vue'
import ChartPie from '../../components/ChartPie.vue'
import ChartLine from '../../components/ChartLine.vue'
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
  padding: 1rem;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}


.chart-card:hover {
  transform: scale(2);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Animación Fade In + Up */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
