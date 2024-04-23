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
        <h2>Tambah Obat</h2>
        <div class="my-3">
          <div class="mb-3">
            <form @submit.prevent="kirimData">
              <input
                v-model="form.Kode_Obat"
                type="text"
                class="form-control mb-3"
                placeholder="Kode Obat"
              />
              <input
                v-model="form.Nama_Obat"
                type="text"
                class="form-control mb-3"
                placeholder="Nama Obat"
              />
              <label for="">Expired Date</label>
              <input
                v-model="form.Expired_Date"
                type="date"
                class="form-control mb-3"
                placeholder="Expired Date"
              />
              <input
                v-model="form.Jumlah"
                type="number"
                class="form-control mb-3"
                placeholder="Jumlah"
              />
              <input
                v-model="form.Harga"
                type="number"
                class="form-control mb-3"
                placeholder="Harga Per Unit"
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

const form = ref({
  Kode_Obat: "",
  Nama_Obat: "",
  Expired_Date: "",
  Jumlah: "",
  Harga: "",
});

const kirimData = async () => {
  const { error } = await supabase.from("Tbl_Obat").insert([form.value]);
  if (!error) navigateTo("/obat");
};
</script>
