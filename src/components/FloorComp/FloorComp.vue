<template>
  <div class="floor-comp p-4">
    <div class="d-flex justify-content-between mb-3">
      <h2 class="floor-comp_title">Planta 1</h2>
      <button class="floor-comp_add-button btn btn-lg px-5 py-3" type="button">Añadir sala</button>
    </div>
    <div class="d-flex flex-wrap p-n3">
      <Room-comp v-for="room in rooms" :key="room.id" :room="room"></Room-comp>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue';
import { Floor } from '../../interfaces';

import RoomComp from '../RoomComp/RoomComp.vue'

export default defineComponent({
  name: 'FloorComp',
  props: {
    floors: {
      type: Array as PropType<Floor[]>,
      required: true,
      deep: true
    },
    selectedFloorId: {
      type: Number,
      required: true
    }
  },
  components: {
    RoomComp
  },
  setup(props) {
    const selectedFloorId = toRefs(props).selectedFloorId;
    const floors = toRefs(props).floors;
    const selectedFloor = computed(() => {
      return floors.value.find((el: Floor) => el.id === selectedFloorId.value);
    });
    const rooms = computed(() => selectedFloor.value? selectedFloor.value.rooms : []);
    return {
      RoomComp,
      rooms
    };
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