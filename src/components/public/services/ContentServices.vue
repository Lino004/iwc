<template>
  <section class="container py-8 lg:py-28 mx-auto">
    <div>
      <div class="w-auto relative text-primary">
        <h3 class="font-bold font-serif text-3xl lg:text-42px text-center">Our Services</h3>
         <hr class="border-2 border-grid2 mt-5 w-2/3 h-0 lg:mt-30px lg:w-96 mx-auto"/>
      </div>
      <div class="text-left font-serif mx-auto w-4/5 mt-11 lg:w-3/5 xl:w-2/5 lg:mt-36">
        <p class="text-base lg:text-lg text-primary">
          Promotion of optimal and sustainable oral care services is made possible by our
          affiliation with various dental care providers. Our members are assured of being
          provided with the following services:
        </p>
      </div>
      <div class="mt-20 lg:mt-36 mx-auto w-3/4">
        <card-image></card-image>
      </div>
    </div>
  </section>
</template>

<script>
import CardImage from './CardImage'

export default {
  components: {
    CardImage
  }
}
</script>
