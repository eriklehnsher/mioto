<template>
  <div class="main">
    <h1>Địa Điểm Nổi Bật</h1>
    <div class="local-slide">
      <Carousel :items-to-show="4" :wrap-around="true">
        <!-- Slide 1 -->
        <Slide key="slide1">
          <a class="hanoi" href="#">Ha Noi</a>
        </Slide>
        <Slide key="slide2">
          <a class="danang" href="#">Ha Noi</a>
        </Slide>
        <Slide key="slide3">
          <a class="datlat" href="#">Ha Noi</a>
        </Slide>
        <Slide key="slide4">
          <a class="hcm" href="#">Ha Noi</a>
        </Slide>

        <!-- Slide 2 -->

        <!-- Addons -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <!-- Modal component -->
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


  .hanoi {
    background-image: url("./images/localspec/HaNoi_v2.jpg");
  }
  .danang {
    background-image: url("./images/localspec/DaNang_v2.jpg");
  }
  .datlat {
    background-image: url("./images/localspec/DaLat_v2.jpg");
  }
  .hcm {
    background-image: url("./images/localspec/HoChiMinh_v2.jpg");
  }
</style>
  