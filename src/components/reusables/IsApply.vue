<template>
  <section class="flex justify-center">
    <div class="text-center text-primary w-full md:w-2/3">
      <div class="flex justify-center">
        <IconCheck/>
      </div>
      <h3 class="section-title my-10">
        {{title}}
      </h3>
      <div class="flex justify-center">
        <hr class="border-t-3 border-grid7 mb-10 w-2/3">
      </div>
      <p class="text-2xl text-center mb-10">
        {{text}}
      </p>
      <button
        class="iwc-btn-action w-auto px-8"
        @click="$emit('is-click')">
        {{textBtn}}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    textBtn: String
  }
}
</script>
