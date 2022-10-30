<template>
  <div>
    <v-alert type="info">Welcome Vuetify </v-alert>
    <v-btn @click="singIn">Sign in</v-btn>
    <v-btn @click="singOut">Sign out</v-btn>
    <pre>
      {{ credentials }}
    </pre>
    <br />
  </div>
</template>

<script setup>
const credentials = ref();
const singIn = async () => {
  const email = "sahsasrcmoradiuk@gmail.com";
  const password = "123456";
  credentials.value = await signInUser(email, password);
};
const singOut = async () => {
  credentials.value = await signOutUser();
};
//onMounted(async () => {});
</script>
