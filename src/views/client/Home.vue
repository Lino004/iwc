<template>
  <div>
    <home-one></home-one>
  </div>
</template>

<script>
import HomeOne from '@/components/public/home/HomeOne'
// import HomeTwo from '@/components/public/home/HomeTwo'
// import HomeThree from '@/components/public/home/HomeThree'
// import HomeFour from '@/components/public/home/HomeFour'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    HomeOne
    // HomeTwo,
    // HomeThree,
    // HomeFour
  }
}
</script>
