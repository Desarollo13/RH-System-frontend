<template>
  <div>
    <LoginPage v-if="currentView === 'login'" @logged-in="currentView = 'dashboard'" />

    <MainLayout v-else>
      <DashboardLayout />

    </MainLayout>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from './layouts/MainLayout.vue'
import LoginPage from './views/login/LoginPage.vue'
import DashboardLayout from './views/Dashboard/DashboardLayout.vue'

const currentView = ref('login')
</script>
