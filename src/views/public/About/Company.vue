<template>
  <div class="w-full mx-auto">
    <app-header></app-header>
    <app-menu></app-menu>

    <about-us></about-us>
    <about-company></about-company>

    <about-three></about-three>
    <about-team></about-team>
    <Footer />
  </div>
</template>

<script>

import Footer from '@/components/public/general/AppFooter'
import AppHeader from '@/components/public/general/AppHeader'
import AppMenu from '@/components/public/general/AppMenu'

import AboutCompany from '@/components/public/about/AboutCompany'
import AboutUs from '@/components/public/about/AboutUs.vue'
import AboutThree from '@/components/public/about/AboutThree.vue'
import AboutTeam from '@/components/public/about/AboutTeam.vue'

export default {
  components: {
    Footer,
    AppHeader,
    AppMenu,
    AboutCompany,
    AboutUs,
    AboutThree,
    AboutTeam
  }
}
</script>

<style lang="css" scoped>

</style>
