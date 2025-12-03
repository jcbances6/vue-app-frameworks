<template>
  <div>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/categorias">Categorias</RouterLink>
      <RouterLink to="/productos">Productos</RouterLink>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

</style>
