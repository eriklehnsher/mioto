import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Assuming you have a router setup
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import store from "./stores/index.js";
// axios
import axios from "axios";
import VueAxios from "vue-axios";

library.add(fas, far, fab);
dom.watch();
// Create the Vue application instance
const app = createApp(App);


// Use plugins and mount the app to the DOM
app.use(store); // Use Vuex store
app.use(router); // Use Vue Router
app.use(VueAxios, axios);
app.use(BootstrapVue);
app.use(IconsPlugin);
app.component("VueDatePicker", VueDatePicker);
app.component("font-awesome-icon", FontAwesomeIcon);
store.dispatch("loadUser");
// Mount the Vue application instance to the DOM
app.mount("#app");

// Export the app if needed
export default app;
