<template>
  <div>
    <LoginPage v-if="currentView === 'login'" @logged-in="currentView = 'dashboard'" />
    <DashboardLayout v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginPage from './views/login/LoginPage.vue'
import DashboardLayout from './views/Dashboard/DashboardLayout.vue'

const currentView = ref('login') // Empieza en login

// Cuando el usuario haga login, puedes cambiar a 'dashboard'
</script>
