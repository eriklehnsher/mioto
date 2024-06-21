<template>
  <div class="modal" :class="{ 'is-active': modalOpen }" @click.self="$emit('closeModal')">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <p>{{ modalContent }}</p>
        <button @click="$emit('closeModal')" class="modal-close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, prop } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    modalOpen: Boolean,
    modalContent: String,
  },
});
</script>

<style scoped>
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
