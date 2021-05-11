<template>
  <div>
    <app-hero :title="title" :src="src"></app-hero>
  </div>
</template>

<script>
import AppHero from '@/components/public/general/AppHero.vue'
import img from '@/assets/images/home/image3.png'

export default {
  name: 'Services',
  metaInfo: {
    title: 'Services'
  },
  components: {
    AppHero
  },
  data () {
    return {
      src: img,
      title: 'Our Products'
    }
  }
}
</script>
