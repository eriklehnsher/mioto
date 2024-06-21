import { createStore } from "vuex";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import router from "../router/index"; // Import router từ '@/router'

const baseURL = process.env.VUE_APP_BACKEND_URL || "http://localhost:8800"; // Điều chỉnh baseURL cho phù hợp

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
    async loginUser({ commit }, credentials) {
      try {
        const response = await axios.post(`${baseURL}/login`, credentials); // Gọi API đăng nhập
        const loggedInUser = response.data.user;
        const accessToken = response.data.access_token;

        // Giải mã JWT để lấy thông tin từ token
        const decodedToken = jwtDecode(accessToken);

        // Lưu token vào localStorage và store
        localStorage.setItem("token", accessToken);
        commit("setToken", accessToken);

        // Lưu thông tin người dùng vào store
        commit("setUser", {
          id: decodedToken.user_id,
          username: loggedInUser.username,
          email: loggedInUser.email,
          role: decodedToken.role,
          // Các thông tin khác cần lưu trữ
        });

        // Điều hướng người dùng về trang chủ
        router.push("/");

        return true; // Trả về true nếu đăng nhập thành công
      } catch (error) {
        console.error("Error logging in:", error);
        return false; // Trả về false nếu đăng nhập thất bại
      }
    },
    // Các actions khác như registerUser, loadUser, logoutUser
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
