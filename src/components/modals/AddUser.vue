<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <!-- Header -->
      <div class="modal-header">
        <h5 class="modal-title">Agregar Usuario</h5>
        <button @click="closeModal" class="btn-close btn-close-white"></button>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <form @submit.prevent="saveUser">
          <div class="row mb-3">
            <div class="col">
              <input v-model="user.username" type="text" class="form-control" placeholder="Usuario">
            </div>
            <div class="col">
              <div class="input-group">
                <input :type="showPassword ? 'text' : 'password'" v-model="user.password" class="form-control" placeholder="Password">
                <button @click="togglePassword" type="button" class="btn btn-outline-secondary">
                  <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye' , 'text-dark'" class="password-icon"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <select v-model="user.status" class="form-control">
                <option disabled value="">Seleccione un status</option>
                <option value="usuario1">ACTIVO</option>
                <option value="usuario2">INACTIVO</option>
              </select>
            </div>
            <div class="col">
              <select v-model="user.profile" class="form-control">
                <option disabled value="">Seleccione un perfil</option>
                <option value="administrador">Administrador</option>
                <option value="supervisor">Supervisor</option>
                <option value="operativo">Operativo</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <!-- Footer -->
      <div class="modal-footer p-0">
        <div class="row w-100 m-0">
          <div class="col-6 p-0">
            <button @click="closeModal" class="btn w-100 btn-cancel">Cancelar</button>
          </div>
          <div class="col-6 p-0">
            <button @click="saveUser" class="btn w-100 btn-save">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const showPassword = ref(false);
const emailError = ref(false);

const user = ref({
  username: '',
  password: '',
  status: '',
  profile: '',
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const closeModal = () => {
  showModal.value = false;
};

const openModal = () => {
  showModal.value = true;
};

const saveUser = () => {
    alert('Usuario Guardado');  // ← alert de error

  closeModal();
};

// Exportamos `openModal` para que el padre pueda abrir la modal
defineExpose({ openModal });
</script>

<style scoped>
/* Estilos para la modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 1000px;
  padding: 1rem;
}

.modal-header {
  background-color: #0b2c60;
  color: white;
  border-radius: 12px 12px 0 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.btn-cancel {
  background-color: #0b2c60;
  color: white;
  border-radius: 0 0 0 12px;
}

.btn-save {
  background-color: #0b2c60;
  color: white;
  border-radius: 0 0 12px 0;
}

/* Estilo para el error en email */
.is-invalid {
  border: 1px solid red;
}

.error-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: red;
}

.password-icon {
  font-size: 1.25rem;  
  padding: 0.375rem; 
 
}
</style>
