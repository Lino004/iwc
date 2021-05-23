<template>
  <section class="h-auto relative">
    <img
      class="filter brightness-50 h-80 w-full md:h-auto object-cover"
      src="@/assets/images/bluebild.png"
    />
    <div class="absolute top-0 w-full h-full flex justify-center items-center">
      <h1 class="text-white font-bold font-serif text-2xl lg:text-42px text-center">
        {{title}}
        <hr class="border-2 border-grid2 mt-5 w-full"/>
      </h1>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ProductContent',
  props: {
    title: String
  }
}
</script>
