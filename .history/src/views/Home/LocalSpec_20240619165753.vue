<template>
  <div class="main">
    <h1>Địa Điểm Nổi Bật</h1>
    <div class="local-slide">
      <Carousel :items-to-show="3" :wrap-around="true">
        <!-- Slide 1 -->
        <Slide key="slide1">
          <a href="#">Ha Noi</a>
        </Slide>
        <Slide key="slide1">
          <a href="#">Ha Noi</a>
        </Slide>
        <Slide key="slide1">
          <a href="#">Ha Noi</a>
        </Slide>
        <Slide key="slide1">
          <a href="#">Ha Noi</a>
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

</style>
  