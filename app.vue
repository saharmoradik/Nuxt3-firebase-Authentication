<template>
  <div>
    <v-alert type="info">Welcome Vuetify </v-alert>
    <v-btn @click="singIn">Sign in</v-btn>
    <v-btn @click="singOut">Sign out</v-btn>

    <br />
  </div>
</template>

<script setup>
const singIn = async () => {
  const email = "sahsasrcmoradiuk@gmail.com";
  const password = "123456";
  const credentials = await signInUser(email, password);
  console.log("credential", credentials);
};
const singOut = async () => {
  const result = await signOutUser();
  console.log(result);
};
//onMounted(async () => {});
</script>
