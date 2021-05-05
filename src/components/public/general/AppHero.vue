<template>
  <section class="h-auto relative">
      <img
        class="filter brightness-50 h-96 md:h-auto object-cover"
        :src="src"
      />
      <div class="absolute top-0 w-full h-full flex items-center">
        <h1
          class="text-white font-bold font-serif text-2xl sm:text-3xl md:text-4xl lg:text-7xl pl-10 sm:pl-5 md:pl-11 lg:pl-13 xl:pl-24"
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
