<template>
  <div class="carousel-container container">
    <div class="row">
      <div class="col-md-4" v-for="(slide, index) in slides" :key="index">
        <div class="carousel-item" @click="openModal(index)">
          <img :src="slide.image" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.title }}</h5>
            <p>{{ slide.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals for each slide -->
    <b-modal
      v-for="(slide, index) in slides"
      :key="'modal-' + index"
      :id="'modal-' + index"
      title="Slide Details"
      hide-footer
    >
      <img :src="slide.image" class="d-block w-100" alt="...">
      <h5>{{ slide.title }}</h5>
      <p>{{ slide.text }}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: "./images/promos/promo1.jpg",
          title: "First slide label",
          text: "Some representative placeholder content for the first slide."
        },
        {
          image: "./images/promos/promo2.jpg",
          title: "Second slide label",
          text: "Some representative placeholder content for the second slide."
        },
        {
          image: "./images/promos/promo3.jpg",
          title: "Third slide label",
          text: "Some representative placeholder content for the third slide."
        }
      ]
    };
  },
  methods: {
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

.carousel-item {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin-bottom: 20px;
  cursor: pointer;
}

.carousel-item img {
  border-radius: 16px;
}
</style>
