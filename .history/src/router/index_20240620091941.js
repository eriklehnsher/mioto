import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/HomePage.vue";
import About from "../views/About.vue";
import Login from "../auth/Login.vue";
import Register from "../auth/Register.vue";
import VenderRegister from "../auth/VenderRegister.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/vender-register",
    name: "VenderRegister",
    component: VenderRegister,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
