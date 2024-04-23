<template>
  <div class="nav">
    <div class="logo">
      <img src="~/assets/logo.png" alt="" />
      <p class="mt-3 ms-2">Apotek XYZ</p>
    </div>
    <nav>
      <nuxt-link to="transaksi">
        <p>Transaksi</p>
      </nuxt-link>
    </nav>
    <div>
      <nuxt-link to="/logout">
        <button type="submit" class="btn btn-light mb-4">Logout</button>
      </nuxt-link>
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
  text-decoration: none;
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
