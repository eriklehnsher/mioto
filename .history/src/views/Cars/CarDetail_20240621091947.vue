<template>
  <div class="car-detail">
    <Carousel :car="car"></Carousel>
    <CarInfo :car="car"></CarInfo>
  </div>
</template>
  
  <script>
import { defineComponent, ref, onMounted } from "vue";
import axiosIns from "@/libs/axiosConfig";
import Carousel from "./Carousel.vue";
import CarInfo from "./CarInfo.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    Carousel,
    CarInfo,
  },
  setup() {
    const car = ref({});
    const route = useRoute();

    // Lấy tham số từ route
    const id = ref(route.params.car_id);

    // Gọi API để lấy thông tin xe
    onMounted(() => {
      axiosIns
        .get("/car/" + id.value)
        .then((response) => {
          car.value = response.data;
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });

    return {
      car,
    };
  },
});
</script>
  
  <style>
/* Your styles here */
</style>
  