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
        <div class="card">
          <div class="row">
            <h2 class="col-lg-3">Transaksi</h2>
            <div class="col-lg-9">
              <nuxt-link to="/riwayattransaksi">
                <button type="button" class="btn btn-primary me-5">
                  Riwayat Transaksi
                </button>
              </nuxt-link>
            </div>
          </div>
          <div class="my-3">
            <div class="mb-3">
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <select
                      class="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option selected>Tipe Resep</option>
                      <option value="resep">Resep</option>
                      <option value="nonresep">Non resep</option>
                    </select>
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="No Resep"
                    />
                    <input
                      type="date"
                      class="form-control mb-3"
                      placeholder="Tgl Resep"
                    />
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="Nama Pasien"
                    />
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <div class="col-lg-6">
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="Nama Dokter"
                    />
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="Nama Obat"
                    />
                    <input
                      type="number"
                      class="form-control mb-3"
                      placeholder="Harga"
                    />
                    <input
                      type="number"
                      class="form-control mb-3"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>
