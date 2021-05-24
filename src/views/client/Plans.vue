<template>
  <div>
    <div class="flex gap-x-10">
      <button class="bg-grid3 rounded-15px py-2 px-4 text-primary font-bold">All</button>
      <button class="text-grid8">Ongoing</button>
      <button class="text-grid8">Matured</button>
    </div>

    <div class="my-10">
      <label for="search" class="inline-block pb-5 font-bold">SEARCH</label>
      <input type="text" class="input-about input-search" v-model="search">
    </div>

    <div>
      <label for="filter" class="inline-block pb-5 font-bold">FILTER</label>
      <select name="" id="filter" class="input-select select-chevron">
        <option value="all">All</option>
        <option value="ongoing">Ongoing</option>
        <option value="matured">Matured</option>
      </select>
    </div>

    <div class="my-10">
      <label for="sortBy0" class="inline-block pb-5 font-bold">SORT BY</label>
      <select name="" id="sortBy" class="input-select select-chevron">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>

    <div>
      <card></card>
    </div>
  </div>
</template>

<script>
import Card from '../../components/client/Plans/Card.vue'
export default {
  components: { Card },
  data () {
    return {
      search: ''
    }
  }
}
</script>
