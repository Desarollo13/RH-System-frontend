<template>
  <div class="layout-container flex min-h-screen">
    <!-- Sidebar -->
    <div :class="['sidebar', { 'hidden': !showSidebar }]">
      <SidebarMenu />
    </div>

    <div class="flex flex-col flex-1">
      <!-- HeaderNav que emite el evento toggle-sidebar -->
      <HeaderNav @toggle-sidebar="toggleSidebar" />

      <main class="p-4 flex-grow bg-gray-100">
        <slot />
      </main>

      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import FooterComponent from '@/components/Footer.vue'

const showSidebar = ref(true)

function toggleSidebar() {
  console.log("Toggling Sidebar:", !showSidebar.value)  <!-- Agregado para depurar -->
  showSidebar.value = !showSidebar.value
}
</script>

<style scoped>
.layout-container {
  transition: all 0.3s ease;
}

.sidebar {
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 1rem;
  transition: width 0.3s ease, padding 0.3s ease;
}

/* Sidebar oculto */
.sidebar.hidden {
  width: 0;
  padding: 0;
  border: none;
}
</style>
