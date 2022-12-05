<template>
  <div class="filter-comp text-primary mb-4">
    <div class="d-flex flex-wrap mb-3">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="filter-comp_capacity-checkbox custom-control-input" id="capacityFilter" v-model="filterConditions.isCapacityFilterActivated">
        <label class="filter-comp_checkbox-label custom-control-label" for="capacityFilter">Filtrar por capacidad</label>
      </div>
      <div class="d-flex flex-wrap ml-5">
        <input type="number" min="0" max="100" class="filter-comp_min-max form-control-sm" placeholder="min" v-model.lazy="filterConditions.capacityMin">
        ~
        <input type="number" min="0" max="100" class="filter-comp_min-max form-control-sm" placeholder="max" v-model.lazy="filterConditions.capacityMax">
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="filter-comp_occupation-checkbox custom-control-input" id="occupationFilter" v-model="filterConditions.isOccupationFilterActivated">
        <label class="filter-comp_checkbox-label custom-control-label" for="occupationFilter">Filtrar por ocupación</label>
      </div>
      <div class="d-flex flex-wrap ml-5">
        <input type="number" min="0" max="100" class="filter-comp_min-max form-control-sm" placeholder="min" v-model.lazy="filterConditions.occupationMin">%
        ~
        <input type="number" min="0" max="100" class="filter-comp_min-max form-control-sm" placeholder="max" v-model.lazy="filterConditions.occupationMax">%
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

<style lang="scss" scoped>
.filter-comp {

  &_checkbox-label {
    font-weight: bold;
  }

  &_min-max {
    width: 60px;
    border: #2e344d 1px solid;
    color: #2e344d;
  }
}
</style>