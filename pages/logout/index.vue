<template>
  <div>
    <11>Logout</11>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

async function keluar (){
  const { error } = await supabase.auth.signOut()
  if(!error) navigateTo('/login')
}

async function insertLog() {
const user = useSupabaseUser()
const{ error } = await supabase.from('Tbl_LogActivity').insert([{
  Aktivitas : 'logout',
  username: user.value.user_metadata.username,
  nama: user.value.user_metadata.username,
  tipe_user: user.value.user_metadata.tipe_user,
}])
  if(!error) keluar()
}

onMounted(() => {
  insertLog()
})

</script>