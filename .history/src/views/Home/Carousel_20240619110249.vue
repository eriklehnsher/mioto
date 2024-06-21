<template>
  <div class="carousel-container container">
    <b-carousel
      id="carouselExampleDark"
      v-model="currentSlide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :img-src="slide.image"
      >
        <h5>{{ slide.title }}</h5>
        <p>{{ slide.text }}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: require('@/assets/images/promo1.jpg'),
          title: "First slide label",
          text: "Some representative placeholder content for the first slide."
        },
        {
          image: require('@/assets/images/promo2.jpg'),
          title: "Second slide label",
          text: "Some representative placeholder content for the second slide."
        },
        {
          image: require('@/assets/images/promo3.jpg'),
          title: "Third slide label",
          text: "Some representative placeholder content for the third slide."
        }
      ]
    };
  },
  methods: {
    onSlideStart() {
      // Handle slide start event if needed
    },
    onSlideEnd() {
      // Handle slide end event if needed
    }
  }
};
</script>

<style scoped>
.carousel-container {
  padding: 20px 0;
}
.carousel-item img {
  border-radius: 16px;
}
.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  padding: 10px;
}
</style>
