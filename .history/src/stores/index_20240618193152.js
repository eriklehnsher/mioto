// src/store/index.js
import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    registerUser({ commit }, user) {
      // Save user to localStorage
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
      commit("clearUser");
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    getUser(state) {
      return state.user;
    },
  },
});

export default store;
