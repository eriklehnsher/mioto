<template>
  <div class="main">
    <h1>Địa Điểm Nổi Bật</h1>
    <div class="local-slide">
      <Carousel :items-to-show="4" :wrap-around="true">
        <!-- Slide 1 -->
        <Slide key="slide1">
          <a class="location-slide hanoi" href="#">Hà Nội</a>
        </Slide>
        <Slide key="slide2">
          <a class="location-slide danang" href="#">Đà Nẵng</a>
        </Slide>
        <Slide key="slide3">
          <a class="location-slide dalat" href="#">Đà Lạt</a>
        </Slide>
        <Slide key="slide4">
          <a class="location-slide hcm" href="#">TP. Hồ Chí Minh</a>
        </Slide>

        <!-- Addons -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "IndividualSlides",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.main {
  padding: 20px;
  text-align: center;
  background-color:#fff;
}

h1 {
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

.local-slide {
  position: relative;
}

.location-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 90%;
  border-radius: 15px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;
  font-size: 1.5em;
  text-transform: uppercase;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  margin: 0 10px;
}

.location-slide:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.hanoi {
  background-image: url("./images/localspec/HaNoi_v2.jpg");
}

.danang {
  background-image: url("./images/localspec/DaNang_v2.jpg");
}

.dalat {
  background-image: url("./images/localspec/DaLat_v2.jpg");
}

.hcm {
  background-image: url("./images/localspec/HoChiMinh_v2.jpg");
}
</style>
