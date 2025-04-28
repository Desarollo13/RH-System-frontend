<template>
  <header class="header">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />
    <div class="left">
      <h1 class="title">RH-SYSTEM</h1>
    </div>
    <div class="right">
      <i class="fas fa-bell icon" title="Notificaciones"></i>
      <i class="fas fa-user-circle icon" title="Perfil"></i>
    </div>
  </header>
</template>

<script setup>
// nada por ahora
</script>

<style scoped>
.header {
  background-color: #f9fafb;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
}

.icon {
  font-size: 1.5rem;
  color: #6b7280;
  margin-left: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #3b82f6;
}

.right {
  display: flex;
  align-items: center;
}
</style>
