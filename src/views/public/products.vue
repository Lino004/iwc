<template>
  <div>
    <app-hero :title="title" :src="src"></app-hero>
    <product-content></product-content>
  </div>
</template>

<script>
import AppHero from '@/components/public/general/AppHero.vue'
import img from '@/assets/images/home/image3.png'
import ProductContent from '@/components/public/products/ProductContent.vue'

export default {
  name: 'Services',
  metaInfo: {
    title: 'Services'
  },
  components: {
    AppHero,
    ProductContent
  },
  data () {
    return {
      src: img,
      title: 'Our Products'
    }
  }
}
</script>
