<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      <span class="text-secondary">Products ></span> {{infoCompoment.title}}
    </h3>
    <div class="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Product Name"
        class="col-span-2 input-admin border-0 bg-white"
      />
      <input
        type="text"
        placeholder="Price"
        class="input-admin border-0 bg-white"
      />
      <CustomSelect
        :options="payments"
        v-model="payment"
        custom-class="bg-white"
      />
      <CustomSelect
        :options="categories"
        v-model="categorie"
        custom-class="bg-white"
      />
      <div></div>
      <CustomTaginput
        :options="benefits"
        v-model="benefit"
        :placeholder="'Add Benefits and press Enter'"
        custom-class="bg-white"
      />
      <div class="space-x-2 flex items-center flex-wrap">
        <a
          v-for="(item, i) in benefit"
          :key="i"
          @click="benefit.splice(i, 1)">
          <span
            class="bg-secondary rounded-2xl text-sm px-2 cursor-pointer font-bold text-white">
            {{item}}
            <i class="text-primary mdi mdi-close"></i>
          </span>
        </a>
      </div>
      <div class="col-span-2 flex items-center">
        <textarea
          placeholder="Tidbits"
          rows="5"
          class="input-admin textarea border-0 bg-white flex-1"
        />
        <div class="mx-10">
          <IconQuestionCircle
            width="2rem"
            height="2rem"
            class="fill-primary"
          />
        </div>
      </div>
      <textarea
        placeholder="Details"
        rows="5"
        class="col-span-2 input-admin textarea border-0 bg-white"
      />
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
        class="iwc-btn-action w-auto bg-primary px-8">ADD PRODUCT</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      categories: ['Individual Oral Care Plan', 'Group Dental Care Package'],
      categorie: 0,
      benefits: ['TWLB', 'TF', 'AFC', '1TAVD'],
      benefit: [],
      payments: ['Yearly', 'Quarterly', 'Monthly', 'Weekly'],
      payment: 0
    }
  },
  computed: {
    infoCompoment () {
      return {
        title: this.$route.name === 'admin-sales-add-products' ? 'Add' : 'Edit'
      }
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
