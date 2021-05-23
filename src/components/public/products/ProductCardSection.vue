<template>
  <div class="mb-32">
    <div class="flex py-10">
      <div class="flex items-center">
        <IconChevronCircleLeft
          class="mx-10 stroke-grid8 cursor-pointer"
          width="4rem"
          height="4rem"
        />
      </div>
      <div class="flex-1">
        <div class="grid grid-cols-3 gap-8">
          <div class="bg-secondary rounded-15px shadow-box1">
            <div class="p-12 text-white">
              <h3 class="font-serif font-bold text-34px">Pinoy Dental Card</h3>
              <ul class="text-base lg:text-2xl my-3">
                <li class="list-style-check">Free &amp; Unlimited Consultation &amp; Dental Examinations</li>
                <li class="list-style-check">Simple Tooth Extraction</li>
                <li class="list-style-check">Twice a year Oral Prophylaxis</li>
                <li class="list-style-check"> Medication and/or prescription for dental pain</li>
                <li class="list-style-check">Treatment of dental related pain</li>
                <li class="list-style-check"> View details to see more benefits!</li>
              </ul>
            </div>
          </div>
          <div class="bg-secondary rounded-15px shadow-box1">
            <div class="p-12 text-white">
              <h3 class="font-serif font-bold text-34px">Pinoy Dental Card</h3>
              <ul class="text-base lg:text-2xl my-3">
                <li class="list-style-check">Free &amp; Unlimited Consultation &amp; Dental Examinations</li>
                <li class="list-style-check">Simple Tooth Extraction</li>
                <li class="list-style-check">Twice a year Oral Prophylaxis</li>
              </ul>
            </div>
          </div>
          <div class="bg-secondary rounded-15px shadow-box1">
            <div class="p-12 text-white">
              <h3 class="font-serif font-bold text-34px">Pinoy Dental Card</h3>
              <ul class="text-base lg:text-2xl my-3">
                <li class="list-style-check">Free &amp; Unlimited Consultation &amp; Dental Examinations</li>
                <li class="list-style-check">Simple Tooth Extraction</li>
                <li class="list-style-check">Twice a year Oral Prophylaxis</li>
                <li class="list-style-check"> Medication and/or prescription for dental pain</li>
                <li class="list-style-check">Treatment of dental related pain</li>
                <li class="list-style-check"> View details to see more benefits!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <IconChevronCircleRight
          class="mx-10 stroke-grid8 cursor-pointer"
          width="4rem"
          height="4rem"
        />
      </div>
    </div>
    <div class="flex py-10">
      <div class="flex items-center">
        <IconChevronCircleLeft
          class="mx-10 stroke-grid8 invisible"
          width="4rem"
          height="4rem"
        />
      </div>
      <div class="flex-1">
        <div class="grid grid-cols-3 gap-8">
          <div class="px-12 text-center space-y-8">
            <h3 class="font-serif font-bold text-34px">
              PHP 1,950<span class="text-lg">/year</span>
            </h3>
            <div class="px-16 space-y-8">
              <button
                class="iwc-btn-action"
                @click="showModalDetail = true">
                VIEW DETAILS
              </button>
              <button
                v-if="inquiryForm"
                class="iwc-btn-action"
                @click="showModalInquiryForm = true">
                INQUIRE
              </button>
              <button
                v-else
                class="iwc-btn-action"
                @click="showModalEnroll = true">
                ENROLL
              </button>
            </div>
          </div>
          <div class="px-12 text-center space-y-8">
            <h3 class="font-serif font-bold text-34px">
              PHP 1,950<span class="text-lg">/year</span>
            </h3>
            <div class="px-16 space-y-8">
              <button
                class="iwc-btn-action"
                @click="showModalDetail = true">
                VIEW DETAILS
              </button>
              <button
                v-if="inquiryForm"
                class="iwc-btn-action"
                @click="showModalInquiryForm = true">
                INQUIRE
              </button>
              <button
                v-else
                class="iwc-btn-action"
                @click="showModalEnroll = true">
                ENROLL
              </button>
            </div>
          </div>
          <div class="px-12 text-center space-y-8">
            <h3 class="font-serif font-bold text-34px">
              PHP 1,950<span class="text-lg">/year</span>
            </h3>
            <div class="px-16 space-y-8">
              <button
                class="iwc-btn-action"
                @click="showModalDetail = true">
                VIEW DETAILS
              </button>
              <button
                v-if="inquiryForm"
                class="iwc-btn-action"
                @click="showModalInquiryForm = true">
                INQUIRE
              </button>
              <button
                v-else
                class="iwc-btn-action"
                @click="showModalEnroll = true">
                ENROLL
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <IconChevronCircleRight
          class="mx-10 stroke-grid8 invisible"
          width="4rem"
          height="4rem"
        />
      </div>
    </div>
    <modal
      v-if="showModalDetail"
      @close="showModalDetail = false"
      custom-class="w-1/2">
      <product-details @enroll="enroll"></product-details>
    </modal>
    <modal
      v-if="showModalEnroll"
      @close="showModalEnroll = false">
      <about-pack></about-pack>
    </modal>
    <modal
      v-if="inquiryForm && showModalInquiryForm"
      @close="showModalInquiryForm = false"
      border-top
      custom-class="w-3/4">
      <product-inquiry-form @is-submit="submit"></product-inquiry-form>
    </modal>
    <modal
      v-if="showModalSuccess"
      @close="showModalSuccess = false"
      border-top
      custom-class="w-3/4">
      <success @continue="showModalSuccess = false"></success>
    </modal>
  </div>
</template>

<script>
import AboutPack from '@/components/public/Cart/AboutPack'
import Success from '@/components/public/general/modal/Success'
import ProductDetails from './ProductDetails'
import ProductInquiryForm from './ProductInquiryForm'

export default {
  name: 'ProductCard',
  props: {
    inquiryForm: Boolean
  },
  components: {
    ProductDetails,
    ProductInquiryForm,
    AboutPack,
    Success
  },
  data () {
    return {
      showModalDetail: false,
      showModalEnroll: false,
      showModalInquiryForm: false,
      showModalSuccess: false
    }
  },
  methods: {
    enroll () {
      this.showModalDetail = false
      this.showModalEnroll = true
    },
    submit () {
      this.showModalInquiryForm = false
      this.showModalSuccess = true
    }
  }
}
</script>
