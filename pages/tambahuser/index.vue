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
          <h2>Tambah User</h2>
          <div class="my-3">
            <div class="mb-3">
              <form @submit.prevent="tambahUser">
                <select
                  v-model="form.tipe_user"
                  class="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option value="">Tipe User</option>
                  <option value="admin">Admin</option>
                  <option value="apoteker">Apoteker</option>
                  <option value="kasir">Kasir</option>
                </select>
                <input
                  v-model="form.username"
                  type="text"
                  class="form-control mb-3"
                  placeholder="User Name"
                />
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control mb-3"
                  placeholder="Email"
                />
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control mb-3"
                  placeholder="Password"
                />
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
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

const form = ref({
  tipe_user: "",
  username: "",
  email: "",
  password: "",
});

async function tambahUser() {
  const { data, error } = await supabase.auth.signUp({
    email: form.value.email,
    password: form.value.password,
    options: {
      data: {
        tipe_user: form.value.tipe_user,
        username: form.value.username,
      },
    },
  });
  if (error) throw error;
  if (data) {
    insertUser();
  }
}
async function insertUser() {
  const { error } = await supabase.from("User").insert({
    id: user.value.id,
    tipe_user: form.value.tipe_user,
    username: form.value.username,
    email: form.value.email,
    password: form.value.password,
  });
  if (error) throw error;
  if (data) navigateTo("/Login");
}
</script>
