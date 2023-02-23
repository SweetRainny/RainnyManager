import { createRouter, createWebHistory } from 'vue-router';

const constantsRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  }
]

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: constantsRoutes
});

export default router;

