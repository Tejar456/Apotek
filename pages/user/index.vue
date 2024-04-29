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
            <h2 class="col-lg-3">Kelola user</h2>
            <div class="col-lg-9">
              <nuxt-link to="/tambahuser">
                <button type="button" class="btn btn-primary me-5">
                  Tambah
                </button>
              </nuxt-link>
            </div>
          </div>

          <table class="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>User Name</td>
                <td>Tipe User</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in User" :key="i">
                <td>{{ i + 1 }}.</td>
                <td>{{ user.username }}</td>
                <td>{{ user.tipe_user }}</td>
                <td>{{ user.email }}</td>
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

const User = ref([]);

const getUser = async () => {
  const { data, error } = await supabase.from("User").select(`*`);
  if (data) User.value = data;
};

onMounted(() => {
  getUser();
});
</script>
