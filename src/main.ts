import { createApp } from "vue";
import { OhVueIcon } from "oh-vue-icons";
import "./style.css";
import App from "./App.vue";
import "./icons";
import router from "./router";

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.use(router)

app.mount("#app")