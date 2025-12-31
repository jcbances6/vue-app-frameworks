<template>
  <form @submit.prevent="submit">
    <div>
      <label>Nombre</label>
      <input type="text" v-model="form.name" required />
    </div>

    <button type="submit">
      {{ submitText }}
    </button>
  </form>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  modelValue: Object,
  submitText: {
    type: String,
    default: 'Guardar'
  }
})

const emit = defineEmits(['submit'])

const form = reactive({
  name: ''
})

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      form.name = value.name
    }
  },
  { immediate: true }
)

const submit = () => {
  emit('submit', { ...form })
}
</script>
