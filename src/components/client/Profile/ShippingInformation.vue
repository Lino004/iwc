<template>
  <div class="font-sans text-lg">
    <div
      class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-20"
      :class="{
        'text-secondary': onInput
      }"
    >
      SHIPPING INFORMATION
    </div>
    <div class="py-16">
      <form action="" class="grid grid-cols-1 md:grid-cols-2 gap-10">
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
      <hr class="border-2 border-grid7 mx-auto my-20" />
      <div class="flex justify-end">
        <button
          class="hover:bg-secondary
                 bg-grid1 rounded-2xl font-bold
                 text-white px-9 py-2 text-lg">
          SAVE CHANGES
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
