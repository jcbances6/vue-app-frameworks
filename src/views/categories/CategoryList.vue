<template>
  <div>
    <h2>Listado de Categorías</h2>

    <router-link to="/categorias/nueva">➕ Nueva categoría</router-link>

    <p v-if="loading">Cargando...</p>
    <p v-if="error">{{ error }}</p>

    <table v-if="!loading && !error" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>
            <router-link :to="`/categorias/${category.id}/editar`">
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
import { getCategories } from '../../services/categoryService'

const categories = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await getCategories()
    categories.value = response.data
  } catch (e) {
    error.value = 'Error al cargar categorías ' + e.message
  } finally {
    loading.value = false
  }
})
</script>
