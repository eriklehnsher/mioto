import axios from 'axios';
import jwtDecode from 'jwt-decode';

const state = {
  user: null,
  token: localStorage.getItem('token') || '',
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
  setToken(state, token) {
    state.token = token;
  },
  clearUser(state) {
    state.user = null;
    state.isLoggedIn = false;
    state.token = '';
  },
};

const actions = {
  async registerUser({ commit }, user) {
    try {
      const response = await axios.post('http://localhost:8000/user/register', user);
      const accessToken = response.data.access_token;
      const decodedToken = jwtDecode(accessToken);

      localStorage.setItem('token', accessToken);
      commit('setToken', accessToken);

      commit('setUser', {
        id: decodedToken.user_id,
        username: decodedToken.username,
        email: decodedToken.email,
        role: decodedToken.role,
      });

      return true;
    } catch (error) {
      console.error('Error registering user:', error);
      return false;
    }
  },

  async loginUser({ commit }, credentials) {
    try {
      const response = await axios.post('http://localhost:8000/user/login', credentials);
      const accessToken = response.data.access_token;
      const decodedToken = jwtDecode(accessToken);

      localStorage.setItem('token', accessToken);
      commit('setToken', accessToken);

      commit('setUser', {
        id: decodedToken.user_id,
        username: decodedToken.username,
        email: decodedToken.email,
        role: decodedToken.role,
      });

      return true;
    } catch (error) {
      console.error('Error logging in:', error);
      return false;
    }
  },

  loadUser({ commit }) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      commit('setToken', token);
      commit('setUser', {
        id: decodedToken.user_id,
        username: decodedToken.username,
        email: decodedToken.email,
        role: decodedToken.role,
      });
    }
  },

  logout({ commit }) {
    localStorage.removeItem('token');
    commit('clearUser');
  },
};

const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
  getUser(state) {
    return state.user;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
