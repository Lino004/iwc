<template>
  <div class="w-full shadow-box1 rounded-15px">
    <button
      v-if="showSection === false"
      type="button"
      v-on:click="toggle"
      class="py-10 pl-20 w-full text-left text-primary font-serif font-bold text-2xl"
    >
      My gums are bleeding!
    </button>
    <button
      v-else
      type="button"
      v-on:click="toggle"
      class="bg-primary py-10 pl-20 w-full text-left text-white font-serif font-bold text-2xl rounded-t-15px"
    >
      My gums are bleeding!
    </button>

    <div v-show="showSection" class="px-36 py-14 w-full ">
      <p class="text-primary font-sans text-lg">
        Gums bleed when they are irritated and inflamed which is not considered
        normal. This is due to plaque (a soft film of bacteria) being left on
        the teeth which causes inflammation called gingivitis and if not
        addressed can develop into gum disease. Over time, if not cleaned off
        through daily brushing and interdental cleaning, the plaque can turn
        into a hard deposit called tartar or calculus which will require
        professional scaling by your dentist or hygienist to remove it.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle () {
      this.showSection = !this.showSection
    }
  },
  data () {
    return {
      showSection: true
    }
  }
}
</script>

<style scoped></style>
