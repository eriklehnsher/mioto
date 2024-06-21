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
        @click="openModal(index)"
      >
        <h5>{{ slide.title }}</h5>
        <p>{{ slide.text }}</p>
      </b-carousel-slide>
    </b-carousel>

    <!-- Modals for each slide -->
    <b-modal
      v-for="(slide, index) in slides"
      :key="'modal-' + index"
      :id="'modal-' + index"
      title="Slide Details"
      hide-footer
    >
      <img :src="slide.image" class="d-block w-100" alt="Slide image">
      <h5>{{ slide.title }}</h5>
      <p>{{ slide.text }}</p>
    </b-modal>
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
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    openModal(index) {
      this.$bvModal.show('modal-' + index);
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
