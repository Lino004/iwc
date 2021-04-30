<template>
  <div class="h-header bg-primary px-104px">
    <div class="flex flex-col justify-center relative h-full">
      <div class="flex w-full justify-between items-center">
        <div class=" pl-104">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
        <div class="flex space-x-24">
          <div class="flex text-grid4 items-center">
            <div class="text-lg mr-4">
              <p class="text-right">
                Email <br>
                <span class="font-bold">contact@mail.com</span>
              </p>
            </div>
            <div class="h-20 w-20 bg-grid1 rounded-full flex items-center">
              <IconEmail
                class="mx-auto"
                width="2.438rem"
                height="1.938rem"/>
            </div>
          </div>
          <div class="flex text-grid4 items-center">
            <div class="text-lg mr-4">
              <p class="text-right">
                Phone <br>
                <span class="font-bold">123-456-7890</span>
              </p>
            </div>
            <div class="h-20 w-20 bg-grid1 rounded-full flex items-center">
              <IconPhone
                class="mx-auto"
                width="2.188rem"
                height="2.188rem"/>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white -bottom-2 w-full absolute rounded-2xl flex justify-between px-10">
        <div class="flex items-center space-x-8 text-lg font-bold text-primary">
          <div
            v-for="(item, i) in menu"
            :key="i"
            class="relative inline-block dropdown py-10">
            <router-link
              :to="{ name: item.to }"
              tag="a"
              class="relative">
              <span class="hover:text-secondary">{{ item.label }}</span>
            </router-link>
            <div class="animated fadeIn dropdown-content absolute hidden" v-if="item.children.length">
              <div class="bg-white rounded-xl p-5 mt-14 space-y-2 flex flex-col">
                <router-link
                  v-for="(child, index) in item.children"
                  :key="index + 'child'"
                  :to="{ name: child.to }"
                  tag="a"
                  class="hover:text-secondary truncate">
                  {{ child.label }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center text-lg space-x-8">
          <router-link
            :to="{ name: '' }"
            tag="a"
            class="hover:text-secondary text-primary font-bold">
            SIGN IN
          </router-link>
          <button class="hover:bg-secondary
           bg-primary rounded-2xl font-bold
           text-white px-5 py-2">
            APPLY FOR ACCREDITATION
          </button>
          <IconCart
          class="stroke-primary hover:stroke-secondary"
          width="2.5rem"
          height="2.375rem"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
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
              label: 'COMPAGNY',
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
  },
  methods: {
    test () {
      console.log('ok')
    }
  }
}
</script>

<style>
.dropdown:hover .dropdown-content {display: block;}
</style>
