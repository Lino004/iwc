<template>
  <div class="relative">
    <div
      class="flex cursor-pointer rounded-2xl py-5 px-4"
      :class="customClass"
      @click="show = !show">
      <div class="flex-1">
        {{field ? options[value][field] : options[value]}}
      </div>
      <div>
        <IconChevronDown
          v-if="!show"
          width="1.5rem"
          height="1.5rem"
          class="fill-primary"
        />
        <IconChevronUp
          v-else
          width="1.5rem"
          height="1.5rem"
          class="fill-primary"
        />
      </div>
    </div>
    <div
      v-if="show"
      class="absolute bg-white w-full p-4 shadow-box1 rounded-2xl mt-2">
      <div
        v-for="(option, i) in options" :key="i"
        class="hover:text-secondary cursor-pointer"
        :class="{
          'text-secondary': value === i
        }"
        @click="$emit('input', i); show = false">
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
      type: Number,
      default: 0
    },
    customClass: String,
    field: String
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
