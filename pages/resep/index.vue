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
          <h2 class="col-lg-3">Kelola Resep</h2>
          <div class="col-lg-9">
            <nuxt-link to="/tambahresep">
              <button type="button" class="btn btn-primary me-5">Tambah</button>
            </nuxt-link>
            <button type="button" class="btn btn-primary me-5">Edit</button>
            <button type="button" class="btn btn-primary me-5">Hapus</button>
          </div>
        </div>
        <div class="my-3">
          <form @submit.prevent="getData" class="px-4">
            <input
              v-model="keyword"
              type="search"
              class="form-control rounded-pill"
              placeholder="Cari Buku"
            />
          </form>
        </div>
        <table class="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Tgl Resep</td>
              <td>No Resep</td>
              <td>Nama Dokter</td>
              <td>Nama Pasien</td>
              <td>Obat Resep</td>
              <td>Jumlah</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resep, i) in Resep" :key="i">
              <td>{{ i + 1 }}.</td>
              <td>{{ resep.Tgl_Resep }}</td>
              <td>{{ resep.No_Resep }}</td>
              <td>{{ resep.Nama_Dokter }}</td>
              <td>{{ resep.Nama_Pasien }}</td>
              <td>{{ resep.Obat_Resep }}</td>
              <td>{{ resep.Jumlah_Obat }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const Resep = ref([]);
const keyword = ref("");

const getPengunjung = async () => {
  const { data, error } = await supabase.from("Tbl_DataResep").select(`*`);
  if (data) Resep.value = data;
};

const getData = async () => {
  const { data, error } = await supabase
    .from("Tbl_Obat")
    .select(`*`)

    .ilike("Nama_Obat", `%${keyword.value}%`);
  if (data) {
    Resep.value = data;
  }
  if (error) throw error;
};

onMounted(() => {
  getPengunjung();
});
</script>
