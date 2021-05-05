<template>
  <div>
    <section>
      <div class="my-10">
        <h1 class="font-bold font-serif text-primary text-center text-2xl sm:text-3xl md:text-3xl lg:text-42px">
          The board of Directors
        </h1>
        <hr class="w-1/2 md:w-2/3 mt-6 mx-auto border-2 border-grid2"/>
      </div>
      <div class="mx-auto w-4/5 lg:w-3/4 text-left">
        <p class="text-lg font-sans text-primary leading-9">
          IWC Wellness and Preventive Consultancy Inc ., was established in 2016
          with a commitment to provide and deliver the best oral care every
          Filipino deserves. It was created to provide a link to various dental
          professionals and an easy access to affordable dental health plans fit
        </p>
      </div>
      <div
        class="flex w-11/12 md:w-auto flex-wrap-reverse items-center justify-center mx-auto gap-x-28 gap-y-14 my-10"
      >
        <div v-for="item in team" :key="item.id">
          <img :src="item.src" :alt="item.name" />
          <p class="text-center font-sans text-primary text-lg leading-9 mt-4">{{ item.name }}</p>
        </div>
      </div>
    </section>

    <section>
      <div class="my-10">
        <h1 class="font-bold font-serif text-primary text-center text-2xl sm:text-3xl md:text-3xl lg:text-42px">
          The Management
        </h1>
        <hr class="w-1/2 md:w-2/3 mt-6 mx-auto border-2 border-grid2"/>
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
        class="flex w-11/12 md:w-auto flex-wrap-reverse items-center justify-center mx-auto gap-x-28 gap-y-14 my-10"
      >
        <div v-for="item in management" :key="item.id">
          <img :src="item.src" :alt="item.name" />
          <p class="text-center text-primary font-sans text-lg leading-9 mt-4">{{ item.name }}</p>
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

<style scoped>

</style>
