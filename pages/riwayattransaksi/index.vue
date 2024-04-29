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
            <h2 class="col-lg-3">Riwyat Transaksi</h2>
          </div>
          <table class="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>No Transaksi</td>
                <td>Tanggal Transaksi</td>
                <td>Quantity</td>
                <td>Total Bayar</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(transaksi, i) in Transaksi" :key="i">
                <td>{{ i + 1 }}.</td>
                <td>{{ transaksi.No_Transaksi }}</td>
                <td>{{ transaksi.Tgl_Transaksi }}</td>
                <td>{{ transaksi.Quantity }}</td>
                <td>{{ transaksi.Total_Bayar }}</td>
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

const Transaksi = ref([]);

const getData = async () => {
  const { data, error } = await supabase.from("Tbl_Transaksi").select(`*`);
  if (data) Transaksi.value = data;
};

onMounted(() => {
  getData();
});
</script>
