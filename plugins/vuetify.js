import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // your config will come here
    components,
  });

  nuxtApp.vueApp.use(vuetify);
});
