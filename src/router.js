import { createRouter, createWebHashHistory } from 'vue-router';
import About from './views/About.vue';
import Todos from './views/Todos.vue';

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
