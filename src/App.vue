<template>
  <header-component />
  <main class="page-container">
    <router-view />
  </main>
  <footer-component />
</template>

<script>
import HeaderComponent from './components/header.vue';
import FooterComponent from './components/footer.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
body,html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>