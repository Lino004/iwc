<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <page-header  :title="title" :src="src"/>
    <content-services></content-services>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/public/general/AppHeader'
import AppMenu from '@/components/public/general/AppMenu'
import AppFooter from '@/components/public/general/AppFooter'
import PageHeader from '@/components/public/general/PageHeader.vue'
import img from '@/assets/images/services/dental-tools-and-equipment.png'
import ContentServices from '@/components/public/services/ContentServices.vue'

export default {
  name: 'Services',
  metaInfo: {
    title: 'Services'
  },
  components: {
    AppHeader,
    AppMenu,
    AppFooter,
    PageHeader,
    ContentServices
  },
  data () {
    return {
      src: img,
      title: 'Our Services'
    }
  }
}
</script>

<style>

</style>
