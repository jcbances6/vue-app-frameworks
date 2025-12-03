<template>
  <div>
    <h2> Listado de productos</h2>

    <p v-if="loading">Cargando productos...</p>
    <p v-if="error"> {{ error }} </p>

    <ul v-if="!loading && !error">
      <li v-for="product in products" :key="product.id">
        Nombre: {{ product.name }} - Precio: {{ product.price }}
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(() => {
  fetch('http://localhost:8000/api/v1/products/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }
      return response.json();
    })
    .then((data) => {
      products.value = data;
    })
    .catch((err) => {
      error.value = err.message;
    })
    .finally(() => {
      loading.value = false;
    });
});


</script>
