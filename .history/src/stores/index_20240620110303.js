// src/store/index.js

import { createStore } from 'vuex';
import axiosConfig from '@/services/axiosConfig'; // Đảm bảo đường dẫn đúng đến axiosConfig.js
import jwtDecode from 'jwt-decode';


const store = createStore({
  state: {
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || '',
    userId: localStorage.getItem('user_id') || '',
  },
  getters: {
    isAuthenticated: (state) => state.token !== '',
    getRole: (state) => state.role,
    getUserId: (state) => state.userId,
  },
  mutations: {
    AUTH_REQUEST: (state, payload) => {
      state.token = payload.token;
      state.role = payload.role;
    },
    AUTH_LOGOUT: (state) => {
      state.token = '';
      state.role = '';
    },
  },
  actions: {
    AUTH_REQUEST: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axiosConfig
          .post('/user/login', payload.data)
          .then((response) => {
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('role', jwtDecode(response.data.access_token).role);

            commit('AUTH_REQUEST', {
              token: response.data.access_token,
              role: jwtDecode(response.data.access_token).role,
            });
            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            reject(error);
          });
      });
    },
    AUTH_LOGOUT: ({ commit }) => {
      return new Promise((resolve) => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        commit('AUTH_LOGOUT');
        resolve();
      });
    },
    SEARCH: ({ commit }, searchTerm) => {
      return new Promise((resolve, reject) => {
        axiosConfig
          .get(`/search?term=${searchTerm}`)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

export default store;
