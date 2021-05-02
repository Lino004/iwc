<template>
  <div class="w-full sticky top-0 z-10 px-8 lg:px-104px -my-12">
    <div class="bg-white rounded-2xl flex justify-between px-10 shadow-box1">
      <div class="hidden lg:flex items-center space-x-8 text-lg font-bold text-primary">
        <div
          v-for="(item, i) in menu"
          :key="i"
          class="relative inline-block dropdown py-8">
          <router-link
            :to="{ name: item.to }"
            tag="a"
            class="relative">
            <span class="hover:text-secondary text-lg">{{ item.label }}</span>
          </router-link>
          <div class="animated fadeIn dropdown-content absolute hidden" v-if="item.children.length">
            <div class="bg-white rounded-xl p-5 mt-14 space-y-2 flex flex-col">
              <router-link
                v-for="(child, index) in item.children"
                :key="index + 'child'"
                :to="{ name: child.to }"
                tag="a"
                class="hover:text-secondary truncate text-lg">
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
      <div class="flex items-center text-lg space-x-8">
        <router-link
          :to="{ name: '' }"
          tag="a"
          class="hover:text-secondary text-primary font-bold text-lg">
          SIGN IN
        </router-link>
        <button class="hover:bg-secondary
        bg-grid1 rounded-2xl font-bold
        text-white px-9 py-2 text-lg hidden lg:block">
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
      <div class="flex flex-col space-y-4 items-center text-lg pt-6 text-primary">
        <template v-for="(item, i) in menu">
          <router-link
            :key="i"
            :to="{ name: item.to }"
            tag="a"
            class="">
            <span class="hover:text-secondary text-lg font-bold">{{ item.label }}</span>
          </router-link>

          <template
            v-if="item.children.length"
            class="bg-white rounded-xl p-5 space-y-2 flex flex-col items-center">
            <router-link
              v-for="(child, index) in item.children"
              :key="index + 'child'"
              :to="{ name: child.to }"
              tag="a"
              class="hover:text-secondary truncate text-lg">
              {{ child.label }}
            </router-link>
          </template>
        </template>
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
          to: '',
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
              to: ''
            },
            {
              label: 'ACCREDITED DENTISTS',
              to: ''
            }
          ]
        },
        {
          label: 'SERVICE',
          to: '',
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
          to: '',
          show: false,
          children: []
        }
      ],
      showModalMenu: false
    }
  }
}
</script>

<style>
.dropdown:hover .dropdown-content {display: block;}
</style>
