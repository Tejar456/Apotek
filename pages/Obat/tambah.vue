<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <Navbar />
      </div>
      <div class="col-lg-10 px-5 py-4">
        <h2>Tambah Obat</h2>
        <div class="my-3">
          <div class="mb-3">
            <form @submit.prevent="kirimData">
              <input
                v-model="form.kode_obat"
                type="text"
                class="form-control mb-3"
                placeholder="Kode Obat"
              />
              <input
                v-model="form.nama_obat"
                type="text"
                class="form-control mb-3"
                placeholder="Nama Obat"
              />
              <input
                v-model="form.expired_date"
                type="date"
                class="form-control mb-3"
                placeholder="Expired Date"
              />
              <input
                v-model="form.jumlah"
                type="text"
                class="form-control mb-3"
                placeholder="Jumlah"
              />
              <input
                v-model="form.harga"
                type="text"
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

const form = ref({
  kode_obat: "",
  nama_obat: "",
  expired_date: "",
  jumlah: "",
  harga: "",
});

const kirimData = async () => {
  console.log(form.value);
  const { error } = await supabase.from("Tbl_Obat").insert([form.value]);
  if (!error) navigateTo("/obat");
};
</script>
