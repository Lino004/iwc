<template>
  <div class="w-full mx-auto">
    <app-header></app-header>
    <app-menu></app-menu>

    <about-thirst :title="title" :src="src" />
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
import AboutThirst from '@/components/public/about/AboutThirst.vue'
import AboutThree from '@/components/public/about/AboutThree.vue'
import AboutTeam from '@/components/public/about/AboutTeam.vue'

import bg from '@/assets/images/about/network.png'

export default {
  components: {
    Footer,
    AppHeader,
    AppMenu,
    AboutThirst,
    AboutCompany,
    AboutThree,
    AboutTeam
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
