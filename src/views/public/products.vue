<template>
  <div>
    <app-hero :title="title" :src="src"></app-hero>
    <product-title-section title="Individual Oral Care Plans"></product-title-section>
    <product-card-section></product-card-section>
    <product-title-section title="Group Dental Care Packages"></product-title-section>
    <product-card-section inquiry-form></product-card-section>
  </div>
</template>

<script>
import AppHero from '@/components/public/general/AppHero.vue'
import img from '@/assets/images/home/image3.png'
import ProductTitleSection from '@/components/public/products/ProductTitleSection.vue'
import ProductCardSection from '@/components/public/products/ProductCardSection'

export default {
  name: 'Services',
  metaInfo: {
    title: 'Services'
  },
  components: {
    AppHero,
    ProductTitleSection,
    ProductCardSection
  },
  data () {
    return {
      src: img,
      title: 'Our Products'
    }
  }
}
</script>
