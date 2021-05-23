<template>
  <section class="">
    <div>
      <h3 class="section-title text-center">Contact Us</h3>
      <hr class="border-2 border-grid2 w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto"/>
    </div>

    <div class="py-20 mx-auto">
      <div class="grid lg:grid-cols-2 gap-10">
        <div class="h-80 lg:h-auto shadow-box1">
          <google-map />
        </div>

        <div class="flex flex-col justify-around space-y-8">
          <div class="flex items-center space-x-8">
            <div class="">
              <IconMap
                class="mx-auto stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div class="text-primary text-base md:text-lg lg:text-lg">
              <p>
                {{siteInfo ? siteInfo.address : ''}}
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="">
              <IconEmail
                class="mx-auto stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div
              class="text-primary text-base md:text-lg lg:text-lg"
            >
              <p
                v-for="(email, i) in siteInfo ? siteInfo.emailAddresses.alternatives : []"
                :key="`email${i}`"> {{email}}
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="">
              <IconPhone
                class="mx-auto stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div
              class="text-primary text-base md:text-lg lg:text-lg"
            >
              <p
                v-for="(contact, i) in siteInfo ? siteInfo.contactNumbers.alternatives : []"
                :key="`contact${i}`"> {{contact}}
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="">
              <IconMobile
                class="mx-auto stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div
              class="text-primary text-base md:text-lg lg:text-lg"
            >
              <p
                v-for="(mobile, i) in siteInfo ? siteInfo.mobileNumbers.alternatives : []"
                :key="`mobile${i}`"> {{mobile}}
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="">
              <IconFacebook
                class="mx-auto stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div
              class="text-secondary underline text-base md:text-lg lg:text-lg"
            >
              <a href="">IWC Wellness and Preventive Consultancy Inc.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const General = createNamespacedHelpers('publicGeneral')

export default {
  components: {
  },
  computed: {
    ...General.mapGetters({
      siteInfo: 'siteInfo'
    })
  }
}
</script>
