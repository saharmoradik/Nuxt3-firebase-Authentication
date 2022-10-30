<template>
  <div>
    <v-alert type="info">Welcome Vuetify </v-alert>
    <v-btn @click="singIn" v-if="!firebaseUser">Sign in</v-btn>
    <v-btn @click="singOut" v-if="firebaseUser">Sign out</v-btn>
    <div v-if="firebaseUser">
      <pre>
      {{ firebaseUser }}
    </pre
      >
    </div>
    <div v-else>
      <div class="d-flex justify-center">
        <v-card width="300px">
          <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4"
            >Message</v-card-title
          >
          <v-card-text>User signed out! </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const credentials = ref();
const singIn = async () => {
  const email = "sahsasrcmoradiuk@gmail.com";
  const password = "123456";
  credentials.value = await signInUser(email, password);
};
const singOut = async () => {
  credentials.value = await signOutUser();
};
</script>
