import { defineNuxtConfig } from "nuxt/config";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  privateRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  //--------------vuetify config------------------
  css: ["vuetify/lib/styles/main.sass"],
  build: { transpile: ["vuetify"] },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
