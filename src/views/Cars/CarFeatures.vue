<template>
  <div class="car__info">
    <div class="mb-0px">
      <h1 class="car__info--name">
        {{ car.name }}
      </h1>
    </div>

    <div class="car-info__layout">
      <div class="car__info--content--detail">
        <b-row class="mb-24px">
          <b-col
            cols="4"
            class="label d-flex flex-column justify-content-between"
          >
            <p style="color: #a9aaad" class="car__info--detail--Header">
              Đặc điểm
            </p>
          </b-col>
          <b-col cols="8">
            <div class="d-flex gap-8px">
              <p class="car__seat--label">Số Ghế:</p>
              <p>{{ car.seat }} chỗ</p>
            </div>
            <div class="d-flex gap-8px">
              <p class="car__seat--label">Loại xe:</p>
              <p>
                {{
                  car.type === "xe-tu-lai"
                    ? "Xe tự lái"
                    : car.type === "Xe-co-tai-xe"
                    ? "Xe có tài xế"
                    : ""
                }}
              </p>
            </div>
            <div class="d-flex gap-8px">
              <p class="car__seat--label">Động cơ:</p>
              <p>
                {{
                  car.fuel === "dong-co-xang"
                    ? "Động cơ xăng"
                    : car.fuel === "dong-co-diesel"
                    ? "Động cơ Diesel"
                    : car.fuel === "dong-co-dien"
                    ? "Động cơ điện"
                    : ""
                }}
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row class="mb-24px">
          <b-col cols="4">
            <p class="car__info--detail--Header">Mô Tả</p>
          </b-col>
          <b-col cols="8">
            <p class="carinfo__desc mb-0">{{ car.desc }}</p>
          </b-col>
        </b-row>
        <b-row class="mb-24px">
          <b-col cols="4">
            <p class="car__info--detail--Header">Tính Năng</p>
          </b-col>
          <b-col cols="8">
            <ul class="car-info__list-feature">
              <li v-for="feature in car.features" :key="feature.id">
                {{ getFeatureLabel(feature) }}
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row class="mb-24px">
          <b-col cols="4">
            <p class="car__info--detail--Header">Giấy tờ thuê xe</p>
          </b-col>
          <b-col cols="8">
            <ul class="car-info__list-feature">
              <li
                v-for="requiredDocument in car.requiredDocuments"
                :key="requiredDocument.id"
              >
                {{ getDocumentLabel(requiredDocument) }}
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row class="mb-24px">
          <b-col cols="4">
            <p class="car__info--detail--Header">Tài sản thế chấp</p>
          </b-col>
          <b-col class="" cols="8">
            <p>
              <span class="text-16-24-700">{{ car.collateral }}.000 vnd</span>
              <span>(tiền mặt/chuyển khoản cho chủ xe khi nhận xe)</span>
            </p>
            <p>hoặc Xe máy (kèm cà vẹt gốc) giá trị 10.000.000 vnd.</p>
          </b-col>
        </b-row>
        <b-row class="mb-24px">
          <b-col cols="4">
            <p class="car__info--detail--Header">Điều khoản</p>
          </b-col>
          <b-col cols="8">
            <p>Quy định khác:</p>
            <ul class="text-14-24-400">
              <li>Sử dụng xe đúng mục đích.</li>
              <li>Không sử dụng xe để chở hàng quốc cấm dễ cháy nổ.</li>
              <li>Không sử dụng xe để chở hoa quả, thực phẩm nặng mùi.</li>
              <li>
                Không sử dụng xe để chở người có hành vi vi phạm pháp luật.
              </li>
              <li>
                Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng vui lòng
                vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe.
              </li>
            </ul>
            <p>
              Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi tuyệt
              vời !
            </p>
          </b-col>
        </b-row>
      </div>
      <CarBookingVue :car="car"></CarBookingVue>
    </div>
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";
import CarBookingVue from "./CarBooking.vue";

export default defineComponent({
  components: { CarBookingVue },
  props: {
    car: Object,
  },
  methods: {
    getFeatureLabel(feature) {
      switch (feature) {
        case "map":
          return "Bản đồ";
        case "camera":
          return "Camera 360";
        case "gps":
          return "Định vị GPS";
        case "usb":
          return "Khe cắm USB";
        case "tire":
          return "Lốp dự phòng";
        case "airbag":
          return "Túi khi an toàn";
        default:
          return "";
      }
    },
    getDocumentLabel(requiredDocument) {
      switch (requiredDocument) {
        case "cmnd":
          return "Chứng minh nhân dân";
        case "gplx":
          return "Giấy phép lái xe";
        case "pp-hk":
          return "Passport hoặc hộ khẩu";
        default:
          return "";
      }
    },
  },
});
</script>
  
  <style lang="scss" scoped>
.car__info {
  padding: 38px 38px;
}
.car-info__list-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding-left: 12px;
}
.car-info__layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
}
</style>
  