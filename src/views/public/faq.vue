<template>
  <div>
    <app-hero :title="title" :src="src"></app-hero>
    <faq-section></faq-section>
  </div>
</template>

<script>
import bg from '@/assets/images/faq/notepad.png'
import AppHero from '@/components/public/general/AppHero.vue'
import FaqSection from '@/components/public/faq/faqSection.vue'

export default {
  components: { AppHero, FaqSection },
  data () {
    return {
      src: bg,
      title: 'Frequently Asked Questions'
    }
  }
}
</script>

<style scoped></style>
