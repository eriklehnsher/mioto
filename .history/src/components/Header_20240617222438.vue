<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo-header.png" alt="" />
      </router-link>
    </div>
    <div class="action d-flex">
      <router-link class="action_about" to="/about">
        <p>Về Chúng tôi</p>
      </router-link>
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
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: 700;
}
.logo img {
  width: 200px;
}
.action_about {
  text-decoration: none;
  color: #000;
}
</style>