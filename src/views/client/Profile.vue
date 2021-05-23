<template>
  <div>
    <billing-information :edit='edit'></billing-information>
    <shipping-information :edit='edit'></shipping-information>

    <hr class="border-2 border-grid7 mx-auto my-20" />

    <div class="flex justify-end" v-if="!edit">
      <button class="hover:bg-secondary bg-grid1 rounded-2xl font-bold text-white px-9 py-2 text-lg" @click="toggleToEdit">
        EDIT PROFILE
      </button>
    </div>

    <div class="flex justify-end" v-if="edit">
      <button class="hover:bg-secondary bg-grid1 rounded-2xl font-bold text-white px-9 py-2 text-lg" @click="save">
        SAVE CHANGES
      </button>
    </div>
  </div>
</template>

<script>
import BillingInformation from '@/components/client/Profile/BillingInformation.vue'
import ShippingInformation from '@/components/client/Profile/ShippingInformation.vue'
export default {
  components: { BillingInformation, ShippingInformation },
  data () {
    return {
      edit: false
    }
  },
  methods: {
    toggleToEdit () {
      this.edit = true
    },
    save () {
      this.edit = false
    }
  }

}
</script>
