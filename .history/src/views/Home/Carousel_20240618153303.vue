<template>
  <div class="carousel-wrapper">
    <vue-slick-carousel class="carousel" :options="slickOptions">
      <div v-for="(promo, index) in promos" :key="index">
        <img :src="promo.image" alt="Promotion Image" />
        <h3>{{ promo.title }}</h3>
        <p>{{ promo.description }}</p>
      </div>
    </vue-slick-carousel>
  </div>
</template>
  
  <script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
      },
      promos: [
        {
          image: "path/to/image1.jpg",
          title: "Promo 1",
          description: "Description for promo 1",
        },
        {
          image: "path/to/image2.jpg",
          title: "Promo 2",
          description: "Description for promo 2",
        },
        {
          image: "path/to/image3.jpg",
          title: "Promo 3",
          description: "Description for promo 3",
        },
        // Thêm các chương trình khuyến mại khác vào đây
      ],
    };
  },
};
</script>
  
  <style scoped>
.carousel-wrapper {
  max-width: 800px; /* Điều chỉnh độ rộng tối đa của carousel */
  margin: auto; /* Canh giữa carousel */
}

.carousel img {
  max-width: 100%;
  height: auto;
}
</style>
  