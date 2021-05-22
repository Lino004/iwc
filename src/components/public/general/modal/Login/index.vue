<template>
  <div class=" md:w-2/3 lg:w-1/2 xl:w-5/12 mx-4 md:mx-auto bg-white rounded-2xl p-10 lg:py-16 lg:px-24 relative text-primary">
    <a @click="$emit('close')" class="absolute top-5 lg:top-10 right-10 lg:right-20 cursor-pointer">
      <i class="mdi mdi-close text-2xl"></i>
    </a>

    <div class="w-auto flex divide-x-2 divide-primary font-bold font-sans text-lg pb-6">
      <p class="pr-2 text-secondary">Member</p>
      <p class="pl-2 text-primary">Dentist</p>
    </div>

    <div v-if="signIn">
      <sign-in :toggleToPassRT="toggleToPassRT"></sign-in>
    </div>

    <div v-if="passwordResetT">
      <password-reset-t :toggleToSignIn="toggleToSignIn" :toggleToPassR="toggleToPassR"></password-reset-t>
    </div>

    <div v-if="passwordReset">
      <password-reset :toggleToSignIn="toggleToSignIn" :toggleToPassRT="toggleToPassRT"></password-reset>
    </div>

  </div>
</template>

<script>
import PasswordReset from './PasswordReset.vue'
import PasswordResetT from './PasswordResetT.vue'
import SignIn from './SignIn.vue'

export default {
  components: {
    SignIn,
    PasswordReset,
    PasswordResetT
  },
  data () {
    return {
      signIn: true,
      passwordReset: null,
      passwordResetT: null
    }
  },
  methods: {
    toggleToPassRT () {
      this.passwordResetT = true
      this.passwordReset = null
      this.signIn = null
    },
    toggleToSignIn () {
      this.passwordResetT = null
      this.passwordReset = null
      this.signIn = true
    },
    toggleToPassR () {
      this.passwordResetT = null
      this.passwordReset = true
      this.signIn = null
    }
  }
}
</script>
