<template>
  <div class="w-full">
    <app-hero :title="title" :src="src"></app-hero>
    <about-search
      @event-specialization="actionSpecialization"
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
      dentists: [],
      specialization: '',
      search: ''
    }
  },
  methods: {
    actionSpecialization (val) {
      console.log(val)
      this.specialization = val
      this.actionGetDentistList()
    },
    actionSearch (val) {
      console.log(val)
      this.search = val
      this.actionGetDentistList()
    },
    async actionGetDentistList () {
      try {
        this.dentists = (await getDentists(
          null,
          null,
          null,
          null,
          this.search,
          null,
          this.specialization
        )).data.data
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
