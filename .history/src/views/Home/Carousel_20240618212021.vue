<template>
  <carousel :items-to-show="1.5">
    <slide v-for="promo in promos" :key="promo.id">
      <img :src="promo.image" alt="Promotion Image" />
      <h3>{{ promo.title }}</h3>
      <p>{{ promo.description }}</p>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
  
  <script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      promos: [
        {
          id: 1,
          image: "../Home/images/promos/promo1.jpg",
          title: "Promo 1",
          description: "Description for promo 1",
        },
        {
          id: 2,
          image: "../Home/images/promos/promo1.jpg",
          title: "Promo 2",
          description: "Description for promo 2",
        },
        {
          id: 3,
          image: "../Home/images/promos/promo1.jpg",
          title: "Promo 3",
          description: "Description for promo 3",
        },
        {
          id: 3,
          image: "../Home/images/promos/promo1.jpg",
          title: "Promo 3",
          description: "Description for promo 3",
        },
        // Thêm các ảnh promos khác vào đây
      ],
    };
  },
};
</script>
  