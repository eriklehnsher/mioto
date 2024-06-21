<template>
  <div class="carousel">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.imageUrl" alt="Slide {{ index + 1 }}" @click="openModal(index)" />
        <div class="edit-overlay" v-if="activeModal === index">
          <div class="edit-form">
            <label for="title">Title:</label>
            <input type="text" v-model="slide.title" id="title" />

            <label for="description">Description:</label>
            <textarea v-model="slide.description" id="description"></textarea>

            <button @click="saveChanges(index)">Save</button>
            <button @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <button class="prev" @click="prevSlide">&lt;</button>
    <button class="next" @click="nextSlide">&gt;</button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      currentIndex: 0,
      slideWidth: 300,
      slides: [
        { imageUrl: 'path_to_image1.jpg', title: 'Title 1', description: 'Description 1' },
        { imageUrl: 'path_to_image2.jpg', title: 'Title 2', description: 'Description 2' },
        { imageUrl: 'path_to_image3.jpg', title: 'Title 3', description: 'Description 3' },
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
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    openModal(index) {
      this.activeModal = index;
    },
    closeModal() {
      this.activeModal = null;
    },
    saveChanges(index) {
      // Cập nhật thông tin chỉnh sửa của slide
      console.log(`Saved changes for slide ${index}:`, this.slides[index]);
      this.closeModal();
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
  height: auto;
}

.slides {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  flex: 0 0 auto;
  width: 100%;
  position: relative;
  cursor: pointer;
}

img {
  width: 100%;
  display: block;
}

.edit-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.edit-form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
}

.edit-form label {
  display: block;
  margin-bottom: 10px;
}

.edit-form input,
.edit-form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
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
