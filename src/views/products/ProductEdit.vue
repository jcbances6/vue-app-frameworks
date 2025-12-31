<template>
  <div>
    <h2>Editar Producto</h2>
    <ProductForm
      :modelValue="product"
      submitText="Actualizar"
      @submit="update"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProduct, updateProduct } from '../../services/productService'
import ProductForm from './ProductForm.vue'

const route = useRoute()
const router = useRouter()
const product = ref(null)

onMounted(async () => {
  const response = await getProduct(route.params.id)
  product.value = response.data
})

const update = async (data) => {
  await updateProduct(route.params.id, data)
  router.push('/productos')
}
</script>
