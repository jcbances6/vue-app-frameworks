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
import axios from 'axios';

const products = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async() => {
  try{
    const response = await axios.get('http://localhost:8000/api/v1/products/');
    products.value = response.data;
  }catch(err){
    error.value = 'Error al cargar los productos.' + err.message;
  }finally{
    loading.value = false;
  }

});


</script>
