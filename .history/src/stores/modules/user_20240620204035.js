import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOAD_USER,
  LOGOUT_USER,
  SET_USER,
  SET_TOKEN,
  CLEAR_USER,
  IS_AUTHENTICATED,
  GET_USER,
} from "../constants";

const state = {
  user: null,
  token: localStorage.getItem("token") || "",
  isLoggedIn: !!localStorage.getItem("token"),
};

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
    state.isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(user));
  },
  [SET_TOKEN](state, token) {
    state.token = token;
  },
  [CLEAR_USER](state) {
    state.user = null;
    state.isLoggedIn = false;
    state.token = "";
  },
};

const actions = {
  async [REGISTER_USER]({ commit }, user) {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/register",
        user
      );
      console.log("user_data:", response);
      const accessToken = response.data.access_token;
      console.log("access_token:", accessToken);
      const decodedToken = jwtDecode(accessToken);

      localStorage.setItem("token", accessToken);
      commit(SET_TOKEN, accessToken);

      commit(SET_USER, {
        id: decodedToken.user_id,
        username: decodedToken.username,
        email: decodedToken.email,
        role: decodedToken.role,
      });

      return true;
    } catch (error) {
      console.error("Error registering user:", error);
      return false;
    }
  },

  async [LOGIN_USER]({ commit }, credentials) {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login",
        credentials
      );
      console.log("login_data:", response);

      const accessToken = response.data.access_token;
      console.log("access_token:", accessToken);
      const decodedToken = jwtDecode(accessToken);

      localStorage.setItem("token", accessToken);
      console.log("decodedToken:", decodedToken);
      commit(SET_TOKEN, accessToken);

      commit(SET_USER, {
        id: decodedToken.user_id,
        username: decodedToken.username,
        email: decodedToken.email,
        role: decodedToken.role,
      });

      return true;
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  },

  [LOAD_USER]({ commit }) {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      commit(SET_TOKEN, token);
      commit(SET_USER, {
        id: decodedToken.user_id,
        username: decodedToken.username,
        email: decodedToken.email,
        role: decodedToken.role,
      });
    }
  },

  [LOGOUT_USER]({ commit }) {
    localStorage.removeItem("token");
    commit(CLEAR_USER);
  },
};

const getters = {
  [IS_AUTHENTICATED](state) {
    return !!state.user;
  },
  [GET_USER](state) {
    return state.user;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
