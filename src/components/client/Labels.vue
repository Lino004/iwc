<template>
  <div>
    <!-- <Label>All</Label> -->
    <div
      class="flex justify-start gap-x-20"
      v-for="(item, i) in element"
      :key="i"
    >
      <button
        class="inline"
        :class="{
          'bg-grid3 rounded-15px py-2 px-4': !(item.length = i)
        }"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>
// import Label from './Label.vue'

export default {
  // components: { Label }
  props: {
    element: {
      type: Object
    }
  }
}
</script>
