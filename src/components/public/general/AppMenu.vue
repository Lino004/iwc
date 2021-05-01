<template>
  <div class="w-full sticky top-0 z-10 px-104px -my-12">
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
        ok
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
              label: 'COMPAGY',
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
      ]
    }
  }
}
</script>

<style>
.dropdown:hover .dropdown-content {display: block;}
</style>
