<template>
  <section class="py-20 w-11/12 lg:w-8/12 mx-auto">
    <div>
      <h3 class="section-title">Order Confirmation</h3>
      <hr class="border-3 border-grid7 my-7 mx-auto" />
    </div>

    <div class="text-center w-11/12 md:w-3/4 lg:w-4/6 mx-auto">
      <div>
        <icon-check class="mx-auto mb-8 mt-16"></icon-check>
        <p class="leading-9 text-primary font-sans text-lg">
          Your order (#000001) has been successfully submitted and is now
          processing for delivery. A temporary password for logging in this
          website has been sent to your email,
          <span class="text-secondary font-bold">boyet.fernandez@gmail.com</span
          >. Thank you.
        </p>
        <button
          class="bg-grid1 hover:bg-secondary text-white px-9 py-3 rounded-15px ml-auto my-11"
        >
          <router-link to="/cart/payment-instruction">
            CONTINUE
          </router-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck.vue'
export default { components: { IconCheck } }
</script>
