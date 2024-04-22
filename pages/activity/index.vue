<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <Navbar />
      </div>

      <div class="col-lg-10 px-5 py-4">
        <div class="row">
          <h2 class="col-lg-3">Log Activity</h2>
        </div>
        <div class="my-3">
          <input
            v-model="keyword"
            type="search"
            class="form-control rounded-5"
            placeholder="cari obat"
          />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Email</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Waktu</th>
              <th scope="col">Aktivitas</th>
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
