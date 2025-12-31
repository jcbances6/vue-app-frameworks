<template>
  <div>
    <h2>Nueva Categoría</h2>
    <CategoryForm submitText="Crear" @submit="save" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { createCategory } from '../../services/categoryService'
import CategoryForm from './CategoryForm.vue'

const router = useRouter()

const save = async (data) => {
  await createCategory(data)
  router.push('/categorias')
}
</script>
