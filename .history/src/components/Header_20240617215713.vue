<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo-header.png" alt="" />
      </router-link>
    </div>
    <div class="action">
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
@import "bootstrap/dist/css/bootstrap.min.css";
/* Your component's styles go here */
.action_about {
  text-decoration: none;
  color: #000;
}
</style>