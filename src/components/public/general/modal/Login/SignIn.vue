<template>
  <div>
     <h3
          class="font-bold text-primary font-serif text-2xl sm:text-3xl md:text-3xl lg:text-42px"
        >
          Sign In
        </h3>

        <div>
          <form action="" class="grid grid-rows-3 gap-y-11 pt-11">
            <input type="text" placeholder="Email or Username" v-model="email" class="input-about">
            <input type="password" placeholder="Password" v-model="password" class="input-about">
            <div>
              <button class="bg-grid1 hover:bg-secondary text-white rounded-15px py-3 w-full font-bold">
                <router-link to="/client/profile">SIGN IN</router-link>
              </button>
            </div>
          </form>
          <div class="pt-6">
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
    }
  }
}
</script>
