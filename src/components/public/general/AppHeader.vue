<template>
  <div>
    <div class="h-header bg-primary px-8 xl:px-104px pt-12">
      <div class="flex">
        <div class="flex w-full justify-center lg:justify-between items-center">
          <router-link to="/">
            <img src="@/assets/images/logo.svg" alt="">
          </router-link>
          <div class="hidden lg:flex space-x-24">
            <div class="flex text-grid4 items-center">
              <div class="text-lg mr-4">
                <p class="text-right font-bold text-grid4">
                  Email <br>
                  <a class="text-grid5 cursor-pointer" :href="`mailto:${email}`"> {{email}} </a>
                </p>
              </div>
              <div class="h-20 w-20 bg-grid1 rounded-full flex items-center">
                <IconEmail
                  class="mx-auto stroke-grid5"
                  width="2.438rem"
                  height="1.938rem"/>
              </div>
            </div>
            <div class="flex text-grid4 items-center">
              <div class="text-lg mr-4">
                <p class="text-right font-bold text-grid4">
                  Phone <br>
                  <a :href="`tel:${mobileNumber}`" class="text-grid5 cursor-pointer"> {{mobileNumber}} </a>
                </p>
              </div>
              <div class="h-20 w-20 bg-grid1 rounded-full flex items-center">
                <IconPhone
                  class="mx-auto stroke-grid5"
                  width="2.188rem"
                  height="2.188rem"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const General = createNamespacedHelpers('publicGeneral')

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...General.mapGetters({
      siteInfo: 'siteInfo'
    }),
    email () {
      if (!this.siteInfo) return ''
      return this.siteInfo.emailAddresses.primary
    },
    mobileNumber () {
      if (!this.siteInfo) return ''
      return this.siteInfo.mobileNumbers.primary
    }
  },
  methods: {
  }
}
</script>
