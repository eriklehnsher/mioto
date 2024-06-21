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

  <!-- Modal component -->
  <b-modal v-model="modalOpen" @hide="resetModal">
    <template #modal-title>{{ modalContent.title }}</template>
    <template #modal-body>{{ modalContent.description }}</template>
    <!-- You can customize the modal content as per your requirement -->
  </b-modal>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import { BModal } from 'bootstrap-vue';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BModal,
  },
  data() {
    return {
      slides: [
        { id: 1, image: 'path_to_image_1.jpg', title: 'Slide 1', description: 'Description for Slide 1' },
        { id: 2, image: 'path_to_image_2.jpg', title: 'Slide 2', description: 'Description for Slide 2' },
        { id: 3, image: 'path_to_image_3.jpg', title: 'Slide 3', description: 'Description for Slide 3' },
        // Add more slides as needed
      ],
      modalOpen: false,
      modalContent: {},
    };
  },
  methods: {
    openModal(slide) {
      this.modalContent = slide;
      this.modalOpen = true;
    },
    resetModal() {
      this.modalContent = {};
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
