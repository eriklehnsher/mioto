<template>
  <div class="home-banner container">
    <div class="banner-section">
      <h1>SONIC BOOKING - Đặt xe <br />dễ dàng vi vu khắp chốn</h1>
      <p>
        Trải nghiệm sự khác biệt
        <span class="highlight">từ hơn 8000 xe</span> gia đình đời mới khắp Việt
        Nam
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-banner {
  text-align: center;
  margin-top: 50px;
}
.banner-section {
  background-image: url("./images/bg-landing.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  border-radius: 16px;
}
.banner-section h1 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 20px;
}
.banner-section p {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}
.highlight {
  color: #0000ff;
}
</style>