<template>
  <div>
    <div class="border-t-3 border-b-3 border-grid7 py-20 font-sans">
      <div class="text-secondary flex justify-between w-98% mx-auto">
        <p class="text-2xl font-bold">Total</p>
        <p>PHP 1,400</p>
      </div>
    </div>
    <div class="pt-16">
      <button
        class="bg-grid1 hover:bg-secondary text-white px-6 py-3 rounded-15px ml-auto block"
      >
        <router-link to="/cart/order-confirmation">
          PLACE ORDER
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
