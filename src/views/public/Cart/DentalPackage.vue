<template>
  <section class="py-20 w-11/12 lg:w-3/4 mx-auto">
    <h3 class="section-title my-10">My Dental Package</h3>

    <table class="w-full">
      <thead>
        <tr class="text-lg border-t-3 border-grid7">
          <th class="py-7 w-20 md:w-44"></th>
          <th class="py-7 text-left">PRODUCT DETAILS</th>
          <th class="py-7 ">PRICE</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-t-3 border-grid7 text-lg"
          v-for="(item, i) in pack" :key="i">
          <td class="py-7">
            <div class="flex flex-col lg:flex-row justify-around gap-5 w-3/5">
              <button>
                <icon-trash width='2rem' height="2rem" />
              </button>
              <button @click="currentPack = item">
                <icon-pencil width='1.7rem' height="2rem" class="" />
              </button>
            </div>
          </td>
          <td class="py-7">
            <p class="font-bold pb-3">{{ item.title + ' ' + i }}</p>
            <p>{{ item.name }}</p>
          </td>
          <td class="py-7 text-center">
            {{ item.price }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="border-t-3 border-grid7">
          <td></td>
          <td class="py-7 font-bold text-2xl">
            <p class="pb-5">Subtotal</p>
            <p class="text-secondary">Total</p>
          </td>
          <td class="py-7 text-lg text-center">
            <p class="pb-5">PHP 1,400</p>
            <p class="text-secondary">PHP 1,400</p>
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="text-right">
      <button class="bg-grid1 hover:bg-secondary text-white px-9 py-3 rounded-15px font-bold">
        <router-link to='/cart/checkout'>
          CHECKOUT
        </router-link>
        </button>
    </div>
    <modal v-if="currentPack" @close="currentPack = null">
      <about-pack></about-pack>
    </modal>
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
