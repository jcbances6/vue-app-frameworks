<template>
  <div>
    <h2> Listado de categorias</h2>
    <p v-if="loading">Cargando categorias...</p>
    <p v-if="error"> {{ error }} </p>

    <ul v-if="!loading && !error">
      <li v-for="category in categories" :key="category.id">
        Nombre: {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const categories = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(() => {
  fetch('http://localhost:8000/api/v1/categories/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al obtener las categorias');
      }
      return response.json();
    })
    .then((data) => {
      categories.value = data;
    })
    .catch((err) => {
      error.value = err.message;
    })
    .finally(() => {
      loading.value = false;
    });
});

</script>
