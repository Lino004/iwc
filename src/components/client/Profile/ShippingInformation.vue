<template>
  <div class="font-sans text-lg">
    <subtitle subtitle="SHIPPING INFORMATION" :class="{ 'text-secondary': onInput }"></subtitle>
    <div class="py-16">
      <div v-if="!edit" class="grid grid-cols-1 md:grid-rows-3 md:grid-flow-col gap-10">
        <p><span class="font-bold">Name:</span> Boyet Fernandez</p>
        <p><span class="font-bold">Email:</span> boyet.fernandez@gmail.com</p>
        <p><span class="font-bold">Address:</span> Happy Road 1234</p>
        <p><span class="font-bold">Contact Number:</span> 123-456-7890</p>
      </div>

      <form action="" class="grid md:grid-rows-1 gap-10" v-else>
        <div>
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            placeholder="First Name"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>

        <div>
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            placeholder="Last Name"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Email Address"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>

        <div>
          <input
            type="number"
            id="phone"
            v-model="phone"
            placeholder="Contact Number"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>

        <div class="col-span-2">
          <input
            type="text"
            id="address"
            v-model="address"
            placeholder="Address"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Subtitle from '../../reusables/Subtitle.vue'

export default {
  components: { Subtitle },
  props: {
    edit: {
      type: Boolean
    }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      onInput: null
    }
  }
}
</script>
