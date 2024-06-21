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
        <template v-if="isLoggedIn">
          <div class="btn-group" @click="toggleDropdown" ref="dropdownRef">
            <button
              class="  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user?.username }}
            </button>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
              <li>
                <router-link to="/profile" class="dropdown-item"
                  >Thông tin cá nhân</router-link
                >
              </li>
              <template v-if="user?.role === 'admin'">
                <li>
                  <router-link to="/admin-dashboard" class="dropdown-item"
                    >Dashboard Admin</router-link
                  >
                </li>
                <li>
                  <router-link to="/manage-users" class="dropdown-item"
                    >Quản lý người dùng</router-link
                  >
                </li>
              </template>
              <li>
                <button @click="handleLogout" class="dropdown-item">
                  Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <router-link class="action" to="/register">
            <p>Đăng Ký</p>
          </router-link>
          <p style="font-weight: 100">|</p>
          <router-link class="action_login" to="/login">
            <p>Đăng Nhập</p>
          </router-link>
        </template>
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
  },
  watch: {
    $route() {
      this.isDropdownOpen = false; // Close dropdown when route changes
    },
  },
  created() {
    // Load user information if token exists
    const token = localStorage.getItem("token");
    if (token) {
      this.loadUser();
    }
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

/* Bootstrap dropdown styles */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.show {
  display: block;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

.btn-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
</style>
