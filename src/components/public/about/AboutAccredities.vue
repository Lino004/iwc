<template>
  <section class="container w-11/12 xl:w-8/12 mx-auto py-28">
    <div class="w-11/12 mx-auto">
      <div class="flex flex-row justify-between">
        <h3 class="section-title text-center">Accredited Dentists</h3>
        <img src="@/assets/images/about/pdf-icon.png" alt="" />
      </div>
      <hr class="border-2 border-grid2 mt-6 mx-auto" />
    </div>
    <div v-if="dentists.length">
      <div
        v-for="item in dentists"
        :key="item.id"
        class="cursor-pointer"
        @click="currentDentist = item">
        <div class="shadow-box1 rounded-lg pl-16 md:pl-28 py-14 mt-20 md:mt-28">
          <h5 class="font-bold mb-5 font-serif text-primary text-lg md:text-xl lg:text-2xl">
            Dentist Clinic Name
          </h5>
          <p class="font-sans text-primary text-lg md:text-xl lg:text-2xl">
            {{ `${item.name.last} ${item.name.first}` }}
          </p>
          <p class="font-sans text-primary text-lg md:text-xl lg:text-2xl">
            {{ `${item.contact.email[0]}` }}
          </p>
          <p class="font-sans text-primary text-lg md:text-xl lg:text-2xl">
            {{ `${item.contact.number[0]}` }}
          </p>
        </div>
      </div>
    </div>
    <div class="shadow-box1 rounded-lg pl-16 md:pl-28 py-14 mt-20 md:mt-28" v-else>
      <h5 class="font-bold mb-5 font-serif text-primary text-lg md:text-xl lg:text-2xl">
        No data
      </h5>
    </div>
    <modal v-if="currentDentist" @close="currentDentist = null">
      <about-card-dentist
        :data="currentDentist"
      />
    </modal>
  </section>
</template>

<script>
import AboutCardDentist from './AboutCardDentist'

export default {
  components: {
    AboutCardDentist
  },
  props: {
    dentists: Array
  },
  data () {
    return {
      currentDentist: null
    }
  }
}
</script>
