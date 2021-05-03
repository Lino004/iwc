<template>
  <section class="h-auto relative">
      <img
        class="filter brightness-50"
        :src="src"
        alt=""
        height="100%"
        width="100%"
      />
      <div class="absolute top-0 w-full h-full flex items-center">
        <h1
          class="text-white font-bold text-2xl pl-10 sm:text-3xl sm:pl-5 md:pl-11 md:text-4xl lg:pl-12 lg:text-5xl xl:text-6xl xl:pl-13"
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
