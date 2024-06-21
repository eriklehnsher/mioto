import { createStore } from "vuex";
import axiosConfig from "@/services/axiosConfig"; // Đảm bảo đường dẫn đến axiosConfig.js của bạn là chính xác
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
    async registerUser({ commit }, user) {
      try {
        const response = await axiosConfig.post("/user/register", user); // Điều chỉnh đường dẫn API và dữ liệu gửi lên tùy theo backend của bạn
        commit("setUser", response.data); // Lưu thông tin người dùng vào state
        localStorage.setItem("user", JSON.stringify(response.data)); // Lưu thông tin người dùng vào localStorage
        router.push("/"); // Chuyển hướng sau khi đăng ký thành công
        return true;
      } catch (error) {
        console.error("Error registering user:", error);
        return false;
      }
    },
    async loginUser({ commit }, credentials) {
      try {
        const response = await axiosConfig.post("/user/login", credentials); // Điều chỉnh đường dẫn API và dữ liệu gửi lên tùy theo backend của bạn
        commit("setUser", response.data); // Lưu thông tin người dùng vào state
        localStorage.setItem("user", JSON.stringify(response.data)); // Lưu thông tin người dùng vào localStorage
        return true;
      } catch (error) {
        console.error("Error logging in:", error);
        return false;
      }
    },
    loadUser({ commit }) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        commit("setUser", user);
      }
    },
    logoutUser({ commit }) {
      localStorage.removeItem("user");
      commit("clearUser");
      router.push("/");
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
