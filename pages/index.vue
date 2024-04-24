<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <span v-if="user">
          <Navbar v-if="user.user_metadata.tipe_user == 'admin'" />
          <Apoteker v-if="user.user_metadata.tipe_user == 'apoteker'" />
          <Kasir v-if="user.user_metadata.tipe_user == 'kasir'" />
        </span>
      </div>

      <div class="col-lg-10 px-5 py-4">
        <h1 class="welcome">
          Hallo Selamat Datang {{ user.user_metadata.username }} sebagai
          {{ user.user_metadata.tipe_user }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>

<style scoped>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
</style>
