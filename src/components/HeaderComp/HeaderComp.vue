<template>
  <div class="header-comp">
    <h1 class="header-comp_title mb-5">Salas</h1>
    <select class="header-comp_floor-selector custom-select-lg mb-3">
      <option selected>Elige una planta</option>
      <option value="1">Planta1</option>
      <option value="2">Planta2</option>
      <option value="3">Planta3</option>
    </select>
    <hr>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComp',
  setup() {
    
  }
});
</script>

<style lang="scss" scoped>
.header-comp {

  &_title {
    font-weight: bold;
    color: #2e344d;
  }

  &_floor-selector {
    width: 250px;
    border: #2e344d 1px solid;
    border-radius: 12px;
    color: #2e344d;
  }
}
</style>