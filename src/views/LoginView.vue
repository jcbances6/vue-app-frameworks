<template>
  <div>
    <h2>Login</h2>

    <form @submit.prevent="login">
      <div>
        <input v-model="email" type="email" placeholder="Email" />
      </div>

      <div>
        <input v-model="password" type="password" placeholder="Password" />
      </div>

      <button>Ingresar</button>

      <p v-if="loading">Cargando...</p>

      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const router = useRouter()

const login = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await axios.post('http://localhost:8000/api/v1/login', {
      email: email.value,
      password: password.value
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    localStorage.setItem('token', response.data.access_token)

    router.push('/categorias')

  } catch (e) {
    error.value = 'Credenciales incorrectas ' + e
  } finally {
    loading.value = false
  }
}
</script>
