<template>
  <header class="navbar">
    <div class="navbar_logo">
        <img src="../assets/logo.png" alt="Logo do Site" class="navbar_logo_img">
    </div>
    <nav aria-label="Menu Principal">
        <ul class="navbar_lista">
            <li><router-link to="/" class="navbar_link">home</router-link></li>
            <li><router-link to="/sobre" class="navbar_link">sobre</router-link></li>
            <li><router-link to="/contato" class="navbar_link">contato</router-link></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header'
}   
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    padding: 0 1.5rem;
    height: 100px;
    border-bottom: 1px solid #444;
    gap: 1rem;
}

.navbar_logo {
    display: flex;
    align-items: center;
}

.navbar_lista {
    display: flex;
    align-items: center;
    gap: 5px;
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
