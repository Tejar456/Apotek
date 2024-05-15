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
            <h2>Edit Obat</h2>
            <div class="my-3">
              <div class="mb-3">
                <form @submit.prevent="editData">
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
                  <label for="expiredDate">Expired Date</label>
                  <input
                    v-model="form.Expired_Date"
                    type="date"
                    class="form-control mb-3"
                    placeholder="Expired Date"
                    id="expiredDate"
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
                <p v-if="error" class="text-danger">{{ error }}</p>
                <p v-if="success" class="text-success">{{ success }}</p>
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
  const router = useRouter();
  const route = useRoute();

  const form = ref({
    Kode_Obat: "",
    Nama_Obat: "",
    Expired_Date: "",
    Jumlah: "",
    Harga: "",
  });
  
  const error = ref(null);
  const success = ref(null);
  
  const obatId = route.params.id; 
  
  async function editData() {
    error.value = null;
    success.value = null;
  
    const { data, error: updateError } = await supabase
      .from("Tbl_Obat")
      .update(form.value)
      .eq('id', obatId);
  
    if (updateError) {
      error.value = "Failed to update the record: " + updateError.message;
    } else {
      success.value = "Record updated successfully!";
      form.value = {
        Kode_Obat: "",
        Nama_Obat: "",
        Expired_Date: "",
        Jumlah: "",
        Harga: "",
      };
      setTimeout(() => router.push("/obat"), 2000);
    }
  }
  </script>