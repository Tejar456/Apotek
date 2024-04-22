<template>
  <div class="nav">
    <div class="logo">
      <img src="~/assets/logo.png" alt="" />
      <p class="mt-3 ms-2">Apotek XYZ</p>
    </div>
    <nav>
      <nuxt-link to="obat">
        <p>Kelola Obat</p>
      </nuxt-link>
      <nuxt-link to="resep">
        <p>Kelola Resep</p>
      </nuxt-link>
    </nav>
    <div>
      <p>Logout</p>
    </div>
  </div>
</template>

<style scoped>
.nav {
  width: 17%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #0066c5;
  height: 100vh;
  padding-left: 30px;
  position: fixed;
}

.nav p {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
  margin-top: 10px;
}
.logo img {
  width: 80px;
}
</style>
