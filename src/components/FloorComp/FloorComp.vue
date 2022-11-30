<template>
  <div class="floor-comp p-4">
    <div class="d-flex justify-content-between mb-3">
      <h2 class="floor-comp_title">Planta 1</h2>
      <button class="floor-comp_add-button btn btn-lg px-5 py-3" type="button">Añadir sala</button>
    </div>
    <Room-comp></Room-comp>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import RoomComp from '../RoomComp/RoomComp.vue'

export default defineComponent({
  name: 'FloorComp',
  components: {
    RoomComp
  },
  setup() {
    return {
      RoomComp
    }
  }
});
</script>

<style lang="scss" scoped>
.floor-comp {
  border: #2e344d 1px solid;
  border-radius: 26px;

  &_title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2e344d;
  }

  &_add-button {
    background-color: #2e344d;
    color: #fff;
    border-radius: 12px;
  }
}
</style>