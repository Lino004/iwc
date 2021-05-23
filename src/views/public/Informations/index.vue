<template>
  <div class="w-full">
    <section class="container py-28  mx-auto w-11/12 lg:w-8/12">
      <div>
        <h3 class="section-title">{{ title }}</h3>
        <hr class="border-2 border-grid7 my-10 mx-auto" />

        <div
          class="md:flex flex-col md:flex-row justify-around hidden lg:hidden flex-wrap font-sans text-lg text-primary mb-10"
        >
          <h6 class="font-bold text-center">MORE INFORMATIONS</h6>
          <router-link
            v-for="(item, i) in menu"
            :key="i"
            tag="button"
            :to="{ name: item.to }"
            :class="{'text-secondary': item.to === $route.name}"
            >{{ item.label }}</router-link
          >
        </div>
      </div>

      <div class="flex justify-between">
        <div class="text-primary text-lg font-sans w-full lg:w-7/12">
          <router-view />
        </div>
        <div class="w-4/12 hidden lg:block">
          <app-drawer title="MORE INFORMATIONS" :element="menu"></app-drawer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import menu from '@/configurations/InfoConfig'
import AppDrawer from '@/components/reusables/AppDrawer.vue'
export default {
  components: { AppDrawer },
  data () {
    return {
      menu: menu
    }
  },
  computed: {
    title () {
      return this.menu.find(el => el.to === this.$route.name).label
    }
  }
}
</script>
