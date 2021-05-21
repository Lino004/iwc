<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import AppHeader from '@/components/public/general/AppHeader'
import AppMenu from '@/components/public/general/AppMenu'
import AppFooter from '@/components/public/general/AppFooter'

const General = createNamespacedHelpers('publicGeneral')

export default {
  metaInfo: {
    title: 'IWC Wellness Inc',
    titleTemplate: '%s - IWC Wellness Inc'
  },
  components: {
    AppHeader,
    AppMenu,
    AppFooter
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
