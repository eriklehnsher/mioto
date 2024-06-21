<template>
  <div class="carousel">
    <div
      class="slides"
      :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        @click="openModal(index)"
      >
        <img :src="slide.imageUrl" alt="Slide {{ index + 1 }}" />
      </div>
    </div>
    <button class="prev" @click="prevSlide">&lt;</button>
    <button class="next" @click="nextSlide">&gt;</button>

    <modal
      v-if="activeModal !== null"
      :isOpen="true"
      @close="closeModal"
    ></modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue"; // Đường dẫn đến component Modal

export default {
  name: "Carousel",
  components: {
    Modal,
  },
  data() {
    return {
      currentIndex: 0,
      slideWidth: 300,
      slides: [
        { imageUrl: "path_to_image1.jpg" },
        { imageUrl: "path_to_image2.jpg" },
        { imageUrl: "path_to_image3.jpg" },
        // Thêm các slide khác tương tự
      ],
      activeModal: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    openModal(index) {
      this.activeModal = index;
    },
    closeModal() {
      this.activeModal = null;
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.slides {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  flex: 0 0 auto;
  width: 100%;
  cursor: pointer; /* Hiển thị con trỏ khi hover */
}

img {
  width: 100%;
  display: block;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
