<template>
  <div class="mb-32">
    <div class="flex py-10">
      <div class="flex items-center">
        <a @click="currentIndex -= 1"
          :class="{
            'invisible': currentIndex <= 0
          }">
          <IconChevronCircleLeft
            class="mx-5 md:mx-10 stroke-grid8 cursor-pointer"
            :width="sizeIcon.width"
            :height="sizeIcon.height"
          />
        </a>
      </div>
      <div class="flex-1">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-secondary rounded-15px shadow-box1 cursor-pointer"
            v-for="(product, i) in filtre" :key="`${i}data`"
            @click="showModalDetail = true">
            <div class="p-12 text-white" v-html="product.data">
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <a @click="currentIndex += 1"
          :class="{
            'invisible': (currentIndex + 1) >= totalPage
          }">
          <IconChevronCircleRight
            class="mx-5 md:mx-10 stroke-grid8 cursor-pointer"
            :width="sizeIcon.width"
            :height="sizeIcon.height"
          />
        </a>
      </div>
    </div>
    <div class="flex py-10">
      <div class="flex items-center">
        <IconChevronCircleLeft
          class="mx-5 md:mx-10 stroke-grid8 invisible"
          :width="sizeIcon.width"
          :height="sizeIcon.height"
        />
      </div>
      <div class="flex-1">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="px-12 text-center space-y-8" v-for="(product, i) in filtre" :key="`${i}detail`">
            <h3 class="font-serif font-bold text-34px">
              {{formatPrice(product.price)}}<span class="text-lg">/year</span>
            </h3>
            <div class="space-y-8">
              <div>
                <button
                  class="iwc-btn-action bg-grid1 w-auto px-8"
                  @click="showModalDetail = true">
                  VIEW DETAILS
                </button>
              </div>
              <div v-if="inquiryForm">
                <button
                  class="iwc-btn-action bg-grid1 w-auto px-8"
                  @click="showModalInquiryForm = true">
                  INQUIRE
                </button>
              </div>
              <div v-else>
                <button
                  class="iwc-btn-action bg-grid1 w-auto px-8"
                  @click="showModalEnroll = true">
                  ENROLL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <IconChevronCircleRight
          class="mx-5 md:mx-10 stroke-grid8 invisible"
          :width="sizeIcon.width"
          :height="sizeIcon.height"
        />
      </div>
    </div>
    <modal
      v-if="showModalDetail"
      @close="showModalDetail = false"
      custom-class="w-4/5 md:w-1/2">
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
import dataProducts from '@/configurations/Product'
import breakpoints from '@/plugins/breakpoints'
import ProductDetails from './ProductDetails'
import ProductInquiryForm from './ProductInquiryForm'

export default {
  name: 'ProductCardSection',
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
      showModalSuccess: false,
      products: dataProducts,
      currentIndex: 0
    }
  },
  computed: {
    filtre () {
      return this.products.slice(this.currentIndex * this.perPage, (this.currentIndex + 1) * this.perPage)
    },
    totalPage () {
      return Math.ceil(this.products.length / this.perPage)
    },
    perPage () {
      switch (breakpoints.is) {
        case 'md':
          return 2
        case 'lg':
          return 3
        case 'xl':
          return 3
        case 'xxl':
          return 3
        default:
          return 1
      }
    },
    sizeIcon () {
      switch (breakpoints.is) {
        case 'xs':
          return {
            width: '2rem',
            height: '2rem'
          }
        case 'sm':
          return {
            width: '2rem',
            height: '2rem'
          }
        default:
          return {
            width: '4rem',
            height: '4rem'
          }
      }
    }
  },
  methods: {
    enroll () {
      this.showModalDetail = false
      if (!this.inquiryForm) this.showModalEnroll = true
      if (this.inquiryForm) this.showModalInquiryForm = true
    },
    submit () {
      this.showModalInquiryForm = false
      this.showModalSuccess = true
    }
  }
}
</script>
