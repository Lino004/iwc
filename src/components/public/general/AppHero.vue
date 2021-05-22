<template>
  <section class="h-auto relative">
    <img
      class="filter brightness-50 h-96 w-full md:h-auto object-cover"
      :src="src"
    />
    <div class="absolute top-0 w-full h-full flex items-center">
      <h1 class="text-white font-bold font-serif text-3xl lg:text-7xl pl-10 xl:pl-24 w-7/12">
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
