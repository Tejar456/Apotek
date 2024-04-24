export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser();

  if (user.value?.user_metadata.tipe_user != 'admin') {
    return navigateTo("/404");
  }
});
