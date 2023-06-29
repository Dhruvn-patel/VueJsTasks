import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import store from "./store";
const vuetify = createVuetify({
  components,
  directives,
});
const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};
const app = createApp(App);

app
  .use(router)
  .use(VueSweetalert2, options)
  .use(store)
  .use(vuetify)
  .mount("#app");
