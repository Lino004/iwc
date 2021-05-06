<template>
  <div class="w-full mx-auto">
    <app-hero :title="title" :src="src"></app-hero>

    <section class="container w-11/12 xl:w-8/12 mx-auto py-28">
      <about-company></about-company>
      <hr class="border-2 border-grid2" />
      <about-three></about-three>
      <hr class="border-2 border-grid2" />
      <about-team></about-team>
    </section>

  </div>
</template>

<script>
import AboutCompany from '@/components/public/about/AboutCompany'
import AboutThree from '@/components/public/about/AboutThree.vue'
import AboutTeam from '@/components/public/about/AboutTeam.vue'

import bg from '@/assets/images/about/network.png'
import AppHero from '@/components/public/general/AppHero.vue'

export default {
  components: {
    AboutCompany,
    AboutThree,
    AboutTeam,
    AppHero
  },
  data () {
    return {
      src: bg,
      title: 'About Us'
    }
  }
}
</script>
