<template>
  <div class="h-full bg-gradient-to-b from-primary to-grid1 flex justify-center items-center">
    <div class="bg-white rounded-2xl w-3/4 md:w-1/2 p-10">
      <figure>
        <img class="mx-auto" src="@/assets/images/logo.svg" alt="">
      </figure>
      <h3 class="section-title my-10">Admin Sign In</h3>
      <form @submit.prevent="actionLogin" class="space-y-10">
        <input
          type="email"
          id="EmailAdress"
          placeholder="Email Address"
          class="input-about"
          v-model="user.email"
        />
        <input
          type="text"
          id="Password"
          placeholder="Password"
          class="input-about"
          v-model="user.password"
        />
        <button
          class="iwc-btn-action bg-grid1"
          type="submit">
          SIGN IN
        </button>
      </form>
    </div>
    <Loading v-if="loarding"/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const User = createNamespacedHelpers('adminUser')

export default {
  data () {
    return {
      user: {
        email: 'demo@accustack.ph',
        password: 'AccuStack0*'
      },
      loarding: false
    }
  },
  methods: {
    ...User.mapActions({
      login: 'login'
    }),
    async actionLogin () {
      try {
        this.loarding = true
        await this.login({
          email: this.user.email,
          password: this.user.password
        })
        this.loarding = false
        this.$router.push({ name: 'admin-dashbord' })
      } catch (error) {
        this.loarding = false
        this.actionError(error)
      }
    }
  }
}
</script>
