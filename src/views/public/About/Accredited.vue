<template>
  <div class="w-full">
    <app-hero :title="title" :src="src"></app-hero>
    <about-search
      @event-province="actionProvince"
      @event-region="actionRegion"
      @event-search="actionSearch"/>
    <about-accredities
      :dentists="dentists"/>
  </div>
</template>

<script>
import AppHero from '@/components/public/general/AppHero.vue'
import bg from '@/assets/images/about/asianDentist.png'
import AboutSearch from '@/components/public/about/AboutSearch.vue'
import AboutAccredities from '@/components/public/about/AboutAccredities.vue'
import { getDentists } from '@/api/public/dentists'

export default {
  components: {
    AppHero,
    AboutSearch,
    AboutAccredities
  },
  data () {
    return {
      src: bg,
      title: 'Accredited Dentists',
      dentists: []
    }
  },
  methods: {
    actionProvince (val) {
      console.log(val)
    },
    actionRegion (val) {
      console.log(val)
    },
    actionSearch (val) {
      console.log(val)
    },
    async actionGetDentistList () {
      try {
        this.dentists = (await getDentists()).data.data
      } catch (error) {
        //
      }
    }
  },
  async mounted () {
    await this.actionGetDentistList()
  }
}
</script>

<style lang="" scoped></style>
