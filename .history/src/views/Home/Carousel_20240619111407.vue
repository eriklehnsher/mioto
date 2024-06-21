<template>
  <div>
    <div id="exampleModalToggle" class="modal fade" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ modalContent.title }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ modalContent.description }}
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
          </div>
        </div>
      </div>
    </div>

    <div id="exampleModalToggle2" class="modal fade" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Hide this modal and show the first with the button below.
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
          </div>
        </div>
      </div>
    </div>

    <carousel :items-to-show="1.5">
      <slide v-for="slide in slides" :key="slide.id">
        <button @click="openModal(slide)" class="slide-button">
          <div class="slide-image" :style="{ backgroundImage: 'url(' + slide.image + ')' }"></div>
        </button>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      slides: [
        { id: 1, image: 'path_to_image_1.jpg', title: 'Slide 1', description: 'Description for Slide 1' },
        { id: 2, image: 'path_to_image_2.jpg', title: 'Slide 2', description: 'Description for Slide 2' },
        { id: 3, image: 'path_to_image_3.jpg', title: 'Slide 3', description: 'Description for Slide 3' },
        // Add more slides as needed
      ],
      modalContent: {},
    };
  },
  methods: {
    openModal(slide) {
      this.modalContent = slide;
      // Show the first modal when opening slide modal
      $('#exampleModalToggle').modal('show');
    },
  },
});
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
