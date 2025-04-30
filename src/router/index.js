import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/login/LoginPage.vue';
import DashboardLayout from '@/views/Dashboard/DashboardLayout.vue';
import UserPage from '@/views/User/UserPage.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardLayout,
    children: [
      // {
      //   path: 'usuarios',
      //   name: 'usuarios',
      //   component: UserPage,
      // },
      // 
    ],
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
