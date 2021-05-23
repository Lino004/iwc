<template>
  <div class="flex justify-center">
    <div class="w-3/5 text-center">
      <div class="py-20">
        <h3 class="font-bold text-primary font-serif text-center text-3xl md:text-3xl lg:text-42px">
          Success!
        </h3>
        <hr class="border-2 border-grid2 w-3/4 mt-6 mx-auto"/>
      </div>
      <div class="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ante quis tellus vehicula porttitor id id est. Aliquam porta aliquet posuere.
      </div>
      <div class="my-10">
        <button
          class="iwc-btn-action w-auto px-8"
          @click="$emit('continue')">
          CONTINUE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
