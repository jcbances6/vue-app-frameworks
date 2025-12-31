<template>
  <div>
    <h2>Listado de Productos</h2>

    <router-link to="/productos/nuevo">➕ Nuevo producto</router-link>

    <p v-if="loading">Cargando...</p>

    <table v-if="!loading" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>S/ {{ product.price }}</td>
          <td>{{ product.category?.name }}</td>
          <td>
            <router-link :to="`/productos/${product.id}/editar`">
              ✏️ Editar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getProducts } from '../../services/productService'

const products = ref([])
const loading = ref(true)

onMounted(async () => {
  const response = await getProducts()
  products.value = response.data
  loading.value = false
})
</script>
