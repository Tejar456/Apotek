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
            <h2 class="col-lg-3 mb-3">Log Activity</h2>
          </div>
          <table class="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>Tanggal</td>
                <td>Waktu</td>
                <td>Aktivitas</td>
                <td>user Name</td>
                <td>Nama</td>
                <td>tipe_user</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(logactivity, i) in Activity" :key="i">
                <td>{{ logactivity.id }}.</td>
                <td>{{ logactivity.Tanggal }}</td>
                <td>{{ logactivity.Waktu }}</td>
                <td>{{ logactivity.Aktivitas }}</td>
                <td>{{ logactivity.username }}</td>
                <td>{{ logactivity.nama }}</td>
                <td>{{ logactivity.tipe_user }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "adminauth",
});
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const Activity = ref([]);

const LogActivity = async () => {
  const { data, error } = await supabase
    .from("Tbl_LogActivity")
    .select(`*`)
    .order("id", { ascending: false });
  if (data) Activity.value = data;
};

onMounted(() => {
  LogActivity();
});
</script>
