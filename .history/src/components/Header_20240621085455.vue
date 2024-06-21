<template>
  <div class="Header">
    <div class="header container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/logo-header.png" alt="" />
        </router-link>
      </div>
      <div class="actions d-flex">
        <router-link class="action" to="/about">
          <p>Về Chúng tôi</p>
        </router-link>
        <p style="font-weight: 100">|</p>
        <router-link class="action" to="/vender-register">
          <p>Trở thành Chủ Xe</p>
        </router-link>
        <p style="font-weight: 100">|</p>

        <!-- Kiểm tra isLoggedIn để hiển thị dropdown hoặc đăng ký đăng nhập -->
        <div
          class="header__infoAuth d-flex align-items-center ml-40px gap-40px"
          v-if="!isLogin"
        >
          <p class="header__infoAuth--login mb-0 pointer" @click="goToLogin()">
            Đăng nhập
          </p>
          <div class="header__infoAuth--register">
            <p
              class="header__infoAuth--register-button mb-0 pointer"
              @click="goToRegister()"
            >
              Đăng ký
            </p>
          </div>
        </div>
        <div v-else>
          <b-dropdown id="dropdown-user" :text="userName" class="m-md-2">
            <b-dropdown-item>
              <router-link to="/portfolio/user-info" class="">
                Thông tin cá nhân
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item v-if="role == 'admin'">
              <router-link to="/portfolio/list-users" class="">
                Quản lý thành viên
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item v-if="role == 'admin'">
              <router-link to="/portfolio/list-vendors" class="">
                Quản lý chủ xe
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item v-if="role !== 'customer'">
              <router-link to="/portfolio/list-cars" class="">
                Quản lý xe
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item v-if="role == 'customer'">
              <router-link to="/portfolio/user-list-booking" class="">
                Lịch sử đặt xe
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item v-if="role !== 'customer'">
              <router-link to="/portfolio/vendor-list-booking" class="">
                Quản lý đặt xe
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { LOGOUT_USER, LOAD_USER, IS_AUTHENTICATED } from "../stores/constants";

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      isAuthenticated: IS_AUTHENTICATED,
    }),
    ...mapState({ user: (state) => state.user.user }),

    isLoggedIn() {
      return !!localStorage.getItem("token");
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    ...mapActions({ logoutUser: LOGOUT_USER, loadUser: LOAD_USER }),
    handleLogout() {
      this.logoutUser().then(() => {
        window.location.replace("/");
      });
    },

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    closeDropdown() {
      this.isDropdownOpen = false;
    },

    checkToken() {
      const token = localStorage.getItem("token");
      if (token) {
        this.loadUser();
      }
    },
  },
  watch: {
    isAuthenticated(newValue) {
      if (newValue) {
        this.checkToken();
      }
    },
  },
  created() {
    this.checkToken();
  },
};
</script>

<style scoped>
/* Your component's styles go here */
.Header {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  font-weight: 700;
  font-size: 14px;
}
.header p {
  margin: 0;
}
.logo img {
  width: 200px;
}
.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.action {
  text-decoration: none;
  color: #000;
}
.action_login {
  text-decoration: none;
  color: #000;
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #000;
}

/* Dropdown styles */
.dropdown {
  position: relative;
  cursor: pointer;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  padding: 8px 0;
  top: 100%;
  right: 0;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown-content button {
  width: 100%;
  padding: 10px;
  text-align: left;
  background-color: inherit;
  border: none;
  cursor: pointer;
}
.dropdown-content button:hover {
  background-color: #ddd;
}
</style>
