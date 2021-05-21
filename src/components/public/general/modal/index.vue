<template>
  <div
    class="fixed top-0 bg-black bg-opacity-75 w-full h-full overflow-auto left-0 z-50 overscroll-contain hideScroll">
    <div class="flex justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style scoped>
.hideScroll::-webkit-scrollbar {
  display: none;
}
</style>
