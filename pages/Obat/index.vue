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
            <h2 class="col-lg-3">Kelola Obat</h2>
            <div class="col-lg-9">
              <nuxt-link to="/tambahobat">
                <button type="button" class="btn btn-primary me-5">
                  Tambah
                </button>
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
                <td>kode Obat</td>
                <td>Nama Obat</td>
                <td>Expired</td>
                <td>Jumlah</td>
                <td>Harga</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(obat, i) in Obat" :key="i">
                <td>{{ i + 1 }}.</td>
                <td>{{ obat.Kode_Obat }}</td>
                <td>{{ obat.Nama_Obat }}</td>
                <td>{{ obat.Expired_Date }}</td>
                <td>{{ obat.Jumlah }}</td>
                <td>{{ obat.Harga }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const Obat = ref([]);
const keyword = ref("");

const getObat = async () => {
  const { data, error } = await supabase.from("Tbl_Obat").select(`*`);
  if (data) Obat.value = data;
};

const getData = async () => {
  const { data, error } = await supabase
    .from("Tbl_Obat")
    .select(`*`)

    .ilike("Nama_Obat", `%${keyword.value}%`);
  if (data) {
    Obat.value = data;
  }
  if (error) throw error;
};

onMounted(() => {
  getObat();
});
</script>
