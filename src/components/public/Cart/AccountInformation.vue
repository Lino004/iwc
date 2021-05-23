<template>
  <div class="font-sans text-lg">
    <subtitle subtitle="ACCOUNT INFORMATION"></subtitle>

    <div class="py-16">
      <form action="" class="flex flex-col md:flex-row flex-wrap justify-start gap-8 items-center">
        <div class="w-9/12 mx-auto md:w-4/9 md:mx-0">
          <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email Address"
          class="input-about"
        />
        </div>

        <p class="text-grid7 text-center mx-auto md:text-left md:flex-1">
          Your order and account details will be sent to this email address.
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Subtitle from '../../reusables/Subtitle.vue'

export default {
  components: { Subtitle },
  data () {
    return {
      email: ''
    }
  }
}
</script>
