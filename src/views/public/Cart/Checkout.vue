<template>
<!-- en cours de développement-->
  <section class='py-20 w-8/12 mx-auto'>
    <div>
      <h3 class="font-bold text-primary font-serif text-2xl md:text-3xl lg:text-42px pt-14">
        Checkout
      </h3>
    </div>
    <div class="py-7">

      <div class="border-t-3 border-b-3 border-grid7 py-6 pl-20">
        ACCOUNT INFORMATION
      </div>
      <div class="py-16 flex justify-between items-center">
        <form action="" class="">
          <input
              type="email"
              id="email"
              v-model="valueEmail"
              placeholder="Email Address"
              class="input-about border-none bg-grid3 rounded-15px"
            />
        </form>
        <p class="w-5/12">Your order and account details will be sent to this email address.</p>
      </div>

      <div class="border-t-3 border-b-3 border-grid7 py-6 pl-20">
        BILLING INFORMATION
      </div>
      <div class="py-16">
        <form action="" class="flex flex-wrap justify-between items-center">
          <input
              type="text"
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              class="input-about border-none bg-grid3 rounded-15px"
            />

            <input
              type="text"
              id="lastName"
              v-model="lastName"
              placeholder="Last Name"
              class="input-about border-none bg-grid3 rounded-15px"
            />

          <input
              type="email"
              id="email"
              v-model="valueEmail"
              placeholder="Email Address"
              class="input-about border-none bg-grid3 rounded-15px"
            />

          <input
              type="number"
              id="phone"
              v-model="phone"
              placeholder="Contact Number"
              class="input-about border-none bg-grid3 rounded-15px"
            />

          <input
              type="text"
              id="address"
              v-model="address"
              placeholder="Address"
              class="input-about border-none bg-grid3 rounded-15px"
            />
        </form>
      </div>

      <div class="border-t-3 border-b-3 border-grid7 py-6 pl-20">
        SHIPPING INFORMATION
      </div>
      <div class="py-16">
        <form action="" class="flex flex-wrap justify-between items-center">
          <input
              type="text"
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              class="input-about border-none bg-grid3 rounded-15px"
            />

            <input
              type="text"
              id="lastName"
              v-model="lastName"
              placeholder="Last Name"
              class="input-about border-none bg-grid3 rounded-15px"
            />

          <input
              type="email"
              id="email"
              v-model="valueEmail"
              placeholder="Email Address"
              class="input-about border-none bg-grid3 rounded-15px"
            />

          <input
              type="number"
              id="phone"
              v-model="phone"
              placeholder="Contact Number"
              class="input-about border-none bg-grid3 rounded-15px"
            />

          <input
              type="text"
              id="address"
              v-model="address"
              placeholder="Address"
              class="input-about border-none bg-grid3 rounded-15px"
            />

          <div class="w-5/12">
            <input type="checkbox" id="check" v-model="check"> <label for="check">Same as billing address</label>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      valueEmail: '',
      firstName: '',
      lastName: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-about {
  @apply my-5 h-65px appearance-none py-5 pl-7 w-5/12
    focus:outline-0 hover:outline-0 text-primary font-sans text-lg
}
</style>
