<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div v-for="(service, i) in listesServices" :key="i" class="lg:pr-12">
      <img class="rounded-xl lg:rounded-2xl shadow-box1 opacity-100"
        :src="service.img"
      />
      <div class="mt-6 lg:mt-9 text-center text-primary">
        <p class="text-lg lg:text-2xl font-serif max-w-2xl">
          {{service.title}}
        </p>
        <p class="mt-2 lg:mt-10px text-base lg:text-lg mb-12 lg:mb-36">
          {{service.msg}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { LISTES_SERVICES } from '@/configurations/ServicesConfig.js'

export default {
  data () {
    return {
      listesServices: LISTES_SERVICES
    }
  }
}
</script>
