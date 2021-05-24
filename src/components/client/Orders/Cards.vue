<template>
  <div>
    <!--first-->
    <div>
      <div class="bg-primary p-5 grid grid-cols-4 text-white text-base mt-16">
        <div>
          <p class="text-grid7">ORDER PLACED</p>
          <p>1 january 2021</p>
        </div>
        <div>
          <p class="text-grid7">TOTAL</p>
          <p>PHP 1,200</p>
        </div>
        <div class="col-span-2 text-right">
          <p class="text-grid7">ORDER #123456789</p>
          <p class="underline cursor-pointer" @click="toggle1">View Details</p>
        </div>
      </div>

      <div class="py-7 px-6 shadow-box2 grid grid-cols-2 cursor-pointer"  @click="toggle1">
        <p class="text-lg font-sans">Package Name #1 - Maria</p>
        <p class="text-right font-bold">Pending</p>
      </div>

      <div v-show="show1" class="py-7 px-10 shadow-box2">
        <div class="grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-6 py-16">
          <div class="gridElement">
            <div class="innerElement">
              <icon-cash class="mb-4"></icon-cash>
              <p class="">CASH</p>
            </div>
          </div>

          <div class="gridElement">
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
      <hr class="border-2 border-grid7"/>

        <div class="py-20">
          <form action="">
            <div class="grid grid-cols-1 gap-x-20 gap-y-5 w-4/5 mx-auto">
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

              <div class="grid pt-20">
                <button class="bg-grid1 hover:bg-secondary text-white px-4 py-3 rounded-15px mr-auto">
                  <router-link to='/cart/order-confirmation'>
                    PLACE ORDER
                  </router-link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!--second-->
    <div>
      <div class="bg-primary p-5 grid grid-cols-4 text-white text-base mt-16">
        <div>
          <p class="text-grid7">ORDER PLACED</p>
          <p>1 january 2021</p>
        </div>
        <div>
          <p class="text-grid7">TOTAL</p>
          <p>PHP 1,200</p>
        </div>
        <div class="col-span-2 text-right">
          <p class="text-grid7">ORDER #123456789</p>
          <p class="underline cursor-pointer" v-on:click="toggle2">View Details</p>
        </div>
      </div>

      <div class="py-7 px-6 shadow-box2 grid grid-cols-2 cursor-pointer" v-on:click="toggle2">
        <p class="text-lg font-sans">3 Items</p>
        <p class="text-right font-bold">Delivered</p>
      </div>
      <div v-show="show2" class="py-7 px-6 shadow-box2 gap-y-5 grid">
        <p class="text-lg font-sans">Package Name #1 - Maria</p>
        <p class="text-lg font-sans">Package Name #1 - Maria</p>
        <p class="text-lg font-sans">Package Name #1 - Maria</p>
      </div>
    </div>

    <!--third-->
    <div>
      <div class="bg-primary p-5 grid grid-cols-4 text-white text-base mt-16">
        <div>
          <p class="text-grid7">ORDER PLACED</p>
          <p>1 january 2021</p>
        </div>
        <div>
          <p class="text-grid7">TOTAL</p>
          <p>PHP 1,200</p>
        </div>
        <div class="col-span-2 text-right">
          <p class="text-grid7">ORDER #123456789</p>
          <p class="underline cursor-pointer" v-on:click="toggle3">View Details</p>
        </div>
      </div>

      <div class="py-7 px-6 shadow-box2 grid grid-cols-2 cursor-pointer" v-on:click="toggle3">
        <p class="text-lg font-sans">3 Items</p>
        <p class="text-right font-bold">Delivered</p>
      </div>
      <div v-show="show3" class="py-7 px-6 shadow-box2 gap-y-5 grid">
        <p class="text-lg font-sans">Package Name #1 - Maria</p>
        <p class="text-lg font-sans">Package Name #1 - Maria</p>
        <p class="text-lg font-sans">Package Name #1 - Maria</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconCash from '../../icons/IconCash.vue'
import IconCreditCard from '../../icons/IconCreditCard.vue'
import IconGcash from '../../icons/IconGcash.vue'
import IconPaymongo from '../../icons/IconPaymongo.vue'
import IconPaypal from '../../icons/IconPaypal.vue'

export default {
  components: {
    IconCash,
    IconCreditCard,
    IconPaypal,
    IconGcash,
    IconPaymongo
  },
  methods: {
    toggle1 () {
      this.show1 = !this.show1
      this.show2 = false
      this.show3 = false
    },
    toggle2 () {
      this.show2 = !this.show2
      this.show1 = false
      this.show3 = false
    },
    toggle3 () {
      this.show3 = !this.show3
      this.show1 = false
      this.show2 = false
    }
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      valueEmail: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      cardNumber: '',
      expDate: '',
      cvc: ''
    }
  }
}
</script>
