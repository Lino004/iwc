<template>
  <div class="text-primary font-sans text-lg">
    <subtitle subtitle="SHIPPING INFORMATION"></subtitle>
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

        <div class="w-9/12 mx-auto md:w-full gap-x-4 flex items-center">
          <input type="checkbox" id="check" v-model="check" />
          <label for="check">Same as billing address</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Subtitle from '@/components/reusables/Subtitle.vue'

export default {
  components: { Subtitle },
  data () {
    return {
      valueEmail: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      check: ''
    }
  }
}
</script>
