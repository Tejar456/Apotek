<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <Navbar />
      </div>
      <div class="col-lg-10 px-5 py-4">
        <h2>Tambah Resep</h2>
        <div class="my-3">
          <div class="mb-3">
            <form @submit.prevent="kirimData">
              <input
                v-model="form.no_resep"
                type="text"
                class="form-control mb-3"
                placeholder="No Resep"
              />
              <input
                v-model="form.tgl_resep"
                type="date"
                class="form-control mb-3"
                placeholder="Tanggal Resep"
              />
              <input
                v-model="form.nama_pasien"
                type="text"
                class="form-control mb-3"
                placeholder="Nama Pasien"
              />
              <input
                v-model="form.nama_dokter"
                type="text"
                class="form-control mb-3"
                placeholder="Nama Dokter"
              />
              <input
                v-model="form.nama_obat"
                type="text"
                class="form-control mb-3"
                placeholder="Nama Obat"
              />
              <input
                v-model="form.quantity"
                type="text"
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
</template>

<script setup>
const supabase = useSupabaseClient();

const form = ref({
  no_resep: "",
  tgl_resep: "",
  nama_pasien: "",
  nama_dokter: "",
  nama_obat: "",
  quantity: "",
});

const kirimData = async () => {
  console.log(form.value);
  const { error } = await supabase.from("Tbl_DataResep").insert([form.value]);
  if (!error) navigateTo("/resep");
};
</script>
