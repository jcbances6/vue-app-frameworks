<template>
  <div>
    <h2>Nuevo Producto</h2>
    <ProductForm submitText="Crear" @submit="save" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { createProduct } from '../../services/productService'
import ProductForm from './ProductForm.vue'

const router = useRouter()

const save = async (data) => {
  await createProduct(data)
  router.push('/productos')
}
</script>
