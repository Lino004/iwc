<template>
  <div class="w-full mx-auto">
    <app-header></app-header>
    <app-menu></app-menu>

    <about-thirst :title="title" :src="src" />
    <about-search></about-search>
    <about-accredities></about-accredities>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AboutThirst from '@/components/public/about/AboutThirst.vue'
import AppFooter from '@/components/public/general/AppFooter.vue'
import AppHeader from '@/components/public/general/AppHeader.vue'
import AppMenu from '@/components/public/general/AppMenu.vue'

import bg from '@/assets/images/about/asianDentist.png'
import AboutSearch from '../../../components/public/about/AboutSearch.vue'
import AboutAccredities from '../../../components/public/about/AboutAccredities.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {
    AppHeader,
    AppMenu,
    AppFooter,
    AboutThirst,
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
