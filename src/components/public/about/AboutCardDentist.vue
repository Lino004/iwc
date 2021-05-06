<template>
  <div class="md:w-2/3 mx-4 md:mx-auto bg-white rounded-2xl p-8 lg:p-14 relative text-primary">
    <a class="absolute top-5 lg:top-10 right-5 lg:right-10 cursor-pointer" @click="$emit('close')">
      <i class="mdi mdi-close text-2xl"></i>
    </a>
    <div>
      <h5 class="font-bold mb-5 font-serif text-primary text-xl lg:text-3xl">
        {{clinic ? clinic.name : 'no result'}}
      </h5>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="lg:col-span-2 h-96 shadow-box1">
          <google-map/>
        </div>
        <div class="space-y-8">
          <h6 class="font-bold font-serif text-lg lg:text-2xl">
            Dr. {{ `${data.name.last} ${data.name.first}` }}
          </h6>
          <div class="flex space-x-4 items-center">
            <div>
              <IconMap
                class="stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div class="text-sm lg:text-lg">
              123 Happy Street Region, Province
            </div>
          </div>
          <div class="flex space-x-4 items-center">
            <div>
              <IconEmail
                class="stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div class="text-sm lg:text-lg">
              <p v-for="(email, i) in data.contact.email" :key="`email${i}`">
                {{email}}
              </p>
            </div>
          </div>
          <div class="flex space-x-4 items-center">
            <div>
              <IconPhone
                class="stroke-primary"
                width="2rem"
                height="2rem"/>
            </div>
            <div class="text-sm lg:text-lg">
              <p v-for="(number, i) in data.contact.number" :key="`number${i}`">
                {{number}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getClinic } from '@/api/public/clinics'

export default {
  props: {
    data: Object
  },
  data () {
    return {
      clinic: null
    }
  },
  async mounted () {
    if (!this.data.clinics) return
    this.clinic = (await getClinic(this.data.clinics[0].clinicId)).data.data
  }
}
</script>

<style>

</style>
