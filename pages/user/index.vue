<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <span v-if="user">
          <Navbar v-if="user.user_metadata.tipe_user == 'admin'" />
          <Apoteker v-if="user.user_metadata.tipe_user == 'apoteker'" />
          <NavbarKasir v-if="user.user_metadata.tipe_user == 'kasir'" />
        </span>
      </div>

      <div class="col-lg-10 px-5 py-4">
        <div class="row">
          <h2 class="col-lg-3">Kelola User</h2>
          <div class="col-lg-9">
            <nuxt-link to="/tambahuser">
              <button type="button" class="btn btn-primary me-5">Tambah</button>
            </nuxt-link>
            <button type="button" class="btn btn-primary me-5">Edit</button>
            <button type="button" class="btn btn-primary me-5">Hapus</button>
          </div>
        </div>
        <div class="my-3">
          <input
            type="search"
            class="form-control rounded-5"
            placeholder="cari obat"
          />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>
