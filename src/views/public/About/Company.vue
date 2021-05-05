<template>
  <div class="w-full mx-auto">
    <app-header></app-header>
    <app-menu></app-menu>
    <app-hero :title="title" :src="src"></app-hero>

    <section class="container w-11/12 xl:w-8/12 mx-auto py-28">
      <about-company></about-company>
      <hr class="border-2 border-grid2" />
      <about-three></about-three>
      <hr class="border-2 border-grid2" />
      <about-team></about-team>
    </section>

    <app-footer></app-footer>
  </div>
</template>

<script>

import AppHeader from '@/components/public/general/AppHeader'
import AppMenu from '@/components/public/general/AppMenu'

import AboutCompany from '@/components/public/about/AboutCompany'
import AboutThree from '@/components/public/about/AboutThree.vue'
import AboutTeam from '@/components/public/about/AboutTeam.vue'

import bg from '@/assets/images/about/network.png'
import AppHero from '@/components/public/general/AppHero.vue'
import AppFooter from '@/components/public/general/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppMenu,
    AboutCompany,
    AboutThree,
    AboutTeam,
    AppHero,
    AppFooter
  },
  data () {
    return {
      src: bg,
      title: 'About Us'
    }
  }
}
</script>

<style lang="css" scoped>

</style>
