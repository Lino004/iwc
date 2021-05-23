<template>
  <div>
    <section class="my-28">
      <div class="my-10">
        <h3 class="section-title text-center">The Board of Directors</h3>
        <hr class="border-2 border-grid2 w-1/2 md:w-2/3 mt-6 mx-auto"/>
      </div>
      <div class="mx-auto w-4/5 lg:w-3/4 text-left mb-16">
        <p class="text-lg font-sans text-primary leading-9">
          IWC Wellness and Preventive Consultancy Inc ., was established in 2016
          with a commitment to provide and deliver the best oral care every
          Filipino deserves. It was created to provide a link to various dental
          professionals and an easy access to affordable dental health plans fit
        </p>
      </div>
      <div
        class="flex w-auto lg:w-2/3 flex-wrap-reverse items-center justify-center mx-auto gap-x-28 gap-y-14 my-10"
      >
        <div v-for="item in team" :key="item.id">
          <img :src="item.src" :alt="item.name" />
          <p class="text-center text-primary text-lg leading-9 mt-4 font-serif">{{ item.name }}</p>
        </div>
      </div>
    </section>

    <section class="">
      <div class="my-10">
        <h3 class="section-title text-center ">The Management</h3>
        <hr class="border-2 border-grid2 w-1/2 md:w-2/3 mt-6 mx-auto"/>
      </div>
      <div class="mx-auto w-4/5 lg:w-3/4 text-left">
        <p class="text-lg leading-9 text-primary font-sans">
          IWC Wellness and Preventive Consultancy Inc ., was established in 2016
          with a commitment to provide and deliver the best oral care every
          Filipino deserves. It was created to provide a link to various dental
          professionals and an easy access to affordable dental health plans fit
        </p>
      </div>
      <div
        class="flex w-auto lg:w-2/3 flex-wrap-reverse items-center justify-center mx-auto gap-x-28 gap-y-14 my-10"
      >
        <div v-for="item in management" :key="item.id">
          <img :src="item.src" :alt="item.name" />
          <p class="text-center text-primary text-lg leading-9 mt-4 font-serif">{{ item.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import boyet from '@/assets/images/about/boyet.png'
import sam from '@/assets/images/about/Sam-Heughan.png'

export default {
  data: () => {
    return {
      team: [
        { src: boyet, name: 'Boyet Fernandez', id: 1 },
        { src: boyet, name: 'Boyet Fernandez', id: 2 },
        { src: boyet, name: 'Boyet Fernandez', id: 3 },
        { src: boyet, name: 'Boyet Fernandez', id: 4 },
        { src: boyet, name: 'Boyet Fernandez', id: 5 },
        { src: boyet, name: 'Boyet Fernandez', id: 6 },
        { src: boyet, name: 'Boyet Fernandez', id: 7 }
      ],
      management: [
        { src: sam, name: 'Boyet Fernandez', id: 1 },
        { src: sam, name: 'Boyet Fernandez', id: 2 },
        { src: sam, name: 'Boyet Fernandez', id: 3 }
      ]
    }
  }
}
</script>
