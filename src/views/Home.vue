<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <home-one></home-one>
    <home-two></home-two>
    <home-three></home-three>
    <home-four></home-four>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/public/general/AppHeader'
import AppMenu from '@/components/public/general/AppMenu'
import AppFooter from '@/components/public/general/AppFooter'
import HomeOne from '@/components/public/general/HomeOne'
import HomeTwo from '@/components/public/general/HomeTwo'
import HomeThree from '@/components/public/general/HomeThree'
import HomeFour from '@/components/public/general/HomeFour'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu,
    AppFooter,
    HomeOne,
    HomeTwo,
    HomeThree,
    HomeFour
  }
}
</script>

<style>
</style>
