<template>
  <div
    class="fixed bg-black bg-opacity-75 w-full h-full top-0 left-0 z-50">
    <div class="flex justify-center py-8 max-h-modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>
