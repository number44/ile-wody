import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue';
import Info from '@/pages/Info.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/info', component: Info },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;