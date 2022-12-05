<template>
  <div class="floor-comp p-4">
    <div class="d-flex justify-content-between flex-wrap mb-4">
      <h2 class="floor-comp_title text-primary">{{ selectedFloor?.name }}</h2>
      <button class="floor-comp_add-button btn btn-primary px-4 py-3" type="button" @click="addRoom(selectedFloorId)">Añadir sala</button>
    </div>
    <Filter-comp :filterConditions="filterConditions"></Filter-comp>
    <div class="d-flex flex-wrap m-n2">
      <Room-comp v-for="room in filteredRooms" :key="room.id" :floors="floors" :room="room" :selectedFloorId="selectedFloorId"></Room-comp>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref, toRefs } from 'vue';
import { Filter, Floor, Room } from '../../interfaces';
import { useStore } from '../../store';

import RoomComp from '../RoomComp/RoomComp.vue';
import FilterComp from '../FilterComp/FilterComp.vue';

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
    RoomComp,
    FilterComp
  },
  setup(props) {
    const store = useStore();

    const floors = toRefs(props).floors;
    const selectedFloorId = toRefs(props).selectedFloorId;
    const selectedFloor = computed(() => {
      return floors.value.find((el: Floor) => el.id === selectedFloorId.value);
    });
    const rooms = computed(() => selectedFloor.value?.rooms);

    const filterConditions: Ref<Filter> = ref({
      isCapacityFilterActivated: false,
      capacityMin: 0,
      capacityMax: 100,
      isOccupationFilterActivated: false,
      occupationMin: 0,
      occupationMax: 100
    });

    const filteredRooms = computed(() => {
      let filteredRooms = rooms.value;

      if(filterConditions.value.isCapacityFilterActivated) {
        filteredRooms = rooms.value?.filter((el: Room) => {
          return el.capacity >= filterConditions.value.capacityMin && el.capacity <= filterConditions.value.capacityMax;
        });
      }

      if(filterConditions.value.isOccupationFilterActivated) {
        filteredRooms = filteredRooms?.filter((el: Room) => {
          return el.occupation >= filterConditions.value.occupationMin && el.occupation <= filterConditions.value.occupationMax;
        });
      }

      return filteredRooms;
    });

    const addRoom = (id: number) => {
      store.dispatch('addRoom', id);
      window.localStorage.setItem('floors', JSON.stringify(floors.value));
    };

    return {
      RoomComp,
      selectedFloorId,
      floors,
      selectedFloor,
      filteredRooms,
      filterConditions,
      addRoom
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
  }

  &_add-button {
    border-radius: 12px;
  }
}
</style>