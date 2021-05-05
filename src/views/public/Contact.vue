<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <app-hero :title="title" :src="src"></app-hero>

    <contact-info></contact-info>
    <contact-form></contact-form>
  </div>
</template>

<script>
import AppHeader from '@/components/public/general/AppHeader.vue'
import AppHero from '@/components/public/general/AppHero.vue'
import AppMenu from '@/components/public/general/AppMenu.vue'

import bg from '@/assets/images/contact/coffee-card.png'
import ContactInfo from '@/components/public/contact/ContactInfo.vue'
import ContactForm from '@/components/public/contact/ContactForm.vue'

export default {
  components: { AppHeader, AppMenu, AppHero, ContactInfo, ContactForm },
  data () {
    return {
      src: bg,
      title: 'Contact Us'
    }
  }

}
</script>

<style scoped>

</style>
