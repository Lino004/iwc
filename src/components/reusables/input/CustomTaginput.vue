<template>
  <div class="relative">
    <div class="flex items-center">
      <div
        class="h-65px rounded-l-15px bg-white flex items-center px-4"
        :class="{
          'border border-r-0 border-rouge': error
        }">
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
        @focus="show = true"
        class="input-admin search"
        :class="{
          'border-0': !error,
          'border error': error,
        }"
      />
    </div>
    <div
      v-if="show && filter.length"
      class="absolute bg-white w-full p-4 shadow-box1 rounded-2xl mt-2 space-y-4 z-10">
      <div
        v-for="(option, i) in filter" :key="i"
        class="hover:text-secondary cursor-pointer"
        @click="actionSelect(option)">
        {{field ? option[field] : option}}
      </div>
    </div>
    <p v-if="error" class="text-rouge"> {{error}} </p>
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
    placeholder: String,
    error: String
  },
  data () {
    return {
      show: false,
      search: ''
    }
  },
  computed: {
    filter () {
      return this.options.filter(el => {
        const val = this.field ? el[this.field] : el
        return val
          .toString()
          .toLowerCase()
          .indexOf(this.search.toLowerCase()) >= 0 && !this.value.includes(el)
      })
    }
  },
  methods: {
    actionSelect (option) {
      let isInclude = !this.value.includes(option)
      if (this.field) isInclude = !this.value.map(el => el[this.field]).includes(option[this.field])
      if (isInclude) {
        this.value.push(option)
        this.show = ''
      }
    }
  }
}
</script>
