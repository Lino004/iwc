<template>
<!-- en cours de développement-->
  <section class='py-20 w-11/12 lg:w-8/12 mx-auto'>
    <div>
      <h3 class="section-title">Checkout</h3>
    </div>
    <div class="py-7">
      <account-information></account-information>
      <billing-information></billing-information>
      <shipping-information></shipping-information>
      <payment-method></payment-method>
      <amount-information></amount-information>
    </div>
  </section>
</template>

<script>
import AccountInformation from '@/components/public/Cart/AccountInformation.vue'
import BillingInformation from '@/components/public/Cart/BillingInformation.vue'
import PaymentMethod from '@/components/public/Cart/PaymentMethod.vue'
import ShippingInformation from '@/components/public/Cart/ShippingInformation.vue'
import AmountInformation from '@/components/public/Cart/AmountInformation.vue'
export default {
  components: { AccountInformation, AmountInformation, BillingInformation, ShippingInformation, PaymentMethod }
}
</script>
