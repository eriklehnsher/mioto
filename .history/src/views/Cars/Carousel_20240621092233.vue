<template>
  <div>
    <Carousel
      :navigationEnabled="true"
      :perPage="2"
      @slideStart="onSlideStart"
      @slideEnd="onSlideEnd"
    >
      <Slide v-for="(image, index) in car.images" :key="index">
        <img :src="image.src" class="w-100 h-100" />
      </Slide>
    </Carousel>
  </div>
</template>
  
  <script>
import { defineComponent, ref } from "vue";
import { Carousel, Slide } from "vue-carousel";

export default defineComponent({
  components: {
    Carousel,
    Slide,
  },
  props: {
    car: Object,
  },
  setup() {
    const sliding = ref(false);

    const onSlideStart = () => {
      sliding.value = true;
    };

    const onSlideEnd = () => {
      sliding.value = false;
    };

    return {
      sliding,
      onSlideStart,
      onSlideEnd,
    };
  },
});
</script>
  
  <style scoped>
.carousel-3d-container {
  margin-top: 0px;
  background-color: white;
  border-color: white;
}
.carousel-3d-controls {
  background-color: white;
}
.carousel-3d-slide {
  background-color: white;
  border: 2px solid white;
  border-top: 0px;
}

.img {
  height: 300px;
}

.next {
  color: white;
}
</style>
  