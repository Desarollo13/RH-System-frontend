<template>
  <!-- Contenedor principal -->
  <div class="flex-1 flex flex-col transition-all duration-300 w-full">

    <!-- Header fijo -->
    <HeaderNav
      @toggle-sidebar="toggleSidebar"
      class="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md h-16 flex items-center"
    />
    <transition name="sidebar-slide">
      <!-- Sidebar animado -->
      <SidebarMenu
        v-show="showSidebar"
        class="fixed top-16 left-0 w-64 h-full bg-white/90 backdrop-blur-md border-r shadow-lg transform transition-transform duration-300"
        :class="showSidebar ? 'translate-x-0' : '-translate-x-full'"
      />
    </transition>

      <!-- Contenido -->
      <main class="flex-grow bg-gray-100 pt-16 p-4 overflow-y-auto min-h-screen">
        <slot />
      </main>

      <!-- Footer -->
      <FooterComponent />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import FooterComponent from '@/components/Footer.vue'

const showSidebar = ref(false)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}
</script>

<style scoped>

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform 0.3s ease;
}

.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
  transform: translateX(-100%);
}

.sidebar-slide-enter-to,
.sidebar-slide-leave-from {
  transform: translateX(0%);
}
main {
  padding-top: 64px; /* Ajusta según el tamaño del header */
}
</style>
