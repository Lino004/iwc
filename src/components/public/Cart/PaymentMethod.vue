<template>
  <div class="font-sans text-lg">
    <div
      class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-20"
      :class="{ 'text-secondary': showInfo }"
    >
      PAYMENT METHOD
    </div>

    <div class="lineGrid">
      <div class="gridElement">
        <div class="innerElement">
          <icon-cash class="mb-4"></icon-cash>
          <p class="">CASH</p>
        </div>
      </div>

      <div
        class="gridElement cursor-pointer"
        :class="{ 'border-3 border-primary': showInfo }"
        v-on:click="toggle"
      >
        <div class="innerElement">
          <icon-credit-card class="mb-4"></icon-credit-card>
          <p class="">CREDIT CARD</p>
        </div>
      </div>

      <div class="gridElement">
        <div class="innerElement">
          <icon-paypal class="mb-4"></icon-paypal>
          <p class="">PAYPAL</p>
        </div>
      </div>

      <div class="gridElement">
        <div class="innerElement">
          <icon-gcash class=""></icon-gcash>
          <p class="">GCASH</p>
        </div>
      </div>

      <div class="gridElement">
        <div class="innerElement">
          <icon-paymongo class="mb-3"></icon-paymongo>
          <p class="">PAYMONGO</p>
        </div>
      </div>

      <div class="gridElement">
        <div class="innerElement">
          <img
            class="mb-2"
            src="../../../assets/images/cart/bank-deposit.svg"
            alt=""
          />
          <p class="">BANK DEPOSIT</p>
        </div>
      </div>
    </div>

    <div v-show="showInfo" class="pb-20">
      <form action="">
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-32">
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
            placeholder="Billing Address"
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
            type="number"
            id="cardNumber"
            v-model="cardNumber"
            placeholder="Credit Card Number"
            class="input-about"
          />

          <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12">
            <input
              type="text"
              id="expDate"
              v-model="expDate"
              placeholder="Expiry Date"
              class="input-about"
            />

            <input
              type="text"
              id="cvc"
              v-model="cvc"
              placeholder="CVC"
              class="input-about"
            />
          </div>
        </div>

        <div class="grid pt-20">
          <button class="bg-grid1 hover:bg-secondary text-white px-4 py-3 rounded-15px ml-auto">
            <router-link to=''>
              SAVE CHANGES
            </router-link>
         </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import config from '@/configurations/CheckoutConfig'
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
  },
  methods: {
    toggle () {
      this.showInfo = !this.showInfo
    }
  },
  data () {
    return {
      showInfo: false,
      valueEmail: config.valueEmail,
      firstName: config.firstName,
      lastName: config.lastName,
      phone: config.phone,
      address: config.address,
      cardNumber: config.cardNumber,
      expDate: config.expDate,
      cvc: config.cvc
    }
  }
}
</script>
