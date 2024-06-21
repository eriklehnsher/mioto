import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Assuming you have a router setup
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import store from "./stores/index.js";
// axios
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// Import BootstrapVueNext
import BootstrapVueNext from "bootstrap-vue-next";
library.add(fas, far, fab);
dom.watch();
// Create the Vue application instance
const app = createApp(App);

// Use plugins and mount the app to the DOM
app.use(store); // Use Vuex store
app.use(router); // Use Vue Router
app.use(VueAxios, axios);
app.use(BootstrapVueNext);
app.component("VueDatePicker", VueDatePicker);
app.component("font-awesome-icon", FontAwesomeIcon);
store.dispatch("loadUser");
// Mount the Vue application instance to the DOM
app.mount("#app");

// Export the app if needed
export default app;
