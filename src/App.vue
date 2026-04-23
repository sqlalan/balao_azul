<template>
  <div>
    <!-- Menu de navegação -->
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/sobre">sobre</router-link>
      <router-link to="/contato">contato</router-link>
    </nav>

    <!-- Aqui aparece o conteúdo da página -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>