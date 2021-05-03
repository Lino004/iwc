<template>
  <section class="h-auto relative">
    <img
      class="filter brightness-50 h-96 md:h-1/2 lg:h-auto"
      :src="src"
      alt=""
      width="100%"
    />
    <div class="absolute top-0 w-full h-full flex items-center">
      <h1
        class="text-white font-bold font-serif lg:text-7xl lg:pl-104px pl-8 text-4xl lg:pt-0"
      >
        {{ title }}
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
