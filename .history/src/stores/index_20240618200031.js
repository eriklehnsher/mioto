import { createStore } from 'vuex';
import router from '../router';
const store = createStore({
  state: {
    isLoggedIn: false,
    user: null,
  },
  mutations: {
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  actions: {
    loginUser({ commit }, user) {
      // Assume authentication logic here
      if (user.username === 'admin' && user.password === 'admin') {
        commit('login', user);
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    },
    logoutUser({ commit }) {
      commit('logout');
      localStorage.removeItem('user');
      router.push('/');
    },
    loadUser({ commit }) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        commit('login', user);
      }
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    getUser: state => state.user,
  },
});

export default store;
