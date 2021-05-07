<template>
  <div class="w-full">
    <app-hero :title="title" :src="src"></app-hero>
    <section class="container py-28  mx-auto w-11/12 lg:w-8/12">
      <contact-info></contact-info>
      <hr class="border-2 border-grid2 my-14 mx-auto" />
      <contact-form></contact-form>
    </section>
  </div>
</template>

<script>
import AppHero from '@/components/public/general/AppHero.vue'

import bg from '@/assets/images/contact/coffee-card.png'
import ContactInfo from '@/components/public/contact/ContactInfo.vue'
import ContactForm from '@/components/public/contact/ContactForm.vue'

export default {
  components: {
    AppHero,
    ContactInfo,
    ContactForm
  },
  data () {
    return {
      src: bg,
      title: 'Contact Us'
    }
  }
}
</script>
