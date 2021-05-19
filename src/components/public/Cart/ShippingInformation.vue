<template>
  <div class="text-primary font-sans text-lg">
    <div class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-20">
      SHIPPING INFORMATION
    </div>
    <div class="py-16">
      <form action="" class="flex flex-wrap justify-between items-center">
        <input
          type="text"
          id="firstName"
          v-model="firstName"
          placeholder="First Name"
          class="input-about"
        />

        <input
          type="text"
          id="lastName"
          v-model="lastName"
          placeholder="Last Name"
          class="input-about"
        />

        <input
          type="email"
          id="email"
          v-model="valueEmail"
          placeholder="Email Address"
          class="input-about"
        />

        <input
          type="number"
          id="phone"
          v-model="phone"
          placeholder="Contact Number"
          class="input-about"
        />

        <input
          type="text"
          id="address"
          v-model="address"
          placeholder="Address"
          class="input-about"
        />

        <div class="w-9/12 mx-auto md:w-4/9 md:mx-0 gap-x-4 flex items-center">
          <input type="checkbox" id="check" v-model="check" />
          <label for="check">Same as billing address</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import config from '@/configurations/CheckoutConfig'

export default {
  data () {
    return {
      valueEmail: config.valueEmail,
      firstName: config.firstName,
      lastName: config.lastName,
      phone: config.phone,
      address: config.address,
      check: config.check
    }
  }
}
</script>

<style lang="scss" scoped>
.input-about {
  @apply my-5 h-65px appearance-none py-5 pl-7 w-9/12 mx-auto md:w-4/9 md:mx-0
    border-none bg-grid3 rounded-15px
    focus:outline-0 hover:outline-0;
}
</style>
