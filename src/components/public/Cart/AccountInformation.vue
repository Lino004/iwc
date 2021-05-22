<template>
  <div class="font-sans text-lg">
    <div class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-20">
      ACCOUNT INFORMATION
    </div>

    <div class="py-16">
      <form action="" class="flex flex-col md:flex-row flex-wrap justify-start gap-8 items-center">
        <div class="w-9/12 mx-auto md:w-4/9 md:mx-0">
          <input
          type="email"
          id="email"
          v-model="valueEmail"
          placeholder="Email Address"
          class="input-about border-none bg-grid3 rounded-15px"
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
import config from '@/configurations/CheckoutConfig'

export default {
  data () {
    return {
      valueEmail: config.valueEmail
    }
  }
}
</script>
