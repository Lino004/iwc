<template>
  <div>
    <div>
      <div class="flex justify-around flex-wrap">
        <button class="bg-grid3 rounded-15px py-2 px-4 text-primary font-bold">All</button>
        <button class="text-grid8">Pending</button>
        <button class="text-grid8">Processing</button>
        <button class="text-grid8">Shipping</button>
        <button class="text-grid8">En Route</button>
        <button class="text-grid8">Delivered</button>
        <button class="text-grid8">Cancelled</button>
      </div>

      <div class="my-10">
        <label for="search" class="inline-block pb-5 font-bold">SEARCH</label>
        <input type="text" class="input-about" v-model="search">
      </div>

      <div>
        <label for="filter" class="inline-block pb-5 font-bold">FILTER</label>
        <select name="" id="filter" class="input-select select-chevron">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="...">...</option>
        </select>
      </div>

      <div class="my-10">
        <label for="sortBy" class="inline-block pb-5 font-bold">SORT BY</label>
        <select name="" id="sortBy" class="input-select select-chevron">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>

    <cards></cards>
  </div>
</template>

<script>
import Cards from '../../components/client/Orders/Cards.vue'
export default {
  components: { Cards },
  data () {
    return {
      search: ''
    }
  }

}
</script>
