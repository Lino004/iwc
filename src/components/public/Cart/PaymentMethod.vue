<template>
  <div class="font-sans text-lg">
    <div
      class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-20"
    >
      PAYMENT METHOD
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 grid-flow-row gap-6 py-16">
      <div class="rounded-15px bg-grid3 py-5">
        <div class="font-bold font-sans text-lg text-grid6 text-center flex flex-col items-center justify-end h-full">
          <icon-cash class="mb-4"></icon-cash>
          <p class="">CASH</p>
        </div>
      </div>

      <div class="rounded-15px bg-grid3 py-5">
        <div
          class="font-bold font-sans text-lg text-grid6 text-center flex flex-col items-center justify-end h-full"
        >
          <icon-credit-card class="mb-4"></icon-credit-card>
          <p class="">CREDIT CARD</p>
        </div>
      </div>

      <div class="rounded-15px bg-grid3 py-5">
        <div
          class="font-bold font-sans text-lg text-grid6 text-center flex flex-col items-center justify-end h-full"
        >
          <icon-paypal class="mb-4"></icon-paypal>
          <p class="">PAYPAL</p>
        </div>
      </div>

      <div class="rounded-15px bg-grid3 py-5">
        <div
          class="font-bold font-sans text-lg text-grid6 text-center flex flex-col items-center justify-end h-full"
        >
          <icon-gcash class=""></icon-gcash>
          <p class="">GCASH</p>
        </div>
      </div>

      <div class="rounded-15px bg-grid3 py-5">
        <div
          class="font-bold font-sans text-lg text-grid6 text-center flex flex-col items-center justify-end h-full"
        >
          <icon-paymongo class="mb-3"></icon-paymongo>
          <p class="">PAYMONGO</p>
        </div>
      </div>

      <div class="rounded-15px bg-grid3 py-5">
        <div
          class="font-bold font-sans text-lg text-grid6 text-center flex flex-col items-center justify-end h-full"
        >
          <img class="mb-2" src="../../../assets/images/cart/bank-deposit.svg" alt="">
          <p class="">BANK DEPOSIT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import IconBank from '../../icons/IconBank.vue'
import IconCash from '../../icons/IconCash.vue'
import IconCreditCard from '../../icons/IconCreditCard.vue'
import IconGcash from '../../icons/IconGcash.vue'
import IconPaymongo from '../../icons/IconPaymongo.vue'
import IconPaypal from '../../icons/IconPaypal.vue'
export default {
  components: {
    // IconBank,
    IconCash,
    IconCreditCard,
    IconPaypal,
    IconGcash,
    IconPaymongo
  }
}
</script>
,

<style scoped></style>
