import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Categorias from '../components/Category/CategoryList.vue'
import Productos from '../components/Product/ProductList.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/categorias', name: 'Categorias', component: Categorias },
  { path: '/productos', name: 'Productos', component: Productos },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
