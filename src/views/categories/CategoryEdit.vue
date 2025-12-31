<template>
  <div>
    <h2>Editar Categoría</h2>
    <CategoryForm
      :modelValue="category"
      submitText="Actualizar"
      @submit="update"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCategory, updateCategory } from '../../services/categoryService'
import CategoryForm from './CategoryForm.vue'

const route = useRoute()
const router = useRouter()
const category = ref(null)

onMounted(async () => {
  const response = await getCategory(route.params.id)
  category.value = response.data
})

const update = async (data) => {
  await updateCategory(route.params.id, data)
  router.push('/categorias')
}
</script>
