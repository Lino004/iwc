<template>
  <section class="container w-11/12 xl:w-8/12 mx-auto py-28">
    <div class="w-11/12 mx-auto">
      <div class="flex flex-row justify-between">
        <h2 class="font-bold text-primary font-serif text-center text-2xl md:text-3x lg:text-42px">
          Accredited Dentists
        </h2>
        <img src="@/assets/images/about/pdf-icon.png" alt="" />
      </div>
      <hr class="mt-6 mx-auto border-2 border-grid2" />
    </div>

    <div v-for="item in dentistList" :key="item.id">
      <div class="shadow-box1 rounded-lg pl-16 md:pl-28 py-14 mt-20 md:mt-28">
        <h5 class="font-bold mb-5 font-serif text-primary sm:text-lg md:text-xl lg:text-2xl">
          Dentist Clinic Name
        </h5>
        <p class="font-sans text-primary sm:text-lg md:text-xl lg:text-2xl">
          Dentist Name
        </p>
        <p class="font-sans text-primary sm:text-lg md:text-xl lg:text-2xl">
          Address
        </p>
        <p class="font-sans text-primary sm:text-lg md:text-xl lg:text-2xl">
          Contact Numbers
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dentistList: [
        {
          id: 1,
          clinic: '',
          name: '',
          address: '',
          number: ''
        },
        {
          id: 2,
          clinic: '',
          name: '',
          address: '',
          number: ''
        },
        {
          id: 3,
          clinic: '',
          name: '',
          address: '',
          number: ''
        },
        {
          id: 4,
          clinic: '',
          name: '',
          address: '',
          number: ''
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped></style>
