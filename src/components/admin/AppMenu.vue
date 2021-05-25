<template>
  <div>
    <div class="bg-white pb-20 w-72 rounded-2xl shadow-box1">
      <img class="mx-auto py-10" width="100" src="@/assets/images/logo.svg" alt="">
      <div
        class="border-l-8 px-5 py-4"
        :class="{
          'border-primary bg-grid3': currentMenu(item),
          'border-white': !currentMenu(item)
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
                'fill-primary': currentMenu(item),
                'fill-grid7': !currentMenu(item)
              }"
            />
          </div>
          <div
            class="flex-1 text-primary text-lg font-bold"
            :class="{
              'text-primary': currentMenu(item),
              'text-grid7': !currentMenu(item)
            }">
            {{item.label}}
          </div>
          <div v-if="item.chidren">
            <IconChevronDown
              v-if="currentMenu(item)"
              width="1.5rem"
              height="1.5rem"
              :class="{
                'fill-primary': currentMenu(item),
                'fill-grid7': !currentMenu(item)
              }"
            />
            <IconChevronUp
              v-else
              width="1.5rem"
              height="1.5rem"
              :class="{
                'fill-primary': currentMenu(item),
                'fill-grid7': !currentMenu(item)
              }"
            />
          </div>
        </router-link>
        <div
          v-if="item.chidren && currentMenu(item)"
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
    currentMenu (item) {
      const reg = new RegExp(item.reg)
      return (item.to === this.$route.name) || (reg.test(this.$route.path))
    }
  }
}
</script>
