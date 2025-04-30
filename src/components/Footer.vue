<template>
  <footer class="footer text-center text-white">
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p class="mb-2">© {{ currentYear }} NexeneLog. Todos los derechos reservados.</p>
          <div class="social-icons">
            <a href="#" class="me-3 text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="me-3 text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="me-3 text-white"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0a1f44, #1d5aa6);
  border-top: 1px solid #ffffff;
  color: #ffffff;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 0.6px 2px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
 
}
.social-icons a {
  font-size: 1.2rem;
  transition: color 0.3s;
}
.social-icons a:hover {
  color: #00c6ff;
}
</style>
