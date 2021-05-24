<template>
  <div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/public/general/AppFooter'
import menu from '../../configurations/DentistNav'

export default {
  metaInfo: {
    title: 'IWC Wellness Inc',
    titleTemplate: '%s - IWC Wellness Inc'
  },
  components: {
    AppFooter
  },
  data () {
    return {
      menu: menu
    }
  },
  computed: {
  },
  methods: {
  },
  async mounted () {
  }
}
</script>
