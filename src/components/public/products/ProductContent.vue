<template>
  <section class="h-auto relative">
    <img
      class="filter brightness-50 h-80 w-full md:h-auto object-cover"
      src="@/assets/images/bluebild.png"
    />
    <div class="absolute top-0 w-full h-full">
      <h1 class="text-white font-bold font-serif text-2xl lg:text-42px text-center pt-28">
        Individual Oral Care Plans
        <hr class="border-2 border-grid2 mt-5 h-0 lg:mt-30px lg:w-2/6 w-4/5 mx-auto"/>
      </h1>
    </div>
    <product-card></product-card>
  </section>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  name: 'ProductContent',
  components: {
    ProductCard
  }
}
</script>
<style>

</style>
