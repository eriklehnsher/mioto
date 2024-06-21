<template>
    <div>
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <!-- Slide 1 -->
        <Slide key="slide1">
          <div class="carousel__item">
            <h2>Slide 1</h2>
            <p>Description for Slide 1</p>
            <button @click="openModal(1)" class="slide-button">Open Modal 1</button>
          </div>
        </Slide>
  
        <!-- Slide 2 -->
        <Slide key="slide2">
          <div class="carousel__item">
            <h2>Slide 2</h2>
            <p>Description for Slide 2</p>
            <button @click="openModal(2)" class="slide-button">Open Modal 2</button>
          </div>
        </Slide>
  
        <!-- Slide 3 -->
        <Slide key="slide3">
          <div class="carousel__item">
            <h2>Slide 3</h2>
            <p>Description for Slide 3</p>
            <button @click="openModal(3)" class="slide-button">Open Modal 3</button>
          </div>
        </Slide>
  
        <!-- Addons -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
  
      <!-- Modal component -->
      <div class="modal" :class="{ 'is-active': modalOpen }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <p>{{ modalContent }}</p>
            <button @click="closeModal" class="modal-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
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
      const modalOpen = ref(false);
      const modalContent = ref("");
  
      const openModal = (slideNumber) => {
        modalContent.value = `Modal for Slide ${slideNumber} opened.`;
        modalOpen.value = true;
      };
  
      const closeModal = () => {
        modalContent.value = "";
        modalOpen.value = false;
      };
  
      return {
        modalOpen,
        modalContent,
        openModal,
        closeModal,
      };
    },
  });
  </script>
  
  <style scoped>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: blue;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .slide-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: white;
    color: blue;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal.is-active {
    display: block;
  }
  
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
  
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: blue;
  }
  </style>
  