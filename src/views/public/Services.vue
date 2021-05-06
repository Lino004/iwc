<template>
  <div>
    <app-hero :title="title" :src="src"></app-hero>
    <content-services></content-services>
  </div>
</template>

<script>
import AppHero from '@/components/public/general/AppHero.vue'
import img from '@/assets/images/services/dental-tools-and-equipment.png'
import ContentServices from '@/components/public/services/ContentServices.vue'

export default {
  name: 'Services',
  metaInfo: {
    title: 'Services'
  },
  components: {
    AppHero,
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
