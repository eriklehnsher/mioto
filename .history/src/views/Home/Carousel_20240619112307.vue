<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in slides" :key="slide.id">
      <button @click="openModal(slide)" class="slide-button">
        <div class="slide-image" :style="{ backgroundImage: 'url(' + slide.image + ')' }"></div>
      </button>
    </slide>

    <template #addons>
      <!-- Pagination and Navigation addons -->
      <navigation />
      <pagination />
    </template>
  </carousel>

  <!-- Modal component using Bootstrap modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modalContent.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ modalContent.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import $ from 'jquery';
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { id: 1, image: './images/promos/promo1.jpg', title: 'Slide 1', description: 'Description for Slide 1' },
        { id: 2, image: './images/promos/promo2.jpg', title: 'Slide 2', description: 'Description for Slide 2' },
        { id: 3, image: './images/promos/promo3.jpg', title: 'Slide 3', description: 'Description for Slide 3' },
        // Add more slides as needed
      ],
      modalContent: {},
    };
  },
  methods: {
    openModal(slide) {
      this.modalContent = slide;
      $('#exampleModal').modal('show'); // Show Bootstrap modal using jQuery or vanilla JavaScript
    },
  },
};
</script>
<style scoped>
.slide-button {
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
}
.slide-image {
  width: 100%;
  height: 200px; /* Adjust height as needed */
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}
</style>
