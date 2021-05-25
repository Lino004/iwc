<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-span-2">
      <p class="text-primary text-lg font-bold pb-5"> SEARCH </p>
      <div class="flex items-center">
        <div class="h-65px rounded-l-15px border border-r-0 border-grid7 flex items-center px-4">
          <IconSearch
            class="mx-auto stroke-grid8"
            width="2rem"
            height="2rem"
          />
        </div>
        <input
          type="text"
          class="input-admin search bg-grid3"
        />
      </div>
    </div>
    <div>
      <p class="text-primary text-lg font-bold pb-5"> FILTER </p>
      <CustomSelect
        :options="dataFilter"
        v-model="filter"
        custom-class="border border-grid7"
      />
    </div>
    <div>
      <p class="text-primary text-lg font-bold pb-5"> SORT BY </p>
      <CustomSelect
        :options="dataSortBy"
        v-model="sortBy"
        custom-class="border border-grid7"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataFilter: {
      type: Array,
      default: () => []
    },
    dataSortBy: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filter: 0,
      sortBy: 0
    }
  }
}
</script>
