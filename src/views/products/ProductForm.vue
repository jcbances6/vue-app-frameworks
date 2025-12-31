<template>
  <form @submit.prevent="submit">
    <div>
      <label>Nombre</label>
      <input type="text" v-model="form.name" required />
    </div>

    <div>
      <label>Precio</label>
      <input type="number" v-model="form.price" required />
    </div>

    <div>
      <label>Categoría</label>
      <select v-model="form.category_id" required>
        <option value="">Seleccione</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <button type="submit">{{ submitText }}</button>
  </form>
</template>

<script setup>
import { reactive, watch, onMounted, ref } from 'vue'
import { getCategories } from '@/services/categoryService'

const props = defineProps({
  modelValue: Object,
  submitText: {
    type: String,
    default: 'Guardar'
  }
})

const emit = defineEmits(['submit'])

const categories = ref([])

const form = reactive({
  name: '',
  price: '',
  category_id: ''
})

onMounted(async () => {
  const response = await getCategories()
  categories.value = response.data
})

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      form.name = value.name
      form.price = value.price
      form.category_id = value.category_id
    }
  },
  { immediate: true }
)

const submit = () => {
  emit('submit', { ...form })
}
</script>
