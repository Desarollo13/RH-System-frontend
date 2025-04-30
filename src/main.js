import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/white-dashboard.scss'
import  './assets/css/nucleo-icons.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
