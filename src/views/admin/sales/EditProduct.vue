<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      <span class="text-secondary">Products ></span> {{infoCompoment.title}}
    </h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2">
        <input
          type="text"
          placeholder="Product Name"
          class="input-admin bg-white"
          :class="{
            'border-0': !error.name,
            'border error': error.name,
          }"
          v-model="product.name"
        />
        <p class="text-rouge" v-if="error.name"> {{error.name}} </p>
      </div>
      <div>
        <input
          type="number"
          placeholder="Price"
          class="input-admin bg-white"
          :class="{
            'border-0': !error.price,
            'border error': error.price,
          }"
          v-model="product.price"
        />
        <p class="text-rouge" v-if="error.price"> {{error.price}} </p>
      </div>
      <CustomSelect
        :options="payments"
        v-model="product.paymentTerm"
        :field="payments.length ? 'name' : ''"
        :field-value="payments.length ? 'id' : ''"
        custom-class="bg-white"
      />
      <CustomSelect
        :options="productGroups"
        v-model="product.productGroup"
        :field="productGroups.length ? 'name' : ''"
        :field-value="productGroups.length ? 'id' : ''"
        custom-class="bg-white"
      />
      <div></div>
      <CustomTaginput
        :options="benefits"
        v-model="product.benefits"
        :placeholder="'Add Benefits and press Enter'"
        :field="benefits.length ? 'procedure' : ''"
        custom-class="bg-white"
        :error="error.benefits"
      />
      <div class="space-x-2 flex items-center flex-wrap">
        <a
          v-for="(item, i) in product.benefits"
          :key="i"
          @click="product.benefits.splice(i, 1)">
          <span
            class="bg-secondary rounded-2xl text-sm px-2 cursor-pointer font-bold text-white">
            {{item.procedure}}
            <i class="text-primary mdi mdi-close"></i>
          </span>
        </a>
      </div>
      <div class="col-span-2 flex items-center">
        <div class="flex-1">
          <textarea
            placeholder="Tidbits"
            rows="5"
            class="input-admin textarea bg-white"
            :class="{
              'border-0': !error.tidbits,
              'border error': error.tidbits,
            }"
            v-model="tidbit"
          />
          <p class="text-rouge" v-if="error.tidbits"> {{error.tidbits}} </p>
        </div>
        <div class="mx-10">
          <IconQuestionCircle
            width="2rem"
            height="2rem"
            class="fill-primary"
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Details"
          rows="5"
          class="col-span-2 input-admin textarea bg-white"
          :class="{
            'border-0': !error.details,
            'border error': error.details,
          }"
          v-model="product.details"
        />
        <p class="text-rouge" v-if="error.details"> {{error.details}} </p>
      </div>
    </div>
    <div class="text-right space-x-2 py-5">
      <button
        class="
          iwc-btn-action w-auto bg-primary px-8
          disabled:opacity-50 disabled:cursor-not-allowed"
        disabled>
        BACK
      </button>
      <button
        class="iwc-btn-action w-auto bg-primary px-8"
        @click="createProduct">ADD PRODUCT</button>
    </div>
    <Loading v-if="loarding"/>
  </section>
</template>

<script>
import { getProductGroups } from '@/api/admin/product-groups'
import {
  createProduct,
  getProduct,
  updateProduct
} from '@/api/admin/products'
import { validationProduct } from '@/services/admin/validation'

export default {
  data () {
    return {
      productGroups: [],
      benefits: [
        {
          procedure: 'OP',
          quantity: 1
        },
        {
          procedure: 'TF',
          quantity: 2
        },
        {
          procedure: 'AFC',
          quantity: 3
        },
        {
          procedure: '1TAVD',
          quantity: 3
        }
      ],
      payments: [
        {
          name: 'Quarterly',
          id: 1
        },
        {
          name: 'Monthly',
          id: 2
        },
        {
          name: 'Annually',
          id: 3
        }
      ],
      loarding: false,
      product: {
        name: '',
        price: 0,
        paymentTerm: 1,
        productGroup: null,
        benefits: [],
        tidbits: [],
        details: ''
      },
      error: {
        name: '',
        price: '',
        paymentTerm: '',
        productGroup: '',
        benefits: '',
        tidbits: '',
        details: ''
      },
      tidbit: ''
    }
  },
  computed: {
    infoCompoment () {
      return {
        title: this.isEdit ? 'Edit' : 'Add'
      }
    },
    isEdit () {
      return this.$route.name === 'admin-sales-edit-products'
    }
  },
  methods: {
    async getProductGroups () {
      try {
        this.loarding = true
        const res = (await getProductGroups()).data
        this.productGroups = res.data
        this.product.productGroup = this.productGroups[0].id
        this.loarding = false
      } catch (error) {
        this.loarding = false
        this.actionError(error)
      }
    },
    async initProductEdit () {
      try {
        this.loarding = true
        const res = (await getProduct(this.$route.params.id)).data
        const keys = Object.keys(this.product)
        keys.forEach(key => {
          this.product[key] = res.data[key]
        })
        this.tidbit = this.product.tidbits[0]
        this.loarding = false
      } catch (error) {
        this.loarding = false
        this.actionError(error)
      }
    },
    async createProduct () {
      if (this.tidbit) this.product.tidbits = [this.tidbit]
      if (!validationProduct(this.product, this.error, 4000)) return
      try {
        this.loarding = true
        if (this.isEdit) {
          await updateProduct({
            ...this.product,
            active: true
          }, this.$route.params.id)
        } else {
          await createProduct({
            ...this.product,
            active: true
          })
        }
        this.loarding = false
        this.$router.push({ name: 'admin-sales-products' })
      } catch (error) {
        this.loarding = false
        this.actionError(error)
      }
    }
  },
  async mounted () {
    await this.getProductGroups()
    if (this.isEdit) {
      await this.initProductEdit()
    }
  }
}
</script>
