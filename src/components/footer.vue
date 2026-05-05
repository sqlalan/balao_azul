<template>
  <footer class="footer">
    <div class="footer_redes">
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
    </div>
    <div class="footer_links">
      <a href="#">Política de Privacidade</a>
      <a href="#">Termos de Uso</a>
    </div>
    <div class="footer_copyright">
      <p>&copy; 2026 APEAU. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background: #333;
  color: white;
}
</style>
