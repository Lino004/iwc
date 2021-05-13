<template>
  <div class="bg-primary text-grid5 lg:space-x-9 py-20 text-lg flex justify-center flex-col lg:flex-row">
    <router-link class="cursor-pointer hover:text-secondary text-center" :to="{ name: 'faq' }">FAQ</router-link>
    <router-link class="cursor-pointer hover:text-secondary text-center" :to="{ name: 'terms' }">TERMS</router-link>
    <router-link class="cursor-pointer hover:text-secondary text-center" :to="{ name: 'privacy' }">PRIVACY POLICY</router-link>
    <router-link class="cursor-pointer hover:text-secondary text-center" :to="{ name: 'dataSharing' }">DATA SHARING POLICY</router-link>
  </div>
</template>

<script>
export default {

}
</script>
