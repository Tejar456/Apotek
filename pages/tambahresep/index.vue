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
          <h2>Tambah Resep</h2>
          <div class="my-3">
            <div class="mb-3">
              <form @submit.prevent="kirimData">
                <input
                  v-model="form.No_Resep"
                  type="text"
                  class="form-control mb-3"
                  placeholder="No Resep"
                />

                <input
                  v-model="form.Nama_Pasien"
                  type="text"
                  class="form-control mb-3"
                  placeholder="Nama Pasien"
                />
                <input
                  v-model="form.Nama_Dokter"
                  type="text"
                  class="form-control mb-3"
                  placeholder="Nama Dokter"
                />
                <input
                  v-model="form.Obat_Resep"
                  type="text"
                  class="form-control mb-3"
                  placeholder="Nama Obat"
                />
                <input
                  v-model="form.Jumlah_Obat"
                  type="number"
                  class="form-control mb-3"
                  placeholder="Quantity"
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
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const form = ref({
  No_Resep: "",
  Nama_Dokter: "",
  Nama_Pasien: "",
  Obat_Resep: "",
  Jumlah_Obat: "",
});

const kirimData = async () => {
  console.log(form.value);
  const { error } = await supabase.from("Tbl_DataResep").insert([form.value]);
  if (!error) navigateTo("/resep");
};
</script>
