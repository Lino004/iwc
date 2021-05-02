<template>
  <section class="container py-20 sm:py-10 md:py-14 lg:py-16 xl:py-20 mx-auto">
    <div class="grid grid-cols-25 w-11/12 mx-auto mb-14 sm:mb-20 md:mb-32 lg:mb-40 xl:mb-52">
      <div class="bg-secondary col-span-1"></div>

      <div class="col-span-12 shadow-xl flex">
        <div class="w-4/5 ml-5 self-center">
          <h3 class="xl:text-5xl lg:text-4xl font-bold lg:mb-5 xl:mb-7 mb-3 md:text-3xl sm:text-2xl">
            Vision
          </h3>
          <p class="text-xs xl:text-xl lg:text-lg leading-5 sm:leading-6 xl:leading-9 md:text-base sm:text-sm">
            To be the preferred provider of carefully-packaged, affordable
            dental care plans fit for every Filipino’s exclusive needs and
            remove the barrier that seems to get in the way in their ability to
            maintain and show a happy, healthy smile.
          </p>
        </div>
      </div>

      <div class="col-span-12 w-full h-full">
        <img
          src="@/assets/images/about/cooperation.png"
          width="100%"
          height="100%"
          alt=""
          class="h-full object-cover"
        />
      </div>
    </div>

    <div class="grid grid-cols-25 w-11/12 mx-auto mb-14 sm:mb-20 md:mb-32 lg:mb-40 xl:mb-52">
      <div class="col-span-12">
        <img
          src="@/assets/images/about/mission woman.png"
          alt=""
          width="100%"
          height="100%"
          class="h-full object-cover"
        />
      </div>
      <div class="col-span-12 shadow-xl flex">
        <div class="w-4/5 ml-5 self-center">
          <h3 class="xl:text-5xl lg:text-4xl font-bold lg:mb-5 xl:mb-7 mb-3 md:text-3xl sm:text-2xl">
            Mission
          </h3>
          <p class="text-xs xl:text-xl lg:text-lg leading-5 sm:leading-6 xl:leading-9 md:text-base sm:text-sm">
            IWC Wellness remains committed to providing the finest avenue where
            its clients can explore options for the best dental experience ,
            while giving its dental partners a strong boost their business
            deserves.
          </p>
        </div>
      </div>
      <div class="bg-secondary col-span-1"></div>
    </div>

    <!-- <about-card :rightImg="true" :leftImg="false" :title="card1.title" :message="card1.message" :image="card1.image" /> -->

    <hr class="w-11/12 mx-auto border-2 border-grid2" />
  </section>
</template>

<script>
// import AboutCard from './AboutCard.vue'
import coop from '@/assets/images/about/cooperation.png'
export default {
  // components: { AboutCard },
  data () {
    return {
      card1: {
        title: 'Vision',
        message: 'a',
        image: {
          src: coop,
          alt: 'vision'
        }
      }
    }
  }
}
</script>

<style lang="" scoped></style>
