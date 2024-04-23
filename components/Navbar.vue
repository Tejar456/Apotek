<template>
  <div class="nav">
    <div class="logo">
      <img src="~/assets/logo.png" alt="" />
      <p class="mt-3 ms-2">Apotek XYZ</p>
    </div>
    <nav>
      <nuxt-link to="/activity">
        <p>Log Activity</p>
      </nuxt-link>
      <nuxt-link to="/user">
        <p>Kelola User</p>
      </nuxt-link>
      <nuxt-link to="obat">
        <p>Kelola Obat</p>
      </nuxt-link>
      <nuxt-link to="laporan">
        <p>Kelola Laporan</p>
      </nuxt-link>
      <nuxt-link to="resep">
        <p>Kelola Resep</p>
      </nuxt-link>
      <nuxt-link to="transaksi">
        <p>Transaksi</p>
      </nuxt-link>
    </nav>
    <div>
      <!-- <form @submit.prevent="logout"> -->
      <nuxt-link to="/logout">
        <button type="submit" class="btn btn-light mb-4">Logout</button>
      </nuxt-link>
      <!-- </form> -->
    </div>
  </div>
</template>

<!-- <script setup>
const supabase = useSupabaseClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo('/login');
};
</script> -->

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
