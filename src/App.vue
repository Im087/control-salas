<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';
import axios from 'axios';
import { Floor } from './interfaces';
import { useStore } from './store';


import HeaderComp from './components/HeaderComp/HeaderComp.vue';
import FloorComp from './components/FloorComp/FloorComp.vue';

export default defineComponent({
  name: 'ControlSalas',
  components: {
    HeaderComp,
    FloorComp
  },
  setup() {
    const store = useStore();
    const floors: ComputedRef<Floor[]> = computed(() => store.getters.getFloors);
    const selectedFloorId = computed(() => store.getters.getSelectedFloorId);

    const getFloorsData = async () => {
      const localFloors = window.localStorage.getItem('floors');
      if(localFloors) {
        store.dispatch('setFloors', JSON.parse(localFloors));
      } else {
        const { data: res } = await axios.get('./mock/floors.json');
        store.dispatch('setFloors', res.floors);
      }
    };

    getFloorsData();

    return {
      HeaderComp,
      FloorComp,
      floors,
      selectedFloorId,
    };
  }
});
</script>

<template>
  <div class="control-salas p-5">
    <Header-comp :floors="floors" :selectedFloorId="selectedFloorId"></Header-comp>
    <Floor-comp :floors="floors" :selectedFloorId="selectedFloorId"></Floor-comp>
  </div>
</template>

<style lang="scss" scoped>

</style>
