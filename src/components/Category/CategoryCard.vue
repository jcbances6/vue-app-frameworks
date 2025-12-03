<template>
  <div class="category-card">
    <h3> {{ category.name }} </h3>
    <p> {{ category.id }} </p>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.category-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
