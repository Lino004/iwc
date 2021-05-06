<template>
  <div class="w-full">
    <app-hero :title="title" :src="src"></app-hero>
    <about-search></about-search>
    <about-accredities></about-accredities>
  </div>
</template>

<script>
import AppHero from '@/components/public/general/AppHero.vue'

import bg from '@/assets/images/about/asianDentist.png'
import AboutSearch from '@/components/public/about/AboutSearch.vue'
import AboutAccredities from '@/components/public/about/AboutAccredities.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {
    AppHero,
    AboutSearch,
    AboutAccredities
  },
  data () {
    return {
      src: bg,
      title: 'Accredited Dentists'
    }
  }
}
</script>

<style lang="" scoped></style>
