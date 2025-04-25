<template>
  <div>
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const chartData = {
  labels: ['Activos', 'Borrador', 'En aprobación', 'Rechazados'],
  datasets: [
    {
      data: [40, 25, 20, 15],
      backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
      hoverBackgroundColor: ['#059669', '#2563eb', '#d97706', '#dc2626'],
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'bottom' },
    title: { display: true, text: 'Estados de Contratos' },
  },
}
</script>

