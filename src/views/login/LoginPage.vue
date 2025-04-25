<template>
  <div class="login-page">
    <h2>Login Page</h2>
    <button @click="$emit('logged-in')">Entrar al Dashboard</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
