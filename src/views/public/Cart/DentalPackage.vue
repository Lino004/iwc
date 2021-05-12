<template>
  <section class="py-20 w-8/12 mx-auto">
    <div>
      <h3 class="font-bold text-primary font-serif text-2xl md:text-3xl lg:text-42px pt-14">
        My Dental Package
      </h3>
    </div>
    <div class="py-10">
      <table class="w-full border-collapse font-sans text-primary text-lg">

        <tr class="text-left font-bold">
          <th class="border-t-3 border-grid7 py-8"></th>
          <th class="border-t-3 border-grid7">PRODUCT DETAILS</th>
          <th class="text-center border-t-3 border-grid7">PRICE</th>
        </tr>

        <tr class="">
          <td class="border-t-3 border-grid7 py-10">icon</td>
          <td class="border-t-3 border-grid7">
            <p>Prepaid Dental Plan - Package 1</p>
            <p>Boyet Fernandez</p>
          </td>
          <td class="text-center border-t-3 border-grid7">PHP 1,400</td>
        </tr>

        <tr>
          <td class="border-t-3 border-grid7 py-10">icon</td>
          <td class="border-t-3 border-grid7">
            <p>Prepaid Dental Plan - Package 1</p>
            <p>Boyet Fernandez</p>
          </td>
          <td class="text-center border-t-3 border-grid7">PHP 1,400</td>
        </tr>

        <tr>
          <td class="border-t-3 border-grid7 py-10">icon</td>
          <td class="border-t-3 border-grid7">
            <p>Prepaid Dental Plan - Package 1</p>
            <p>Boyet Fernandez</p>
          </td>
          <td class="text-center border-t-3 border-grid7">PHP 1,400</td>
        </tr>

        <tr>
          <td class="border-t-3 border-grid7"></td>
          <td class="border-t-3 border-grid7 py-10 font-bold text-2xl">
            <p class="pb-5">Subtotal</p>
            <p class="text-secondary">Total</p>
          </td>
          <td class="text-center border-t-3 border-grid7">
            <p class="pb-5">PHP 1,400</p>
            <p class="text-secondary">PHP 1,400</p>
          </td>
        </tr>

        <tr>
          <td class=""></td>
          <td class="py-7">
          </td>
          <td class="text-center">
            <button class="bg-grid1 hover:bg-secondary text-white px-9 py-3 rounded-15px">
              <router-link to='/cart/checkout'>
                CHECKOUT
              </router-link>
            </button>
          </td>
        </tr>

      </table>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
