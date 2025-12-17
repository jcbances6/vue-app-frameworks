<template>
  <div>
    <h2> Listado de categorias</h2>
    <p v-if="loading">Cargando categorias...</p>
    <p v-if="error"> {{ error }} </p>

    <ul v-if="!loading && !error">
      <!-- <li v-for="category in categories" :key="category.id">
        Nombre: {{ category.name }}
      </li> -->
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CategoryCard from './CategoryCard.vue';

const categories = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async() => {
  try{
    const response = await axios.get('http://localhost:8000/api/v1/categories/');
    categories.value = response.data;
  }catch(err){
    error.value = 'Error al cargar las categorias.' + err.message;
  }finally{
    loading.value = false;
  }
});

</script>
