<template>
  <div>
    <button
      type="button"
      class="modal__button btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">arnh asdahda</div>
      </div>
    </div>
  </div>
  <div>
    <Carousel :items-to-show="3" :wrap-around="true">
      <!-- Slide 1 -->
      <Slide key="slide1">
        <div class="carousel__item">
          <div>
            <button
              type="button"
              class="modal__button btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">arnh asdahda</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <!-- Slide 2 -->
      <Slide key="slide2">
        <div class="carousel__item"></div>
      </Slide>

      <!-- Slide 3 -->
      <Slide key="slide3">
        <div class="carousel__item"></div>
      </Slide>

      <!-- Addons -->
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <!-- Modal component -->
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "IndividualSlides",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {},
});
</script>
  
  <style scoped>
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}
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
 
 
































 
 