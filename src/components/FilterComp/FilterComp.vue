<template>
  <div class="filter-comp">
    <div class="d-flex">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="capacityFilter" v-model="filterConditions.isCapacityFilterActivated">
        <label class="custom-control-label" for="capacityFilter">Filtrar por capacidad</label>
      </div>
      <div class="d-flex">
        <input type="number" min="0" max="100" class="form-control-sm" placeholder="min" v-model.lazy="filterConditions.capacityMin">
        ~
        <input type="number" min="0" max="100" class="form-control-sm" placeholder="max" v-model.lazy="filterConditions.capacityMax">
      </div>
    </div>
    <div class="d-flex">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="occupationFilter" v-model="filterConditions.isOccupationFilterActivated">
        <label class="custom-control-label" for="occupationFilter">Filtrar por ocupación</label>
      </div>
      <div class="d-flex">
        <input type="number" min="0" max="100" class="form-control-sm" placeholder="min" v-model.lazy="filterConditions.occupationMin">
        ~
        <input type="number" min="0" max="100" class="form-control-sm" placeholder="max" v-model.lazy="filterConditions.occupationMax">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { Filter } from "../../interfaces";

export default defineComponent({
  name: 'FilterComp',
  props: {
    filterConditions: {
      type: Object as PropType<Filter>,
      required: true,
    }
  },
  setup(props) {
    const filterConditions = toRefs(props).filterConditions;

    return {
      filterConditions
    }
  }
});
</script>

<style>

</style>