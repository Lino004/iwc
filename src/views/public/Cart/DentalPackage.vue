<template>
  <section class="py-20 w-11/12 lg:w-3/4 mx-auto">
    <h3 class="section-title">My Dental Package</h3>

    <div class="py-10 font-sans text-lg">
      <div class="flex border-t-3 border-grid7 font-bold">
        <div class=" block1 py-7"></div>
        <div class=" w-9/12 py-7">PRODUCT DETAILS</div>
        <div class="text-center py-7 block3">PRICE</div>
      </div>

      <div class="flex border-t-3 border-grid7" v-for="(item, i) in pack" :key="i">
        <div class="block1 py-8">
          <div class="flex flex-col lg:flex-row justify-around gap-5 w-3/5">
            <button>
            <icon-trash width='2rem' height="2rem" />
          </button>
          <button @click="currentPack = item">
            <icon-pencil width='1.7rem' height="2rem" class="" />
          </button>
          </div>
        </div>
        <div class="w-9/12 py-8">
          <p class="font-bold pb-3">{{ item.title + ' ' + i }}</p>
          <p>{{ item.name }}</p>
        </div>
        <div class="text-center py-8 block3">{{ item.price }}</div>
      </div>
      <modal v-if="currentPack" class="">
        <about-pack  @close="currentPack = null"></about-pack>
      </modal>

      <div class="flex border-t-3 border-grid7 ">
        <div class="block1 py-9"></div>
        <div class="w-9/12 py-9 font-bold text-2xl">
          <p class="pb-5">Subtotal</p>
          <p class="text-secondary">Total</p>
        </div>
        <div class="text-center py-9 block3">
          <p class="pb-5">PHP 1,400</p>
          <p class="text-secondary">PHP 1,400</p>
        </div>
      </div>

      <div class="flex justify-end">
        <button class="bg-grid1 hover:bg-secondary text-white px-9 py-3 rounded-15px">
          <router-link to='/cart/checkout'>
            CHECKOUT
          </router-link>
         </button>
      </div>
    </div>
  </section>
</template>

<script>
import pack from '@/configurations/DentalConfig'
import IconPencil from '@/components/icons/IconPencil.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import AboutPack from '@/components/public/Cart/AboutPack.vue'
export default {
  components: { IconTrash, IconPencil, AboutPack },
  data () {
    return {
      pack: pack,
      currentPack: null
    }
  }
}
</script>

<style scoped>
.block1 {
  width: 15%;
}

.block3 {
  width: 20%;
}
</style>
