import { createApp } from "vue";
import { OhVueIcon } from "oh-vue-icons";
import "./style.css";
import App from "./App.vue";
import "./icons";
import router from "./router";
import { ToastService } from "primevue";
import PrimeVue from "primevue/config";
import Material from "@primeuix/themes/material";

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {
      darkModeSelector: ".dark-app",
      cssLayer: false,
    },
  },
});
app.use(ToastService);
app.use(router);

app.mount("#app");
