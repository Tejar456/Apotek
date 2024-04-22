<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <Navbar />
      </div>
      <div class="col-lg-10 px-5 py-4">
        <div class="row">
          <h2 class="col-lg-3">Transaksi</h2>
          <div class="col-lg-9">
            <nuxt-link to="/transaksi/riwayat">
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
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Tipe Resep"
                  />
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="No Resep"
                  />
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Tgl Resep"
                  />
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Nama Pasien"
                  />
                  <button type="submit" class="btn btn-primary">Submit</button>
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
                    type="text"
                    class="form-control mb-3"
                    placeholder="Harga"
                  />
                  <input
                    type="text"
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
</template>
