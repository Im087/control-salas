<template>
  <div class="room-comp d-flex flex-column m-2 p-4">
    <h3 class="room-comp_title mb-4">{{ room.name }}</h3>
    <div class="d-flex flex-column mb-4">
      <label class="room-comp_label" for="capacity">Capacidad máxima</label>
      <input type="tel" class="room-comp_input form-control-lg" id="capacity" v-model="room.capacity">
    </div>
    <div class="d-fle flex-column mb-4">
      <label class="room-comp_label" for="occupation">Ocupación</label>
      <div class="input-group">
        <input type="tel" class="room-comp_input room-comp_input-prepend form-control-lg" id="occupation" v-model="room.occupation">
        <div class="input-group-append">
          <div class="room-comp_append input-group-text">%</div>
        </div>
      </div>
    </div>
    <button class="room-comp_modify-button btn align-self-end px-5 py-3" type="button">Modificar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { Room } from '../../interfaces';

export default defineComponent({
  name: 'RoomComp',
  props: {
    room: {
      type: Object as PropType<Room>,
      required: true,
    }
  },
  setup(props) {
    const room = toRefs(props).room;
    return {
      room
    };
  }
});
</script>

<style lang="scss" scoped>
.room-comp {
  width: 400px;
  border-radius: 26px;
  background-color: #f5f7fb;

  &_title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2e344d;
  }

  &_label {
    font-weight: bold;
    color: #2e344d;
  }

  &_input {
    border: #2e344d 1px solid;
    border-radius: 12px;
    color: #2e344d;
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
    color: #2e344d;
  }

  &_modify-button {
    background-color: #2e344d;
    color: #fff;
    border-radius: 12px;
  }
}
</style>