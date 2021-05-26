<template>
  <div class="relative">
    <div class="flex items-center">
      <div class="h-65px rounded-l-15px bg-white flex items-center px-4">
        <IconPlus
          class="mx-auto stroke-grid8"
          width="1.5rem"
          height="1.5rem"
        />
      </div>
      <input
        type="text"
        :placeholder="placeholder"
        v-model="search"
        @blur="search = ''"
        class="input-admin search border-0"
      />
    </div>
    <div
      v-if="search && filter.length"
      class="absolute bg-white w-full p-4 shadow-box1 rounded-2xl mt-2 space-y-4 z-10">
      <div
        v-for="(option, i) in filter" :key="i"
        class="hover:text-secondary cursor-pointer"
        @click="actionSelect(option)">
        {{field ? option[field] : option}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      defaul: () => []
    },
    value: {
      type: Array,
      defaul: () => []
    },
    customClass: String,
    field: String,
    placeholder: String
  },
  data () {
    return {
      show: false,
      search: ''
    }
  },
  computed: {
    filter () {
      return this.options.filter(el => el
        .toString()
        .toLowerCase()
        .indexOf(this.search.toLowerCase()) >= 0 && !this.value.includes(el))
    }
  },
  methods: {
    actionSelect (option) {
      if (!this.value.includes(option)) {
        this.value.push(option)
        this.search = ''
      }
    }
  }
}
</script>
