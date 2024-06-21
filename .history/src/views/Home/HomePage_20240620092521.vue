<template>
  <div class="home container">
    <div class="home-banner">
      <div class="banner-section">
        <div class="banner-section_child">
          <h1>SONIC BOOKING - Đặt xe <br />dễ dàng vi vu khắp chốn</h1>
          <p>
            Trải nghiệm sự khác biệt
            <span class="highlight">từ hơn 8000 xe</span> gia đình đời mới khắp
            Việt Nam
          </p>
        </div>
        <div class="search-box">
          <CarSearch />
        </div>
      </div>
    </div>
    <div class="home-promos">
      <h1>CHƯƠNG TRÌNH KHUYẾN MẠI</h1>
      <P>Nhận nhiều ưu đãi hấp dẫn từ SONIC</P>
      <Carousel />
    </div>
    <div class="modal__here">
      <ListCar />
    </div>
    <div class="localspec">
      <LocalSpec />
    </div>
    <div class="feature-section">
      <Features />
    </div>
    <div class="about-section d-flex">
      <img src="./images/about.jpg" alt="" srcset="" />
      <div class="about-content d-flex">
        <img src="./images/logo-header.png" alt="" srcset="" />
        <h1>
          Bạn muốn biết thêm<br />
          về Sonic?
        </h1>
        <p>
          Sonic kết nối khách hàng có nhu cầu thuê xe với hàng ngàn chủ xe ô tô
          ở TPHCM, Hà Nội & các tỉnh thành khác. Mioto hướng đến việc xây dựng
          cộng đồng người dùng ô tô văn minh & uy tín tại Việt Nam.
        </p>
        <router-link class="button" to="/about">  
          Tìm hiểu thêm
        </router-link>
      </div>
    </div>
    <div class="about-section d-flex">
      <div class="about-content d-flex">
        <i class="fa-solid fa-car"></i>
        <h1>
          Bạn muốn cho<br />
          thuê xe?
        </h1>
        <p>
          Hơn 5,000 chủ xe đang cho thuê hiệu quả trên Sonic Đăng ký trở thành
          đối tác của chúng tôi ngay hôm nay để gia tăng thu nhập hàng tháng.
        </p>
        <router-link class="button" to="/vender-register">
          Đăng ký ngay
        </router-link>
      </div>
      <img src="./images/about.jpg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import CarSearch from "@/views/Home/CarSearch.vue";
import Carousel from "@/views/Home/Carousel.vue";
import ListCar from "@/views/Home/ListCar.vue";
import LocalSpec from "./LocalSpec.vue";
import Features from "./Features.vue";
import "@/assets/css/button.css";
export default {
  name: "HomePage",
  components: {
    CarSearch,
    Carousel,
    ListCar,
    LocalSpec,
    Features,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;
}
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
  flex-direction: column;
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
  background-color: aliceblue;
  width: 70%;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  height: auto;
  box-shadow: 0 -3px 12px rgba(0, 0, 0, 0.1), 0 9px 12px rgba(75, 75, 75, 0.1);
}
.home-promos {
  margin-top: 100px;
}
.home-promo__carousel {
  margin-top: 20px;
  width: 100%;
  height: auto;
}
.about-section {
  margin-top: 100px;
  gap: 20px;
  border-radius: 20px;
  background-color: rgb(230, 255, 248);
  padding: 30px;
  align-items: center;
}
.about-section img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 170px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.about-content {
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.about-content img {
  width: 200px;
  height: 100px;
}
.about-content h1 {
  font-weight: 700;
  margin-bottom: 20px;
}
.about-content p {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  width: 60%;
}
.button {
  width: 50%;
}

</style>