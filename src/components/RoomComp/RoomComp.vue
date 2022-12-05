<template>
  <div class="room-comp text-primary bg-secondary d-flex flex-column m-2 p-4">
    <h3 class="room-comp_title mb-4">{{ room.name }}</h3>
    <div class="d-flex flex-column mb-4">
      <label class="room-comp_label" for="capacity">Capacidad máxima</label>
      <input type="number" class="room-comp_input form-control-lg text-primary" id="capacity" v-model.lazy="room.capacity">
    </div>
    <div class="d-flex flex-column">
      <label class="room-comp_label" for="occupation">Ocupación</label>
      <div class="input-group flex-nowrap">
        <input type="number" max="100" class="room-comp_input room-comp_input-prepend form-control-lg text-primary w-100" id="occupation" v-model.lazy="room.occupation">
        <div class="input-group-append">
          <div class="room-comp_append input-group-text">%</div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between flex-wrap">
      <button class="room-comp_delete-button btn btn-danger px-4 py-3 mt-4" type="button" @click="deleteRoom">Borrar</button>
      <button class="room-comp_modify-button btn btn-primary px-4 py-3 mt-4" type="button" @click="modifyRoom">Modificar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { Floor, Room } from '../../interfaces';
import { useStore } from '../../store';

export default defineComponent({
  name: 'RoomComp',
  props: {
    floors: {
      type: Array as PropType<Floor[]>,
      required: true,
      deep: true
    },
    room: {
      type: Object as PropType<Room>,
      required: true,
    },
    selectedFloorId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const floors = toRefs(props).floors;
    const room = toRefs(props).room;
    const selectedFloorId = toRefs(props).selectedFloorId;

    const deleteRoom = () => {
      store.dispatch('deleteRoom', [selectedFloorId.value, room.value.id]);
      window.localStorage.setItem('floors', JSON.stringify(floors.value));
    };
    const modifyRoom = () => {
      window.localStorage.setItem('floors', JSON.stringify(floors.value));
    };
    return {
      room,
      deleteRoom,
      modifyRoom
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../../assets/style/main.scss';
.room-comp {
  width: calc(100% - 16px);
  max-width: 400px;
  border-radius: 26px;

  &_title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &_label {
    font-weight: bold;
  }

  &_input {
    border: #2e344d 1px solid;
    border-radius: 12px;
  }

  &_input-prepend {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex: 1 1 auto;
  }

  &_append {
    background-color: #fff;
    border: #2e344d 1px solid;
    border-left: none;
    border-radius: 12px;
  }

  &_delete-button {
    border-radius: 12px;
  }

  &_modify-button {
    border-radius: 12px;
  }
}
</style>