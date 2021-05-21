<template>
  <div class="w-full sticky top-0 z-10 px-8 xl:px-104px -my-14">
    <div class="bg-white rounded-2xl flex justify-between px-6 xl:px-10 shadow-box1">
      <div class="hidden lg:flex items-center space-x-8 xl:space-x-11 text-base xl:text-lg font-bold">
        <div
          v-for="(item, i) in menu"
          :key="i"
          class="relative inline-block dropdown py-8">
          <router-link
            :to="{ name: item.to }"
            tag="a"
            class="relative">
            <span
              class="hover:text-secondary"
              :class="{
                'text-secondary': checkIsCurrentMenu(item),
                'text-primary': checkIsCurrentMenu(item)
              }">{{ item.label }}</span>
          </router-link>
          <div class="animated fadeIn dropdown-content absolute hidden" v-if="item.children.length">
            <div class="bg-white shadow-box2 rounded-xl p-5 mt-14 space-y-2 flex flex-col">
              <router-link
                v-for="(child, index) in item.children"
                :key="index + 'child'"
                :to="{ name: child.to }"
                tag="a"
                class="hover:text-secondary truncate"
                :class="{
                  'text-secondary': child.to === $route.name,
                  'text-primary': child.to !== $route.name
                }">
                {{ child.label }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 lg:hidden">
        <button @click="showModalMenu = true">
          <span class="text-grid2 text-2xl">
            <i class="mdi mdi-menu"></i>
          </span>
        </button>
      </div>
      <div class="flex items-center text-base xl:text-lg space-x-8">
        <router-link
          :to="{ name: 'signIn' }"
          tag="a"
          class="hover:text-secondary text-primary font-bold">
          SIGN IN
        </router-link>

        <modal v-if="currentDentist">
          <about-card-dentist
            @close="currentDentist = null"
          />
       </modal>

        <button class="hover:bg-secondary
        bg-grid1 rounded-2xl font-bold
        text-white px-6 xl:px-9 py-2 hidden lg:block">
          APPLY FOR ACCREDITATION
        </button>
        <IconCart
          class="stroke-primary hover:stroke-secondary"
          width="2.5rem"
          height="2.375rem"/>
      </div>
    </div>
    <div class="fixed h-screen w-screen bg-white text-white top-0 left-0" v-if="showModalMenu">
      <button @click="showModalMenu = false" class="absolute p-4">
        <span class="text-4xl text-primary">
          <i class="mdi mdi-close"></i>
        </span>
      </button>
      <div class="flex flex-col space-y-4 items-center text-lg pt-6">
        <template v-for="(item, i) in menu">
          <router-link
            :key="i"
            :to="{ name: item.to }"
            tag="a"
            class=""
            @click.native="showModalMenu = false">
            <span class="hover:text-secondary text-lg font-bold"
            :class="{
              'text-secondary': item.to === $route.name,
              'text-primary': item.to !== $route.name
            }">{{ item.label }}</span>
          </router-link>

          <template
            v-if="item.children.length"
            class="bg-white rounded-xl p-5 space-y-2 flex flex-col items-center">
            <router-link
              v-for="(child, index) in item.children"
              :key="index + 'child'"
              :to="{ name: child.to }"
              tag="a"
              class="hover:text-secondary truncate text-lg"
              :class="{
                'text-secondary': child.to === $route.name,
                'text-primary': child.to !== $route.name
              }"
              @click.native="showModalMenu = false">
              {{ child.label }}
            </router-link>
          </template>
        </template>
        <button
          class="hover:bg-secondary
                 bg-grid1 rounded-2xl font-bold
                 text-white px-9 py-2 text-lg">
          APPLY FOR ACCREDITATION
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          label: 'HOME',
          to: 'home',
          children: [],
          show: false
        },
        {
          label: 'ABOUT',
          to: '',
          show: false,
          children: [
            {
              label: 'COMPANY',
              to: 'about/company'
            },
            {
              label: 'ACCREDITED DENTISTS',
              to: 'about/accredited-dentists'
            }
          ]
        },
        {
          label: 'SERVICE',
          to: 'services',
          show: false,
          children: []
        },
        {
          label: 'PRODUCT',
          to: '',
          show: false,
          children: []
        },
        {
          label: 'CONTACT',
          to: 'contact',
          show: false,
          children: []
        }
      ],
      showModalMenu: false
    }
  },
  methods: {
    checkIsCurrentMenu (menu) {
      const isCurrentParent = menu.to === this.$route.name
      let isCurrentChild = false
      if (menu.children.length) {
        isCurrentChild = menu.children.map(el => el.to).includes(this.$route.name)
      }
      return isCurrentParent || isCurrentChild
    }
  }
}
</script>

<style>
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
