// src/store/index.js
import { createStore } from "vuex";
import router from "@/router";
const store = createStore({
  state: {
    user: null,
    isLoggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    clearUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  actions: {
    registerUser({ commit }, user) {
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    loginUser({ commit }, user) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.username === user.username &&
        storedUser.password === user.password
      ) {
        commit("setUser", storedUser);
        return true;
      } else {
        return false;
      }
    },
    loadUser({ commit }) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        commit("setUser", user);
      }
    },
    logout({ commit }) {
      localStorage.removeItem("user");
      router.push("/");
      commit("clearUser");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
    getUser(state) {
      return state.user;
    },
  },
});

export default store;
