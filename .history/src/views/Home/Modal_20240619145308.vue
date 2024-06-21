<template>
  <div>
    <Carousel :items-to-show="3" :wrap-around="true">
      <!-- Slide 1 -->
      <Slide key="slide1">
        <div class="carousel__item">
          <button @click="toggleModal(1)" class="modal-btn slide-button">
            <img src="./images/promos/promo1.jpg" alt="Promo 1" />
          </button>
          <div :class="{ 'modal': showModal === 1 }" @click.self="closeModal(1)">
            <div class="modal-background"></div>
            <div class="modal-content">
              <div class="box">
                <p>Modal content for Slide 1.</p>
                <button @click="closeModal(1)" class="modal-close">Close</button>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <!-- Slide 2 -->
      <Slide key="slide2">
        <div class="carousel__item">
          <button @click="toggleModal(2)" class="modal-btn slide-button">
            <img src="./images/promos/promo2.jpg" alt="Promo 2" />
          </button>
          <div :class="{ 'modal': showModal === 2 }" @click.self="closeModal(2)">
            <div class="modal-background"></div>
            <div class="modal-content">
              <div class="box">
                <p>Modal content for Slide 2.</p>
                <button @click="closeModal(2)" class="modal-close">Close</button>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <!-- Slide 3 -->
      <Slide key="slide3">
        <div class="carousel__item">
          <button @click="toggleModal(3)" class="modal-btn slide-button">
            <img src="./images/promos/promo3.jpg" alt="Promo 3" />
          </button>
          <div :class="{ 'modal': showModal === 3 }" @click.self="closeModal(3)">
            <div class="modal-background"></div>
            <div class="modal-content">
              <div class="box">
                <p>Modal content for Slide 3.</p>
                <button @click="closeModal(3)" class="modal-close">Close</button>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <!-- Addons -->
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
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
    const showModal = ref(null);

    const toggleModal = (slideNumber) => {
      showModal.value = slideNumber;
    };

    const closeModal = (slideNumber) => {
      showModal.value = null;
    };

    return {
      showModal,
      toggleModal,
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
  position: relative;
}

.slide-button {
  background-color: white;
  color: blue;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 0;
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
  transition: opacity 0.3s ease-out;
  pointer-events: none;
}

.modal.is-active {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease-out;
}

.modal.is-active .modal-content {
  transform: translate(-50%, -50%) scale(1);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: blue;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
