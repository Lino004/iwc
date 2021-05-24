<template>
  <div>
    <div class="bg-white pb-20 w-72 rounded-2xl shadow-box1">
      <img class="mx-auto py-10" width="100" src="@/assets/images/logo.svg" alt="">
      <div
        class="border-l-8 px-5 py-4"
        :class="{
          'border-primary bg-grid3': item.to === $route.name,
          'border-white': item.to !== $route.name
        }"
        v-for="(item, i) in menu" :key="i">
        <router-link
          tag="div"
          class="flex items-center cursor-pointer"
          :to="{ name: item.to }">
          <div class="mr-4">
            <component
              :is="item.icon"
              width="1.5rem"
              height="1.5rem"
              :class="{
                'fill-primary': item.to === $route.name,
                'fill-grid7': item.to !== $route.name
              }"
            />
          </div>
          <div
            class="flex-1 text-primary text-lg font-bold"
            :class="{
              'text-primary': item.to === $route.name,
              'text-grid7': item.to !== $route.name
            }">
            {{item.label}}
          </div>
          <div v-if="item.chidren">
            <IconChevronDown
              v-if="item.to === $route.name"
              width="1.5rem"
              height="1.5rem"
              :class="{
                'fill-primary': item.to === $route.name,
                'fill-grid7': item.to !== $route.name
              }"
            />
            <IconChevronUp
              v-else
              width="1.5rem"
              height="1.5rem"
              :class="{
                'fill-primary': item.to === $route.name,
                'fill-grid7': item.to !== $route.name
              }"
            />
          </div>
        </router-link>
        <div
          v-if="item.chidren && item.to === $route.name"
          class="space-y-2 mt-4">
          <router-link
            tag="div"
            class="flex items-center cursor-pointer"
            v-for="(child, y) in item.chidren" :key="`${y}child`"
            :to="{ name: child.to }">
            <div class="mr-4">
              <component
                :is="item.icon"
                width="1.5rem"
                height="1.5rem"
                class="invisible"
              />
            </div>
            <div
              class="text-primary text-lg font-semibold">
              {{child.label}}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from '@/configurations/AdminNav'

export default {
  data () {
    return {
      menu
    }
  },
  methods: {
    showChildren (item) {

    }
  }
}
</script>
