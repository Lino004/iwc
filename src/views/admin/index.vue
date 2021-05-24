<template>
  <div class="bg-grid3">
    <div class="min-h-272 lg:min-h-188 p-10 flex space-x-10">
      <AppMenu/>
      <div class="flex-1">
        <router-view/>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/public/general/AppFooter'
import AppMenu from '@/components/admin/AppMenu'

export default {
  metaInfo: {
    title: 'IWC Wellness Inc',
    titleTemplate: '%s - IWC Wellness Inc'
  },
  components: {
    AppFooter,
    AppMenu
  },
  data () {
    return {
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
