import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'

import LoginView from '../views/LoginView.vue'

import CategoryList from '../views/categories/CategoryList.vue'
import CategoryCreate from '../views/categories/CategoryCreate.vue'
import CategoryEdit from '../views/categories/CategoryEdit.vue'

import ProductList from '../views/products/ProductList.vue'
import ProductCreate from '../views/products/ProductCreate.vue'
import ProductEdit from '../views/products/ProductEdit.vue'


const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/categorias', name: 'Categorias', component: CategoryList },
  { path: '/categorias/nueva', name: 'CategoriaCreate', component: CategoryCreate },
  { path: '/categorias/:id/editar', name: 'CategoriaEdit', component: CategoryEdit },
  { path: '/productos', name: 'Productos', component: ProductList },
  { path: '/productos/nuevo', name: 'ProductCreate', component: ProductCreate },
  { path: '/productos/:id/editar', name: 'ProductEdit', component: ProductEdit },
  // { path: '/login', name: 'Login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
