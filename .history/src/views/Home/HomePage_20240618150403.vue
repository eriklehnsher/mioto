<template>
  <div class="home-banner container">
    <div class="banner-section">
      <div class="banner-section_child">
        <h1>SONIC BOOKING - Đặt xe <br />dễ dàng vi vu khắp chốn</h1>
        <p>
          Trải nghiệm sự khác biệt
          <span class="highlight">từ hơn 8000 xe</span> gia đình đời mới khắp
          Việt Nam
        </p>
        <div class="search-box">
          <CarSearch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarSearch from "@/views/Home/CarSearch.vue";
export default {
  name: "HomePage",
  components: {
    CarSearch,
  },
};
</script>

<style scoped>
.home-banner {
  text-align: center;
  margin-top: 50px;
  color: aliceblue;
}
.banner-section {
  background-image: url("./images/bg-landing.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
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
.banner-section .banner-section_child {
  position: relative;
  height: 600px;
  width: 90%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
}
.highlight {
  color: #0000ff;
}
.banner-section .search-box {
  position: relative;
  bottom: -50px;
  z-index: 3;
  margin-bottom: 20px;
}

.search-box {
  background-color: aliceblue;
  width: 70%;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  height: auto;
  box-shadow: 0 -3px 12px rgba(0, 0, 0, 0.1), 0 9px 12px rgba(75, 75, 75, 0.1);
}
</style>