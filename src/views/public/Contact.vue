<template>
  <div class="w-full">
    <app-header></app-header>
    <app-menu></app-menu>
    <app-hero :title="title" :src="src"></app-hero>

    <section class="container mx-auto py-28 w-8/12">
      <contact-info></contact-info>
      <hr class="my-14 mx-auto border-2 border-grid2" />
      <contact-form></contact-form>
    </section>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/public/general/AppHeader.vue'
import AppHero from '@/components/public/general/AppHero.vue'
import AppMenu from '@/components/public/general/AppMenu.vue'

import bg from '@/assets/images/contact/coffee-card.png'
import ContactInfo from '@/components/public/contact/ContactInfo.vue'
import ContactForm from '@/components/public/contact/ContactForm.vue'
import AppFooter from '../../components/public/general/AppFooter.vue'

export default {
  components: { AppHeader, AppMenu, AppHero, ContactInfo, ContactForm, AppFooter },
  data () {
    return {
      src: bg,
      title: 'Contact Us'
    }
  }
}
</script>

<style scoped></style>
