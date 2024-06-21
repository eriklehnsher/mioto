<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in slides" :key="slide.id">
      <div class="slide-content">
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.description }}</p>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

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
        { id: 1, title: 'Slide 1', description: 'Description for Slide 1' },
        { id: 2, title: 'Slide 2', description: 'Description for Slide 2' },
        { id: 3, title: 'Slide 3', description: 'Description for Slide 3' },
        { id: 4, title: 'Slide 4', description: 'Description for Slide 4' },
        { id: 5, title: 'Slide 5', description: 'Description for Slide 5' },
      ],
    };
  },
};
</script>

<style scoped>
.slide-content {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
