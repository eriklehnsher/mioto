import { createStore } from "vuex";

export default createStore({
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
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    loginUser({ commit }, user) {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === user.email && storedUser.password === user.password) {
            commit("setUser", storedUser);
            return true;
        } else {
            return false;
        }
  },
});

