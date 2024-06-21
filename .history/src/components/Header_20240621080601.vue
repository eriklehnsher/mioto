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
          <div class="dropdown">
            <p>{{ user.username }}</p>
            <div class="dropdown-content">
              <router-link to="/profile">Thông tin cá nhân</router-link>
              <template v-if="user.role === 'admin'">
                <router-link to="/admin-dashboard">Dashboard Admin</router-link>
              </template>
              <button @click="handleLogout">Đăng xuất</button>
            </div>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
  methods: {
    ...mapActions(["logoutUser", "loadUser"]),
    handleLogout() {
      this.logoutUser();
    },
    checkToken() {
      const token = localStorage.getItem("token");
      if (token) {
        this.loadUser();
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
}
.dropdown:hover .dropdown-content {
  display: block;
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
