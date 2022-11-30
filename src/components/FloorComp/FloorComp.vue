<template>
  <div>
    floor
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

<style>

</style>