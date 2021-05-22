<template>
  <div>
    <billing-information></billing-information>
    <shipping-information></shipping-information>
  </div>
</template>

<script>
import BillingInformation from '@/components/client/Profile/BillingInformation.vue'
import ShippingInformation from '@/components/client/Profile/ShippingInformation.vue'
export default {
  components: { BillingInformation, ShippingInformation }

}
</script>
