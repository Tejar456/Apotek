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
        <h2>Tambah User</h2>
        <div class="my-3">
          <div class="mb-3">
            <form @submit.prevent="tambahUser">
              <select
                v-model="tipe_user"
                class="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Tipe User</option>
                <option value="admin">Admin</option>
                <option value="apoteker">Apoteker</option>
                <option value="kasir">Kasir</option>
              </select>
              <input
                v-model="username"
                type="text"
                class="form-control mb-3"
                placeholder="User Name"
              />
              <input
                v-model="email"
                type="email"
                class="form-control mb-3"
                placeholder="Email"
              />
              <input
                v-model="password"
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
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const tipe_user = ref("");
const username = ref("");
const email = ref("");
const password = ref("");

async function tambahUser() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value,
        tipe_user: tipe_user.value,
      },
    },
  });
  if (data) {
    const { error } = await supabase.auth.signOut();
    navigateTo("/login");
  }
}
</script>
