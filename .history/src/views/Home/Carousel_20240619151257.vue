<template>
    <div>
      <Carousel :items-to-show="3" :wrap-around="true">
        <!-- Slide 1 -->
        <Slide key="slide1">
          <button
            @click="openModal(1)"
            class="carousel__item modal-btn slide-button"
          >
            <img src="./images/promos/promo1.jpg" alt="Promo 1" />
          </button>
        </Slide>
  
        <!-- Slide 2 -->
        <Slide key="slide2">
          <button
            @click="openModal(2)"
            class="carousel__item modal-btn slide-button"
          >
            <img src="./images/promos/promo2.jpg" alt="Promo 2" />
          </button>
        </Slide>
  
        <!-- Slide 3 -->
        <Slide key="slide3">
          <button
            @click="openModal(3)"
            class="carousel__item modal-btn slide-button"
          >
            <img src="./images/promos/promo3.jpg" alt="Promo 3" />
          </button>
        </Slide>
  
        <!-- Addons -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
  
      <!-- Modal component -->
      <div
        class="modal"
        :class="{ 'is-active': modalOpen }"
        @click.self="closeModal"
      >
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <img :src="modalImage" alt="Modal Image" class="modal-image" />
            <p>{{ modalContent }}</p>
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
      const modalImage = ref("");
  
      const openModal = (slideNumber) => {
        switch (slideNumber) {
          case 1:
            modalContent.value = "Promotion details for Slide 1.";
            modalImage.value = "./images/promos/promo1.jpg";
            break;
          case 2:
            modalContent.value = "Promotion details for Slide 2.";
            modalImage.value = "./images/promos/promo2.jpg";
            break;
          case 3:
            modalContent.value = "Promotion details for Slide 3.";
            modalImage.value = "./images/promos/promo3.jpg";
            break;
          default:
            modalContent.value = "";
            modalImage.value = "";
        }
        modalOpen.value = true;
      };
  
      const closeModal = () => {
        modalContent.value = "";
        modalImage.value = "";
        modalOpen.value = false;
      };
  
      return {
        modalOpen,
        modalContent,
        modalImage,
        openModal,
        closeModal,
      };
    },
  });
  </script>
  
  <style scoped>
  .carousel__item {
    margin: 0 10px;
    min-height: 200px;
    width: 100%;
    background-color: blue;
    color: white;
    font-size: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  
    box-sizing: border-box;
    border-color: aliceblue;
  }
  
  .slide-button {
    background-color: white;
    color: blue;
    border-radius: 15px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0px;
  }
  .slide-button img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    opacity: 0;
    transition: opacity 0.3s ease-out; /* Chỉ áp dụng transition cho opacity */
    pointer-events: none; /* Ensure modal is not clickable when hidden */
  }
  
  .modal.is-active {
    display: block;
    opacity: 1;
    pointer-events: auto; /* Enable clicking on modal when active */
  }
  
  .modal-content {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8); /* Ban đầu modal nhỏ đi */
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s ease-out; /* Thêm transition cho transform */
  }
  
  .modal.is-active .modal-content {
    transform: translate(-50%, -50%) scale(1); /* Khi modal active thì phóng to lại */
  }
  
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease-out; /* Thêm transition cho opacity */
  }
  
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
  
  .modal-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  </style>
  