<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>

    <div class="w-full">
      <section class="container py-28 mx-auto w-11/12 lg:w-3/4">
        <div>
        <div class="mb-20">
          <h3 class="section-title mb-7">{{ title }}</h3>
          <hr class="border-2 border-grid7 mx-auto" />
        </div>

        <div
          class="flex flex-col gap-y-3 md:flex-row justify-around lg:hidden flex-wrap font-sans text-lg text-primary mb-10"
        >
          <h6 class="font-bold text-center">NAVIGATION</h6>
          <router-link
            v-for="(item, i) in menu"
            :key="i"
            tag="button"
            :to="{ name: item.to }"
            :class="{'text-secondary': item.to === $route.name}"
            >{{ item.label }}</router-link
          >
        </div>
      </div>

      <div class="flex justify-between">
        <div class="lg:w-2/6 hidden lg:block">
          <app-drawer title="NAVIGATION" :element="menu"></app-drawer>
        </div>
        <div class="text-primary text-lg font-sans w-full lg:w-7/12">
          <router-view />
        </div>
      </div>
      </section>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import AppHeader from '@/components/public/general/AppHeader'
import AppMenu from '@/components/public/general/AppMenu'
import AppFooter from '@/components/public/general/AppFooter'
import menu from '../../configurations/DentistNav'
import AppDrawer from '../../components/reusables/AppDrawer.vue'

const General = createNamespacedHelpers('publicGeneral')
export default {
  metaInfo: {
    title: 'IWC Wellness Inc',
    titleTemplate: '%s - IWC Wellness Inc'
  },
  components: {
    AppHeader,
    AppMenu,
    AppFooter,
    AppDrawer
  },
  data () {
    return {
      menu: menu
    }
  },
  computed: {
    title () {
      return this.menu.find(el => el.to === this.$route.name).label
    }
  },
  methods: {
    ...General.mapActions({
      actionGetSiteInfo: 'getSiteInfo'
    })
  },
  async mounted () {
    await this.actionGetSiteInfo()
  }
}
</script>
