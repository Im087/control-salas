<template>
  <div class="header-comp">
    <h1 class="header-comp_title text-primary mb-3 mb-md-5">Salas</h1>
    <select class="header-comp_floor-selector custom-select-lg text-primary w-100" v-model="OptionId" @change="selectFloor">
      <option v-for="floor in floors" :key="floor.id" :value="floor.id">{{ floor.name }}</option>
    </select>
    <hr class="my-3 my-md-5">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from 'vue';
import { useStore } from '../../store';
import { Floor } from '../../interfaces';

export default defineComponent({
  name: 'HeaderComp',
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
  setup(props) {
    const store = useStore();
    const floors = toRefs(props).floors;
    const selectedFloorId = toRefs(props).selectedFloorId;
    const OptionId = ref(selectedFloorId.value);
    
    const selectFloor = () => {
      store.dispatch('setSelectedFloorId', OptionId.value);
    };
    return {
      floors,
      OptionId,
      selectFloor,
    };
  }
});
</script>

<style lang="scss" scoped>
.header-comp {

  &_title {
    font-weight: bold;
  }

  &_floor-selector {
    max-width: 250px;
    border: #2e344d 1px solid;
    border-radius: 12px;
    // color: #2e344d;
  }
}
</style>