<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo-header.png" alt="" />
        </router-link>
      </div>
      <div class="actions d-flex">
        <router-link class="action" to="/about">
          <p>Về Chúng tôi</p>
        </router-link>
        <router-link class="action" to="/vender">
          <p>Trở thành Chủ Xe</p>
        </router-link>
        <router-link class="action" to="/register">
          <p>Đăng Ký</p>
        </router-link>
        <router-link class="action_login" to="/login">
          <p>Đăng Nhập</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // Your component's logic goes here
};
</script>

<style scoped>
/* Your component's styles go here */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
</style>