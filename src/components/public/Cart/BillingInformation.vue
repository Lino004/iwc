<template>
  <div class="font-sans text-lg">
    <div class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-20">
      BILLING INFORMATION
    </div>
    <div class="py-16">
      <form action="" class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-20 gap-y-5">
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
      address: config.address
    }
  }
}
</script>
