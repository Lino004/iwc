<template>
  <section class="container py-24 mx-auto">
    <div class="w-3/4 mx-auto">
      <div class="flex flex-row justify-between">
        <h2
          class="font-bold text-primary font-serif text-center text-2xl sm:text-3xl md:text-3xl lg:text-42px"
        >
          Accredited Dentist
        </h2>
        <img src="@/assets/images/about/pdf-icon.png" alt="" />
      </div>
      <hr class=" mt-6 mx-auto border-2 border-grid2" />
    </div>

    <div class="w-4/5 py-10 mx-auto">
      <div v-for="item in dentistList" :key="item.id">
        <div class="shadow-box1 rounded-lg pl-16 md:pl-24 py-16 my-14">
          <h5 class="font-bold mb-5 font-serif text-primary sm:text-lg md:text-xl lg:text-2xl">
            Dentist Clinic Name
          </h5>
          <p class="font-sans text-primary sm:text-lg md:text-xl lg:text-2xl">Dentist Name</p>
          <p class="font-sans text-primary sm:text-lg md:text-xl lg:text-2xl">Address</p>
          <p class="font-sans text-primary sm:text-lg md:text-xl lg:text-2xl">Contact Numbers</p>
        </div>
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

<style lang="css" scoped>

</style>
