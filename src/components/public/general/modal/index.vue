<template>
  <div
    class="fixed top-0 bg-black bg-opacity-75 w-full h-full overflow-auto left-0 z-50 hide-scroll">
    <div class="flex justify-center items-center h-full overscroll-contain">
      <div class="bg-white rounded-2xl px-10 lg:px-14 relative max-h-modal is-overflow-y-active">
        <a
          class="absolute top-5 lg:top-10 right-5 lg:right-10 cursor-pointer"
          @click="$emit('close')"
        >
          <i class="mdi mdi-close text-2xl"></i>
        </a>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>
