<template>
  <div class="product-card">
    <h3> {{ product.name }} </h3>
    <p> ID: {{ product.id }} </p>
    <p> Precio: {{ product.price }} </p>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
