<template>
  <div class="search">
    <p style="font-weight: 700;" class="mb-0 mt-0">TÌM XE GẦN BẠN NGAY!</p>
    <form @submit.prevent="handleSubmit" class="select-local">
      <div class="label-search">
        <svg
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3612 17C20.1072 17.4561 20.5 17.9734 20.5 18.5C20.5 19.0266 20.1072 19.5439 19.3612 20C18.6152 20.4561 17.5422 20.8348 16.25 21.0981C14.9578 21.3614 13.4921 21.5 12 21.5C10.5079 21.5 9.04216 21.3614 7.75 21.0981C6.45784 20.8348 5.38482 20.4561 4.63878 20C3.89275 19.5439 3.5 19.0266 3.5 18.5C3.5 17.9734 3.89275 17.4561 4.63878 17"
            stroke="#222222"
            stroke-linecap="round"
          />
          <path
            d="M19.5 10C19.5 15.018 14.0117 18.4027 12.4249 19.2764C12.1568 19.424 11.8432 19.424 11.5751 19.2764C9.98831 18.4027 4.5 15.018 4.5 10C4.5 5.5 8.13401 2.5 12 2.5C16 2.5 19.5 5.5 19.5 10Z"
            stroke="#222222"
          />
          <circle cx="12" cy="10" r="3.5" stroke="#222222" />
        </svg>
      </div>
      <div class="local city">
     
        <select id="city" v-model="selectedCity">
          <option class="option-0" value="">Chọn thành phố</option>
          <option value="hanoi">Hà Nội</option>
          <option value="danang">Đà Nẵng</option>
          <option value="hochiminh">Hồ Chí Minh</option>
        </select>
      </div>
      <div class="local district">
       
        <select id="district" v-model="selectedDistrict">
          <option value="">Chọn quận/huyện</option>
          <option
            v-for="(district, index) in districts"
            :key="index"
            :value="district"
          >
            {{ district }}
          </option>
        </select>
      </div>
      <div class="local wards">
       
        <select id="ward" v-model="selectedWard">
          <option value="">Chọn phường/xã</option>
          <option v-for="(ward, index) in wards" :key="index" :value="ward">
            {{ ward }}
          </option>
        </select>
      </div>
      <button type="submit" class="button-sub">Tìm Xe</button>
    </form>
  </div>
</template>
  
  <script>
import { ref, computed, watch } from "vue";

export default {
  name: "DistrictWardDropdown",
  setup() {
    const selectedCity = ref("");
    const selectedDistrict = ref("");
    const selectedWard = ref("");

    const cityData = {
      hanoi: {
        districts: ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"],
        wards: {
          "Ba Đình": ["Phường 1", "Phường 2", "Phường 3"],
          "Hoàn Kiếm": ["Phường 4", "Phường 5", "Phường 6"],
        },
      },
      danang: {
        districts: ["Quận 1", "Quận 2", "Quận 3"],
        wards: {
          "Quận 1": ["Phường A", "Phường B", "Phường C"],
          "Quận 2": ["Phường X", "Phường Y", "Phường Z"],
        },
      },
      hochiminh: {
        districts: ["Quận Gò Vấp", "Quận Bình Thạnh", "Quận Tân Bình"],
        wards: {
          "Quận Gò Vấp": ["Phường P", "Phường Q", "Phường R"],
          "Quận Bình Thạnh": ["Phường S", "Phường T", "Phường U"],
        },
      },
    };

    const districts = computed(() => {
      return selectedCity.value ? cityData[selectedCity.value].districts : [];
    });

    const wards = computed(() => {
      return selectedCity.value && selectedDistrict.value
        ? cityData[selectedCity.value].wards[selectedDistrict.value]
        : [];
    });

    watch(selectedCity, (newValue) => {
      console.log("Selected City:", newValue);
      selectedDistrict.value = "";
      selectedWard.value = "";
    });

    watch(selectedDistrict, (newValue) => {
      console.log("Selected District:", newValue);
      selectedWard.value = "";
    });

    watch(selectedWard, (newValue) => {
      console.log("Selected Ward:", newValue);
    });

    const handleSubmit = () => {
      console.log("Form Data:", {
        city: selectedCity.value,
        district: selectedDistrict.value,
        ward: selectedWard.value,
      });
      // Tại đây bạn có thể gửi dữ liệu tới API hoặc xử lý dữ liệu theo nhu cầu
    };

    return {
      selectedCity,
      selectedDistrict,
      selectedWard,
      districts,
      wards,
      handleSubmit,
    };
  },
};
</script>
<style scoped>
.search {
  padding: 20px 50px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: black;
}
form {
  margin-top: 0px;
  padding: 20px 50px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-between;
}
.select-local {
  text-align: center;
  
}

.ml-16 {
  margin-left: 16px;
}
.local {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
}
select {
  font-size: 14px;
  font-weight: 500;
  border: 0px;
  background-color: aliceblue;

}

</style>
  