<template>
  <div>
     <h3 class="section-title">Sign In</h3>

     <div>
        <form action="" class="grid grid-rows-3 gap-y-11 pt-11">
          <input type="text" placeholder="Email or Username" v-model="email" class="input-about">
          <input type="password" placeholder="Password" v-model="password" class="input-about">
          <div v-if="member">
            <router-link to="/client/profile">
              <button class="bg-grid1 hover:bg-secondary text-white rounded-15px py-3 w-full font-bold">
                SIGN IN
              </button>
            </router-link>
          </div>
          <div v-else>
            <router-link to="/dentist/profile">
              <button class="bg-grid1 hover:bg-secondary text-white rounded-15px py-3 w-full font-bold">
                SIGN IN
              </button>
            </router-link>
          </div>
        </form>
        <div class="pt-6" v-if="member">
          <button @click="toggleToPassRT" class="underline text-secondary">Password Reset</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  props: {
    toggleToPassRT: {
      type: Function
    },
    member: Boolean
  }
}
</script>
