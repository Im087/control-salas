<script lang="ts">
import { defineComponent } from 'vue';

import HeaderComp from './components/HeaderComp/HeaderComp.vue';
import FloorComp from './components/FloorComp/FloorComp.vue';

export default defineComponent({
  name: 'ControlSalas',
  components: {
    HeaderComp,
    FloorComp
  },
  setup() {
    return {
      HeaderComp,
      FloorComp
    }
  }
});
</script>

<template>
  <Header-comp></Header-comp>
  <Floor-comp></Floor-comp>
</template>

<style scoped>

</style>
