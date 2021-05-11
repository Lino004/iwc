<template>
  <div class="flex flex-col shadow-box1 rounded-15px pt-12">
    <h6 class="pl-9 pb-3 font-sans font-bold text-primary text-lg">MORE INFORMATIONS</h6>

    <div v-for="( item, i ) in menu" :key="i">
      <router-link :to="{ name: item.to }">
        <button
          class="text-left text-primary text-lg font-sans py-7 w-full"
          :class="{
            'border-primary border-l-8 pl-7 bg-grid3 font-bold': item.to === $route.name,
            'text-primary pl-9 hover:bg-grid3': item.to !== $route.name
          }"
        >
          {{ item.label }}
        </button>
      </router-link>
    </div>

  </div>
</template>

<script>
import menu from '@/configurations/InfoConfig'
export default {
  data () {
    return {
      menu: menu
    }
  }
}
</script>
