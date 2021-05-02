<template>
  <section class="relative bg-imageOne lg:h-screen">
    <div class="top-0 bg-opacity-50 w-full h-full bg-black px-8 xl:px-104px py-20 flex items-center">
      <div class="text-white w-full lg:w-3/5">
        <h3 class="text-3xl lg:text-42px leading-tight font-serif font-bold w-5/6 lg:w-4/5 mb-7">Discover what makes us stand out!</h3>
        <p class="text-lg lg:text-2xl mb-16 text-justify lg:text-left">
          IWC Wellness and Preventive Consultancy Inc.
          is a huge national network of dentists and oral care practitioners,
          joined together by a shared vision of providing the best,
          yet affordable dental care services to every Filipino.
          Through an exclusive access to a unified dental care system,
          our members are privileged to obtain solutions in matters
          pertaining to oral hygiene and dental care.
        </p>
        <button
          class="bg-grid1 rounded-2xl font-bold
                  text-white px-5 py-2 text-lg
                  hover:bg-secondary">
            LEARN MORE
          </button>
      </div>
    </div>
  </section>
</template>

<script>
import Image1 from '@/assets/images/home/image1.png'

export default {
  data () {
    return {
      image1: Image1
    }
  }
}
</script>

<style>

</style>
