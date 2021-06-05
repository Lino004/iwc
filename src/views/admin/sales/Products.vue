<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Products
    </h3>
    <div class="text-right space-x-4 my-10">
      <router-link
        tag="button"
        :to="{ name: 'admin-sales-add-products' }"
        class="iwc-btn-action w-auto bg-secondary px-8">
        ADD PRODUCT
      </router-link>
      <div class="inline-block relative iwc-dropdown">
        <button
          class="iwc-btn-action bg-grid1 w-auto px-8">
          ACTION
        </button>
        <div v-if="productsSelect.length" class="dropdown-content absolute z-10 w-full">
          <div class="bg-white w-full p-4 shadow-box1 rounded-2xl mt-2 space-y-4">
            <router-link
              tag="div"
              class="hover:text-secondary cursor-pointer text-center text-lg"
              v-if="productsSelect.length === 1"
              :to="{
                name: 'admin-sales-edit-products',
                params: {
                  id: productsSelect[0].id
                }
              }">
              Edit
            </router-link>
            <div
              class="hover:text-secondary cursor-pointer text-center text-lg"
              v-if="productsSelect.length"
              @click="deleteProducts">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"
      :search.sync="search"
      @enter-key-is-click="genereteData"/>
    <div>
      <table-admin
        :columns="columns"
        :data="products"
        checkable
        children
        children-key="id">
        <template #children="props">
          <td colspan="2" class="py-5 px-3 border-l-8 border-primary"></td>
          <td colspan="4" class="py-5 px-3">
            <p class="font-bold text-lg">
              Benefits: {{props.item.benefits.map(ben => ben.procedure).join(', ')}}
            </p>
            <p class="font-bold text-lg">
              Details: {{props.item.details}}
            </p>
          </td>
        </template>
      </table-admin>
    </div>
    <Loading v-if="loarding"/>
  </section>
</template>

<script>
import { getProducts, deleteProducts } from '@/api/admin/products'

export default {
  data () {
    return {
      filter: 0,
      sortBy: 0,
      columns: [
        {
          field: 'id',
          label: 'ID',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'name',
          label: 'Product Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'category',
          label: 'Category',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'priceString',
          label: 'Price',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      products: [],
      loarding: false,
      search: ''
    }
  },
  computed: {
    productsSelect () {
      return this.products.filter(el => el.select)
    }
  },
  methods: {
    async genereteData () {
      try {
        this.loarding = true
        const res = (await getProducts({
          search: this.search
        })).data
        this.products = res.data
        this.products.forEach(product => {
          product.priceString = this.formatPrice(product.price)
        })
        this.loarding = false
      } catch (error) {
        this.loarding = false
        this.actionError(error)
      }
    },
    async deleteProducts () {
      try {
        this.loarding = true
        await deleteProducts(this.productsSelect.map(el => el.id))
        await this.genereteData()
        this.loarding = false
      } catch (error) {
        this.loarding = false
        this.actionError(error)
      }
    }
  },
  async mounted () {
    await this.genereteData()
  }
}
</script>
