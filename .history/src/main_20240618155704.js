import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Assuming you have a router setup
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Import BootstrapVue and BootstrapVue CSS

import "bootstrap-vue/dist/bootstrap-vue.css";

// Create the Vue application instance
const app = createApp(App);

// Use plugins and mount the app to the DOM
app.use(router); // Use Vue Router
app.component(
  "VueDatePicker",
  VueDatePicker,
  "font-awesome-icon",
  FontAwesomeIcon
);
// Mount the Vue application instance to the DOM
app.mount("#app");

// Export the app if needed
export default app;
