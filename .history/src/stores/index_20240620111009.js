import { createStore } from "vuex";
import axios from "axios";
import jwtDecode from "jwt-decode";
import router from "@/router";

const baseURL = process.env.VUE_APP_BACKEND_URL || 'http://localhost:8000'; // Điều chỉnh baseURL cho phù hợp

const store = createStore({
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
    isLoggedIn: false,
  },
  mutations: {
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
  },
  actions: {
    async registerUser({ commit }, user) {
      try {
        const response = await axios.post(`${baseURL}/register`, user); // Gọi API đăng ký người dùng
        const newUser = response.data.user;

        localStorage.setItem("token", response.data.access_token); // Lưu token vào localStorage
        commit("setToken", response.data.access_token); // Lưu token vào store
        commit("setUser", newUser); // Lưu thông tin người dùng vào store

        router.push("/"); // Chuyển hướng sau khi đăng ký thành công
      } catch (error) {
        console.error("Error registering user:", error);
        throw error;
      }
    },
    async loginUser({ commit }, credentials) {
      try {
        const response = await axios.post(`${baseURL}/login`, credentials); // Gọi API đăng nhập
        const loggedInUser = response.data.user;

        localStorage.setItem("token", response.data.access_token); // Lưu token vào localStorage
        commit("setToken", response.data.access_token); // Lưu token vào store
        commit("setUser", loggedInUser); // Lưu thông tin người dùng vào store

        return true; // Trả về true nếu đăng nhập thành công
      } catch (error) {
        console.error("Error logging in:", error);
        return false; // Trả về false nếu đăng nhập thất bại
      }
    },
    loadUser({ commit }) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        commit("setUser", user);
      }
    },
    logoutUser({ commit }) {
      localStorage.removeItem("token");
      commit("clearUser");
      router.push("/"); // Chuyển hướng sau khi đăng xuất
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
