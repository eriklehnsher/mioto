// src/stores/modules/user.js

import jwtDecode from "jwt-decode";
import axios from "axios";
import router from "@/router";

const baseURL = process.env.VUE_APP_BACKEND_URL || "http://localhost:8080";

const state = {
  user: null,
  token: localStorage.getItem("token") || "",
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
    state.token = "";
  },
};

const actions = {
  async loginUser({ commit }, credentials) {
    try {
      const response = await axios.post(`${baseURL}/login`, credentials);
      const { user, access_token: accessToken } = response.data;

      const decodedToken = jwtDecode(accessToken);

      localStorage.setItem("token", accessToken);
      commit("setToken", accessToken);

      commit("setUser", {
        id: decodedToken.user_id,
        username: user.username,
        email: user.email,
        role: decodedToken.role,
        // Add other necessary user info here
      });

      router.push("/");

      return true;
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  },
  // Other actions like registerUser, logoutUser, etc.
};

const getters = {
  isAuthenticated(state) {
    return state.isLoggedIn;
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
